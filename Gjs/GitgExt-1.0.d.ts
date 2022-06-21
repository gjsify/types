// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GitgExt-1.0
 */

import type * as Gjs from './Gjs';
import type Gitg from './Gitg-1.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type Gdk from './Gdk-3.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Ggit from './Ggit-1.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Atk from './Atk-1.0';

export namespace GitgExt {

enum SelectionMode {
    NORMAL,
    SELECTION,
}
enum ExternalChangeHint {
    NONE,
    REFS,
    INDEX,
}
interface ForeachCommitSelectionFunc {
    (object: Ggit.Commit): boolean
}
interface MessageCallback {
    (message: Message): void
}
interface RefNameEditingDone {
    (new_name: string, cancelled: boolean): void
}
interface Action_ConstructProps extends UIElement_ConstructProps, GObject.Object_ConstructProps {
}

interface Action extends UIElement {

    // Owm methods of GitgExt-1.0.GitgExt.Action

    populate_menu(menu: Gtk.Menu): void
    fetch(_callback_: Gio.AsyncReadyCallback | null): void
    fetch_finish(_res_: Gio.AsyncResult): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.Action

    vfunc_populate_menu(menu: Gtk.Menu): void
    vfunc_fetch(_callback_: Gio.AsyncReadyCallback | null): void
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

class Action extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Action

    static name: string
    static $gtype: GObject.GType<Action>

    // Constructors of GitgExt-1.0.GitgExt.Action

    constructor(config?: Action_ConstructProps) 
    _init(config?: Action_ConstructProps): void
}

interface Activity_ConstructProps extends GObject.Object_ConstructProps, UIElement_ConstructProps {
}

interface Activity extends GObject.Object, UIElement {

    // Owm methods of GitgExt-1.0.GitgExt.Activity

    is_default_for(action: string): boolean
    on_key_pressed(event: Gdk.EventKey): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.Activity

    vfunc_is_default_for(action: string): boolean
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

class Activity {

    // Own properties of GitgExt-1.0.GitgExt.Activity

    static name: string
    static $gtype: GObject.GType<Activity>

    // Constructors of GitgExt-1.0.GitgExt.Activity

    constructor(config?: Activity_ConstructProps) 
    _init(config?: Activity_ConstructProps): void
}

interface Application_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.Application

    repository?: Gitg.Repository | null
    busy?: boolean | null
}

/**
 * Signal callback interface for `repository-changed-externally`
 */
interface Application_RepositoryChangedExternallySignalCallback {
    ($obj: Application, hint: ExternalChangeHint): void
}

/**
 * Signal callback interface for `repository-commits-changed`
 */
interface Application_RepositoryCommitsChangedSignalCallback {
    ($obj: Application): void
}

interface Application extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Application

    repository: Gitg.Repository
    readonly message_bus: MessageBus
    readonly current_activity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remote_lookup: RemoteLookup

    // Owm methods of GitgExt-1.0.GitgExt.Application

