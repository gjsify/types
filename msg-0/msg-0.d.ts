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
     * Msg-0
     */

    /**
     * The type of Drive
     * <ulink url="https://docs.microsoft.com/en-us/graph/api/resources/drive?view=graph-rest-1.0">
     * objects</ulink>.
     */

    /**
     * The type of Drive
     * <ulink url="https://docs.microsoft.com/en-us/graph/api/resources/drive?view=graph-rest-1.0">
     * objects</ulink>.
     */
    export namespace DriveType {
        export const $gtype: GObject.GType<DriveType>;
    }

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
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * An unrecoverable error occurred.
         */
        static FAILED: number;
        static PROTOCOL_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace MessageMailFolderType {
        export const $gtype: GObject.GType<MessageMailFolderType>;
    }

    enum MessageMailFolderType {
        INBOX,
        DRAFTS,
        SENT_ITEMS,
        JUNK_EMAIL,
        DELETED_ITEMS,
        OUTBOX,
        ARCHIVE,
    }
    const API_ENDPOINT: string;
    function error_quark(): GLib.Quark;
    function json_object_get_string(object: Json.Object, name: string): string;
    namespace Contact {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Handling of contact specific functions.
     *
     * Details: https://learn.microsoft.com/en-us/graph/api/resources/contact?view=graph-rest-1.0
     */
    class Contact extends GObject.Object {
        static $gtype: GObject.GType<Contact>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Contact.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Contact.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Contact;

        static new_from_json(json_object: Json.Object): Contact;

        // Signals

        connect<K extends keyof Contact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Contact.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Contact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Contact.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Contact.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Contact.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets given name.
         * @returns given name
         */
        get_given_name(): string;
        /**
         * Gets ID
         * @returns identifier
         */
        get_id(): string;
        get_name(): string;
        /**
         * Gets surname.
         * @returns surname
         */
        get_surname(): string;
        /**
         * Sets contacts given name
         * @param given_name new give name
         */
        set_given_name(given_name: string): void;
        /**
         * Sets contacts surname
         * @param surname new sirname
         */
        set_surname(surname: string): void;
    }

    namespace ContactService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    class ContactService extends Service {
        static $gtype: GObject.GType<ContactService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContactService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContactService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](authorizer: Authorizer): ContactService;

        // Signals

        connect<K extends keyof ContactService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContactService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContactService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContactService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContactService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContactService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create new contact #contact and return new contact object.
         * @param contact a #MsgContact
         * @param cancellable a #GCancellable
         * @returns a new #MsgContact
         */
        create(contact: Contact, cancellable?: Gio.Cancellable | null): Contact;
        /**
         * Delets #contact.
         * @param contact a #MsgContact
         * @param cancellable a #GCancellable
         * @returns %TRUE for succes, else %FALSE
         */
        ['delete'](contact: Contact, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Get all contacts accessed by contact service.
         * @param cancellable a cancellable
         * @returns all contacts
         */
        get_contacts(cancellable?: Gio.Cancellable | null): Contact[];
    }

    namespace Drive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #MsgDriveService is a subclass of #MsgService for communicating with the MS Graph API.
     *
     * Details: https://learn.microsoft.com/en-us/graph/api/resources/drive?view=graph-rest-1.0
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

        connect<K extends keyof Drive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Drive.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Drive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Drive.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        connect<K extends keyof DriveItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DriveItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * @returns %TRUE if item is shared, otherwise %FALSE
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

        connect<K extends keyof DriveItemFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DriveItemFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        connect<K extends keyof DriveItemFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFolder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DriveItemFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFolder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        connect<K extends keyof DriveService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DriveService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * @param file source #MsgDriveItem
         * @param destination destination directory #MsgDriveItem
         * @param cancellable a #GCancellable
         * @returns %TRUE if accepted, %FALSE on error
         */
        copy_file(file: DriveItem, destination: DriveItem, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a new folder called name under parent.
         * @param parent parent drive item
         * @param name name of new folder
         * @param cancellable a cancellable
         * @returns a newly created `MsgDriveItem`
         */
        create_folder(parent: DriveItem, name: string, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Deletes item.
         * @param item a #MsgDriveItem
         * @param cancellable a cancellable
         * @returns %TRUE when item has been deleted, otherwise %FALSE
         */
        ['delete'](item: DriveItem, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Download item
         * @param item a #MsgDriveItem
         * @param cancellable a #GCancellable
         * @returns input stream of drive item
         */
        download_item(item: DriveItem, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * Download url
         * @param url url to download
         * @param cancellable a #GCancellable
         * @returns a new `GInputStream` for url
         */
        download_url(url: string, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * Queries the Microsoft Graph API for all the drives of the currently logged in user
         * @param cancellable a #GCancellable
         * @returns all drives the user can access
         */
        get_drives(cancellable?: Gio.Cancellable | null): Drive[];
        /**
         * Get root item of selected drive
         * @param drive a #MsgDrive
         * @param cancellable a #GCancellable
         * @returns root 'MsgDriveItem'
         */
        get_root(drive: Drive, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Requests all shared with me items
         * @param cancellable a #GCancellable
         * @returns shared with me list
         */
        get_shared_with_me(cancellable?: Gio.Cancellable | null): DriveItem[];
        /**
         * Get a list of all files in folder item
         * @param item a #MsgDriveItem
         * @param cancellable a #GCancellable
         * @returns all items in folder
         */
        list_children(item: DriveItem, cancellable?: Gio.Cancellable | null): DriveItem[];
        /**
         * Move a file async on remote server to a new directory.
         * @param file source #MsgDriveItem
         * @param destination destination directory #MsgDriveItem
         * @param cancellable a #GCancellable
         * @returns moved #MsgDriveItem
         */
        move_file(file: DriveItem, destination: DriveItem, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Sets a new drive item name
         * @param item a #MsgDriveItem
         * @param new_name new name of item
         * @param cancellable a #GCancellable
         * @returns the renamed `MsgDriveItem`
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
         * @param item a #MsgDriveItem
         * @param stream stream where data is store and needs to be transfered
         * @param cancellable a #GCancellable
         * @returns a new #MsgDriveItem or %NULL on error.
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
     * The #MsgGoaAuthorizer structure contains only private data and
     * should only be accessed using the provided API.
     */
    class GoaAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<GoaAuthorizer>;

        // Properties

        get goa_object(): Goa.Object;
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

        connect<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GoaAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the GOA account used by `self` for authorization.
         * @returns A #GoaObject. The returned object is owned by #MsgGoaAuthorizer and should not be modified or freed.
         */
        get_goa_object(): Goa.Object;

        // Inherited methods
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See msg_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See msg_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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

        connect<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets corresponding SoupMessage
         * @param stream a #GInputStream
         */
        static get_message(stream: Gio.InputStream): Soup.Message;
        static send_async(
            stream: Gio.InputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<InputStream> | null,
        ): void;
        static send_finish(stream: Gio.InputStream, result: Gio.AsyncResult): boolean;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
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
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
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
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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

        connect<K extends keyof MailFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailFolder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MailFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailFolder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MailFolder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MailFolder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_display_name(): string;
        get_total_item_count(): number;
        get_unread_item_count(): number;
    }

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Handling of message specific functions.
     *
     * Details: https://learn.microsoft.com/en-us/graph/api/resources/message?view=graph-rest-1.0
     */
    class Message extends GObject.Object {
        static $gtype: GObject.GType<Message>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Message.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Message;

        static new_from_json(json_object: Json.Object): Message;

        // Signals

        connect<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Message.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_body_preview(): string;
        get_id(): string;
        get_subject(): string;
        set_body(body: string): boolean;
        set_subject(subject: string): boolean;
    }

    namespace MessageService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    class MessageService extends Service {
        static $gtype: GObject.GType<MessageService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](authorizer: Authorizer): MessageService;

        // Signals

        connect<K extends keyof MessageService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create new draft message #message and return new message object.
         * @param message a #MsgMessage
         * @param cancellable a #GCancellable
         * @returns a new #MsgMessage
         */
        create_draft(message: Message, cancellable?: Gio.Cancellable | null): Message;
        /**
         * Delets #message.
         * @param message a #MsgMessage
         * @param cancellable a #GCancellable
         * @returns %TRUE for succes, else &FALSE
         */
        ['delete'](message: Message, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Get a specific mail folder for given service
         * @param type a #MsgMessageMailFolderType
         * @param cancellable a #GCancellable
         * @returns a #MsgMailFolder
         */
        get_mail_folder(type: MessageMailFolderType | null, cancellable?: Gio.Cancellable | null): MailFolder;
        /**
         * Get all folders for given service
         * @param cancellable a #GCancellable
         * @returns all mail folders the user can access
         */
        get_mail_folders(cancellable?: Gio.Cancellable | null): MailFolder[];
        /**
         * Get all messages for given service
         * @param cancellable a #GCancellable
         * @returns all messages the user can access
         */
        get_messages(cancellable?: Gio.Cancellable | null): Message[];
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

    class OAuth2Authorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<OAuth2Authorizer>;

        // Properties

        get client_id(): string;
        get clientId(): string;
        get redirect_uri(): string;
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

        connect<K extends keyof OAuth2Authorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OAuth2Authorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OAuth2Authorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OAuth2Authorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OAuth2Authorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OAuth2Authorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static test_load_credentials(self: Authorizer): boolean;
        static test_save_credentials(self: Authorizer): void;

        // Methods

        build_authentication_uri(): string;
        request_authorization(authorization_code: string, cancellable?: Gio.Cancellable | null): boolean;

        // Inherited methods
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See msg_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See msg_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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

    class Service extends GObject.Object {
        static $gtype: GObject.GType<Service>;

        // Properties

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

        connect<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Service.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Service.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static accept_certificate_cb(
            msg: Soup.Message,
            tls_cert: Gio.TlsCertificate,
            tls_errors: Gio.TlsCertificateFlags,
            session?: any | null,
        ): boolean;
        static get_https_port(): number;
        /**
         * Get next link
         * @param object a #JsonObject
         */
        static get_next_link(object: Json.Object): string;
        /**
         * Parse response data and check for errors. In case
         * no errors are found, return json root object.
         * @param bytes input bytes containing response buffer
         * @param object a pointer to the returning root object
         */
        static parse_response(bytes: GLib.Bytes | Uint8Array, object: Json.Object): Json.Parser;

        // Methods

        /**
         * Construct and checks a #SoupMessage for transfer
         * @param method transfer method
         * @param uri uri to access
         * @param etag an optional etag
         * @param etag_if_match use etag if
         * @returns a #SoupMessage or NULL on error.
         */
        build_message(method: string, uri: string, etag: string, etag_if_match: boolean): Soup.Message;
        /**
         * Get related authorizer.
         * @returns a #MsgAuthorizer
         */
        get_authorizer(): Authorizer;
        /**
         * Get related soup session
         * @returns a #SoupSession
         */
        get_session(): Soup.Session;
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds authorizer information to `message` and send it.
         * @param message a #SoupMessage
         * @param cancellable a #GCancellable
         * @returns a #GInputStream
         */
        send(message: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * A combination of `msg_service_send_and_read` and `msg_service_parse_response`
         * @param message a #SoupMessage
         * @param object
         * @param cancellable a #GCancellable
         * @returns a #JsonParser or %NULL on error
         */
        send_and_parse_response(
            message: Soup.Message,
            object: Json.Object,
            cancellable?: Gio.Cancellable | null,
        ): Json.Parser;
        /**
         * Adds authorizer information to `message` and send it.
         * @param message a #SoupMessage
         * @param cancellable a #GCancellable
         * @returns a #GBytes or %NULL on error.
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

        connect<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof User.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<User.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_mail(): string;
    }

    namespace UserService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

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

        connect<K extends keyof UserService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get user information
         * @param name user name (%NULL for me)
         * @param cancellable a #GCancellable
         * @returns request user
         */
        get_user(name: string, cancellable?: Gio.Cancellable | null): User;
    }

    type AuthorizerInterface = typeof Authorizer;
    type ContactClass = typeof Contact;
    type ContactServiceClass = typeof ContactService;
    type DriveClass = typeof Drive;
    type DriveItemClass = typeof DriveItem;
    type DriveItemFileClass = typeof DriveItemFile;
    type DriveItemFolderClass = typeof DriveItemFolder;
    type DriveServiceClass = typeof DriveService;
    type GoaAuthorizerClass = typeof GoaAuthorizer;
    abstract class GoaAuthorizerPrivate {
        static $gtype: GObject.GType<GoaAuthorizerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type InputStreamClass = typeof InputStream;
    abstract class InputStreamPrivate {
        static $gtype: GObject.GType<InputStreamPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MailFolderClass = typeof MailFolder;
    type MessageClass = typeof Message;
    type MessageServiceClass = typeof MessageService;
    type OAuth2AuthorizerClass = typeof OAuth2Authorizer;
    abstract class OAuth2AuthorizerPrivate {
        static $gtype: GObject.GType<OAuth2AuthorizerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServiceClass = typeof Service;
    type UserClass = typeof User;
    type UserServiceClass = typeof UserService;
    abstract class _DriveItemFileClass {
        static $gtype: GObject.GType<_DriveItemFileClass>;

        // Fields

        padding: any[];

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class _DriveItemFolderClass {
        static $gtype: GObject.GType<_DriveItemFolderClass>;

        // Fields

        padding: any[];

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Authorizer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AuthorizerNamespace {
        $gtype: GObject.GType<Authorizer>;
        prototype: Authorizer;
    }
    interface Authorizer extends GObject.Object {
        // Methods

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See msg_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

        // Virtual methods

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See msg_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
