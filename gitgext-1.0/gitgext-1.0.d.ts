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
import type Gitg from '@girs/gitg-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Ggit from '@girs/ggit-1.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Atk from '@girs/atk-1.0';

export namespace GitgExt {
    /**
     * GitgExt-1.0
     */

    export namespace SelectionMode {
        export const $gtype: GObject.GType<SelectionMode>;
    }

    enum SelectionMode {
        NORMAL,
        SELECTION,
    }
    interface ForeachCommitSelectionFunc {
        (object: Ggit.Commit): boolean;
    }
    interface MessageCallback {
        (message: Message): void;
    }
    interface RefNameEditingDone {
        (new_name: string, cancelled: boolean): void;
    }

    export namespace ExternalChangeHint {
        export const $gtype: GObject.GType<ExternalChangeHint>;
    }

    enum ExternalChangeHint {
        NONE,
        REFS,
        INDEX,
    }
    namespace CommandLines {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CommandLines extends GObject.Object {
        static $gtype: GObject.GType<CommandLines>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CommandLines.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CommandLines.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](command_lines: CommandLine[]): CommandLines;

        // Signals

        connect<K extends keyof CommandLines.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommandLines.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CommandLines.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommandLines.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CommandLines.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CommandLines.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_for(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): any | null;
        parse_finished(): void;
        apply(application: Application): void;
    }

    namespace MessageBus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            registered: (arg0: MessageId) => void;
            unregistered: (arg0: MessageId) => void;
            dispatch: (arg0: Message) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MessageBus extends GObject.Object {
        static $gtype: GObject.GType<MessageBus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageBus.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageBus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MessageBus;

        // Signals

        connect<K extends keyof MessageBus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageBus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageBus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageBus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageBus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageBus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): MessageBus;

        // Virtual methods

        vfunc_dispatch(message: Message): void;

        // Methods