    get_verified_committer(): Ggit.Signature | null
    get_activity_by_id(id: string): Activity | null
    set_activity_by_id(id: string): Activity | null
    user_query(query: UserQuery): void
    user_query_async(query: UserQuery, _callback_: Gio.AsyncReadyCallback | null): void
    user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType
    show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void
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
    vfunc_get_activity_by_id(id: string): Activity | null
    vfunc_set_activity_by_id(id: string): Activity | null
    vfunc_user_query(query: UserQuery): void
    vfunc_user_query_async(query: UserQuery, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType
    vfunc_show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void
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

    connect(sigName: "repository-changed-externally", callback: Application_RepositoryChangedExternallySignalCallback): number
    connect_after(sigName: "repository-changed-externally", callback: Application_RepositoryChangedExternallySignalCallback): number
    emit(sigName: "repository-changed-externally", hint: ExternalChangeHint, ...args: any[]): void
    connect(sigName: "repository-commits-changed", callback: Application_RepositoryCommitsChangedSignalCallback): number
    connect_after(sigName: "repository-commits-changed", callback: Application_RepositoryCommitsChangedSignalCallback): number
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

class Application {

    // Own properties of GitgExt-1.0.GitgExt.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of GitgExt-1.0.GitgExt.Application

    constructor(config?: Application_ConstructProps) 
    _init(config?: Application_ConstructProps): void
}

interface CommandLine_ConstructProps extends GObject.Object_ConstructProps {
}

interface CommandLine extends GObject.Object {

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

class CommandLine {

    // Own properties of GitgExt-1.0.GitgExt.CommandLine

    static name: string
    static $gtype: GObject.GType<CommandLine>

    // Constructors of GitgExt-1.0.GitgExt.CommandLine

    constructor(config?: CommandLine_ConstructProps) 
    _init(config?: CommandLine_ConstructProps): void
}

interface CommitAction_ConstructProps extends Action_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.CommitAction

    action_interface?: RefActionInterface | null
    commit?: Gitg.Commit | null
}

/**
 * Signal callback interface for `finished`
 */
interface CommitAction_FinishedSignalCallback {
    ($obj: CommitAction): void
}

interface CommitAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    action_interface: RefActionInterface
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

    connect(sigName: "finished", callback: CommitAction_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: CommitAction_FinishedSignalCallback): number
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

class CommitAction extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    static name: string
    static $gtype: GObject.GType<CommitAction>

    // Constructors of GitgExt-1.0.GitgExt.CommitAction

    constructor(config?: CommitAction_ConstructProps) 
    _init(config?: CommitAction_ConstructProps): void
}

interface HistoryPanel_ConstructProps extends GObject.Object_ConstructProps, UIElement_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.HistoryPanel

    history?: History | null
}

interface HistoryPanel extends GObject.Object, UIElement {

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

class HistoryPanel {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanel

    static name: string
    static $gtype: GObject.GType<HistoryPanel>

    // Constructors of GitgExt-1.0.GitgExt.HistoryPanel

    constructor(config?: HistoryPanel_ConstructProps) 
    _init(config?: HistoryPanel_ConstructProps): void
}

interface History_ConstructProps extends GObject.Object_ConstructProps, Activity_ConstructProps {
}

/**
 * Signal callback interface for `selection-changed`
 */
interface History_SelectionChangedSignalCallback {
    ($obj: History): void
}

interface History extends GObject.Object, Activity {

    // Owm methods of GitgExt-1.0.GitgExt.History

    foreach_selected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void

    // Own virtual methods of GitgExt-1.0.GitgExt.History

    vfunc_foreach_selected(func: ForeachCommitSelectionFunc): void
    vfunc_select(commit: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "selection-changed", callback: History_SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: History_SelectionChangedSignalCallback): number
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

class History {

    // Own properties of GitgExt-1.0.GitgExt.History

    static name: string
    static $gtype: GObject.GType<History>

    // Constructors of GitgExt-1.0.GitgExt.History

    constructor(config?: History_ConstructProps) 
    _init(config?: History_ConstructProps): void
}

interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `close`
 */
interface Notification_CloseSignalCallback {
    ($obj: Notification, delay: number): void
}

interface Notification extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    readonly widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Notification

    get_widget(): Gtk.Widget | null

    // Own virtual methods of GitgExt-1.0.GitgExt.Notification

    vfunc_get_widget(): Gtk.Widget | null

    // Own signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "close", callback: Notification_CloseSignalCallback): number
    connect_after(sigName: "close", callback: Notification_CloseSignalCallback): number
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

class Notification {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    static name: string
    static $gtype: GObject.GType<Notification>

    // Constructors of GitgExt-1.0.GitgExt.Notification

    constructor(config?: Notification_ConstructProps) 
    _init(config?: Notification_ConstructProps): void
}

interface Notifications_ConstructProps extends GObject.Object_ConstructProps {
}

interface Notifications extends GObject.Object {

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

class Notifications {

