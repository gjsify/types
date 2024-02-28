/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gitgext-1.0-ambient.d.ts';
import './gitgext-1.0-import.d.ts';
/**
 * GitgExt-1.0
 */

import type Gitg from '@girs/gitg-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gee from '@girs/gee-0.8';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Ggit from '@girs/ggit-1.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Atk from '@girs/atk-1.0';

export namespace GitgExt {
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
    enum ExternalChangeHint {
        NONE,
        REFS,
        INDEX,
    }
    module CommandLines {
        // Constructor properties interface
    }

    class CommandLines extends GObject.Object {
        // Constructors of GitgExt-1.0.CommandLines

        static ['new'](command_lines: CommandLine[]): CommandLines;

        // Owm methods of GitgExt-1.0.CommandLines

        get_for(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): any | null;
        parse_finished(): void;
        apply(application: Application): void;
    }

    module MessageBus {
        // Signal callback interfaces

        interface Registered {
            (id: MessageId): void;
        }

        interface Unregistered {
            (id: MessageId): void;
        }

        interface Dispatch {
            (message: Message): void;
        }

        // Constructor properties interface
    }

    class MessageBus extends GObject.Object {
        // Constructors of GitgExt-1.0.MessageBus

        static ['new'](): MessageBus;

        // Owm methods of GitgExt-1.0.MessageBus

        static get_default(): MessageBus;

        // Owm methods of GitgExt-1.0.MessageBus

        lookup(id: MessageId): GObject.GType;
        register(message_type: GObject.GType, id: MessageId): void;
        unregister(id: MessageId): void;
        unregister_all(object_path: string): void;
        is_registered(id: MessageId): boolean;
        connect(id: MessageId, callback: MessageCallback): number;
        disconnect(id: number): void;
        block(id: number): void;
        unblock(id: number): void;
        send_message(message: Message): Message;
    }

    module MessageId {
        // Constructor properties interface
    }

    class MessageId extends GObject.Object {
        // Own properties of GitgExt-1.0.MessageId

        object_path: string;
        objectPath: string;
        method: string;
        readonly id: string;

        // Constructors of GitgExt-1.0.MessageId

        static ['new'](object_path: string, method: string): MessageId;

        // Owm methods of GitgExt-1.0.MessageId

        static valid_object_path(path: string): boolean;

        // Owm methods of GitgExt-1.0.MessageId

        hash(): number;
        equal(other: MessageId): boolean;
        copy(): MessageId;
        get_object_path(): string;
        set_object_path(value: string): void;
        get_method(): string;
        set_method(value: string): void;
        get_id(): string;
    }

    module Message {
        // Constructor properties interface
    }

    abstract class Message extends GObject.Object {
        // Own properties of GitgExt-1.0.Message

        id: MessageId;

        // Owm methods of GitgExt-1.0.Message

        static type_has(type: GObject.GType, propname: string): boolean;
        static type_check(type: GObject.GType, propname: string, value_type: GObject.GType): boolean;

        // Owm methods of GitgExt-1.0.Message

        has(propname: string): boolean;
        get_id(): MessageId;
        set_id(value: MessageId): void;
    }

    class UI {
        // Own fields of GitgExt-1.0.UI

        ref_count: number;

        // Constructors of GitgExt-1.0.UI

        static ['new'](): UI;
    }

    module UserQueryResponse {
        // Constructor properties interface
    }

    class UserQueryResponse extends GObject.Object {
        // Own fields of GitgExt-1.0.UserQueryResponse

        text: string;
        response_type: Gtk.ResponseType;

        // Constructors of GitgExt-1.0.UserQueryResponse

        static ['new'](text: string, response_type: Gtk.ResponseType): UserQueryResponse;
    }

    module UserQuery {
        // Signal callback interfaces

        interface Quit {
            (): void;
        }

        interface Response {
            (response_type: Gtk.ResponseType): boolean;
        }

        // Constructor properties interface
    }

    class UserQuery extends GObject.Object {
        // Own properties of GitgExt-1.0.UserQuery

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

        // Constructors of GitgExt-1.0.UserQuery

        static ['new'](): UserQuery;

        // Owm methods of GitgExt-1.0.UserQuery

        get_responses(): UserQueryResponse[];
        set_responses(value: UserQueryResponse[]): void;
        get_title(): string;
        set_title(value: string): void;
        get_message(): string;
        set_message(value: string): void;
        get_message_type(): Gtk.MessageType;
        set_message_type(value: Gtk.MessageType): void;
        get_default_response(): Gtk.ResponseType;
        set_default_response(value: Gtk.ResponseType): void;
        get_default_is_destructive(): boolean;
        set_default_is_destructive(value: boolean): void;
        get_message_use_markup(): boolean;
        set_message_use_markup(value: boolean): void;
    }

    class CommandLinesClass {}

    class CommandLinesPrivate {}

    class MessageBusClass {}