        lookup(id: MessageId): GObject.GType;
        register(message_type: GObject.GType, id: MessageId): void;
        unregister(id: MessageId): void;
        unregister_all(object_path: string): void;
        is_registered(id: MessageId): boolean;
        connect(id: MessageId, callback: MessageCallback): number;
        connect(...args: never[]): any;
        disconnect(id: number): void;
        block(id: number): void;
        unblock(id: number): void;
        send_message(message: Message): Message;
    }

    namespace MessageId {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::method': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            object_path: string;
            objectPath: string;
            method: string;
            id: string;
        }
    }

    class MessageId extends GObject.Object {
        static $gtype: GObject.GType<MessageId>;

        // Properties

        get object_path(): string;
        set object_path(val: string);
        get objectPath(): string;
        set objectPath(val: string);
        get method(): string;
        set method(val: string);
        get id(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageId.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageId.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](object_path: string, method: string): MessageId;

        // Signals

        connect<K extends keyof MessageId.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageId.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageId.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageId.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageId.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageId.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static valid_object_path(path: string): boolean;

        // Methods

        hash(): number;
        equal(other: MessageId): boolean;
        copy(): MessageId;
        get_object_path(): string;
        set_object_path(value: string): void;
        get_method(): string;
        set_method(value: string): void;
        get_id(): string;
    }

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: MessageId;
        }
    }

    abstract class Message extends GObject.Object {
        static $gtype: GObject.GType<Message>;

        // Properties

        get id(): MessageId;
        set id(val: MessageId);

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

        // Static methods

        static type_has(type: GObject.GType, propname: string): boolean;
        static type_check(type: GObject.GType, propname: string, value_type: GObject.GType): boolean;

        // Methods

        has(propname: string): boolean;
        get_id(): MessageId;
        set_id(value: MessageId): void;
    }

    namespace UI {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    class UI {
        static $gtype: GObject.GType<UI>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): UI;

        // Signals

        connect<K extends keyof UI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UI.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UI.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UI.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UI.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace UserQueryResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class UserQueryResponse extends GObject.Object {
        static $gtype: GObject.GType<UserQueryResponse>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserQueryResponse.SignalSignatures;

        // Fields

        text: string;
        response_type: Gtk.ResponseType;

        // Constructors

        constructor(properties?: Partial<UserQueryResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string, response_type: Gtk.ResponseType): UserQueryResponse;

        // Signals

        connect<K extends keyof UserQueryResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserQueryResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserQueryResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserQueryResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserQueryResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserQueryResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace UserQuery {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            quit: () => void;
            response: (arg0: Gtk.ResponseType) => boolean | void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::message': (pspec: GObject.ParamSpec) => void;
            'notify::message-type': (pspec: GObject.ParamSpec) => void;
            'notify::default-response': (pspec: GObject.ParamSpec) => void;
            'notify::default-is-destructive': (pspec: GObject.ParamSpec) => void;
            'notify::message-use-markup': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            title: string;
            message: string;
            message_type: Gtk.MessageType;
            messageType: Gtk.MessageType;
            default_response: Gtk.ResponseType;
            defaultResponse: Gtk.ResponseType;
            default_is_destructive: boolean;
            defaultIsDestructive: boolean;
            message_use_markup: boolean;
            messageUseMarkup: boolean;
        }
    }

    class UserQuery extends GObject.Object {
        static $gtype: GObject.GType<UserQuery>;

        // Properties

        get title(): string;
        set title(val: string);
        get message(): string;
        set message(val: string);
        get message_type(): Gtk.MessageType;
        set message_type(val: Gtk.MessageType);
        get messageType(): Gtk.MessageType;
        set messageType(val: Gtk.MessageType);
        get default_response(): Gtk.ResponseType;
        set default_response(val: Gtk.ResponseType);
        get defaultResponse(): Gtk.ResponseType;
        set defaultResponse(val: Gtk.ResponseType);
        get default_is_destructive(): boolean;
        set default_is_destructive(val: boolean);
        get defaultIsDestructive(): boolean;
        set defaultIsDestructive(val: boolean);
        get message_use_markup(): boolean;
        set message_use_markup(val: boolean);
        get messageUseMarkup(): boolean;
        set messageUseMarkup(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserQuery.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserQuery.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserQuery;

        // Signals

        connect<K extends keyof UserQuery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserQuery.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserQuery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserQuery.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserQuery.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserQuery.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_responses(): UserQueryResponse[];
        set_responses(value: UserQueryResponse[]): void;
        get_title(): string;
        set_title(value: string): void;
        get_message(): string;
        set_message(value: string): void;
        get_message_type(): Gtk.MessageType;
        set_message_type(value: Gtk.MessageType | null): void;
        get_default_response(): Gtk.ResponseType;
        set_default_response(value: Gtk.ResponseType | null): void;
        get_default_is_destructive(): boolean;
        set_default_is_destructive(value: boolean): void;
        get_message_use_markup(): boolean;
        set_message_use_markup(value: boolean): void;
    }

    type CommandLinesClass = typeof CommandLines;
    abstract class CommandLinesPrivate {
        static $gtype: GObject.GType<CommandLinesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MessageBusClass = typeof MessageBus;
    abstract class MessageBusPrivate {
        static $gtype: GObject.GType<MessageBusPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MessageIdClass = typeof MessageId;
    abstract class MessageIdPrivate {
        static $gtype: GObject.GType<MessageIdPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MessageClass = typeof Message;
    abstract class MessagePrivate {
        static $gtype: GObject.GType<MessagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UIClass = typeof UI;
    abstract class UIPrivate {
        static $gtype: GObject.GType<UIPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserQueryResponseClass = typeof UserQueryResponse;
    abstract class UserQueryResponsePrivate {
        static $gtype: GObject.GType<UserQueryResponsePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserQueryClass = typeof UserQuery;
    abstract class UserQueryPrivate {
        static $gtype: GObject.GType<UserQueryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ActionIface = typeof Action;
    type ActivityIface = typeof Activity;
    type ApplicationIface = typeof Application;
    type CommandLineIface = typeof CommandLine;
    type CommitActionIface = typeof CommitAction;
    type HistoryPanelIface = typeof HistoryPanel;
    type HistoryIface = typeof History;
    type NotificationIface = typeof Notification;
    type NotificationsIface = typeof Notifications;
    type PreferencesIface = typeof Preferences;
    type RefActionInterfaceIface = typeof RefActionInterface;
    type RefActionIface = typeof RefAction;
    type RemoteLookupIface = typeof RemoteLookup;
    type SearchableIface = typeof Searchable;
    type SelectableIface = typeof Selectable;
    type UIElementIface = typeof UIElement;
    namespace Action {
        /**
         * Interface for implementing Action.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends UIElement.Interface {
            // Virtual methods

            vfunc_populate_menu(menu: Gtk.Menu): void;
            vfunc_fetch(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_fetch_finish(_res_: Gio.AsyncResult): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends UIElement.ConstructorProps {}
    }

    export interface ActionNamespace {
        $gtype: GObject.GType<Action>;
        prototype: Action;
    }
    interface Action extends UIElement, Action.Interface {
        // Methods

        populate_menu(menu: Gtk.Menu): void;
        fetch(): globalThis.Promise<boolean>;
        fetch(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        fetch(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        fetch_finish(_res_: Gio.AsyncResult): boolean;
    }

    export const Action: ActionNamespace & {
        new (): Action; // This allows `obj instanceof Action`
    };

    namespace Activity {
        /**
         * Interface for implementing Activity.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_is_default_for(action: string): boolean;
            vfunc_on_key_pressed(event: Gdk.EventKey): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ActivityNamespace {
        $gtype: GObject.GType<Activity>;
        prototype: Activity;
    }
    interface Activity extends GObject.Object, Activity.Interface {
        // Methods

        is_default_for(action: string): boolean;
        on_key_pressed(event: Gdk.EventKey): boolean;
    }

    export const Activity: ActivityNamespace & {
        new (): Activity; // This allows `obj instanceof Activity`
    };

    namespace Application {
        /**
         * Interface for implementing Application.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_verified_committer(): Ggit.Signature | null;
            vfunc_get_activity_by_id(id: string): Activity | null;
            vfunc_set_activity_by_id(id: string): Activity | null;
            vfunc_user_query(query: UserQuery): void;
            vfunc_user_query_async(query: UserQuery, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType;
            vfunc_show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void;
            vfunc_open_new(repository: Ggit.Repository, hint?: string | null): Application;
            vfunc_open_repository(path: Gio.File): void;
            vfunc_get_repository(): Gitg.Repository | null;
            vfunc_set_repository(value?: Gitg.Repository | null): void;
            vfunc_get_message_bus(): MessageBus;
            vfunc_get_current_activity(): Activity | null;
            vfunc_get_environment(): Gee.Map;
            vfunc_get_notifications(): Notifications;
            vfunc_get_busy(): boolean;
            vfunc_set_busy(value: boolean): void;
            vfunc_get_remote_lookup(): RemoteLookup;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            repository: Gitg.Repository;
            message_bus: MessageBus;
            messageBus: MessageBus;
            current_activity: Activity;
            currentActivity: Activity;
            environment: Gee.Map;
            notifications: Notifications;
            busy: boolean;
            remote_lookup: RemoteLookup;
            remoteLookup: RemoteLookup;
        }
    }

    export interface ApplicationNamespace {
        $gtype: GObject.GType<Application>;
        prototype: Application;
    }
    interface Application extends GObject.Object, Application.Interface {
        // Properties

        get repository(): Gitg.Repository;
        set repository(val: Gitg.Repository);
        get message_bus(): MessageBus;
        get messageBus(): MessageBus;
        get current_activity(): Activity;
        get currentActivity(): Activity;
        get environment(): Gee.Map;
        get notifications(): Notifications;
        get busy(): boolean;
        set busy(val: boolean);
        get remote_lookup(): RemoteLookup;
        get remoteLookup(): RemoteLookup;

        // Methods

        get_verified_committer(): Ggit.Signature | null;
        get_activity_by_id(id: string): Activity | null;
        set_activity_by_id(id: string): Activity | null;
        user_query(query: UserQuery): void;
        user_query_async(query: UserQuery): globalThis.Promise<Gtk.ResponseType>;
        user_query_async(query: UserQuery, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        user_query_async(
            query: UserQuery,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gtk.ResponseType> | void;
        user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType;
        show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType | null): void;
        open_new(repository: Ggit.Repository, hint?: string | null): Application;
        open_repository(path: Gio.File): void;
        get_repository(): Gitg.Repository | null;
        set_repository(value?: Gitg.Repository | null): void;
        get_message_bus(): MessageBus;
        get_current_activity(): Activity | null;
        get_environment(): Gee.Map;
        get_notifications(): Notifications;
        get_busy(): boolean;
        set_busy(value: boolean): void;
        get_remote_lookup(): RemoteLookup;
    }

    export const Application: ApplicationNamespace & {
        new (): Application; // This allows `obj instanceof Application`
    };

    namespace CommandLine {
        /**
         * Interface for implementing CommandLine.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_option_group(): GLib.OptionGroup;
            vfunc_parse_finished(): void;
            vfunc_apply(application: Application): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CommandLineNamespace {
        $gtype: GObject.GType<CommandLine>;
        prototype: CommandLine;
    }
    interface CommandLine extends GObject.Object, CommandLine.Interface {
        // Methods

        get_option_group(): GLib.OptionGroup;
        parse_finished(): void;
        apply(application: Application): void;
    }

    export const CommandLine: CommandLineNamespace & {
        new (): CommandLine; // This allows `obj instanceof CommandLine`
    };

    namespace CommitAction {
        /**
         * Interface for implementing CommitAction.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Action.Interface {
            // Virtual methods

            vfunc_get_action_interface(): RefActionInterface;
            vfunc_set_action_interface(value: RefActionInterface): void;
            vfunc_get_commit(): Gitg.Commit;
            vfunc_set_commit(value: Gitg.Commit): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Action.ConstructorProps {
            action_interface: RefActionInterface;
            actionInterface: RefActionInterface;
            commit: Gitg.Commit;
        }
    }

    export interface CommitActionNamespace {
        $gtype: GObject.GType<CommitAction>;
        prototype: CommitAction;
    }
    interface CommitAction extends Action, CommitAction.Interface {
        // Properties

        get action_interface(): RefActionInterface;
        set action_interface(val: RefActionInterface);
        get actionInterface(): RefActionInterface;
        set actionInterface(val: RefActionInterface);
        get commit(): Gitg.Commit;
        set commit(val: Gitg.Commit);

        // Methods

        get_action_interface(): RefActionInterface;
        set_action_interface(value: RefActionInterface): void;
        get_commit(): Gitg.Commit;
        set_commit(value: Gitg.Commit): void;
    }

    export const CommitAction: CommitActionNamespace & {
        new (): CommitAction; // This allows `obj instanceof CommitAction`
    };

    namespace HistoryPanel {
        /**
         * Interface for implementing HistoryPanel.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_history(): History | null;
            vfunc_set_history(value?: History | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            history: History;
        }
    }

    export interface HistoryPanelNamespace {
        $gtype: GObject.GType<HistoryPanel>;
        prototype: HistoryPanel;
    }
    interface HistoryPanel extends GObject.Object, HistoryPanel.Interface {
        // Properties

        get history(): History;
        set history(val: History);

        // Methods

        get_history(): History | null;
        set_history(value?: History | null): void;
    }

    export const HistoryPanel: HistoryPanelNamespace & {
        new (): HistoryPanel; // This allows `obj instanceof HistoryPanel`
    };

    namespace History {
        /**
         * Interface for implementing History.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_foreach_selected(func: ForeachCommitSelectionFunc): void;
            vfunc_select(commit: Gitg.Commit): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface HistoryNamespace {
        $gtype: GObject.GType<History>;
        prototype: History;
    }
    interface History extends GObject.Object, History.Interface {
        // Methods

        foreach_selected(func: ForeachCommitSelectionFunc): void;
        select(commit: Gitg.Commit): void;
    }

    export const History: HistoryNamespace & {
        new (): History; // This allows `obj instanceof History`
    };

    namespace Notification {
        /**
         * Interface for implementing Notification.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_widget(): Gtk.Widget | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            widget: Gtk.Widget;
        }
    }

    export interface NotificationNamespace {
        $gtype: GObject.GType<Notification>;
        prototype: Notification;
    }
    interface Notification extends GObject.Object, Notification.Interface {
        // Properties

        get widget(): Gtk.Widget;

        // Methods

        get_widget(): Gtk.Widget | null;
    }

    export const Notification: NotificationNamespace & {
        new (): Notification; // This allows `obj instanceof Notification`
    };

    namespace Notifications {
        /**
         * Interface for implementing Notifications.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_add(notification: Notification): void;
            vfunc_remove(notification: Notification, delay: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface NotificationsNamespace {
        $gtype: GObject.GType<Notifications>;
        prototype: Notifications;
    }
    interface Notifications extends GObject.Object, Notifications.Interface {
        // Methods

        add(notification: Notification): void;
        remove(notification: Notification, delay: number): void;
    }

    export const Notifications: NotificationsNamespace & {
        new (): Notifications; // This allows `obj instanceof Notifications`
    };

    namespace Preferences {
        /**
         * Interface for implementing Preferences.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_id(): string;
            vfunc_get_display_name(): string;
            vfunc_get_widget(): Gtk.Widget;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            display_name: string;
            displayName: string;
            widget: Gtk.Widget;
        }
    }

    export interface PreferencesNamespace {
        $gtype: GObject.GType<Preferences>;
        prototype: Preferences;
    }
    interface Preferences extends GObject.Object, Preferences.Interface {
        // Properties

        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get widget(): Gtk.Widget;

        // Methods

        get_id(): string;
        get_display_name(): string;
        get_widget(): Gtk.Widget;
    }

    export const Preferences: PreferencesNamespace & {
        new (): Preferences; // This allows `obj instanceof Preferences`
    };

    namespace RefActionInterface {
        /**
         * Interface for implementing RefActionInterface.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_add_ref(reference: Gitg.Ref): void;
            vfunc_remove_ref(reference: Gitg.Ref): void;
            vfunc_replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void;
            vfunc_set_busy(reference: Gitg.Ref, busy: boolean): void;
            vfunc_edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void;
            vfunc_refresh(): void;
            vfunc_get_application(): Application;
            vfunc_set_application(value: Application): void;
            vfunc_get_references(): Gee.List;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Application;
            references: Gee.List;
        }
    }

    export interface RefActionInterfaceNamespace {
        $gtype: GObject.GType<RefActionInterface>;
        prototype: RefActionInterface;
    }
    interface RefActionInterface extends GObject.Object, RefActionInterface.Interface {
        // Properties

        get application(): Application;
        set application(val: Application);
        get references(): Gee.List;

        // Methods

        add_ref(reference: Gitg.Ref): void;
        remove_ref(reference: Gitg.Ref): void;
        replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void;
        set_busy(reference: Gitg.Ref, busy: boolean): void;
        edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void;
        refresh(): void;
        get_application(): Application;
        set_application(value: Application): void;
        get_references(): Gee.List;
    }

    export const RefActionInterface: RefActionInterfaceNamespace & {
        new (): RefActionInterface; // This allows `obj instanceof RefActionInterface`
    };

    namespace RefAction {
        /**
         * Interface for implementing RefAction.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Action.Interface {
            // Virtual methods

            vfunc_get_action_interface(): RefActionInterface;
            vfunc_set_action_interface(value: RefActionInterface): void;
            vfunc_get_reference(): Gitg.Ref;
            vfunc_set_reference(value: Gitg.Ref): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Action.ConstructorProps {
            action_interface: RefActionInterface;
            actionInterface: RefActionInterface;
            reference: Gitg.Ref;
        }
    }

    export interface RefActionNamespace {
        $gtype: GObject.GType<RefAction>;
        prototype: RefAction;
    }
    interface RefAction extends Action, RefAction.Interface {
        // Properties

        get action_interface(): RefActionInterface;
        set action_interface(val: RefActionInterface);
        get actionInterface(): RefActionInterface;
        set actionInterface(val: RefActionInterface);
        get reference(): Gitg.Ref;
        set reference(val: Gitg.Ref);

        // Methods

        get_action_interface(): RefActionInterface;
        set_action_interface(value: RefActionInterface): void;
        get_reference(): Gitg.Ref;
        set_reference(value: Gitg.Ref): void;
    }

    export const RefAction: RefActionNamespace & {
        new (): RefAction; // This allows `obj instanceof RefAction`
    };

    namespace RemoteLookup {
        /**
         * Interface for implementing RemoteLookup.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_lookup(name: string): Gitg.Remote | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteLookupNamespace {
        $gtype: GObject.GType<RemoteLookup>;
        prototype: RemoteLookup;
    }
    interface RemoteLookup extends GObject.Object, RemoteLookup.Interface {
        // Methods

        lookup(name: string): Gitg.Remote | null;
    }

    export const RemoteLookup: RemoteLookupNamespace & {
        new (): RemoteLookup; // This allows `obj instanceof RemoteLookup`
    };

    namespace Searchable {
        /**
         * Interface for implementing Searchable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_search_text(): string;
            vfunc_set_search_text(value: string): void;
            vfunc_get_search_visible(): boolean;
            vfunc_set_search_visible(value: boolean): void;
            vfunc_get_search_available(): boolean;
            vfunc_set_search_entry(value?: Gtk.Entry | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            search_text: string;
            searchText: string;
            search_visible: boolean;
            searchVisible: boolean;
            search_available: boolean;
            searchAvailable: boolean;
            search_entry: Gtk.Entry;
            searchEntry: Gtk.Entry;
        }
    }

    export interface SearchableNamespace {
        $gtype: GObject.GType<Searchable>;
        prototype: Searchable;
    }
    interface Searchable extends GObject.Object, Searchable.Interface {
        // Properties

        get search_text(): string;
        set search_text(val: string);
        get searchText(): string;
        set searchText(val: string);
        get search_visible(): boolean;
        set search_visible(val: boolean);
        get searchVisible(): boolean;
        set searchVisible(val: boolean);
        get search_available(): boolean;
        get searchAvailable(): boolean;
        set search_entry(val: Gtk.Entry);
        set searchEntry(val: Gtk.Entry);

        // Methods

        get_search_text(): string;
        set_search_text(value: string): void;
        get_search_visible(): boolean;
        set_search_visible(value: boolean): void;
        get_search_available(): boolean;
        set_search_entry(value?: Gtk.Entry | null): void;
    }

    export const Searchable: SearchableNamespace & {
        new (): Searchable; // This allows `obj instanceof Searchable`
    };

    namespace Selectable {
        /**
         * Interface for implementing Selectable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_selectable_mode(): SelectionMode;
            vfunc_set_selectable_mode(value: SelectionMode): void;
            vfunc_get_selectable_available(): boolean;
            vfunc_get_selectable_mode_tooltip(): string;
            vfunc_get_action_widget(): Gtk.Widget | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            selectable_mode: SelectionMode;
            selectableMode: SelectionMode;
            selectable_available: boolean;
            selectableAvailable: boolean;
            selectable_mode_tooltip: string;
            selectableModeTooltip: string;
            action_widget: Gtk.Widget;
            actionWidget: Gtk.Widget;
        }
    }

    export interface SelectableNamespace {
        $gtype: GObject.GType<Selectable>;
        prototype: Selectable;
    }
    interface Selectable extends GObject.Object, Selectable.Interface {
        // Properties

        get selectable_mode(): SelectionMode;
        set selectable_mode(val: SelectionMode);
        get selectableMode(): SelectionMode;
        set selectableMode(val: SelectionMode);
        get selectable_available(): boolean;
        get selectableAvailable(): boolean;
        get selectable_mode_tooltip(): string;
        get selectableModeTooltip(): string;
        get action_widget(): Gtk.Widget;
        get actionWidget(): Gtk.Widget;

        // Methods

        get_selectable_mode(): SelectionMode;
        set_selectable_mode(value: SelectionMode | null): void;
        get_selectable_available(): boolean;
        get_selectable_mode_tooltip(): string;
        get_action_widget(): Gtk.Widget | null;
    }

    export const Selectable: SelectableNamespace & {
        new (): Selectable; // This allows `obj instanceof Selectable`
    };

    namespace UIElement {
        /**
         * Interface for implementing UIElement.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_negotiate_order(other: UIElement): number;
            vfunc_get_application(): Application | null;
            vfunc_set_application(value?: Application | null): void;
            vfunc_get_id(): string;
            vfunc_get_display_name(): string;
            vfunc_get_description(): string;
            vfunc_get_icon(): string | null;
            vfunc_get_widget(): Gtk.Widget | null;
            vfunc_get_shortcut(): number | null;
            vfunc_get_available(): boolean;
            vfunc_get_enabled(): boolean;
            vfunc_activate(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Application;
            id: string;
            display_name: string;
            displayName: string;
            description: string;
        }
    }

    export interface UIElementNamespace {
        $gtype: GObject.GType<UIElement>;
        prototype: UIElement;
    }
    interface UIElement extends GObject.Object, UIElement.Interface {
        // Properties

        get application(): Application;
        set application(val: Application);
        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get description(): string;

        // Methods

        negotiate_order(other: UIElement): number;
        get_application(): Application | null;
        set_application(value?: Application | null): void;
        get_id(): string;
        get_display_name(): string;
        get_description(): string;
        get_icon(): string | null;
        get_widget(): Gtk.Widget | null;
        get_shortcut(): number | null;
        get_available(): boolean;
        get_enabled(): boolean;
    }

    export const UIElement: UIElementNamespace & {
        new (): UIElement; // This allows `obj instanceof UIElement`
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

export default GitgExt;

// END