    // Own properties of GitgExt-1.0.GitgExt.Notifications

    static name: string
    static $gtype: GObject.GType<Notifications>

    // Constructors of GitgExt-1.0.GitgExt.Notifications

    constructor(config?: Notifications_ConstructProps) 
    _init(config?: Notifications_ConstructProps): void
}

interface Preferences_ConstructProps extends GObject.Object_ConstructProps {
}

interface Preferences extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Preferences

    readonly id: string
    readonly display_name: string
    readonly widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Preferences

    get_id(): string
    get_display_name(): string
    get_widget(): Gtk.Widget

    // Own virtual methods of GitgExt-1.0.GitgExt.Preferences

    vfunc_get_id(): string
    vfunc_get_display_name(): string
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

class Preferences {

    // Own properties of GitgExt-1.0.GitgExt.Preferences

    static name: string
    static $gtype: GObject.GType<Preferences>

    // Constructors of GitgExt-1.0.GitgExt.Preferences

    constructor(config?: Preferences_ConstructProps) 
    _init(config?: Preferences_ConstructProps): void
}

interface RefActionInterface_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.RefActionInterface

    application?: Application | null
}

interface RefActionInterface extends GObject.Object {

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

class RefActionInterface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterface

    static name: string
    static $gtype: GObject.GType<RefActionInterface>

    // Constructors of GitgExt-1.0.GitgExt.RefActionInterface

    constructor(config?: RefActionInterface_ConstructProps) 
    _init(config?: RefActionInterface_ConstructProps): void
}

interface RefAction_ConstructProps extends Action_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.RefAction

    action_interface?: RefActionInterface | null
    reference?: Gitg.Ref | null
}

/**
 * Signal callback interface for `finished`
 */
interface RefAction_FinishedSignalCallback {
    ($obj: RefAction): void
}

interface RefAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    action_interface: RefActionInterface
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

    connect(sigName: "finished", callback: RefAction_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: RefAction_FinishedSignalCallback): number
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

class RefAction extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    static name: string
    static $gtype: GObject.GType<RefAction>

    // Constructors of GitgExt-1.0.GitgExt.RefAction

    constructor(config?: RefAction_ConstructProps) 
    _init(config?: RefAction_ConstructProps): void
}

interface RemoteLookup_ConstructProps extends GObject.Object_ConstructProps {
}

interface RemoteLookup extends GObject.Object {

    // Owm methods of GitgExt-1.0.GitgExt.RemoteLookup

    lookup(name: string): Gitg.Remote | null

    // Own virtual methods of GitgExt-1.0.GitgExt.RemoteLookup

    vfunc_lookup(name: string): Gitg.Remote | null

    // Class property signals of GitgExt-1.0.GitgExt.RemoteLookup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteLookup {

    // Own properties of GitgExt-1.0.GitgExt.RemoteLookup

    static name: string
    static $gtype: GObject.GType<RemoteLookup>

    // Constructors of GitgExt-1.0.GitgExt.RemoteLookup

    constructor(config?: RemoteLookup_ConstructProps) 
    _init(config?: RemoteLookup_ConstructProps): void
}

interface Searchable_ConstructProps extends GObject.Object_ConstructProps, Activity_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.Searchable

    search_text?: string | null
    search_visible?: boolean | null
    search_entry?: Gtk.Entry | null
}

interface Searchable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    search_text: string
    search_visible: boolean
    readonly search_available: boolean
    search_entry: Gtk.Entry

    // Owm methods of GitgExt-1.0.GitgExt.Searchable

    get_search_text(): string
    set_search_text(value: string): void
    get_search_visible(): boolean
    set_search_visible(value: boolean): void
    get_search_available(): boolean
    set_search_entry(value: Gtk.Entry | null): void

    // Own virtual methods of GitgExt-1.0.GitgExt.Searchable

    vfunc_get_search_text(): string
    vfunc_set_search_text(value: string): void
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

