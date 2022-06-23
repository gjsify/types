// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GitgExt-1.0
 */

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
    (newName: string, cancelled: boolean): void
}
interface Action_ConstructProps extends UIElement_ConstructProps, GObject.Object_ConstructProps {
}

interface Action extends UIElement {

    // Owm methods of GitgExt-1.0.GitgExt.Action

    populateMenu(menu: Gtk.Menu): void
    fetch(callback: Gio.AsyncReadyCallback | null): void
    fetchFinish(res: Gio.AsyncResult): boolean

    // Class property signals of GitgExt-1.0.GitgExt.Action

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    isDefaultFor(action: string): boolean
    onKeyPressed(event: Gdk.EventKey): boolean

    // Class property signals of GitgExt-1.0.GitgExt.Activity

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (hint: ExternalChangeHint): void
}

/**
 * Signal callback interface for `repository-commits-changed`
 */
interface Application_RepositoryCommitsChangedSignalCallback {
    (): void
}

interface Application extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Application

    repository: Gitg.Repository
    readonly messageBus: MessageBus
    readonly currentActivity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remoteLookup: RemoteLookup

    // Owm methods of GitgExt-1.0.GitgExt.Application

    getVerifiedCommitter(): Ggit.Signature | null
    getActivityById(id: string): Activity | null
    setActivityById(id: string): Activity | null
    userQuery(query: UserQuery): void
    userQueryAsync(query: UserQuery, callback: Gio.AsyncReadyCallback | null): void
    userQueryFinish(res: Gio.AsyncResult): Gtk.ResponseType
    showInfobar(primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType): void
    openNew(repository: Ggit.Repository, hint: string | null): Application
    openRepository(path: Gio.File): void
    getRepository(): Gitg.Repository | null
    setRepository(value: Gitg.Repository | null): void
    getMessageBus(): MessageBus
    getCurrentActivity(): Activity | null
    getEnvironment(): Gee.Map
    getNotifications(): Notifications
    getBusy(): boolean
    setBusy(value: boolean): void
    getRemoteLookup(): RemoteLookup

    // Own signals of GitgExt-1.0.GitgExt.Application

    connect(sigName: "repository-changed-externally", callback: Application_RepositoryChangedExternallySignalCallback): number
    on(sigName: "repository-changed-externally", callback: Application_RepositoryChangedExternallySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-changed-externally", callback: Application_RepositoryChangedExternallySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-changed-externally", callback: Application_RepositoryChangedExternallySignalCallback): NodeJS.EventEmitter
    emit(sigName: "repository-changed-externally", ...args: any[]): void
    connect(sigName: "repository-commits-changed", callback: Application_RepositoryCommitsChangedSignalCallback): number
    on(sigName: "repository-commits-changed", callback: Application_RepositoryCommitsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-commits-changed", callback: Application_RepositoryCommitsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-commits-changed", callback: Application_RepositoryCommitsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "repository-commits-changed", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.Application

    connect(sigName: "notify::repository", callback: (...args: any[]) => void): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::message-bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-bus", ...args: any[]): void
    connect(sigName: "notify::current-activity", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-activity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-activity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-activity", ...args: any[]): void
    connect(sigName: "notify::environment", callback: (...args: any[]) => void): number
    on(sigName: "notify::environment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::environment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::environment", ...args: any[]): void
    connect(sigName: "notify::notifications", callback: (...args: any[]) => void): number
    on(sigName: "notify::notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::notifications", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::notifications", ...args: any[]): void
    connect(sigName: "notify::busy", callback: (...args: any[]) => void): number
    on(sigName: "notify::busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::busy", ...args: any[]): void
    connect(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-lookup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-lookup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-lookup", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getOptionGroup(): GLib.OptionGroup
    parseFinished(): void
    apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLine

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    actionInterface?: RefActionInterface | null
    commit?: Gitg.Commit | null
}

/**
 * Signal callback interface for `finished`
 */
interface CommitAction_FinishedSignalCallback {
    (): void
}

interface CommitAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    actionInterface: RefActionInterface
    commit: Gitg.Commit

    // Owm methods of GitgExt-1.0.GitgExt.CommitAction

    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getCommit(): Gitg.Commit
    setCommit(value: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.CommitAction

    connect(sigName: "finished", callback: CommitAction_FinishedSignalCallback): number
    on(sigName: "finished", callback: CommitAction_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: CommitAction_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: CommitAction_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.CommitAction

    connect(sigName: "notify::action-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-interface", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getHistory(): History | null
    setHistory(value: History | null): void

    // Class property signals of GitgExt-1.0.GitgExt.HistoryPanel

    connect(sigName: "notify::history", callback: (...args: any[]) => void): number
    on(sigName: "notify::history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::history", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): void
}

interface History extends GObject.Object, Activity {

    // Owm methods of GitgExt-1.0.GitgExt.History

    foreachSelected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "selection-changed", callback: History_SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: History_SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: History_SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: History_SelectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (delay: number): void
}

interface Notification extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    readonly widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Notification

    getWidget(): Gtk.Widget | null

    // Own signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "close", callback: Notification_CloseSignalCallback): number
    on(sigName: "close", callback: Notification_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: Notification_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: Notification_CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "notify::widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Class property signals of GitgExt-1.0.GitgExt.Notifications

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    readonly displayName: string
    readonly widget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Preferences

    getId(): string
    getDisplayName(): string
    getWidget(): Gtk.Widget

    // Class property signals of GitgExt-1.0.GitgExt.Preferences

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    addRef(reference: Gitg.Ref): void
    removeRef(reference: Gitg.Ref): void
    replaceRef(oldRef: Gitg.Ref, newRef: Gitg.Ref): void
    setBusy(reference: Gitg.Ref, busy: boolean): void
    editRefName(reference: Gitg.Ref, callback: RefNameEditingDone): void
    refresh(): void
    getApplication(): Application
    setApplication(value: Application): void
    getReferences(): Gee.List

    // Class property signals of GitgExt-1.0.GitgExt.RefActionInterface

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::references", callback: (...args: any[]) => void): number
    on(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::references", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    actionInterface?: RefActionInterface | null
    reference?: Gitg.Ref | null
}

/**
 * Signal callback interface for `finished`
 */
interface RefAction_FinishedSignalCallback {
    (): void
}

interface RefAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    actionInterface: RefActionInterface
    reference: Gitg.Ref

    // Owm methods of GitgExt-1.0.GitgExt.RefAction

    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getReference(): Gitg.Ref
    setReference(value: Gitg.Ref): void

    // Own signals of GitgExt-1.0.GitgExt.RefAction

    connect(sigName: "finished", callback: RefAction_FinishedSignalCallback): number
    on(sigName: "finished", callback: RefAction_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: RefAction_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: RefAction_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.RefAction

    connect(sigName: "notify::action-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-interface", ...args: any[]): void
    connect(sigName: "notify::reference", callback: (...args: any[]) => void): number
    on(sigName: "notify::reference", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reference", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reference", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Class property signals of GitgExt-1.0.GitgExt.RemoteLookup

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    searchText?: string | null
    searchVisible?: boolean | null
    searchEntry?: Gtk.Entry | null
}

interface Searchable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    searchText: string
    searchVisible: boolean
    readonly searchAvailable: boolean
    searchEntry: Gtk.Entry

    // Owm methods of GitgExt-1.0.GitgExt.Searchable

    getSearchText(): string
    setSearchText(value: string): void
    getSearchVisible(): boolean
    setSearchVisible(value: boolean): void
    getSearchAvailable(): boolean
    setSearchEntry(value: Gtk.Entry | null): void

    // Class property signals of GitgExt-1.0.GitgExt.Searchable

    connect(sigName: "notify::search-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-text", ...args: any[]): void
    connect(sigName: "notify::search-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-visible", ...args: any[]): void
    connect(sigName: "notify::search-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-available", ...args: any[]): void
    connect(sigName: "notify::search-entry", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-entry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-entry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-entry", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    selectableMode?: SelectionMode | null
}

interface Selectable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    selectableMode: SelectionMode
    readonly selectableAvailable: boolean
    readonly selectableModeTooltip: string
    readonly actionWidget: Gtk.Widget

    // Owm methods of GitgExt-1.0.GitgExt.Selectable

    getSelectableMode(): SelectionMode
    setSelectableMode(value: SelectionMode): void
    getSelectableAvailable(): boolean
    getSelectableModeTooltip(): string
    getActionWidget(): Gtk.Widget | null

    // Class property signals of GitgExt-1.0.GitgExt.Selectable

    connect(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable-mode", ...args: any[]): void
    connect(sigName: "notify::selectable-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable-available", ...args: any[]): void
    connect(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable-mode-tooltip", ...args: any[]): void
    connect(sigName: "notify::action-widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-widget", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): void
}

interface UIElement extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UIElement

    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string

    // Owm methods of GitgExt-1.0.GitgExt.UIElement

    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean

    // Own signals of GitgExt-1.0.GitgExt.UIElement

    connect(sigName: "activate", callback: UIElement_ActivateSignalCallback): number
    on(sigName: "activate", callback: UIElement_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: UIElement_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: UIElement_ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.UIElement

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getFor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): object | null
    parseFinished(): void
    apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLines

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CommandLines extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommandLines

    static name: string
    static $gtype: GObject.GType<CommandLines>

    // Constructors of GitgExt-1.0.GitgExt.CommandLines

    constructor(config?: CommandLines_ConstructProps) 
    constructor(commandLines: CommandLine[]) 
    static new(commandLines: CommandLine[]): CommandLines
    _init(config?: CommandLines_ConstructProps): void
}

interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `registered`
 */
interface MessageBus_RegisteredSignalCallback {
    (id: MessageId): void
}

/**
 * Signal callback interface for `unregistered`
 */
interface MessageBus_UnregisteredSignalCallback {
    (id: MessageId): void
}

/**
 * Signal callback interface for `dispatch`
 */
interface MessageBus_DispatchSignalCallback {
    (message: Message): void
}

interface MessageBus {

    // Owm methods of GitgExt-1.0.GitgExt.MessageBus

    lookup(id: MessageId): GObject.GType
    register(messageType: GObject.GType, id: MessageId): void
    unregister(id: MessageId): void
    unregisterAll(objectPath: string): void
    isRegistered(id: MessageId): boolean
    // TODO fix conflict: connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    sendMessage(message: Message): Message

    // Own signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: "registered", callback: MessageBus_RegisteredSignalCallback): number
    on(sigName: "registered", callback: MessageBus_RegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "registered", callback: MessageBus_RegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "registered", callback: MessageBus_RegisteredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "registered", ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback): number
    on(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unregistered", ...args: any[]): void
    connect(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback): number
    on(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dispatch", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getDefault(): MessageBus
}

interface MessageId_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.MessageId

    objectPath?: string | null
    method?: string | null
}

interface MessageId {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    objectPath: string
    method: string
    readonly id: string

    // Owm methods of GitgExt-1.0.GitgExt.MessageId

    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    getObjectPath(): string
    setObjectPath(value: string): void
    getMethod(): string
    setMethod(value: string): void
    getId(): string

    // Class property signals of GitgExt-1.0.GitgExt.MessageId

    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::method", callback: (...args: any[]) => void): number
    on(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MessageId extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    static name: string
    static $gtype: GObject.GType<MessageId>

    // Constructors of GitgExt-1.0.GitgExt.MessageId

    constructor(config?: MessageId_ConstructProps) 
    constructor(objectPath: string, method: string) 
    static new(objectPath: string, method: string): MessageId
    _init(config?: MessageId_ConstructProps): void
    static validObjectPath(path: string): boolean
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
    getId(): MessageId
    setId(value: MessageId): void

    // Class property signals of GitgExt-1.0.GitgExt.Message

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Message extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Message

    static name: string
    static $gtype: GObject.GType<Message>

    // Constructors of GitgExt-1.0.GitgExt.Message

    constructor(config?: Message_ConstructProps) 
    _init(config?: Message_ConstructProps): void
    static typeHas(type: GObject.GType, propname: string): boolean
    static typeCheck(type: GObject.GType, propname: string, valueType: GObject.GType): boolean
}

interface UI {

    // Own fields of GitgExt-1.0.GitgExt.UI

    refCount: number
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
    responseType: Gtk.ResponseType

    // Class property signals of GitgExt-1.0.GitgExt.UserQueryResponse

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserQueryResponse extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponse

    static name: string
    static $gtype: GObject.GType<UserQueryResponse>

    // Constructors of GitgExt-1.0.GitgExt.UserQueryResponse

    constructor(config?: UserQueryResponse_ConstructProps) 
    constructor(text: string, responseType: Gtk.ResponseType) 
    static new(text: string, responseType: Gtk.ResponseType): UserQueryResponse
    _init(config?: UserQueryResponse_ConstructProps): void
}

interface UserQuery_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GitgExt-1.0.GitgExt.UserQuery

    title?: string | null
    message?: string | null
    messageType?: Gtk.MessageType | null
    defaultResponse?: Gtk.ResponseType | null
    defaultIsDestructive?: boolean | null
    messageUseMarkup?: boolean | null
}

/**
 * Signal callback interface for `quit`
 */
interface UserQuery_QuitSignalCallback {
    (): void
}

/**
 * Signal callback interface for `response`
 */
interface UserQuery_ResponseSignalCallback {
    (responseType: Gtk.ResponseType): boolean
}

interface UserQuery {

    // Own properties of GitgExt-1.0.GitgExt.UserQuery

    title: string
    message: string
    messageType: Gtk.MessageType
    defaultResponse: Gtk.ResponseType
    defaultIsDestructive: boolean
    messageUseMarkup: boolean

    // Own fields of GitgExt-1.0.GitgExt.UserQuery

    responses: UserQueryResponse[]
    responsesLength1: number

    // Owm methods of GitgExt-1.0.GitgExt.UserQuery

    getResponses(): UserQueryResponse[]
    setResponses(value: UserQueryResponse[]): void
    getTitle(): string
    setTitle(value: string): void
    getMessage(): string
    setMessage(value: string): void
    getMessageType(): Gtk.MessageType
    setMessageType(value: Gtk.MessageType): void
    getDefaultResponse(): Gtk.ResponseType
    setDefaultResponse(value: Gtk.ResponseType): void
    getDefaultIsDestructive(): boolean
    setDefaultIsDestructive(value: boolean): void
    getMessageUseMarkup(): boolean
    setMessageUseMarkup(value: boolean): void

    // Own signals of GitgExt-1.0.GitgExt.UserQuery

    connect(sigName: "quit", callback: UserQuery_QuitSignalCallback): number
    on(sigName: "quit", callback: UserQuery_QuitSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit", callback: UserQuery_QuitSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit", callback: UserQuery_QuitSignalCallback): NodeJS.EventEmitter
    emit(sigName: "quit", ...args: any[]): void
    connect(sigName: "response", callback: UserQuery_ResponseSignalCallback): number
    on(sigName: "response", callback: UserQuery_ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: UserQuery_ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: UserQuery_ResponseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.UserQuery

    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::default-response", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-response", ...args: any[]): void
    connect(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-is-destructive", ...args: any[]): void
    connect(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-use-markup", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    populateMenu: (self: Action, menu: Gtk.Menu) => void
    fetch: (self: Action, callback: Gio.AsyncReadyCallback | null) => void
    fetchFinish: (self: Action, res: Gio.AsyncResult) => boolean
}

abstract class ActionIface {

    // Own properties of GitgExt-1.0.GitgExt.ActionIface

    static name: string
}

interface ActivityIface {

    // Own fields of GitgExt-1.0.GitgExt.ActivityIface

    isDefaultFor: (self: Activity, action: string) => boolean
    onKeyPressed: (self: Activity, event: Gdk.EventKey) => boolean
}

abstract class ActivityIface {

    // Own properties of GitgExt-1.0.GitgExt.ActivityIface

    static name: string
}

interface ApplicationIface {

    // Own fields of GitgExt-1.0.GitgExt.ApplicationIface

    getVerifiedCommitter: (self: Application) => Ggit.Signature | null
    getActivityById: (self: Application, id: string) => Activity | null
    setActivityById: (self: Application, id: string) => Activity | null
    userQuery: (self: Application, query: UserQuery) => void
    userQueryAsync: (self: Application, query: UserQuery, callback: Gio.AsyncReadyCallback | null) => void
    userQueryFinish: (self: Application, res: Gio.AsyncResult) => Gtk.ResponseType
    showInfobar: (self: Application, primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType) => void
    openNew: (self: Application, repository: Ggit.Repository, hint: string | null) => Application
    openRepository: (self: Application, path: Gio.File) => void
    getRepository: (self: Application) => Gitg.Repository | null
    setRepository: (self: Application, value: Gitg.Repository | null) => void
    getMessageBus: (self: Application) => MessageBus
    getCurrentActivity: (self: Application) => Activity | null
    getEnvironment: (self: Application) => Gee.Map
    getNotifications: (self: Application) => Notifications
    getBusy: (self: Application) => boolean
    setBusy: (self: Application, value: boolean) => void
    getRemoteLookup: (self: Application) => RemoteLookup
}

abstract class ApplicationIface {

    // Own properties of GitgExt-1.0.GitgExt.ApplicationIface

    static name: string
}

interface CommandLineIface {

    // Own fields of GitgExt-1.0.GitgExt.CommandLineIface

    getOptionGroup: (self: CommandLine) => GLib.OptionGroup
    parseFinished: (self: CommandLine) => void
    apply: (self: CommandLine, application: Application) => void
}

abstract class CommandLineIface {

    // Own properties of GitgExt-1.0.GitgExt.CommandLineIface

    static name: string
}

interface CommitActionIface {

    // Own fields of GitgExt-1.0.GitgExt.CommitActionIface

    getActionInterface: (self: CommitAction) => RefActionInterface
    setActionInterface: (self: CommitAction, value: RefActionInterface) => void
    getCommit: (self: CommitAction) => Gitg.Commit
    setCommit: (self: CommitAction, value: Gitg.Commit) => void
}

abstract class CommitActionIface {

    // Own properties of GitgExt-1.0.GitgExt.CommitActionIface

    static name: string
}

interface HistoryPanelIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryPanelIface

    getHistory: (self: HistoryPanel) => History | null
    setHistory: (self: HistoryPanel, value: History | null) => void
}

abstract class HistoryPanelIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanelIface

    static name: string
}

interface HistoryIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryIface

    foreachSelected: (self: History, func: ForeachCommitSelectionFunc) => void
    select: (self: History, commit: Gitg.Commit) => void
}

abstract class HistoryIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryIface

    static name: string
}

interface NotificationIface {

    // Own fields of GitgExt-1.0.GitgExt.NotificationIface

    getWidget: (self: Notification) => Gtk.Widget | null
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

    getId: (self: Preferences) => string
    getDisplayName: (self: Preferences) => string
    getWidget: (self: Preferences) => Gtk.Widget
}

abstract class PreferencesIface {

    // Own properties of GitgExt-1.0.GitgExt.PreferencesIface

    static name: string
}

interface RefActionInterfaceIface {

    // Own fields of GitgExt-1.0.GitgExt.RefActionInterfaceIface

    addRef: (self: RefActionInterface, reference: Gitg.Ref) => void
    removeRef: (self: RefActionInterface, reference: Gitg.Ref) => void
    replaceRef: (self: RefActionInterface, oldRef: Gitg.Ref, newRef: Gitg.Ref) => void
    setBusy: (self: RefActionInterface, reference: Gitg.Ref, busy: boolean) => void
    editRefName: (self: RefActionInterface, reference: Gitg.Ref, callback: RefNameEditingDone) => void
    refresh: (self: RefActionInterface) => void
    getApplication: (self: RefActionInterface) => Application
    setApplication: (self: RefActionInterface, value: Application) => void
    getReferences: (self: RefActionInterface) => Gee.List
}

abstract class RefActionInterfaceIface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterfaceIface

    static name: string
}

interface RefActionIface {

    // Own fields of GitgExt-1.0.GitgExt.RefActionIface

    getActionInterface: (self: RefAction) => RefActionInterface
    setActionInterface: (self: RefAction, value: RefActionInterface) => void
    getReference: (self: RefAction) => Gitg.Ref
    setReference: (self: RefAction, value: Gitg.Ref) => void
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

    getSearchText: (self: Searchable) => string
    setSearchText: (self: Searchable, value: string) => void
    getSearchVisible: (self: Searchable) => boolean
    setSearchVisible: (self: Searchable, value: boolean) => void
    getSearchAvailable: (self: Searchable) => boolean
    setSearchEntry: (self: Searchable, value: Gtk.Entry | null) => void
}

abstract class SearchableIface {

    // Own properties of GitgExt-1.0.GitgExt.SearchableIface

    static name: string
}

interface SelectableIface {

    // Own fields of GitgExt-1.0.GitgExt.SelectableIface

    getSelectableMode: (self: Selectable) => SelectionMode
    setSelectableMode: (self: Selectable, value: SelectionMode) => void
    getSelectableAvailable: (self: Selectable) => boolean
    getSelectableModeTooltip: (self: Selectable) => string
    getActionWidget: (self: Selectable) => Gtk.Widget | null
}

abstract class SelectableIface {

    // Own properties of GitgExt-1.0.GitgExt.SelectableIface

    static name: string
}

interface UIElementIface {

    // Own fields of GitgExt-1.0.GitgExt.UIElementIface

    negotiateOrder: (self: UIElement, other: UIElement) => number
    getApplication: (self: UIElement) => Application | null
    setApplication: (self: UIElement, value: Application | null) => void
    getId: (self: UIElement) => string
    getDisplayName: (self: UIElement) => string
    getDescription: (self: UIElement) => string
    getIcon: (self: UIElement) => string | null
    getWidget: (self: UIElement) => Gtk.Widget | null
    getShortcut: (self: UIElement) => number | null
    getAvailable: (self: UIElement) => boolean
    getEnabled: (self: UIElement) => boolean
}

abstract class UIElementIface {

    // Own properties of GitgExt-1.0.GitgExt.UIElementIface

    static name: string
}

}
export default GitgExt;