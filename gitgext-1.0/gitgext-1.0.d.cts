
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

export enum SelectionMode {
    NORMAL,
    SELECTION,
}
export enum ExternalChangeHint {
    NONE,
    REFS,
    INDEX,
}
export interface ForeachCommitSelectionFunc {
    (object: Ggit.Commit): boolean
}
export interface MessageCallback {
    (message: Message): void
}
export interface RefNameEditingDone {
    (new_name: string | null, cancelled: boolean): void
}
export module Action {

    // Constructor properties interface

    export interface ConstructorProperties extends UIElement.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Action extends UIElement {

    // Owm methods of GitgExt-1.0.GitgExt.Action

    populate_menu(menu: Gtk.Menu): void
    fetch(_callback_: Gio.AsyncReadyCallback<this> | null): void
    fetch_finish(_res_: Gio.AsyncResult): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.Action

    vfunc_populate_menu(menu: Gtk.Menu): void
    vfunc_fetch(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_fetch_finish(_res_: Gio.AsyncResult): boolean

    // Class property signals of GitgExt-1.0.GitgExt.Action

    connect(sigName: "notify::application", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Action extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Action

    static name: string
    static $gtype: GObject.GType<Action>

    // Constructors of GitgExt-1.0.GitgExt.Action

    constructor(config?: Action.ConstructorProperties) 
    _init(config?: Action.ConstructorProperties): void
}

export module Activity {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, UIElement.ConstructorProperties {
    }

}

export interface Activity extends GObject.Object, UIElement {

    // Owm methods of GitgExt-1.0.GitgExt.Activity

    is_default_for(action: string | null): boolean
    on_key_pressed(event: Gdk.EventKey): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.Activity

    vfunc_is_default_for(action: string | null): boolean
    vfunc_on_key_pressed(event: Gdk.EventKey): boolean

    // Class property signals of GitgExt-1.0.GitgExt.Activity

    connect(sigName: "notify::application", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Activity {

    // Own properties of GitgExt-1.0.GitgExt.Activity

    static name: string
    static $gtype: GObject.GType<Activity>

    // Constructors of GitgExt-1.0.GitgExt.Activity

    constructor(config?: Activity.ConstructorProperties) 
    _init(config?: Activity.ConstructorProperties): void
}

export module Application {

    // Signal callback interfaces

    /**
     * Signal callback interface for `repository-changed-externally`
     */
    export interface RepositoryChangedExternallySignalCallback {
        ($obj: Application, hint: ExternalChangeHint): void
    }

    /**
     * Signal callback interface for `repository-commits-changed`
     */
    export interface RepositoryCommitsChangedSignalCallback {
        ($obj: Application): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.Application

        repository?: Gitg.Repository | null
        busy?: boolean | null
    }

}

export interface Application extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Application

    repository: Gitg.Repository
    readonly message_bus: MessageBus
    readonly messageBus: MessageBus
    readonly current_activity: Activity
    readonly currentActivity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remote_lookup: RemoteLookup
    readonly remoteLookup: RemoteLookup

    // Owm methods of GitgExt-1.0.GitgExt.Application

    get_verified_committer(): Ggit.Signature | null
    get_activity_by_id(id: string | null): Activity | null
    set_activity_by_id(id: string | null): Activity | null
    user_query(query: UserQuery): void
    user_query_async(query: UserQuery, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of user_query_async

    /**
     * Promisified version of {@link user_query_async}
     * 
     * 
     * @param query 
     * @param _callback_ 
     * @returns A Promise of the result of {@link user_query_async}
     */
    user_query_async(query: UserQuery): globalThis.Promise<Gtk.ResponseType>
    user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType
    show_infobar(primary_msg: string | null, secondary_msg: string | null, type: Gtk.MessageType): void
    open_new(repository: Ggit.Repository, hint: string | null): Application
    open_repository(path: Gio.File): void
    get_repository(): Gitg.Repository | null
    set_repository(value: Gitg.Repository | null): void
    get_message_bus(): MessageBus
    get_current_activity(): Activity | null
    get_environment(): Gee.Map
    get_notifications(): Notifications
    get_busy(): boolean
    set_busy(value: boolean): void
    get_remote_lookup(): RemoteLookup

    // Own virtual methods of GitgExt-1.0.GitgExt.Application

    vfunc_get_verified_committer(): Ggit.Signature | null
    vfunc_get_activity_by_id(id: string | null): Activity | null
    vfunc_set_activity_by_id(id: string | null): Activity | null
    vfunc_user_query(query: UserQuery): void
    vfunc_user_query_async(query: UserQuery, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType
    vfunc_show_infobar(primary_msg: string | null, secondary_msg: string | null, type: Gtk.MessageType): void
    vfunc_open_new(repository: Ggit.Repository, hint: string | null): Application
    vfunc_open_repository(path: Gio.File): void
    vfunc_get_repository(): Gitg.Repository | null
    vfunc_set_repository(value: Gitg.Repository | null): void
    vfunc_get_message_bus(): MessageBus
    vfunc_get_current_activity(): Activity | null
    vfunc_get_environment(): Gee.Map
    vfunc_get_notifications(): Notifications
    vfunc_get_busy(): boolean
    vfunc_set_busy(value: boolean): void
    vfunc_get_remote_lookup(): RemoteLookup

    // Own signals of GitgExt-1.0.GitgExt.Application

    connect(sigName: "repository-changed-externally", callback: Application.RepositoryChangedExternallySignalCallback): number
    connect_after(sigName: "repository-changed-externally", callback: Application.RepositoryChangedExternallySignalCallback): number
    emit(sigName: "repository-changed-externally", hint: ExternalChangeHint, ...args: any[]): void
    connect(sigName: "repository-commits-changed", callback: Application.RepositoryCommitsChangedSignalCallback): number
    connect_after(sigName: "repository-commits-changed", callback: Application.RepositoryCommitsChangedSignalCallback): number
    emit(sigName: "repository-commits-changed", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.Application

    connect(sigName: "notify::repository", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::message-bus", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-bus", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-bus", ...args: any[]): void
    connect(sigName: "notify::current-activity", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-activity", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-activity", ...args: any[]): void
    connect(sigName: "notify::environment", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::environment", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::environment", ...args: any[]): void
    connect(sigName: "notify::notifications", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notifications", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notifications", ...args: any[]): void
    connect(sigName: "notify::busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::busy", ...args: any[]): void
    connect(sigName: "notify::remote-lookup", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-lookup", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-lookup", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Application {

    // Own properties of GitgExt-1.0.GitgExt.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of GitgExt-1.0.GitgExt.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
}

export module CommandLine {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CommandLine extends GObject.Object {

    // Owm methods of GitgExt-1.0.GitgExt.CommandLine

    get_option_group(): GLib.OptionGroup
    parse_finished(): void
    apply(application: Application): void

    // Own virtual methods of GitgExt-1.0.GitgExt.CommandLine

    vfunc_get_option_group(): GLib.OptionGroup
    vfunc_parse_finished(): void
    vfunc_apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLine

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandLine {

    // Own properties of GitgExt-1.0.GitgExt.CommandLine

    static name: string
    static $gtype: GObject.GType<CommandLine>

    // Constructors of GitgExt-1.0.GitgExt.CommandLine

    constructor(config?: CommandLine.ConstructorProperties) 
    _init(config?: CommandLine.ConstructorProperties): void
}

export module CommitAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: CommitAction): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Action.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.CommitAction

        action_interface?: RefActionInterface | null
        commit?: Gitg.Commit | null
        actionInterface?: RefActionInterface | null
    }

}

export interface CommitAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    action_interface: RefActionInterface
    actionInterface: RefActionInterface
    commit: Gitg.Commit

    // Owm methods of GitgExt-1.0.GitgExt.CommitAction

    get_action_interface(): RefActionInterface
    set_action_interface(value: RefActionInterface): void
    get_commit(): Gitg.Commit
    set_commit(value: Gitg.Commit): void

    // Own virtual methods of GitgExt-1.0.GitgExt.CommitAction

    vfunc_get_action_interface(): RefActionInterface
    vfunc_set_action_interface(value: RefActionInterface): void
    vfunc_get_commit(): Gitg.Commit
    vfunc_set_commit(value: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.CommitAction

    connect(sigName: "finished", callback: CommitAction.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: CommitAction.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.CommitAction

    connect(sigName: "notify::action-interface", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-interface", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommitAction extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    static name: string
    static $gtype: GObject.GType<CommitAction>

    // Constructors of GitgExt-1.0.GitgExt.CommitAction

    constructor(config?: CommitAction.ConstructorProperties) 
    _init(config?: CommitAction.ConstructorProperties): void
}

export module HistoryPanel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, UIElement.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.HistoryPanel

        history?: History | null
    }

}

export interface HistoryPanel extends GObject.Object, UIElement {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanel

    history: History

    // Owm methods of GitgExt-1.0.GitgExt.HistoryPanel

    get_history(): History | null
    set_history(value: History | null): void

    // Own virtual methods of GitgExt-1.0.GitgExt.HistoryPanel

    vfunc_get_history(): History | null
    vfunc_set_history(value: History | null): void

    // Class property signals of GitgExt-1.0.GitgExt.HistoryPanel

    connect(sigName: "notify::history", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::history", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::history", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HistoryPanel {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanel

    static name: string
    static $gtype: GObject.GType<HistoryPanel>

    // Constructors of GitgExt-1.0.GitgExt.HistoryPanel

    constructor(config?: HistoryPanel.ConstructorProperties) 
    _init(config?: HistoryPanel.ConstructorProperties): void
}

export module History {

    // Signal callback interfaces

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        ($obj: History): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Activity.ConstructorProperties {
    }

}

export interface History extends GObject.Object, Activity {

    // Owm methods of GitgExt-1.0.GitgExt.History

    foreach_selected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void

    // Own virtual methods of GitgExt-1.0.GitgExt.History

    vfunc_foreach_selected(func: ForeachCommitSelectionFunc): void
    vfunc_select(commit: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "selection-changed", callback: History.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: History.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "notify::application", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class History {

    // Own properties of GitgExt-1.0.GitgExt.History

    static name: string
    static $gtype: GObject.GType<History>

    // Constructors of GitgExt-1.0.GitgExt.History

    constructor(config?: History.ConstructorProperties) 
    _init(config?: History.ConstructorProperties): void
}

export module Notification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        ($obj: Notification, delay: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Notification extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    readonly widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Notification

    get_widget(): Gtk.Widget | null

    // Own virtual methods of GitgExt-1.0.GitgExt.Notification

    vfunc_get_widget(): Gtk.Widget | null

    // Own signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "close", callback: Notification.CloseSignalCallback): number
    connect_after(sigName: "close", callback: Notification.CloseSignalCallback): number
    emit(sigName: "close", delay: number, ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "notify::widget", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Notification {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    static name: string
    static $gtype: GObject.GType<Notification>

    // Constructors of GitgExt-1.0.GitgExt.Notification

    constructor(config?: Notification.ConstructorProperties) 
    _init(config?: Notification.ConstructorProperties): void
}

export module Notifications {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Notifications extends GObject.Object {

    // Owm methods of GitgExt-1.0.GitgExt.Notifications

    add(notification: Notification): void
    remove(notification: Notification, delay: number): void

    // Own virtual methods of GitgExt-1.0.GitgExt.Notifications

    vfunc_add(notification: Notification): void
    vfunc_remove(notification: Notification, delay: number): void

    // Class property signals of GitgExt-1.0.GitgExt.Notifications

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Notifications {

    // Own properties of GitgExt-1.0.GitgExt.Notifications

    static name: string
    static $gtype: GObject.GType<Notifications>

    // Constructors of GitgExt-1.0.GitgExt.Notifications

    constructor(config?: Notifications.ConstructorProperties) 
    _init(config?: Notifications.ConstructorProperties): void
}

export module Preferences {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Preferences extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Preferences

    readonly id: string | null
    readonly display_name: string | null
    readonly displayName: string | null
    readonly widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Preferences

    get_id(): string | null
    get_display_name(): string | null
    get_widget(): Gtk.Widget

    // Own virtual methods of GitgExt-1.0.GitgExt.Preferences

    vfunc_get_id(): string | null
    vfunc_get_display_name(): string | null
    vfunc_get_widget(): Gtk.Widget

    // Class property signals of GitgExt-1.0.GitgExt.Preferences

    connect(sigName: "notify::id", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Preferences {

    // Own properties of GitgExt-1.0.GitgExt.Preferences

    static name: string
    static $gtype: GObject.GType<Preferences>

    // Constructors of GitgExt-1.0.GitgExt.Preferences

    constructor(config?: Preferences.ConstructorProperties) 
    _init(config?: Preferences.ConstructorProperties): void
}

export module RefActionInterface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.RefActionInterface

        application?: Application | null
    }

}

export interface RefActionInterface extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterface

    application: Application
    readonly references: Gee.List

    // Owm methods of GitgExt-1.0.GitgExt.RefActionInterface

    add_ref(reference: Gitg.Ref): void
    remove_ref(reference: Gitg.Ref): void
    replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void
    set_busy(reference: Gitg.Ref, busy: boolean): void
    edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void
    refresh(): void
    get_application(): Application
    set_application(value: Application): void
    get_references(): Gee.List

    // Own virtual methods of GitgExt-1.0.GitgExt.RefActionInterface

    vfunc_add_ref(reference: Gitg.Ref): void
    vfunc_remove_ref(reference: Gitg.Ref): void
    vfunc_replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void
    vfunc_set_busy(reference: Gitg.Ref, busy: boolean): void
    vfunc_edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone): void
    vfunc_refresh(): void
    vfunc_get_application(): Application
    vfunc_set_application(value: Application): void
    vfunc_get_references(): Gee.List

    // Class property signals of GitgExt-1.0.GitgExt.RefActionInterface

    connect(sigName: "notify::application", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::references", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RefActionInterface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterface

    static name: string
    static $gtype: GObject.GType<RefActionInterface>

    // Constructors of GitgExt-1.0.GitgExt.RefActionInterface

    constructor(config?: RefActionInterface.ConstructorProperties) 
    _init(config?: RefActionInterface.ConstructorProperties): void
}

export module RefAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: RefAction): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Action.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.RefAction

        action_interface?: RefActionInterface | null
        reference?: Gitg.Ref | null
        actionInterface?: RefActionInterface | null
    }

}

export interface RefAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    action_interface: RefActionInterface
    actionInterface: RefActionInterface
    reference: Gitg.Ref

    // Owm methods of GitgExt-1.0.GitgExt.RefAction

    get_action_interface(): RefActionInterface
    set_action_interface(value: RefActionInterface): void
    get_reference(): Gitg.Ref
    set_reference(value: Gitg.Ref): void

    // Own virtual methods of GitgExt-1.0.GitgExt.RefAction

    vfunc_get_action_interface(): RefActionInterface
    vfunc_set_action_interface(value: RefActionInterface): void
    vfunc_get_reference(): Gitg.Ref
    vfunc_set_reference(value: Gitg.Ref): void

    // Own signals of GitgExt-1.0.GitgExt.RefAction

    connect(sigName: "finished", callback: RefAction.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: RefAction.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.RefAction

    connect(sigName: "notify::action-interface", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-interface", ...args: any[]): void
    connect(sigName: "notify::reference", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RefAction extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    static name: string
    static $gtype: GObject.GType<RefAction>

    // Constructors of GitgExt-1.0.GitgExt.RefAction

    constructor(config?: RefAction.ConstructorProperties) 
    _init(config?: RefAction.ConstructorProperties): void
}

export module RemoteLookup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteLookup extends GObject.Object {

    // Owm methods of GitgExt-1.0.GitgExt.RemoteLookup

    lookup(name: string | null): Gitg.Remote | null

    // Own virtual methods of GitgExt-1.0.GitgExt.RemoteLookup

    vfunc_lookup(name: string | null): Gitg.Remote | null

    // Class property signals of GitgExt-1.0.GitgExt.RemoteLookup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RemoteLookup {

    // Own properties of GitgExt-1.0.GitgExt.RemoteLookup

    static name: string
    static $gtype: GObject.GType<RemoteLookup>

    // Constructors of GitgExt-1.0.GitgExt.RemoteLookup

    constructor(config?: RemoteLookup.ConstructorProperties) 
    _init(config?: RemoteLookup.ConstructorProperties): void
}

export module Searchable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Activity.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.Searchable

        search_text?: string | null
        search_visible?: boolean | null
        search_entry?: Gtk.Entry | null
        searchText?: string | null
        searchVisible?: boolean | null
        searchEntry?: Gtk.Entry | null
    }

}

export interface Searchable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    search_text: string | null
    searchText: string | null
    search_visible: boolean
    searchVisible: boolean
    readonly search_available: boolean
    readonly searchAvailable: boolean
    search_entry: Gtk.Entry
    searchEntry: Gtk.Entry

    // Owm methods of GitgExt-1.0.GitgExt.Searchable

    get_search_text(): string | null
    set_search_text(value: string | null): void
    get_search_visible(): boolean
    set_search_visible(value: boolean): void
    get_search_available(): boolean
    set_search_entry(value: Gtk.Entry | null): void

    // Own virtual methods of GitgExt-1.0.GitgExt.Searchable

    vfunc_get_search_text(): string | null
    vfunc_set_search_text(value: string | null): void
    vfunc_get_search_visible(): boolean
    vfunc_set_search_visible(value: boolean): void
    vfunc_get_search_available(): boolean
    vfunc_set_search_entry(value: Gtk.Entry | null): void

    // Class property signals of GitgExt-1.0.GitgExt.Searchable

    connect(sigName: "notify::search-text", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-text", ...args: any[]): void
    connect(sigName: "notify::search-visible", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-visible", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-visible", ...args: any[]): void
    connect(sigName: "notify::search-available", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-available", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-available", ...args: any[]): void
    connect(sigName: "notify::search-entry", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-entry", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-entry", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Searchable {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    static name: string
    static $gtype: GObject.GType<Searchable>

    // Constructors of GitgExt-1.0.GitgExt.Searchable

    constructor(config?: Searchable.ConstructorProperties) 
    _init(config?: Searchable.ConstructorProperties): void
}

export module Selectable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Activity.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.Selectable

        selectable_mode?: SelectionMode | null
        selectableMode?: SelectionMode | null
    }

}

export interface Selectable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    selectable_mode: SelectionMode
    selectableMode: SelectionMode
    readonly selectable_available: boolean
    readonly selectableAvailable: boolean
    readonly selectable_mode_tooltip: string | null
    readonly selectableModeTooltip: string | null
    readonly action_widget: Gtk.Widget
    readonly actionWidget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Selectable

    get_selectable_mode(): SelectionMode
    set_selectable_mode(value: SelectionMode): void
    get_selectable_available(): boolean
    get_selectable_mode_tooltip(): string | null
    get_action_widget(): Gtk.Widget | null

    // Own virtual methods of GitgExt-1.0.GitgExt.Selectable

    vfunc_get_selectable_mode(): SelectionMode
    vfunc_set_selectable_mode(value: SelectionMode): void
    vfunc_get_selectable_available(): boolean
    vfunc_get_selectable_mode_tooltip(): string | null
    vfunc_get_action_widget(): Gtk.Widget | null

    // Class property signals of GitgExt-1.0.GitgExt.Selectable

    connect(sigName: "notify::selectable-mode", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable-mode", ...args: any[]): void
    connect(sigName: "notify::selectable-available", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-available", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable-available", ...args: any[]): void
    connect(sigName: "notify::selectable-mode-tooltip", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode-tooltip", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable-mode-tooltip", ...args: any[]): void
    connect(sigName: "notify::action-widget", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-widget", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-widget", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Selectable {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    static name: string
    static $gtype: GObject.GType<Selectable>

    // Constructors of GitgExt-1.0.GitgExt.Selectable

    constructor(config?: Selectable.ConstructorProperties) 
    _init(config?: Selectable.ConstructorProperties): void
}

export module UIElement {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        ($obj: UIElement): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.UIElement

        application?: Application | null
    }

}

export interface UIElement extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UIElement

    application: Application
    readonly id: string | null
    readonly display_name: string | null
    readonly displayName: string | null
    readonly description: string | null

    // Owm methods of GitgExt-1.0.GitgExt.UIElement

    negotiate_order(other: UIElement): number
    get_application(): Application | null
    set_application(value: Application | null): void
    get_id(): string | null
    get_display_name(): string | null
    get_description(): string | null
    get_icon(): string | null
    get_widget(): Gtk.Widget | null
    get_shortcut(): number | null
    get_available(): boolean
    get_enabled(): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.UIElement

    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value: Application | null): void
    vfunc_get_id(): string | null
    vfunc_get_display_name(): string | null
    vfunc_get_description(): string | null
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void

    // Own signals of GitgExt-1.0.GitgExt.UIElement

    connect(sigName: "activate", callback: UIElement.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: UIElement.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.UIElement

    connect(sigName: "notify::application", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UIElement {

    // Own properties of GitgExt-1.0.GitgExt.UIElement

    static name: string
    static $gtype: GObject.GType<UIElement>

    // Constructors of GitgExt-1.0.GitgExt.UIElement

    constructor(config?: UIElement.ConstructorProperties) 
    _init(config?: UIElement.ConstructorProperties): void
}

export module CommandLines {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CommandLines {

    // Owm methods of GitgExt-1.0.GitgExt.CommandLines

    get_for(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): any | null
    parse_finished(): void
    apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLines

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandLines extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommandLines

    static name: string
    static $gtype: GObject.GType<CommandLines>

    // Constructors of GitgExt-1.0.GitgExt.CommandLines

    constructor(config?: CommandLines.ConstructorProperties) 
    constructor(command_lines: CommandLine[]) 
    static new(command_lines: CommandLine[]): CommandLines
    _init(config?: CommandLines.ConstructorProperties): void
}

export module MessageBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `registered`
     */
    export interface RegisteredSignalCallback {
        ($obj: MessageBus, id: MessageId): void
    }

    /**
     * Signal callback interface for `unregistered`
     */
    export interface UnregisteredSignalCallback {
        ($obj: MessageBus, id: MessageId): void
    }

    /**
     * Signal callback interface for `dispatch`
     */
    export interface DispatchSignalCallback {
        ($obj: MessageBus, message: Message): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MessageBus {

    // Owm methods of GitgExt-1.0.GitgExt.MessageBus

    lookup(id: MessageId): GObject.GType
    register(message_type: GObject.GType, id: MessageId): void
    unregister(id: MessageId): void
    unregister_all(object_path: string | null): void
    is_registered(id: MessageId): boolean
    connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    send_message(message: Message): Message

    // Own virtual methods of GitgExt-1.0.GitgExt.MessageBus

    vfunc_dispatch(message: Message): void

    // Own signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    connect_after(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    emit(sigName: "registered", id: MessageId, ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    connect_after(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    emit(sigName: "unregistered", id: MessageId, ...args: any[]): void
    connect(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    connect_after(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    emit(sigName: "dispatch", message: Message, ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MessageBus extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageBus

    static name: string
    static $gtype: GObject.GType<MessageBus>

    // Constructors of GitgExt-1.0.GitgExt.MessageBus

    constructor(config?: MessageBus.ConstructorProperties) 
    constructor() 
    static new(): MessageBus
    _init(config?: MessageBus.ConstructorProperties): void
    static get_default(): MessageBus
}

export module MessageId {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.MessageId

        object_path?: string | null
        method?: string | null
        objectPath?: string | null
    }

}

export interface MessageId {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    object_path: string | null
    objectPath: string | null
    method: string | null
    readonly id: string | null

    // Owm methods of GitgExt-1.0.GitgExt.MessageId

    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    get_object_path(): string | null
    set_object_path(value: string | null): void
    get_method(): string | null
    set_method(value: string | null): void
    get_id(): string | null

    // Class property signals of GitgExt-1.0.GitgExt.MessageId

    connect(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MessageId extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    static name: string
    static $gtype: GObject.GType<MessageId>

    // Constructors of GitgExt-1.0.GitgExt.MessageId

    constructor(config?: MessageId.ConstructorProperties) 
    constructor(object_path: string | null, method: string | null) 
    static new(object_path: string | null, method: string | null): MessageId
    _init(config?: MessageId.ConstructorProperties): void
    static valid_object_path(path: string | null): boolean
}

export module Message {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.Message

        id?: MessageId | null
    }

}

export interface Message {

    // Own properties of GitgExt-1.0.GitgExt.Message

    id: MessageId

    // Owm methods of GitgExt-1.0.GitgExt.Message

    has(propname: string | null): boolean
    get_id(): MessageId
    set_id(value: MessageId): void

    // Class property signals of GitgExt-1.0.GitgExt.Message

    connect(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Message extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Message

    static name: string
    static $gtype: GObject.GType<Message>

    // Constructors of GitgExt-1.0.GitgExt.Message

    constructor(config?: Message.ConstructorProperties) 
    _init(config?: Message.ConstructorProperties): void
    static type_has(type: GObject.GType, propname: string | null): boolean
    static type_check(type: GObject.GType, propname: string | null, value_type: GObject.GType): boolean
}

export interface UI {

    // Own fields of GitgExt-1.0.GitgExt.UI

    ref_count: number
}

export class UI {

    // Own properties of GitgExt-1.0.GitgExt.UI

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.UI

    constructor() 
    static new(): UI
}

export module UserQueryResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface UserQueryResponse {

    // Own fields of GitgExt-1.0.GitgExt.UserQueryResponse

    text: string | null
    response_type: Gtk.ResponseType

    // Class property signals of GitgExt-1.0.GitgExt.UserQueryResponse

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UserQueryResponse extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponse

    static name: string
    static $gtype: GObject.GType<UserQueryResponse>

    // Constructors of GitgExt-1.0.GitgExt.UserQueryResponse

    constructor(config?: UserQueryResponse.ConstructorProperties) 
    constructor(text: string | null, response_type: Gtk.ResponseType) 
    static new(text: string | null, response_type: Gtk.ResponseType): UserQueryResponse
    _init(config?: UserQueryResponse.ConstructorProperties): void
}

export module UserQuery {

    // Signal callback interfaces

    /**
     * Signal callback interface for `quit`
     */
    export interface QuitSignalCallback {
        ($obj: UserQuery): void
    }

    /**
     * Signal callback interface for `response`
     */
    export interface ResponseSignalCallback {
        ($obj: UserQuery, response_type: Gtk.ResponseType): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.UserQuery

        title?: string | null
        message?: string | null
        message_type?: Gtk.MessageType | null
        default_response?: Gtk.ResponseType | null
        default_is_destructive?: boolean | null
        message_use_markup?: boolean | null
        messageType?: Gtk.MessageType | null
        defaultResponse?: Gtk.ResponseType | null
        defaultIsDestructive?: boolean | null
        messageUseMarkup?: boolean | null
    }

}

export interface UserQuery {

    // Own properties of GitgExt-1.0.GitgExt.UserQuery

    title: string | null
    message: string | null
    message_type: Gtk.MessageType
    messageType: Gtk.MessageType
    default_response: Gtk.ResponseType
    defaultResponse: Gtk.ResponseType
    default_is_destructive: boolean
    defaultIsDestructive: boolean
    message_use_markup: boolean
    messageUseMarkup: boolean

    // Own fields of GitgExt-1.0.GitgExt.UserQuery

    _responses: UserQueryResponse[]
    _responses_length1: number

    // Owm methods of GitgExt-1.0.GitgExt.UserQuery

    get_responses(): UserQueryResponse[]
    set_responses(value: UserQueryResponse[]): void
    get_title(): string | null
    set_title(value: string | null): void
    get_message(): string | null
    set_message(value: string | null): void
    get_message_type(): Gtk.MessageType
    set_message_type(value: Gtk.MessageType): void
    get_default_response(): Gtk.ResponseType
    set_default_response(value: Gtk.ResponseType): void
    get_default_is_destructive(): boolean
    set_default_is_destructive(value: boolean): void
    get_message_use_markup(): boolean
    set_message_use_markup(value: boolean): void

    // Own signals of GitgExt-1.0.GitgExt.UserQuery

    connect(sigName: "quit", callback: UserQuery.QuitSignalCallback): number
    connect_after(sigName: "quit", callback: UserQuery.QuitSignalCallback): number
    emit(sigName: "quit", ...args: any[]): void
    connect(sigName: "response", callback: UserQuery.ResponseSignalCallback): number
    connect_after(sigName: "response", callback: UserQuery.ResponseSignalCallback): number
    emit(sigName: "response", response_type: Gtk.ResponseType, ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.UserQuery

    connect(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-response", ...args: any[]): void
    connect(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-is-destructive", ...args: any[]): void
    connect(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-use-markup", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UserQuery extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQuery

    static name: string
    static $gtype: GObject.GType<UserQuery>

    // Constructors of GitgExt-1.0.GitgExt.UserQuery

    constructor(config?: UserQuery.ConstructorProperties) 
    constructor() 
    static new(): UserQuery
    _init(config?: UserQuery.ConstructorProperties): void
}

export interface CommandLinesClass {
}

export abstract class CommandLinesClass {

    // Own properties of GitgExt-1.0.GitgExt.CommandLinesClass

    static name: string
}

export interface CommandLinesPrivate {
}

export class CommandLinesPrivate {

    // Own properties of GitgExt-1.0.GitgExt.CommandLinesPrivate

    static name: string
}

export interface MessageBusClass {

    // Own fields of GitgExt-1.0.GitgExt.MessageBusClass

    dispatch: (self: MessageBus, message: Message) => void
}

export abstract class MessageBusClass {

    // Own properties of GitgExt-1.0.GitgExt.MessageBusClass

    static name: string
}

export interface MessageBusPrivate {
}

export class MessageBusPrivate {

    // Own properties of GitgExt-1.0.GitgExt.MessageBusPrivate

    static name: string
}

export interface MessageIdClass {
}

export abstract class MessageIdClass {

    // Own properties of GitgExt-1.0.GitgExt.MessageIdClass

    static name: string
}

export interface MessageIdPrivate {
}

export class MessageIdPrivate {

    // Own properties of GitgExt-1.0.GitgExt.MessageIdPrivate

    static name: string
}

export interface MessageClass {
}

export abstract class MessageClass {

    // Own properties of GitgExt-1.0.GitgExt.MessageClass

    static name: string
}

export interface MessagePrivate {
}

export class MessagePrivate {

    // Own properties of GitgExt-1.0.GitgExt.MessagePrivate

    static name: string
}

export interface UIClass {
}

export abstract class UIClass {

    // Own properties of GitgExt-1.0.GitgExt.UIClass

    static name: string
}

export interface UIPrivate {
}

export class UIPrivate {

    // Own properties of GitgExt-1.0.GitgExt.UIPrivate

    static name: string
}

export interface UserQueryResponseClass {
}

export abstract class UserQueryResponseClass {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponseClass

    static name: string
}

export interface UserQueryResponsePrivate {
}

export class UserQueryResponsePrivate {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponsePrivate

    static name: string
}

export interface UserQueryClass {
}

export abstract class UserQueryClass {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryClass

    static name: string
}

export interface UserQueryPrivate {
}

export class UserQueryPrivate {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryPrivate

    static name: string
}

export interface ActionIface {

    // Own fields of GitgExt-1.0.GitgExt.ActionIface

    populate_menu: (self: Action, menu: Gtk.Menu) => void
    fetch: (self: Action, _callback_: Gio.AsyncReadyCallback | null) => void
    fetch_finish: (self: Action, _res_: Gio.AsyncResult) => boolean
}

export abstract class ActionIface {

    // Own properties of GitgExt-1.0.GitgExt.ActionIface

    static name: string
}

export interface ActivityIface {

    // Own fields of GitgExt-1.0.GitgExt.ActivityIface

    is_default_for: (self: Activity, action: string | null) => boolean
    on_key_pressed: (self: Activity, event: Gdk.EventKey) => boolean
}

export abstract class ActivityIface {

    // Own properties of GitgExt-1.0.GitgExt.ActivityIface

    static name: string
}

export interface ApplicationIface {

    // Own fields of GitgExt-1.0.GitgExt.ApplicationIface

    get_verified_committer: (self: Application) => Ggit.Signature | null
    get_activity_by_id: (self: Application, id: string | null) => Activity | null
    set_activity_by_id: (self: Application, id: string | null) => Activity | null
    user_query: (self: Application, query: UserQuery) => void
    user_query_async: (self: Application, query: UserQuery, _callback_: Gio.AsyncReadyCallback | null) => void
    user_query_finish: (self: Application, _res_: Gio.AsyncResult) => Gtk.ResponseType
    show_infobar: (self: Application, primary_msg: string | null, secondary_msg: string | null, type: Gtk.MessageType) => void
    open_new: (self: Application, repository: Ggit.Repository, hint: string | null) => Application
    open_repository: (self: Application, path: Gio.File) => void
    get_repository: (self: Application) => Gitg.Repository | null
    set_repository: (self: Application, value: Gitg.Repository | null) => void
    get_message_bus: (self: Application) => MessageBus
    get_current_activity: (self: Application) => Activity | null
    get_environment: (self: Application) => Gee.Map
    get_notifications: (self: Application) => Notifications
    get_busy: (self: Application) => boolean
    set_busy: (self: Application, value: boolean) => void
    get_remote_lookup: (self: Application) => RemoteLookup
}

export abstract class ApplicationIface {

    // Own properties of GitgExt-1.0.GitgExt.ApplicationIface

    static name: string
}

export interface CommandLineIface {

    // Own fields of GitgExt-1.0.GitgExt.CommandLineIface

    get_option_group: (self: CommandLine) => GLib.OptionGroup
    parse_finished: (self: CommandLine) => void
    apply: (self: CommandLine, application: Application) => void
}

export abstract class CommandLineIface {

    // Own properties of GitgExt-1.0.GitgExt.CommandLineIface

    static name: string
}

export interface CommitActionIface {

    // Own fields of GitgExt-1.0.GitgExt.CommitActionIface

    get_action_interface: (self: CommitAction) => RefActionInterface
    set_action_interface: (self: CommitAction, value: RefActionInterface) => void
    get_commit: (self: CommitAction) => Gitg.Commit
    set_commit: (self: CommitAction, value: Gitg.Commit) => void
}

export abstract class CommitActionIface {

    // Own properties of GitgExt-1.0.GitgExt.CommitActionIface

    static name: string
}

export interface HistoryPanelIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryPanelIface

    get_history: (self: HistoryPanel) => History | null
    set_history: (self: HistoryPanel, value: History | null) => void
}

export abstract class HistoryPanelIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanelIface

    static name: string
}

export interface HistoryIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryIface

    foreach_selected: (self: History, func: ForeachCommitSelectionFunc) => void
    select: (self: History, commit: Gitg.Commit) => void
}

export abstract class HistoryIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryIface

    static name: string
}

export interface NotificationIface {

    // Own fields of GitgExt-1.0.GitgExt.NotificationIface

    get_widget: (self: Notification) => Gtk.Widget | null
}

export abstract class NotificationIface {

    // Own properties of GitgExt-1.0.GitgExt.NotificationIface

    static name: string
}

export interface NotificationsIface {

    // Own fields of GitgExt-1.0.GitgExt.NotificationsIface

    add: (self: Notifications, notification: Notification) => void
    remove: (self: Notifications, notification: Notification, delay: number) => void
}

export abstract class NotificationsIface {

    // Own properties of GitgExt-1.0.GitgExt.NotificationsIface

    static name: string
}

export interface PreferencesIface {

    // Own fields of GitgExt-1.0.GitgExt.PreferencesIface

    get_id: (self: Preferences) => string | null
    get_display_name: (self: Preferences) => string | null
    get_widget: (self: Preferences) => Gtk.Widget
}

export abstract class PreferencesIface {

    // Own properties of GitgExt-1.0.GitgExt.PreferencesIface

    static name: string
}

export interface RefActionInterfaceIface {

    // Own fields of GitgExt-1.0.GitgExt.RefActionInterfaceIface

    add_ref: (self: RefActionInterface, reference: Gitg.Ref) => void
    remove_ref: (self: RefActionInterface, reference: Gitg.Ref) => void
    replace_ref: (self: RefActionInterface, old_ref: Gitg.Ref, new_ref: Gitg.Ref) => void
    set_busy: (self: RefActionInterface, reference: Gitg.Ref, busy: boolean) => void
    edit_ref_name: (self: RefActionInterface, reference: Gitg.Ref, callback: RefNameEditingDone) => void
    refresh: (self: RefActionInterface) => void
    get_application: (self: RefActionInterface) => Application
    set_application: (self: RefActionInterface, value: Application) => void
    get_references: (self: RefActionInterface) => Gee.List
}

export abstract class RefActionInterfaceIface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterfaceIface

    static name: string
}

export interface RefActionIface {

    // Own fields of GitgExt-1.0.GitgExt.RefActionIface

    get_action_interface: (self: RefAction) => RefActionInterface
    set_action_interface: (self: RefAction, value: RefActionInterface) => void
    get_reference: (self: RefAction) => Gitg.Ref
    set_reference: (self: RefAction, value: Gitg.Ref) => void
}

export abstract class RefActionIface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionIface

    static name: string
}

export interface RemoteLookupIface {

    // Own fields of GitgExt-1.0.GitgExt.RemoteLookupIface

    lookup: (self: RemoteLookup, name: string | null) => Gitg.Remote | null
}

export abstract class RemoteLookupIface {

    // Own properties of GitgExt-1.0.GitgExt.RemoteLookupIface

    static name: string
}

export interface SearchableIface {

    // Own fields of GitgExt-1.0.GitgExt.SearchableIface

    get_search_text: (self: Searchable) => string | null
    set_search_text: (self: Searchable, value: string | null) => void
    get_search_visible: (self: Searchable) => boolean
    set_search_visible: (self: Searchable, value: boolean) => void
    get_search_available: (self: Searchable) => boolean
    set_search_entry: (self: Searchable, value: Gtk.Entry | null) => void
}

export abstract class SearchableIface {

    // Own properties of GitgExt-1.0.GitgExt.SearchableIface

    static name: string
}

export interface SelectableIface {

    // Own fields of GitgExt-1.0.GitgExt.SelectableIface

    get_selectable_mode: (self: Selectable) => SelectionMode
    set_selectable_mode: (self: Selectable, value: SelectionMode) => void
    get_selectable_available: (self: Selectable) => boolean
    get_selectable_mode_tooltip: (self: Selectable) => string | null
    get_action_widget: (self: Selectable) => Gtk.Widget | null
}

export abstract class SelectableIface {

    // Own properties of GitgExt-1.0.GitgExt.SelectableIface

    static name: string
}

export interface UIElementIface {

    // Own fields of GitgExt-1.0.GitgExt.UIElementIface

    negotiate_order: (self: UIElement, other: UIElement) => number
    get_application: (self: UIElement) => Application | null
    set_application: (self: UIElement, value: Application | null) => void
    get_id: (self: UIElement) => string | null
    get_display_name: (self: UIElement) => string | null
    get_description: (self: UIElement) => string | null
    get_icon: (self: UIElement) => string | null
    get_widget: (self: UIElement) => Gtk.Widget | null
    get_shortcut: (self: UIElement) => number | null
    get_available: (self: UIElement) => boolean
    get_enabled: (self: UIElement) => boolean
}

export abstract class UIElementIface {

    // Own properties of GitgExt-1.0.GitgExt.UIElementIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END