class Searchable {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    static name: string
    static $gtype: GObject.GType<Searchable>

    // Constructors of GitgExt-1.0.GitgExt.Searchable

    constructor(config?: Searchable_ConstructProps) 
    _init(config?: Searchable_ConstructProps): void
}

interface Selectable_ConstructProps extends GObject.Object_ConstructProps, Activity_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.Selectable

    selectable_mode?: SelectionMode | null
}

interface Selectable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    selectable_mode: SelectionMode
    readonly selectable_available: boolean
    readonly selectable_mode_tooltip: string
    readonly action_widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Selectable

    get_selectable_mode(): SelectionMode
    set_selectable_mode(value: SelectionMode): void
    get_selectable_available(): boolean
    get_selectable_mode_tooltip(): string
    get_action_widget(): Gtk.Widget | null

    // Own virtual methods of GitgExt-1.0.GitgExt.Selectable

    vfunc_get_selectable_mode(): SelectionMode
    vfunc_set_selectable_mode(value: SelectionMode): void
    vfunc_get_selectable_available(): boolean
    vfunc_get_selectable_mode_tooltip(): string
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

class Selectable {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    static name: string
    static $gtype: GObject.GType<Selectable>

    // Constructors of GitgExt-1.0.GitgExt.Selectable

    constructor(config?: Selectable_ConstructProps) 
    _init(config?: Selectable_ConstructProps): void
}

interface UIElement_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.UIElement

    application?: Application | null
}

/**
 * Signal callback interface for `activate`
 */
interface UIElement_ActivateSignalCallback {
    ($obj: UIElement): void
}

interface UIElement extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UIElement

    application: Application
    readonly id: string
    readonly display_name: string
    readonly description: string

    // Owm methods of GitgExt-1.0.GitgExt.UIElement

    negotiate_order(other: UIElement): number
    get_application(): Application | null
    set_application(value: Application | null): void
    get_id(): string
    get_display_name(): string
    get_description(): string
    get_icon(): string | null
    get_widget(): Gtk.Widget | null
    get_shortcut(): number | null
    get_available(): boolean
    get_enabled(): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.UIElement

    vfunc_negotiate_order(other: UIElement): number
    vfunc_get_application(): Application | null
    vfunc_set_application(value: Application | null): void
    vfunc_get_id(): string
    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): string | null
    vfunc_get_widget(): Gtk.Widget | null
    vfunc_get_shortcut(): number | null
    vfunc_get_available(): boolean
    vfunc_get_enabled(): boolean
    vfunc_activate(): void

    // Own signals of GitgExt-1.0.GitgExt.UIElement

    connect(sigName: "activate", callback: UIElement_ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: UIElement_ActivateSignalCallback): number
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

class UIElement {

    // Own properties of GitgExt-1.0.GitgExt.UIElement

    static name: string
    static $gtype: GObject.GType<UIElement>

    // Constructors of GitgExt-1.0.GitgExt.UIElement

    constructor(config?: UIElement_ConstructProps) 
    _init(config?: UIElement_ConstructProps): void
}

interface CommandLines_ConstructProps extends GObject.Object_ConstructProps {
}

interface CommandLines {

    // Owm methods of GitgExt-1.0.GitgExt.CommandLines

    get_for(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): object | null
    parse_finished(): void
    apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLines

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandLines extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommandLines

    static name: string
    static $gtype: GObject.GType<CommandLines>

    // Constructors of GitgExt-1.0.GitgExt.CommandLines

    constructor(config?: CommandLines_ConstructProps) 
    constructor(command_lines: CommandLine[]) 
    static new(command_lines: CommandLine[]): CommandLines
    _init(config?: CommandLines_ConstructProps): void
}

interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `registered`
 */
interface MessageBus_RegisteredSignalCallback {
    ($obj: MessageBus, id: MessageId): void
}

/**
 * Signal callback interface for `unregistered`
 */
