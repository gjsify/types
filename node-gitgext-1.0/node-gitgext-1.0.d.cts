
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gitgext-1.0-import.d.ts';
    
/**
 * GitgExt-1.0
 */

import type Gitg from '@girs/node-gitg-1.0';
import type cairo from '@girs/node-cairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type Gee from '@girs/node-gee-0.8';
import type Gdk from '@girs/node-gdk-3.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Ggit from '@girs/node-ggit-1.0';
import type Gtk from '@girs/node-gtk-3.0';
import type xlib from '@girs/node-xlib-2.0';
import type Atk from '@girs/node-atk-1.0';

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
    (newName: string | null, cancelled: boolean): void
}
export module Action {

    // Constructor properties interface

    export interface ConstructorProperties extends UIElement.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Action extends UIElement {

    // Own properties of GitgExt-1.0.GitgExt.Action

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Action

    // Has conflict: populateMenu(menu: Gtk.Menu): void
    // Has conflict: fetch(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: fetchFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.Action

    populateMenu(menu: Gtk.Menu): void
    fetch(callback: Gio.AsyncReadyCallback | null): void
    fetchFinish(res: Gio.AsyncResult): boolean

    // Class property signals of GitgExt-1.0.GitgExt.Action

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Action extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Action

    static name: string

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

    // Own properties of GitgExt-1.0.GitgExt.Activity

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Activity

    // Has conflict: isDefaultFor(action: string | null): boolean
    // Has conflict: onKeyPressed(event: Gdk.EventKey): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.Activity

    isDefaultFor(action: string | null): boolean
    onKeyPressed(event: Gdk.EventKey): boolean

    // Class property signals of GitgExt-1.0.GitgExt.Activity

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Activity {

    // Own properties of GitgExt-1.0.GitgExt.Activity

    static name: string

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
        (hint: ExternalChangeHint): void
    }

    /**
     * Signal callback interface for `repository-commits-changed`
     */
    export interface RepositoryCommitsChangedSignalCallback {
        (): void
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
    readonly messageBus: MessageBus
    readonly currentActivity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remoteLookup: RemoteLookup
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Application

    // Has conflict: getVerifiedCommitter(): Ggit.Signature | null
    // Has conflict: getActivityById(id: string | null): Activity | null
    // Has conflict: setActivityById(id: string | null): Activity | null
    // Has conflict: userQuery(query: UserQuery): void
    // Has conflict: userQueryAsync(query: UserQuery, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: userQueryFinish(res: Gio.AsyncResult): Gtk.ResponseType
    // Has conflict: showInfobar(primaryMsg: string | null, secondaryMsg: string | null, type: Gtk.MessageType): void
    // Has conflict: openNew(repository: Ggit.Repository, hint: string | null): Application
    // Has conflict: openRepository(path: Gio.File): void
    // Has conflict: getRepository(): Gitg.Repository | null
    // Has conflict: setRepository(value: Gitg.Repository | null): void
    // Has conflict: getMessageBus(): MessageBus
    // Has conflict: getCurrentActivity(): Activity | null
    // Has conflict: getEnvironment(): Gee.Map
    // Has conflict: getNotifications(): Notifications
    // Has conflict: getBusy(): boolean
    // Has conflict: setBusy(value: boolean): void
    // Has conflict: getRemoteLookup(): RemoteLookup

    // Own virtual methods of GitgExt-1.0.GitgExt.Application

    getVerifiedCommitter(): Ggit.Signature | null
    getActivityById(id: string | null): Activity | null
    setActivityById(id: string | null): Activity | null
    userQuery(query: UserQuery): void
    userQueryAsync(query: UserQuery, callback: Gio.AsyncReadyCallback | null): void
    userQueryFinish(res: Gio.AsyncResult): Gtk.ResponseType
    showInfobar(primaryMsg: string | null, secondaryMsg: string | null, type: Gtk.MessageType): void
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