    class MessageBusPrivate {}

    class MessageIdClass {}

    class MessageIdPrivate {}

    class MessageClass {}

    class MessagePrivate {}

    class UIClass {}

    class UIPrivate {}

    class UserQueryResponseClass {}

    class UserQueryResponsePrivate {}

    class UserQueryClass {}

    class UserQueryPrivate {}

    class ActionIface {}

    class ActivityIface {}

    class ApplicationIface {}

    class CommandLineIface {}

    class CommitActionIface {}

    class HistoryPanelIface {}

    class HistoryIface {}

    class NotificationIface {}

    class NotificationsIface {}

    class PreferencesIface {}

    class RefActionInterfaceIface {}

    class RefActionIface {}

    class RemoteLookupIface {}

    class SearchableIface {}

    class SelectableIface {}

    class UIElementIface {}

    interface Action {
        // Owm methods of GitgExt-1.0.Action

        populate_menu(menu: Gtk.Menu): void;
        fetch(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        fetch_finish(_res_: Gio.AsyncResult): boolean;

        // Own virtual methods of GitgExt-1.0.Action

        vfunc_populate_menu(menu: Gtk.Menu): void;
        vfunc_fetch(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_fetch_finish(_res_: Gio.AsyncResult): boolean;
    }

    interface Activity {
        // Owm methods of GitgExt-1.0.Activity

        is_default_for(action: string): boolean;
        on_key_pressed(event: Gdk.EventKey): boolean;

        // Own virtual methods of GitgExt-1.0.Activity

        vfunc_is_default_for(action: string): boolean;
        vfunc_on_key_pressed(event: Gdk.EventKey): boolean;
    }

    interface Application {
        // Own properties of GitgExt-1.0.Application

        repository: Gitg.Repository;
        readonly message_bus: MessageBus;
        readonly messageBus: MessageBus;
        readonly current_activity: Activity;
        readonly currentActivity: Activity;
        readonly environment: Gee.Map;
        readonly notifications: Notifications;
        busy: boolean;
        readonly remote_lookup: RemoteLookup;
        readonly remoteLookup: RemoteLookup;

        // Owm methods of GitgExt-1.0.Application

        get_verified_committer(): Ggit.Signature | null;
        get_activity_by_id(id: string): Activity | null;
        set_activity_by_id(id: string): Activity | null;
        user_query(query: UserQuery): void;
        user_query_async(query: UserQuery, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType;
        show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void;
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

        // Own virtual methods of GitgExt-1.0.Application

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

    interface CommandLine {
        // Owm methods of GitgExt-1.0.CommandLine

        get_option_group(): GLib.OptionGroup;
        parse_finished(): void;
        apply(application: Application): void;

        // Own virtual methods of GitgExt-1.0.CommandLine

        vfunc_get_option_group(): GLib.OptionGroup;
        vfunc_parse_finished(): void;
        vfunc_apply(application: Application): void;
    }

    interface CommitAction {
        // Own properties of GitgExt-1.0.CommitAction

        action_interface: RefActionInterface;
        actionInterface: RefActionInterface;
        commit: Gitg.Commit;

        // Owm methods of GitgExt-1.0.CommitAction

        get_action_interface(): RefActionInterface;
        set_action_interface(value: RefActionInterface): void;
        get_commit(): Gitg.Commit;
        set_commit(value: Gitg.Commit): void;

        // Own virtual methods of GitgExt-1.0.CommitAction

        vfunc_get_action_interface(): RefActionInterface;
        vfunc_set_action_interface(value: RefActionInterface): void;
        vfunc_get_commit(): Gitg.Commit;
        vfunc_set_commit(value: Gitg.Commit): void;
    }

    interface HistoryPanel {
        // Own properties of GitgExt-1.0.HistoryPanel

        history: History;

        // Owm methods of GitgExt-1.0.HistoryPanel

        get_history(): History | null;
        set_history(value?: History | null): void;

        // Own virtual methods of GitgExt-1.0.HistoryPanel

        vfunc_get_history(): History | null;
        vfunc_set_history(value?: History | null): void;
    }

    interface History {
        // Owm methods of GitgExt-1.0.History

        foreach_selected(func: ForeachCommitSelectionFunc): void;
        select(commit: Gitg.Commit): void;

        // Own virtual methods of GitgExt-1.0.History

        vfunc_foreach_selected(func: ForeachCommitSelectionFunc): void;
        vfunc_select(commit: Gitg.Commit): void;
    }

    interface Notification {
        // Own properties of GitgExt-1.0.Notification

        readonly widget: Gtk.Widget;

        // Owm methods of GitgExt-1.0.Notification

        get_widget(): Gtk.Widget | null;

        // Own virtual methods of GitgExt-1.0.Notification

        vfunc_get_widget(): Gtk.Widget | null;
    }

    interface Notifications {
        // Owm methods of GitgExt-1.0.Notifications

        add(notification: Notification): void;
        remove(notification: Notification, delay: number): void;

        // Own virtual methods of GitgExt-1.0.Notifications

        vfunc_add(notification: Notification): void;
        vfunc_remove(notification: Notification, delay: number): void;
    }

    interface Preferences {
        // Own properties of GitgExt-1.0.Preferences

        readonly id: string;
        readonly display_name: string;
        readonly displayName: string;
        readonly widget: Gtk.Widget;

        // Owm methods of GitgExt-1.0.Preferences

        get_id(): string;
        get_display_name(): string;
        get_widget(): Gtk.Widget;

        // Own virtual methods of GitgExt-1.0.Preferences

        vfunc_get_id(): string;
        vfunc_get_display_name(): string;
        vfunc_get_widget(): Gtk.Widget;
    }

    interface RefActionInterface {
        // Own properties of GitgExt-1.0.RefActionInterface

        application: Application;
        readonly references: Gee.List;

        // Owm methods of GitgExt-1.0.RefActionInterface

        add_ref(reference: Gitg.Ref): void;
        remove_ref(reference: Gitg.Ref): void;
        replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void;
        set_busy(reference: Gitg.Ref, busy: boolean): void;
        edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void;
        refresh(): void;
        get_application(): Application;
        set_application(value: Application): void;
        get_references(): Gee.List;

        // Own virtual methods of GitgExt-1.0.RefActionInterface

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

    interface RefAction {
        // Own properties of GitgExt-1.0.RefAction

        action_interface: RefActionInterface;
        actionInterface: RefActionInterface;
        reference: Gitg.Ref;

        // Owm methods of GitgExt-1.0.RefAction

        get_action_interface(): RefActionInterface;
        set_action_interface(value: RefActionInterface): void;
        get_reference(): Gitg.Ref;
        set_reference(value: Gitg.Ref): void;

        // Own virtual methods of GitgExt-1.0.RefAction

        vfunc_get_action_interface(): RefActionInterface;
        vfunc_set_action_interface(value: RefActionInterface): void;
        vfunc_get_reference(): Gitg.Ref;
        vfunc_set_reference(value: Gitg.Ref): void;
    }

    interface RemoteLookup {
        // Owm methods of GitgExt-1.0.RemoteLookup

        lookup(name: string): Gitg.Remote | null;

        // Own virtual methods of GitgExt-1.0.RemoteLookup

        vfunc_lookup(name: string): Gitg.Remote | null;
    }

    interface Searchable {
        // Own properties of GitgExt-1.0.Searchable

        search_text: string;
        searchText: string;
        search_visible: boolean;
        searchVisible: boolean;
        readonly search_available: boolean;
        readonly searchAvailable: boolean;
        search_entry: Gtk.Entry;
        searchEntry: Gtk.Entry;

        // Owm methods of GitgExt-1.0.Searchable

        get_search_text(): string;
        set_search_text(value: string): void;
        get_search_visible(): boolean;
        set_search_visible(value: boolean): void;
        get_search_available(): boolean;
        set_search_entry(value?: Gtk.Entry | null): void;

        // Own virtual methods of GitgExt-1.0.Searchable

        vfunc_get_search_text(): string;
        vfunc_set_search_text(value: string): void;
        vfunc_get_search_visible(): boolean;
        vfunc_set_search_visible(value: boolean): void;
        vfunc_get_search_available(): boolean;
        vfunc_set_search_entry(value?: Gtk.Entry | null): void;
    }

    interface Selectable {
        // Own properties of GitgExt-1.0.Selectable

        selectable_mode: SelectionMode;
        selectableMode: SelectionMode;
        readonly selectable_available: boolean;
        readonly selectableAvailable: boolean;
        readonly selectable_mode_tooltip: string;
        readonly selectableModeTooltip: string;
        readonly action_widget: Gtk.Widget;
        readonly actionWidget: Gtk.Widget;

        // Owm methods of GitgExt-1.0.Selectable

        get_selectable_mode(): SelectionMode;
        set_selectable_mode(value: SelectionMode): void;
        get_selectable_available(): boolean;
        get_selectable_mode_tooltip(): string;
        get_action_widget(): Gtk.Widget | null;

        // Own virtual methods of GitgExt-1.0.Selectable

        vfunc_get_selectable_mode(): SelectionMode;
        vfunc_set_selectable_mode(value: SelectionMode): void;
        vfunc_get_selectable_available(): boolean;
        vfunc_get_selectable_mode_tooltip(): string;
        vfunc_get_action_widget(): Gtk.Widget | null;
    }

    interface UIElement {
        // Own properties of GitgExt-1.0.UIElement

        application: Application;
        readonly id: string;
        readonly display_name: string;
        readonly displayName: string;
        readonly description: string;

        // Owm methods of GitgExt-1.0.UIElement

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

        // Own virtual methods of GitgExt-1.0.UIElement

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