interface MessageBus_UnregisteredSignalCallback {
    ($obj: MessageBus, id: MessageId): void
}

/**
 * Signal callback interface for `dispatch`
 */
interface MessageBus_DispatchSignalCallback {
    ($obj: MessageBus, message: Message): void
}

interface MessageBus {

    // Owm methods of GitgExt-1.0.GitgExt.MessageBus

    lookup(id: MessageId): GObject.GType
    register(message_type: GObject.GType, id: MessageId): void
    unregister(id: MessageId): void
    unregister_all(object_path: string): void
    is_registered(id: MessageId): boolean
    // TODO fix conflict: connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    send_message(message: Message): Message

    // Own virtual methods of GitgExt-1.0.GitgExt.MessageBus

    vfunc_dispatch(message: Message): void

    // Own signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: "registered", callback: MessageBus_RegisteredSignalCallback): number
    connect_after(sigName: "registered", callback: MessageBus_RegisteredSignalCallback): number
    emit(sigName: "registered", id: MessageId, ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback): number
    connect_after(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback): number
    emit(sigName: "unregistered", id: MessageId, ...args: any[]): void
    connect(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback): number
    connect_after(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback): number
    emit(sigName: "dispatch", message: Message, ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageBus extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageBus

    static name: string
    static $gtype: GObject.GType<MessageBus>

    // Constructors of GitgExt-1.0.GitgExt.MessageBus

    constructor(config?: MessageBus_ConstructProps) 
    constructor() 
    static new(): MessageBus
    _init(config?: MessageBus_ConstructProps): void
    static get_default(): MessageBus
}

interface MessageId_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.MessageId

    object_path?: string | null
    method?: string | null
}

interface MessageId {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    object_path: string
    method: string
    readonly id: string

    // Owm methods of GitgExt-1.0.GitgExt.MessageId

    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    get_object_path(): string
    set_object_path(value: string): void
    get_method(): string
    set_method(value: string): void
    get_id(): string

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

class MessageId extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    static name: string
    static $gtype: GObject.GType<MessageId>

    // Constructors of GitgExt-1.0.GitgExt.MessageId

    constructor(config?: MessageId_ConstructProps) 
    constructor(object_path: string, method: string) 
    static new(object_path: string, method: string): MessageId
    _init(config?: MessageId_ConstructProps): void
    static valid_object_path(path: string): boolean
}

interface Message_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.Message

    id?: MessageId | null
}

interface Message {

    // Own properties of GitgExt-1.0.GitgExt.Message

    id: MessageId

    // Owm methods of GitgExt-1.0.GitgExt.Message

    has(propname: string): boolean
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

class Message extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Message

    static name: string
    static $gtype: GObject.GType<Message>

    // Constructors of GitgExt-1.0.GitgExt.Message

    constructor(config?: Message_ConstructProps) 
    _init(config?: Message_ConstructProps): void
    static type_has(type: GObject.GType, propname: string): boolean
    static type_check(type: GObject.GType, propname: string, value_type: GObject.GType): boolean
}

interface UI {

    // Own fields of GitgExt-1.0.GitgExt.UI

    ref_count: number
}

class UI {

    // Own properties of GitgExt-1.0.GitgExt.UI

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.UI

    constructor() 
    static new(): UI
}

interface UserQueryResponse_ConstructProps extends GObject.Object_ConstructProps {
}

interface UserQueryResponse {

    // Own fields of GitgExt-1.0.GitgExt.UserQueryResponse

    text: string
    response_type: Gtk.ResponseType

    // Class property signals of GitgExt-1.0.GitgExt.UserQueryResponse

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserQueryResponse extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponse

    static name: string
    static $gtype: GObject.GType<UserQueryResponse>

    // Constructors of GitgExt-1.0.GitgExt.UserQueryResponse