    connect(sigName: "repository-changed-externally", callback: Application.RepositoryChangedExternallySignalCallback): number
    on(sigName: "repository-changed-externally", callback: Application.RepositoryChangedExternallySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-changed-externally", callback: Application.RepositoryChangedExternallySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-changed-externally", callback: Application.RepositoryChangedExternallySignalCallback): NodeJS.EventEmitter
    emit(sigName: "repository-changed-externally", ...args: any[]): void
    connect(sigName: "repository-commits-changed", callback: Application.RepositoryCommitsChangedSignalCallback): number
    on(sigName: "repository-commits-changed", callback: Application.RepositoryCommitsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-commits-changed", callback: Application.RepositoryCommitsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-commits-changed", callback: Application.RepositoryCommitsChangedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Application {

    // Own properties of GitgExt-1.0.GitgExt.Application

    static name: string

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

    // Own properties of GitgExt-1.0.GitgExt.CommandLine

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.CommandLine

    // Has conflict: getOptionGroup(): GLib.OptionGroup
    // Has conflict: parseFinished(): void
    // Has conflict: apply(application: Application): void

    // Own virtual methods of GitgExt-1.0.GitgExt.CommandLine

    getOptionGroup(): GLib.OptionGroup
    parseFinished(): void
    apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLine

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandLine {

    // Own properties of GitgExt-1.0.GitgExt.CommandLine

    static name: string

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
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Action.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.CommitAction

        actionInterface?: RefActionInterface | null
        commit?: Gitg.Commit | null
    }

}

export interface CommitAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    actionInterface: RefActionInterface
    commit: Gitg.Commit
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.CommitAction

    // Has conflict: getActionInterface(): RefActionInterface
    // Has conflict: setActionInterface(value: RefActionInterface): void
    // Has conflict: getCommit(): Gitg.Commit
    // Has conflict: setCommit(value: Gitg.Commit): void

    // Own virtual methods of GitgExt-1.0.GitgExt.CommitAction

    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getCommit(): Gitg.Commit
    setCommit(value: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.CommitAction

    connect(sigName: "finished", callback: CommitAction.FinishedSignalCallback): number
    on(sigName: "finished", callback: CommitAction.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: CommitAction.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: CommitAction.FinishedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class CommitAction extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommitAction

    static name: string

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
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.HistoryPanel

    // Has conflict: getHistory(): History | null
    // Has conflict: setHistory(value: History | null): void

    // Own virtual methods of GitgExt-1.0.GitgExt.HistoryPanel

    getHistory(): History | null
    setHistory(value: History | null): void

    // Class property signals of GitgExt-1.0.GitgExt.HistoryPanel

    connect(sigName: "notify::history", callback: (...args: any[]) => void): number
    on(sigName: "notify::history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::history", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class HistoryPanel {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanel

    static name: string

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
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Activity.ConstructorProperties {
    }

}

export interface History extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.History

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.History

    // Has conflict: foreachSelected(func: ForeachCommitSelectionFunc): void
    // Has conflict: select(commit: Gitg.Commit): void

    // Own virtual methods of GitgExt-1.0.GitgExt.History

    foreachSelected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void

    // Own signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "selection-changed", callback: History.SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: History.SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: History.SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: History.SelectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.History

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class History {

    // Own properties of GitgExt-1.0.GitgExt.History

    static name: string

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
        (delay: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Notification extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    readonly widget: Gtk.Widget
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Notification

    // Has conflict: getWidget(): Gtk.Widget | null

    // Own virtual methods of GitgExt-1.0.GitgExt.Notification

    getWidget(): Gtk.Widget | null

    // Own signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "close", callback: Notification.CloseSignalCallback): number
    on(sigName: "close", callback: Notification.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: Notification.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: Notification.CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.Notification

    connect(sigName: "notify::widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Notification {

    // Own properties of GitgExt-1.0.GitgExt.Notification

    static name: string

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

    // Own properties of GitgExt-1.0.GitgExt.Notifications

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Notifications

    // Has conflict: add(notification: Notification): void
    // Has conflict: remove(notification: Notification, delay: number): void

    // Own virtual methods of GitgExt-1.0.GitgExt.Notifications

    add(notification: Notification): void
    remove(notification: Notification, delay: number): void

    // Class property signals of GitgExt-1.0.GitgExt.Notifications

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Notifications {

    // Own properties of GitgExt-1.0.GitgExt.Notifications

    static name: string

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
    readonly displayName: string | null
    readonly widget: Gtk.Widget
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Preferences

    // Has conflict: getId(): string | null
    // Has conflict: getDisplayName(): string | null
    // Has conflict: getWidget(): Gtk.Widget

    // Own virtual methods of GitgExt-1.0.GitgExt.Preferences

    getId(): string | null
    getDisplayName(): string | null
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Preferences {

    // Own properties of GitgExt-1.0.GitgExt.Preferences

    static name: string

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
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.RefActionInterface

    // Has conflict: addRef(reference: Gitg.Ref): void
    // Has conflict: removeRef(reference: Gitg.Ref): void
    // Has conflict: replaceRef(oldRef: Gitg.Ref, newRef: Gitg.Ref): void
    // Has conflict: setBusy(reference: Gitg.Ref, busy: boolean): void
    // Has conflict: editRefName(reference: Gitg.Ref, callback: RefNameEditingDone): void
    // Has conflict: refresh(): void
    // Has conflict: getApplication(): Application
    // Has conflict: setApplication(value: Application): void
    // Has conflict: getReferences(): Gee.List

    // Own virtual methods of GitgExt-1.0.GitgExt.RefActionInterface

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RefActionInterface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterface

    static name: string

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
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Action.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.RefAction

        actionInterface?: RefActionInterface | null
        reference?: Gitg.Ref | null
    }

}

export interface RefAction extends Action {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    actionInterface: RefActionInterface
    reference: Gitg.Ref
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.RefAction

    // Has conflict: getActionInterface(): RefActionInterface
    // Has conflict: setActionInterface(value: RefActionInterface): void
    // Has conflict: getReference(): Gitg.Ref
    // Has conflict: setReference(value: Gitg.Ref): void

    // Own virtual methods of GitgExt-1.0.GitgExt.RefAction

    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getReference(): Gitg.Ref
    setReference(value: Gitg.Ref): void

    // Own signals of GitgExt-1.0.GitgExt.RefAction

    connect(sigName: "finished", callback: RefAction.FinishedSignalCallback): number
    on(sigName: "finished", callback: RefAction.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: RefAction.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: RefAction.FinishedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class RefAction extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.RefAction

    static name: string

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

    // Own properties of GitgExt-1.0.GitgExt.RemoteLookup

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.RemoteLookup

    // Has conflict: lookup(name: string | null): Gitg.Remote | null

    // Own virtual methods of GitgExt-1.0.GitgExt.RemoteLookup

    lookup(name: string | null): Gitg.Remote | null

    // Class property signals of GitgExt-1.0.GitgExt.RemoteLookup

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RemoteLookup {

    // Own properties of GitgExt-1.0.GitgExt.RemoteLookup

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.RemoteLookup

    constructor(config?: RemoteLookup.ConstructorProperties) 
    _init(config?: RemoteLookup.ConstructorProperties): void
}

export module Searchable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Activity.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.Searchable

        searchText?: string | null
        searchVisible?: boolean | null
        searchEntry?: Gtk.Entry | null
    }

}

export interface Searchable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    searchText: string | null
    searchVisible: boolean
    readonly searchAvailable: boolean
    searchEntry: Gtk.Entry
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Searchable

    // Has conflict: getSearchText(): string | null
    // Has conflict: setSearchText(value: string | null): void
    // Has conflict: getSearchVisible(): boolean
    // Has conflict: setSearchVisible(value: boolean): void
    // Has conflict: getSearchAvailable(): boolean
    // Has conflict: setSearchEntry(value: Gtk.Entry | null): void

    // Own virtual methods of GitgExt-1.0.GitgExt.Searchable

    getSearchText(): string | null
    setSearchText(value: string | null): void
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Searchable {

    // Own properties of GitgExt-1.0.GitgExt.Searchable

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.Searchable

    constructor(config?: Searchable.ConstructorProperties) 
    _init(config?: Searchable.ConstructorProperties): void
}

export module Selectable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Activity.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.Selectable

        selectableMode?: SelectionMode | null
    }

}

export interface Selectable extends GObject.Object, Activity {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    selectableMode: SelectionMode
    readonly selectableAvailable: boolean
    readonly selectableModeTooltip: string | null
    readonly actionWidget: Gtk.Widget
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Selectable

    // Has conflict: getSelectableMode(): SelectionMode
    // Has conflict: setSelectableMode(value: SelectionMode): void
    // Has conflict: getSelectableAvailable(): boolean
    // Has conflict: getSelectableModeTooltip(): string | null
    // Has conflict: getActionWidget(): Gtk.Widget | null

    // Own virtual methods of GitgExt-1.0.GitgExt.Selectable

    getSelectableMode(): SelectionMode
    setSelectableMode(value: SelectionMode): void
    getSelectableAvailable(): boolean
    getSelectableModeTooltip(): string | null
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Selectable {

    // Own properties of GitgExt-1.0.GitgExt.Selectable

    static name: string

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
        (): void
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
    readonly displayName: string | null
    readonly description: string | null
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.UIElement

    // Has conflict: negotiateOrder(other: UIElement): number
    // Has conflict: getApplication(): Application | null
    // Has conflict: setApplication(value: Application | null): void
    // Has conflict: getId(): string | null
    // Has conflict: getDisplayName(): string | null
    // Has conflict: getDescription(): string | null
    // Has conflict: getIcon(): string | null
    // Has conflict: getWidget(): Gtk.Widget | null
    // Has conflict: getShortcut(): number | null
    // Has conflict: getAvailable(): boolean
    // Has conflict: getEnabled(): boolean

    // Own virtual methods of GitgExt-1.0.GitgExt.UIElement

    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value: Application | null): void
    getId(): string | null
    getDisplayName(): string | null
    getDescription(): string | null
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
    activate(): void

    // Own signals of GitgExt-1.0.GitgExt.UIElement

    connect(sigName: "activate", callback: UIElement.ActivateSignalCallback): number
    on(sigName: "activate", callback: UIElement.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: UIElement.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: UIElement.ActivateSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UIElement {

    // Own properties of GitgExt-1.0.GitgExt.UIElement

    static name: string

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

    // Own properties of GitgExt-1.0.GitgExt.CommandLines

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.CommandLines

    getFor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): any | null
    parseFinished(): void
    apply(application: Application): void

    // Class property signals of GitgExt-1.0.GitgExt.CommandLines

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CommandLines extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.CommandLines

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.CommandLines

    constructor(config?: CommandLines.ConstructorProperties) 
    constructor(commandLines: CommandLine[]) 
    static new(commandLines: CommandLine[]): CommandLines
    _init(config?: CommandLines.ConstructorProperties): void
}

export module MessageBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `registered`
     */
    export interface RegisteredSignalCallback {
        (id: MessageId): void
    }

    /**
     * Signal callback interface for `unregistered`
     */
    export interface UnregisteredSignalCallback {
        (id: MessageId): void
    }

    /**
     * Signal callback interface for `dispatch`
     */
    export interface DispatchSignalCallback {
        (message: Message): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MessageBus {

    // Own properties of GitgExt-1.0.GitgExt.MessageBus

    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.MessageBus

    lookup(id: MessageId): GObject.GType
    register(messageType: GObject.GType, id: MessageId): void
    unregister(id: MessageId): void
    unregisterAll(objectPath: string | null): void
    isRegistered(id: MessageId): boolean
    connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    sendMessage(message: Message): Message

    // Own virtual methods of GitgExt-1.0.GitgExt.MessageBus

    dispatch(message: Message): void

    // Own signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    on(sigName: "registered", callback: MessageBus.RegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "registered", callback: MessageBus.RegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "registered", ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    on(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unregistered", ...args: any[]): void
    connect(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    on(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dispatch", ...args: any[]): void

    // Class property signals of GitgExt-1.0.GitgExt.MessageBus

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MessageBus extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageBus

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.MessageBus

    constructor(config?: MessageBus.ConstructorProperties) 
    constructor() 
    static new(): MessageBus
    _init(config?: MessageBus.ConstructorProperties): void
    static getDefault(): MessageBus
}

export module MessageId {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.MessageId

        objectPath?: string | null
        method?: string | null
    }

}

export interface MessageId {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    objectPath: string | null
    method: string | null
    readonly id: string | null
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.MessageId

    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    getObjectPath(): string | null
    setObjectPath(value: string | null): void
    getMethod(): string | null
    setMethod(value: string | null): void
    getId(): string | null

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MessageId extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.MessageId

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.MessageId

    constructor(config?: MessageId.ConstructorProperties) 
    constructor(objectPath: string | null, method: string | null) 
    static new(objectPath: string | null, method: string | null): MessageId
    _init(config?: MessageId.ConstructorProperties): void
    static validObjectPath(path: string | null): boolean
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
    __gtype__: number

    // Owm methods of GitgExt-1.0.GitgExt.Message

    has(propname: string | null): boolean
    getId(): MessageId
    setId(value: MessageId): void

    // Class property signals of GitgExt-1.0.GitgExt.Message

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Message extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.Message

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.Message

    constructor(config?: Message.ConstructorProperties) 
    _init(config?: Message.ConstructorProperties): void
    static typeHas(type: GObject.GType, propname: string | null): boolean
    static typeCheck(type: GObject.GType, propname: string | null, valueType: GObject.GType): boolean
}

export interface UI {

    // Own fields of GitgExt-1.0.GitgExt.UI

    refCount: number
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

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponse

    __gtype__: number

    // Own fields of GitgExt-1.0.GitgExt.UserQueryResponse

    text: string | null
    responseType: Gtk.ResponseType

    // Class property signals of GitgExt-1.0.GitgExt.UserQueryResponse

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UserQueryResponse extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQueryResponse

    static name: string

    // Constructors of GitgExt-1.0.GitgExt.UserQueryResponse

    constructor(config?: UserQueryResponse.ConstructorProperties) 
    constructor(text: string | null, responseType: Gtk.ResponseType) 
    static new(text: string | null, responseType: Gtk.ResponseType): UserQueryResponse
    _init(config?: UserQueryResponse.ConstructorProperties): void
}

export module UserQuery {

    // Signal callback interfaces

    /**
     * Signal callback interface for `quit`
     */
    export interface QuitSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `response`
     */
    export interface ResponseSignalCallback {
        (responseType: Gtk.ResponseType): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GitgExt-1.0.GitgExt.UserQuery

        title?: string | null
        message?: string | null
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
    messageType: Gtk.MessageType
    defaultResponse: Gtk.ResponseType
    defaultIsDestructive: boolean
    messageUseMarkup: boolean
    __gtype__: number

    // Own fields of GitgExt-1.0.GitgExt.UserQuery

    responses: UserQueryResponse[]
    responsesLength1: number

    // Owm methods of GitgExt-1.0.GitgExt.UserQuery

    getResponses(): UserQueryResponse[]
    setResponses(value: UserQueryResponse[]): void
    getTitle(): string | null
    setTitle(value: string | null): void
    getMessage(): string | null
    setMessage(value: string | null): void
    getMessageType(): Gtk.MessageType
    setMessageType(value: Gtk.MessageType): void
    getDefaultResponse(): Gtk.ResponseType
    setDefaultResponse(value: Gtk.ResponseType): void
    getDefaultIsDestructive(): boolean
    setDefaultIsDestructive(value: boolean): void
    getMessageUseMarkup(): boolean
    setMessageUseMarkup(value: boolean): void

    // Own signals of GitgExt-1.0.GitgExt.UserQuery

    connect(sigName: "quit", callback: UserQuery.QuitSignalCallback): number
    on(sigName: "quit", callback: UserQuery.QuitSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit", callback: UserQuery.QuitSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit", callback: UserQuery.QuitSignalCallback): NodeJS.EventEmitter
    emit(sigName: "quit", ...args: any[]): void
    connect(sigName: "response", callback: UserQuery.ResponseSignalCallback): number
    on(sigName: "response", callback: UserQuery.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: UserQuery.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: UserQuery.ResponseSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UserQuery extends GObject.Object {

    // Own properties of GitgExt-1.0.GitgExt.UserQuery

    static name: string

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

    populateMenu: (self: Action, menu: Gtk.Menu) => void
    fetch: (self: Action, callback: Gio.AsyncReadyCallback | null) => void
    fetchFinish: (self: Action, res: Gio.AsyncResult) => boolean
}

export abstract class ActionIface {

    // Own properties of GitgExt-1.0.GitgExt.ActionIface

    static name: string
}

export interface ActivityIface {

    // Own fields of GitgExt-1.0.GitgExt.ActivityIface

    isDefaultFor: (self: Activity, action: string | null) => boolean
    onKeyPressed: (self: Activity, event: Gdk.EventKey) => boolean
}

export abstract class ActivityIface {

    // Own properties of GitgExt-1.0.GitgExt.ActivityIface

    static name: string
}

export interface ApplicationIface {

    // Own fields of GitgExt-1.0.GitgExt.ApplicationIface

    getVerifiedCommitter: (self: Application) => Ggit.Signature | null
    getActivityById: (self: Application, id: string | null) => Activity | null
    setActivityById: (self: Application, id: string | null) => Activity | null
    userQuery: (self: Application, query: UserQuery) => void
    userQueryAsync: (self: Application, query: UserQuery, callback: Gio.AsyncReadyCallback | null) => void
    userQueryFinish: (self: Application, res: Gio.AsyncResult) => Gtk.ResponseType
    showInfobar: (self: Application, primaryMsg: string | null, secondaryMsg: string | null, type: Gtk.MessageType) => void
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

export abstract class ApplicationIface {

    // Own properties of GitgExt-1.0.GitgExt.ApplicationIface

    static name: string
}

export interface CommandLineIface {

    // Own fields of GitgExt-1.0.GitgExt.CommandLineIface

    getOptionGroup: (self: CommandLine) => GLib.OptionGroup
    parseFinished: (self: CommandLine) => void
    apply: (self: CommandLine, application: Application) => void
}

export abstract class CommandLineIface {

    // Own properties of GitgExt-1.0.GitgExt.CommandLineIface

    static name: string
}

export interface CommitActionIface {

    // Own fields of GitgExt-1.0.GitgExt.CommitActionIface

    getActionInterface: (self: CommitAction) => RefActionInterface
    setActionInterface: (self: CommitAction, value: RefActionInterface) => void
    getCommit: (self: CommitAction) => Gitg.Commit
    setCommit: (self: CommitAction, value: Gitg.Commit) => void
}

export abstract class CommitActionIface {

    // Own properties of GitgExt-1.0.GitgExt.CommitActionIface

    static name: string
}

export interface HistoryPanelIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryPanelIface

    getHistory: (self: HistoryPanel) => History | null
    setHistory: (self: HistoryPanel, value: History | null) => void
}

export abstract class HistoryPanelIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryPanelIface

    static name: string
}

export interface HistoryIface {

    // Own fields of GitgExt-1.0.GitgExt.HistoryIface

    foreachSelected: (self: History, func: ForeachCommitSelectionFunc) => void
    select: (self: History, commit: Gitg.Commit) => void
}

export abstract class HistoryIface {

    // Own properties of GitgExt-1.0.GitgExt.HistoryIface

    static name: string
}

export interface NotificationIface {

    // Own fields of GitgExt-1.0.GitgExt.NotificationIface

    getWidget: (self: Notification) => Gtk.Widget | null
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

    getId: (self: Preferences) => string | null
    getDisplayName: (self: Preferences) => string | null
    getWidget: (self: Preferences) => Gtk.Widget
}

export abstract class PreferencesIface {

    // Own properties of GitgExt-1.0.GitgExt.PreferencesIface

    static name: string
}

export interface RefActionInterfaceIface {

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

export abstract class RefActionInterfaceIface {

    // Own properties of GitgExt-1.0.GitgExt.RefActionInterfaceIface

    static name: string
}

export interface RefActionIface {

    // Own fields of GitgExt-1.0.GitgExt.RefActionIface

    getActionInterface: (self: RefAction) => RefActionInterface
    setActionInterface: (self: RefAction, value: RefActionInterface) => void
    getReference: (self: RefAction) => Gitg.Ref
    setReference: (self: RefAction, value: Gitg.Ref) => void
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

    getSearchText: (self: Searchable) => string | null
    setSearchText: (self: Searchable, value: string | null) => void
    getSearchVisible: (self: Searchable) => boolean
    setSearchVisible: (self: Searchable, value: boolean) => void
    getSearchAvailable: (self: Searchable) => boolean
    setSearchEntry: (self: Searchable, value: Gtk.Entry | null) => void
}

export abstract class SearchableIface {

    // Own properties of GitgExt-1.0.GitgExt.SearchableIface

    static name: string
}

export interface SelectableIface {

    // Own fields of GitgExt-1.0.GitgExt.SelectableIface

    getSelectableMode: (self: Selectable) => SelectionMode
    setSelectableMode: (self: Selectable, value: SelectionMode) => void
    getSelectableAvailable: (self: Selectable) => boolean
    getSelectableModeTooltip: (self: Selectable) => string | null
    getActionWidget: (self: Selectable) => Gtk.Widget | null
}

export abstract class SelectableIface {

    // Own properties of GitgExt-1.0.GitgExt.SelectableIface

    static name: string
}

export interface UIElementIface {

    // Own fields of GitgExt-1.0.GitgExt.UIElementIface

    negotiateOrder: (self: UIElement, other: UIElement) => number
    getApplication: (self: UIElement) => Application | null
    setApplication: (self: UIElement, value: Application | null) => void
    getId: (self: UIElement) => string | null
    getDisplayName: (self: UIElement) => string | null
    getDescription: (self: UIElement) => string | null
    getIcon: (self: UIElement) => string | null
    getWidget: (self: UIElement) => Gtk.Widget | null
    getShortcut: (self: UIElement) => number | null
    getAvailable: (self: UIElement) => boolean
    getEnabled: (self: UIElement) => boolean
}

export abstract class UIElementIface {

    // Own properties of GitgExt-1.0.GitgExt.UIElementIface

    static name: string
}

// END