    constructor(config?: UserQueryResponse_ConstructProps) 
    constructor(text: string, response_type: Gtk.ResponseType) 
    static new(text: string, response_type: Gtk.ResponseType): UserQueryResponse
    _init(config?: UserQueryResponse_ConstructProps): void
}

interface UserQuery_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.UserQuery

    title?: string | null
    message?: string | null
    message_type?: Gtk.MessageType | null
    default_response?: Gtk.ResponseType | null
    default_is_destructive?: boolean | null
    message_use_markup?: boolean | null
}

/**
 * Signal callback interface for `quit`
 */
interface UserQuery_QuitSignalCallback {
    ($obj: UserQuery): void
}

/**
 * Signal callback interface for `response`
 */
interface UserQuery_ResponseSignalCallback {
    ($obj: UserQuery, response_type: Gtk.ResponseType): boolean
}

interface UserQuery {

    // Own properties of GitgExt-1.0.GitgExt.UserQuery

    title: string
    message: string
    message_type: Gtk.MessageType
    default_response: Gtk.ResponseType
    default_is_destructive: boolean
    message_use_markup: boolean

    // Own fields of GitgExt-1.0.GitgExt.UserQuery

    _responses: UserQueryResponse[]
    _responses_length1: number

    // Owm methods of GitgExt-1.0.GitgExt.UserQuery

    get_responses(): UserQueryResponse[]
    set_responses(value: UserQueryResponse[]): void
    get_title(): string
    set_title(value: string): void
    get_message(): string
    set_message(value: string): void
    get_message_type(): Gtk.MessageType
    set_message_type(value: Gtk.MessageType): void
    get_default_response(): Gtk.ResponseType
    set_default_response(value: Gtk.ResponseType): void
    get_default_is_destructive(): boolean
    set_default_is_destructive(value: boolean): void
    get_message_use_markup(): boolean
    set_message_use_markup(value: boolean): void

    // Own signals of GitgExt-1.0.GitgExt.UserQuery

    connect(sigName: "quit", callback: UserQuery_QuitSignalCallback): number
    connect_after(sigName: "quit", callback: UserQuery_QuitSignalCallback): number
    emit(sigName: "quit", ...args: any[]): void
    connect(sigName: "response", callback: UserQuery_ResponseSignalCallback): number
    connect_after(sigName: "response", callback: UserQuery_ResponseSignalCallback): number
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

class UserQuery extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQuery

    static name: string
    static $gtype: GObject.GType<UserQuery>

    // Constructors of GitgExt-1.0.GitgExt.UserQuery

    constructor(config?: UserQuery_ConstructProps) 
    constructor() 
    static new(): UserQuery
    _init(config?: UserQuery_ConstructProps): void
}

interface CommandLinesClass {
}

abstract class CommandLinesClass {

    // Own properties of GitgExt-1.0.GitgExt.CommandLinesClass

    static name: string
}

interface CommandLinesPrivate {
}

class CommandLinesPrivate {

    // Own properties of GitgExt-1.0.GitgExt.CommandLinesPrivate

    static name: string
}

interface MessageBusClass {

    // Own fields of GitgExt-1.0.GitgExt.MessageBusClass

    dispatch: (self: MessageBus, message: Message) => void
}

abstract class MessageBusClass {

    // Own properties of GitgExt-1.0.GitgExt.MessageBusClass

    static name: string
}

interface MessageBusPrivate {
}

class MessageBusPrivate {

    // Own properties of GitgExt-1.0.GitgExt.MessageBusPrivate

    static name: string
}

interface MessageIdClass {
}

abstract class MessageIdClass {

    // Own properties of GitgExt-1.0.GitgExt.MessageIdClass

    static name: string
}

interface MessageIdPrivate {
}

class MessageIdPrivate {

    // Own properties of GitgExt-1.0.GitgExt.MessageIdPrivate

    static name: string
}

interface MessageClass {
}

abstract class MessageClass {

    // Own properties of GitgExt-1.0.GitgExt.MessageClass

    static name: string
}

interface MessagePrivate {
}

class MessagePrivate {

    // Own properties of GitgExt-1.0.GitgExt.MessagePrivate

    static name: string
}

interface UIClass {
}

abstract class UIClass {

    // Own properties of GitgExt-1.0.GitgExt.UIClass

    static name: string
}

interface UIPrivate {
}

class UIPrivate {

    // Own properties of GitgExt-1.0.GitgExt.UIPrivate

    static name: string
}

interface UserQueryResponseClass {
}

abstract class UserQueryResponseClass {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponseClass

    static name: string
}

interface UserQueryResponsePrivate {
}

class UserQueryResponsePrivate {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponsePrivate

    static name: string
}

interface UserQueryClass {
}

abstract class UserQueryClass {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryClass

    static name: string
}

interface UserQueryPrivate {
}

class UserQueryPrivate {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryPrivate

    static name: string
}

interface ActionIface {

    // Own fields of GitgExt-1.0.GitgExt.ActionIface

    populate_menu: (self: Action, menu: Gtk.Menu) => void
    fetch: (self: Action, _callback_: Gio.AsyncReadyCallback | null) => void
    fetch_finish: (self: Action, _res_: Gio.AsyncResult) => boolean
}

abstract class ActionIface {

    // Own properties of GitgExt-1.0.GitgExt.ActionIface

    static name: string
}

interface ActivityIface {

    // Own fields of GitgExt-1.0.GitgExt.ActivityIface

    is_default_for: (self: Activity, action: string) => boolean
    on_key_pressed: (self: Activity, event: Gdk.EventKey) => boolean
}

abstract class ActivityIface {

    // Own properties of GitgExt-1.0.GitgExt.ActivityIface

    static name: string
}

interface ApplicationIface {

    // Own fields of GitgExt-1.0.GitgExt.ApplicationIface

    get_verified_committer: (self: Application) => Ggit.Signature | null
    get_activity_by_id: (self: Application, id: string) => Activity | null
    set_activity_by_id: (self: Application, id: string) => Activity | null
    user_query: (self: Application, query: UserQuery) => void
    user_query_async: (self: Application, query: UserQuery, _callback_: Gio.AsyncReadyCallback | null) => void
    user_query_finish: (self: Application, _res_: Gio.AsyncResult) => Gtk.ResponseType
    show_infobar: (self: Application, primary_msg: string, secondary_msg: string, type: Gtk.MessageType) => void
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

abstract class ApplicationIface {

    // Own properties of GitgExt-1.0.GitgExt.ApplicationIface

    static name: string
}

interface CommandLineIface {

    // Own fields of GitgExt-1.0.GitgExt.CommandLineIface

    get_option_group: (self: CommandLine) => GLib.OptionGroup
    parse_finished: (self: CommandLine) => void
    apply: (self: CommandLine, application: Application) => void
}

abstract class CommandLineIface {

    // Own properties of GitgExt-1.0.GitgExt.CommandLineIface

    static name: string
}

interface CommitActionIface {

    // Own fields of GitgExt-1.0.GitgExt.CommitActionIface

    get_action_interface: (self: CommitAction) => RefActionInterface
    set_action_interface: (self: CommitAction, value: RefActionInterface) => void
    get_commit: (self: CommitAction) => Gitg.Commit
    set_commit: (self: CommitAction, value: Gitg.Commit) => void
}

abstract class CommitActionIface {

    // Own properties of GitgExt-1.0.GitgExt.CommitActionIface

    static name: string
}

interface HistoryPanelIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryPanelIface

    get_history: (self: HistoryPanel) => History | null
    set_history: (self: HistoryPanel, value: History | null) => void
}

abstract class HistoryPanelIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanelIface

    static name: string
}

interface HistoryIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryIface

    foreach_selected: (self: History, func: ForeachCommitSelectionFunc) => void
    select: (self: History, commit: Gitg.Commit) => void
}

abstract class HistoryIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryIface

    static name: string
}

interface NotificationIface {

    // Own fields of GitgExt-1.0.GitgExt.NotificationIface

    get_widget: (self: Notification) => Gtk.Widget | null
}

abstract class NotificationIface {

    // Own properties of GitgExt-1.0.GitgExt.NotificationIface

    static name: string
}

interface NotificationsIface {

    // Own fields of GitgExt-1.0.GitgExt.NotificationsIface

    add: (self: Notifications, notification: Notification) => void
    remove: (self: Notifications, notification: Notification, delay: number) => void
}

abstract class NotificationsIface {

    // Own properties of GitgExt-1.0.GitgExt.NotificationsIface

    static name: string
}

interface PreferencesIface {

    // Own fields of GitgExt-1.0.GitgExt.PreferencesIface

    get_id: (self: Preferences) => string
    get_display_name: (self: Preferences) => string
    get_widget: (self: Preferences) => Gtk.Widget
}

abstract class PreferencesIface {

    // Own properties of GitgExt-1.0.GitgExt.PreferencesIface

    static name: string
}

interface RefActionInterfaceIface {

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

abstract class RefActionInterfaceIface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterfaceIface

    static name: string
}

interface RefActionIface {

    // Own fields of GitgExt-1.0.GitgExt.RefActionIface

    get_action_interface: (self: RefAction) => RefActionInterface
    set_action_interface: (self: RefAction, value: RefActionInterface) => void
    get_reference: (self: RefAction) => Gitg.Ref
    set_reference: (self: RefAction, value: Gitg.Ref) => void
}

abstract class RefActionIface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionIface

    static name: string
}

interface RemoteLookupIface {

    // Own fields of GitgExt-1.0.GitgExt.RemoteLookupIface

    lookup: (self: RemoteLookup, name: string) => Gitg.Remote | null
}

abstract class RemoteLookupIface {

    // Own properties of GitgExt-1.0.GitgExt.RemoteLookupIface

    static name: string
}

interface SearchableIface {

    // Own fields of GitgExt-1.0.GitgExt.SearchableIface

    get_search_text: (self: Searchable) => string
    set_search_text: (self: Searchable, value: string) => void
    get_search_visible: (self: Searchable) => boolean
    set_search_visible: (self: Searchable, value: boolean) => void
    get_search_available: (self: Searchable) => boolean
    set_search_entry: (self: Searchable, value: Gtk.Entry | null) => void
}

abstract class SearchableIface {

    // Own properties of GitgExt-1.0.GitgExt.SearchableIface

    static name: string
}

interface SelectableIface {

    // Own fields of GitgExt-1.0.GitgExt.SelectableIface

    get_selectable_mode: (self: Selectable) => SelectionMode
    set_selectable_mode: (self: Selectable, value: SelectionMode) => void
    get_selectable_available: (self: Selectable) => boolean
    get_selectable_mode_tooltip: (self: Selectable) => string
    get_action_widget: (self: Selectable) => Gtk.Widget | null
}

abstract class SelectableIface {

    // Own properties of GitgExt-1.0.GitgExt.SelectableIface

    static name: string
}

interface UIElementIface {

    // Own fields of GitgExt-1.0.GitgExt.UIElementIface

    negotiate_order: (self: UIElement, other: UIElement) => number
    get_application: (self: UIElement) => Application | null
    set_application: (self: UIElement, value: Application | null) => void
    get_id: (self: UIElement) => string
    get_display_name: (self: UIElement) => string
    get_description: (self: UIElement) => string
    get_icon: (self: UIElement) => string | null
    get_widget: (self: UIElement) => Gtk.Widget | null
    get_shortcut: (self: UIElement) => number | null
    get_available: (self: UIElement) => boolean
    get_enabled: (self: UIElement) => boolean
}

abstract class UIElementIface {

    // Own properties of GitgExt-1.0.GitgExt.UIElementIface

    static name: string
}

}
export default GitgExt;