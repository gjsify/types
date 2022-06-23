// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gitg-1.0
 */

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

export namespace Gitg {

enum AuthenticationLifeTime {
    FORGET,
    SESSION,
    FOREVER,
}
enum CommitModelColumns {
    SHA1,
    SUBJECT,
    MESSAGE,
    AUTHOR,
    AUTHOR_NAME,
    AUTHOR_EMAIL,
    AUTHOR_DATE,
    COMMITTER,
    COMMITTER_NAME,
    COMMITTER_EMAIL,
    COMMITTER_DATE,
    COMMIT,
    NUM,
}
enum RefType {
    NONE,
    BRANCH,
    REMOTE,
    TAG,
    STASH,
}
enum RefState {
    NONE,
    SELECTED,
    PRELIGHT,
}
enum RemoteState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED,
    TRANSFERRING,
}
enum SelectionMode {
    NORMAL,
    SELECTION,
}
enum SidebarHint {
    NONE,
    HEADER,
    SEPARATOR,
    DUMMY,
}
enum SidebarColumn {
    HINT,
    SECTION,
    ITEM,
}
enum CredentialsError {
    CANCELLED,
}
enum DateError {
    INVALID_FORMAT,
}
enum InitError {
    THREADS_UNSAFE,
}
enum RemoteError {
    ALREADY_CONNECTED,
    ALREADY_CONNECTING,
    ALREADY_DISCONNECTED,
    STILL_CONNECTING,
}
enum StageError {
    PRE_COMMIT_HOOK_FAILED,
    COMMIT_MSG_HOOK_FAILED,
    NOTHING_TO_COMMIT,
    INDEX_ENTRY_NOT_FOUND,
}
enum PatchSetType {
    ADD,
    REMOVE,
}
enum LaneTag {
    NONE,
    START,
    END,
    SIGN_STASH,
    SIGN_STAGED,
    SIGN_UNSTAGED,
    HIDDEN,
}
enum StageCommitOptions {
    NONE,
    SIGN_OFF,
    AMEND,
    SKIP_HOOKS,
}
function commitModelColumnsType(): GObject.GType
function init(): void
interface Branch_ConstructProps extends Ggit.Branch_ConstructProps, Ref_ConstructProps, GObject.Object_ConstructProps {
}

interface Branch extends Ggit.Branch, Ref {

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Branch

    getUpstream(): Ref

    // Overloads of getUpstream

    /**
     * Gets the reference supporting the remote tracking branch,
     * given a local branch reference.
     */
    getUpstream(): Ggit.Ref | null
    getUpstream(...args: any[]): any
    getUpstream(...args: any[]): Ref | Ggit.Ref | null | any

    // Conflicting methods

    getOwner(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.Branch

    connect(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-pushes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (...args: any[]) => void): number
    on(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::working", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Branch extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Branch

    static name: string
    static $gtype: GObject.GType<Branch>

    // Constructors of Gitg-1.0.Gitg.Branch

    constructor(config?: Branch_ConstructProps) 
    _init(config?: Branch_ConstructProps): void
}

interface Ref_ConstructProps extends Ggit.Ref_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Ref

    dParsedName?: ParsedRefName | null
    dPushes?: Ref[] | null
    state?: RefState | null
    working?: boolean | null
}

interface Ref extends Ggit.Ref {

    // Own properties of Gitg-1.0.Gitg.Ref

    dParsedName: ParsedRefName
    dPushes: Ref[]
    state: RefState
    working: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Ref

    getOwner(): Repository

    // Overloads of getOwner

    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null
    getOwner(...args: any[]): any
    getOwner(...args: any[]): Repository | Ggit.Repository | null | any
    getDParsedName(): ParsedRefName
    setDParsedName(value: ParsedRefName): void
    getDPushes(): Ref[] | null
    setDPushes(value: Ref[] | null): void
    getState(): RefState
    setState(value: RefState): void
    getWorking(): boolean
    setWorking(value: boolean): void
    getParsedName(): ParsedRefName
    getPushes(): Ref[]

    // Class property signals of Gitg-1.0.Gitg.Ref

    connect(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-pushes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (...args: any[]) => void): number
    on(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::working", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Ref extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Ref

    static name: string
    static $gtype: GObject.GType<Ref>

    // Constructors of Gitg-1.0.Gitg.Ref

    constructor(config?: Ref_ConstructProps) 
    _init(config?: Ref_ConstructProps): void
}

interface CredentialsProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface CredentialsProvider extends GObject.Object {

    // Owm methods of Gitg-1.0.Gitg.CredentialsProvider

    credentials(url: string, usernameFromUrl: string | null, allowedTypes: Ggit.Credtype): Ggit.Cred | null

    // Class property signals of Gitg-1.0.Gitg.CredentialsProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CredentialsProvider {

    // Own properties of Gitg-1.0.Gitg.CredentialsProvider

    static name: string
    static $gtype: GObject.GType<CredentialsProvider>

    // Constructors of Gitg-1.0.Gitg.CredentialsProvider

    constructor(config?: CredentialsProvider_ConstructProps) 
    _init(config?: CredentialsProvider_ConstructProps): void
}

interface SidebarItem_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `activated`
 */
interface SidebarItem_ActivatedSignalCallback {
    (numclick: number): void
}

interface SidebarItem extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.SidebarItem

    readonly text: string
    readonly iconName: string

    // Owm methods of Gitg-1.0.Gitg.SidebarItem

    activate(numclick: number): void
    getText(): string
    getIconName(): string | null

    // Own signals of Gitg-1.0.Gitg.SidebarItem

    connect(sigName: "activated", callback: SidebarItem_ActivatedSignalCallback): number
    on(sigName: "activated", callback: SidebarItem_ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: SidebarItem_ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: SidebarItem_ActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.SidebarItem

    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SidebarItem {

    // Own properties of Gitg-1.0.Gitg.SidebarItem

    static name: string
    static $gtype: GObject.GType<SidebarItem>

    // Constructors of Gitg-1.0.Gitg.SidebarItem

    constructor(config?: SidebarItem_ConstructProps) 
    _init(config?: SidebarItem_ConstructProps): void
}

interface StageStatusItem_ConstructProps extends GObject.Object_ConstructProps {
}

interface StageStatusItem extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusItem

    readonly path: string
    readonly isStaged: boolean
    readonly isUnstaged: boolean
    readonly isUntracked: boolean
    readonly iconName: string

    // Owm methods of Gitg-1.0.Gitg.StageStatusItem

    getPath(): string
    getIsStaged(): boolean
    getIsUnstaged(): boolean
    getIsUntracked(): boolean
    getIconName(): string | null

    // Class property signals of Gitg-1.0.Gitg.StageStatusItem

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-staged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-unstaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-untracked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-untracked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-untracked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StageStatusItem {

    // Own properties of Gitg-1.0.Gitg.StageStatusItem

    static name: string
    static $gtype: GObject.GType<StageStatusItem>

    // Constructors of Gitg-1.0.Gitg.StageStatusItem

    constructor(config?: StageStatusItem_ConstructProps) 
    _init(config?: StageStatusItem_ConstructProps): void
}

interface Async {

    // Own fields of Gitg-1.0.Gitg.Async

    refCount: number
}

class Async {

    // Own properties of Gitg-1.0.Gitg.Async

    static name: string

    // Constructors of Gitg-1.0.Gitg.Async

    constructor() 
    static new(): Async
    static thread(func: any, callback: Gio.AsyncReadyCallback | null): void
    static threadFinish(res: Gio.AsyncResult): void
    static threadTry(func: any, callback: Gio.AsyncReadyCallback | null): void
    static threadTryFinish(res: Gio.AsyncResult): void
}

interface AuthenticationDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}

interface AuthenticationDialog {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialog

    readonly username: string
    readonly password: string
    readonly lifeTime: AuthenticationLifeTime

    // Conflicting properties

    window: any

    // Owm methods of Gitg-1.0.Gitg.AuthenticationDialog

    getUsername(): string
    getPassword(): string
    getLifeTime(): AuthenticationLifeTime

    // Conflicting methods

    mnemonicActivate(...args: any[]): any
    childNotify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.AuthenticationDialog

    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::life-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::life-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::life-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::life-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::life-time", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-header-bar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-header-bar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-header-bar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (...args: any[]) => void): number
    on(sigName: "notify::attached-to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attached-to", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (...args: any[]) => void): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (...args: any[]) => void): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-map", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-maximized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-maximized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (...args: any[]) => void): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (...args: any[]) => void): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (...args: any[]) => void): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (...args: any[]) => void): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgency-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgency-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthenticationDialog extends Gtk.Dialog {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialog

    static name: string
    static $gtype: GObject.GType<AuthenticationDialog>

    // Constructors of Gitg-1.0.Gitg.AuthenticationDialog

    constructor(config?: AuthenticationDialog_ConstructProps) 
    constructor(url: string, username: string | null, failed: boolean) 
    static new(url: string, username: string | null, failed: boolean): AuthenticationDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: AuthenticationDialog_ConstructProps): void
}

interface AvatarCache_ConstructProps extends GObject.Object_ConstructProps {
}

interface AvatarCache {

    // Owm methods of Gitg-1.0.Gitg.AvatarCache

    load(email: string, size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf | null

    // Class property signals of Gitg-1.0.Gitg.AvatarCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AvatarCache extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.AvatarCache

    static name: string
    static $gtype: GObject.GType<AvatarCache>

    // Constructors of Gitg-1.0.Gitg.AvatarCache

    constructor(config?: AvatarCache_ConstructProps) 
    _init(config?: AvatarCache_ConstructProps): void
    static default(): AvatarCache
}

interface BranchBase_ConstructProps extends Ref_ConstructProps, Branch_ConstructProps, Ggit.Branch_ConstructProps {
}

interface BranchBase extends Ref, Branch {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getOwner(...args: any[]): any
    getUpstream(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.BranchBase

    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-pushes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (...args: any[]) => void): number
    on(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::working", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BranchBase extends Ggit.Branch {

    // Own properties of Gitg-1.0.Gitg.BranchBase

    static name: string
    static $gtype: GObject.GType<BranchBase>

    // Constructors of Gitg-1.0.Gitg.BranchBase

    constructor(config?: BranchBase_ConstructProps) 
    constructor() 
    static new(): BranchBase
    _init(config?: BranchBase_ConstructProps): void
}

interface CellRendererLanes_ConstructProps extends Gtk.CellRendererText_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.CellRendererLanes

    commit?: Commit | null
    nextCommit?: Commit | null
    laneWidth?: number | null
    dotWidth?: number | null
    labels?: Ref[] | null
}

interface CellRendererLanes {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanes

    commit: Commit
    nextCommit: Commit
    laneWidth: number
    dotWidth: number
    labels: Ref[]

    // Owm methods of Gitg-1.0.Gitg.CellRendererLanes

    getRefAtPos(widget: Gtk.Widget, x: number, cellW: number): [ /* returnType */ Ref | null, /* hotX */ number ]
    getCommit(): Commit | null
    setCommit(value: Commit | null): void
    getNextCommit(): Commit | null
    setNextCommit(value: Commit | null): void
    getLaneWidth(): number
    setLaneWidth(value: number): void
    getDotWidth(): number
    setDotWidth(value: number): void
    getLabels(): Ref[]
    setLabels(value: Ref[]): void

    // Class property signals of Gitg-1.0.Gitg.CellRendererLanes

    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::next-commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-commit", ...args: any[]): void
    connect(sigName: "notify::lane-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::lane-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lane-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lane-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lane-width", ...args: any[]): void
    connect(sigName: "notify::dot-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::dot-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dot-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dot-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dot-width", ...args: any[]): void
    connect(sigName: "notify::labels", callback: (...args: any[]) => void): number
    on(sigName: "notify::labels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::labels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::labels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::labels", ...args: any[]): void
    connect(sigName: "notify::align-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::align-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::align-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::align-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (...args: any[]) => void): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: (...args: any[]) => void): number
    on(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-gdk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-gdk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (...args: any[]) => void): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::editable-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::editable-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (...args: any[]) => void): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::ellipsize-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (...args: any[]) => void): number
    on(sigName: "notify::family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::family-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::family-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (...args: any[]) => void): number
    on(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (...args: any[]) => void): number
    on(sigName: "notify::foreground", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::foreground", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void): number
    on(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::foreground-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::foreground-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (...args: any[]) => void): number
    on(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::language-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::language-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-width-chars", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-width-chars", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::placeholder-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::placeholder-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::placeholder-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (...args: any[]) => void): number
    on(sigName: "notify::rise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::rise-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rise-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::single-paragraph-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::single-paragraph-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::single-paragraph-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::single-paragraph-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::size-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::size-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (...args: any[]) => void): number
    on(sigName: "notify::stretch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stretch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::stretch-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stretch-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (...args: any[]) => void): number
    on(sigName: "notify::strikethrough", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::style-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (...args: any[]) => void): number
    on(sigName: "notify::underline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::underline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::underline-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::underline-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (...args: any[]) => void): number
    on(sigName: "notify::variant", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::variant", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::variant-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::variant-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (...args: any[]) => void): number
    on(sigName: "notify::weight", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::weight", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::weight-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::weight-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-chars", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-chars", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-chars", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::cell-background-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cell-background-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cell-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (...args: any[]) => void): number
    on(sigName: "notify::editing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::editing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::editing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-expanded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-expanded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-expanded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-expander", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-expander", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-expander", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (...args: any[]) => void): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (...args: any[]) => void): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (...args: any[]) => void): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (...args: any[]) => void): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CellRendererLanes extends Gtk.CellRendererText {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanes

    static name: string
    static $gtype: GObject.GType<CellRendererLanes>

    // Constructors of Gitg-1.0.Gitg.CellRendererLanes

    constructor(config?: CellRendererLanes_ConstructProps) 
    constructor() 
    static new(): CellRendererLanes

    // Overloads of new

    /**
     * Creates a new #GtkCellRendererText. Adjust how text is drawn using
     * object properties. Object properties can be
     * set globally (with g_object_set()). Also, with #GtkTreeViewColumn,
     * you can bind a property to a value in a #GtkTreeModel. For example,
     * you can bind the “text” property on the cell renderer to a string
     * value in the model, thus rendering a different string in each row
     * of the #GtkTreeView
     * @constructor 
     */
    static new(): Gtk.CellRendererText
    _init(config?: CellRendererLanes_ConstructProps): void
}

interface Color_ConstructProps extends GObject.Object_ConstructProps {
}

interface Color {

    // Own properties of Gitg-1.0.Gitg.Color

    readonly r: number
    readonly g: number
    readonly b: number

    // Own fields of Gitg-1.0.Gitg.Color

    idx: number

    // Owm methods of Gitg-1.0.Gitg.Color

    components(): [ /* r */ number, /* g */ number, /* b */ number ]
    nextIndex(): Color
    copy(): Color
    getR(): number
    getG(): number
    getB(): number

    // Class property signals of Gitg-1.0.Gitg.Color

    connect(sigName: "notify::r", callback: (...args: any[]) => void): number
    on(sigName: "notify::r", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::r", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::r", ...args: any[]): void
    connect(sigName: "notify::g", callback: (...args: any[]) => void): number
    on(sigName: "notify::g", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g", ...args: any[]): void
    connect(sigName: "notify::b", callback: (...args: any[]) => void): number
    on(sigName: "notify::b", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::b", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::b", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Color extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Color

    static name: string
    static $gtype: GObject.GType<Color>

    // Constructors of Gitg-1.0.Gitg.Color

    constructor(config?: Color_ConstructProps) 
    constructor() 
    static new(): Color
    _init(config?: Color_ConstructProps): void
    static reset(): void
    static next(): Color
}

interface CommitListView_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.TreeView_ConstructProps {
}

interface CommitListView extends Gtk.Buildable {

    // Owm methods of Gitg-1.0.Gitg.CommitListView

    findCellAtPos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [ /* returnType */ Gtk.CellRenderer | null, /* width */ number ]

    // Conflicting methods

    childNotify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.CommitListView

    connect(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::expander-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expander-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expander-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers-clickable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers-clickable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (...args: any[]) => void): number
    on(sigName: "notify::level-indentation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level-indentation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level-indentation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (...args: any[]) => void): number
    on(sigName: "notify::reorderable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reorderable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): number
    on(sigName: "notify::rubber-banding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rubber-banding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::rules-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rules-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rules-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-expanders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-expanders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-expanders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CommitListView extends Gtk.TreeView {

    // Own properties of Gitg-1.0.Gitg.CommitListView

    static name: string
    static $gtype: GObject.GType<CommitListView>

    // Constructors of Gitg-1.0.Gitg.CommitListView

    constructor(config?: CommitListView_ConstructProps) 
    constructor(model: CommitModel) 
    static new(model: CommitModel): CommitListView

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    static forRepository(repository: Repository): CommitListView
    _init(config?: CommitListView_ConstructProps): void
}

interface CommitModel_ConstructProps extends Gtk.TreeModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.CommitModel

    limit?: number | null
    sortMode?: Ggit.SortMode | null
    repository?: Repository | null
}

/**
 * Signal callback interface for `started`
 */
interface CommitModel_StartedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `update`
 */
interface CommitModel_UpdateSignalCallback {
    (added: number): void
}

/**
 * Signal callback interface for `finished`
 */
interface CommitModel_FinishedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `begin-clear`
 */
interface CommitModel_BeginClearSignalCallback {
    (): void
}

/**
 * Signal callback interface for `end-clear`
 */
interface CommitModel_EndClearSignalCallback {
    (): void
}

interface CommitModel extends Gtk.TreeModel {

    // Own properties of Gitg-1.0.Gitg.CommitModel

    limit: number
    sortMode: Ggit.SortMode
    repository: Repository

    // Owm methods of Gitg-1.0.Gitg.CommitModel

    getPermanentLanes(): Ggit.OId[]
    setPermanentLanes(value: Ggit.OId[]): void
    reload(): void
    size(): number
    get(idx: number): Commit | null
    setInclude(ids: Ggit.OId[]): void
    getInclude(): Ggit.OId[]
    setExclude(ids: Ggit.OId[]): void
    commitFromIter(iter: Gtk.TreeIter): Commit | null
    pathFromCommit(commit: Commit): Gtk.TreePath | null
    commitFromPath(path: Gtk.TreePath): Commit | null
    getLimit(): number
    setLimit(value: number): void
    getSortMode(): Ggit.SortMode
    setSortMode(value: Ggit.SortMode): void
    getRepository(): Repository
    setRepository(value: Repository): void

    // Own signals of Gitg-1.0.Gitg.CommitModel

    connect(sigName: "started", callback: CommitModel_StartedSignalCallback): number
    on(sigName: "started", callback: CommitModel_StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: CommitModel_StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: CommitModel_StartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "update", callback: CommitModel_UpdateSignalCallback): number
    on(sigName: "update", callback: CommitModel_UpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update", callback: CommitModel_UpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update", callback: CommitModel_UpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update", ...args: any[]): void
    connect(sigName: "finished", callback: CommitModel_FinishedSignalCallback): number
    on(sigName: "finished", callback: CommitModel_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: CommitModel_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: CommitModel_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "begin-clear", callback: CommitModel_BeginClearSignalCallback): number
    on(sigName: "begin-clear", callback: CommitModel_BeginClearSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-clear", callback: CommitModel_BeginClearSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-clear", callback: CommitModel_BeginClearSignalCallback): NodeJS.EventEmitter
    emit(sigName: "begin-clear", ...args: any[]): void
    connect(sigName: "end-clear", callback: CommitModel_EndClearSignalCallback): number
    on(sigName: "end-clear", callback: CommitModel_EndClearSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-clear", callback: CommitModel_EndClearSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-clear", callback: CommitModel_EndClearSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-clear", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.CommitModel

    connect(sigName: "notify::limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::limit", ...args: any[]): void
    connect(sigName: "notify::sort-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-mode", ...args: any[]): void
    connect(sigName: "notify::repository", callback: (...args: any[]) => void): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CommitModel extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.CommitModel

    static name: string
    static $gtype: GObject.GType<CommitModel>

    // Constructors of Gitg-1.0.Gitg.CommitModel

    constructor(config?: CommitModel_ConstructProps) 
    constructor(repository: Repository | null) 
    static new(repository: Repository | null): CommitModel
    _init(config?: CommitModel_ConstructProps): void
}

interface Commit_ConstructProps extends Ggit.Commit_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Commit

    tag?: LaneTag | null
    mylane?: number | null
}

interface Commit {

    // Own properties of Gitg-1.0.Gitg.Commit

    tag: LaneTag
    mylane: number
    readonly lane: Lane
    readonly formatPatchName: string
    readonly committerDateForDisplay: string
    readonly authorDateForDisplay: string

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Commit

    getLanes(): Lane[]
    insertLane(lane: Lane, idx: number): Lane[]
    removeLane(lane: Lane): Lane[]
    updateLanes(lanes: Lane[], mylane: number): void
    getDiff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff
    getNote(): Ggit.Note
    getTag(): LaneTag
    setTag(value: LaneTag): void
    getMylane(): number
    setMylane(value: number): void
    getLane(): Lane
    getFormatPatchName(): string
    getCommitterDateForDisplay(): string
    getAuthorDateForDisplay(): string

    // Class property signals of Gitg-1.0.Gitg.Commit

    connect(sigName: "notify::tag", callback: (...args: any[]) => void): number
    on(sigName: "notify::tag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::mylane", callback: (...args: any[]) => void): number
    on(sigName: "notify::mylane", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mylane", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mylane", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mylane", ...args: any[]): void
    connect(sigName: "notify::lane", callback: (...args: any[]) => void): number
    on(sigName: "notify::lane", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lane", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lane", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lane", ...args: any[]): void
    connect(sigName: "notify::format-patch-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::format-patch-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format-patch-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format-patch-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format-patch-name", ...args: any[]): void
    connect(sigName: "notify::committer-date-for-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::committer-date-for-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::committer-date-for-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::committer-date-for-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::committer-date-for-display", ...args: any[]): void
    connect(sigName: "notify::author-date-for-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::author-date-for-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author-date-for-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author-date-for-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author-date-for-display", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Commit extends Ggit.Commit {

    // Own properties of Gitg-1.0.Gitg.Commit

    static name: string
    static $gtype: GObject.GType<Commit>

    // Constructors of Gitg-1.0.Gitg.Commit

    constructor(config?: Commit_ConstructProps) 
    constructor() 
    static new(): Commit
    _init(config?: Commit_ConstructProps): void
}

interface CredentialsManager {

    // Own fields of Gitg-1.0.Gitg.CredentialsManager

    refCount: number

    // Owm methods of Gitg-1.0.Gitg.CredentialsManager

    credentials(url: string, username: string | null, allowedTypes: Ggit.Credtype): Ggit.Cred | null
}

class CredentialsManager {

    // Own properties of Gitg-1.0.Gitg.CredentialsManager

    static name: string

    // Constructors of Gitg-1.0.Gitg.CredentialsManager

    constructor(config: Ggit.Config | null, window: Gtk.Window, saveUserInConfig: boolean) 
    static new(config: Ggit.Config | null, window: Gtk.Window, saveUserInConfig: boolean): CredentialsManager
}

interface Date_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Date

    dateString?: string | null
}

interface Date extends Gio.Initable {

    // Own properties of Gitg-1.0.Gitg.Date

    dateString: string
    readonly date: GLib.DateTime

    // Owm methods of Gitg-1.0.Gitg.Date

    forDisplay(): string
    getDateString(): string
    setDateString(value: string): void
    getDate(): GLib.DateTime

    // Class property signals of Gitg-1.0.Gitg.Date

    connect(sigName: "notify::date-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::date-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date-string", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Date extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Date

    static name: string
    static $gtype: GObject.GType<Date>

    // Constructors of Gitg-1.0.Gitg.Date

    constructor(config?: Date_ConstructProps) 
    constructor(date: string) 
    static new(date: string): Date
    static forDateTime(dt: GLib.DateTime): Date
    _init(config?: Date_ConstructProps): void
    static parse(date: string): GLib.DateTime
}

interface DiffStat_ConstructProps extends Gtk.DrawingArea_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.DiffStat

    added?: number | null
    removed?: number | null
}

interface DiffStat {

    // Own properties of Gitg-1.0.Gitg.DiffStat

    added: number
    removed: number

    // Owm methods of Gitg-1.0.Gitg.DiffStat

    getAdded(): number
    setAdded(value: number): void
    getRemoved(): number
    setRemoved(value: number): void

    // Class property signals of Gitg-1.0.Gitg.DiffStat

    connect(sigName: "notify::added", callback: (...args: any[]) => void): number
    on(sigName: "notify::added", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::added", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::added", ...args: any[]): void
    connect(sigName: "notify::removed", callback: (...args: any[]) => void): number
    on(sigName: "notify::removed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::removed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::removed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::removed", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DiffStat extends Gtk.DrawingArea {

    // Own properties of Gitg-1.0.Gitg.DiffStat

    static name: string
    static $gtype: GObject.GType<DiffStat>

    // Constructors of Gitg-1.0.Gitg.DiffStat

    constructor(config?: DiffStat_ConstructProps) 
    constructor() 
    static new(): DiffStat

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     */
    static new(): Gtk.DrawingArea
    _init(config?: DiffStat_ConstructProps): void
}

interface DiffViewOptions_ConstructProps extends Gtk.Toolbar_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.DiffViewOptions

    contextLines?: number | null
    view?: DiffView | null
}

interface DiffViewOptions {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptions

    contextLines: number
    view: DiffView

    // Owm methods of Gitg-1.0.Gitg.DiffViewOptions

    getContextLines(): number
    setContextLines(value: number): void
    getView(): DiffView | null
    setView(value: DiffView | null): void

    // Conflicting methods

    getIconSize(...args: any[]): any
    getStyle(...args: any[]): any
    setStyle(...args: any[]): any
    childNotify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.DiffViewOptions

    connect(sigName: "notify::context-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::context-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context-lines", ...args: any[]): void
    connect(sigName: "notify::view", callback: (...args: any[]) => void): number
    on(sigName: "notify::view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::icon-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-size", ...args: any[]): void
    connect(sigName: "notify::icon-size-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-size-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-size-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-size-set", ...args: any[]): void
    connect(sigName: "notify::show-arrow", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-arrow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-arrow", ...args: any[]): void
    connect(sigName: "notify::toolbar-style", callback: (...args: any[]) => void): number
    on(sigName: "notify::toolbar-style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::toolbar-style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::toolbar-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::toolbar-style", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DiffViewOptions extends Gtk.Toolbar {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptions

    static name: string
    static $gtype: GObject.GType<DiffViewOptions>

    // Constructors of Gitg-1.0.Gitg.DiffViewOptions

    constructor(config?: DiffViewOptions_ConstructProps) 
    constructor(view: DiffView | null) 
    static new(view: DiffView | null): DiffViewOptions

    // Overloads of new

    /**
     * Creates a new toolbar.
     * @constructor 
     */
    static new(): Gtk.Toolbar
    _init(config?: DiffViewOptions_ConstructProps): void
}

interface DiffView_ConstructProps extends Gtk.Grid_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.DiffView

    hasSelection?: boolean | null
    diff?: Ggit.Diff | null
    commit?: Commit | null
    wrapLines?: boolean | null
    staged?: boolean | null
    unstaged?: boolean | null
    showParents?: boolean | null
    defaultCollapseAll?: boolean | null
    useGravatar?: boolean | null
    tabWidth?: number | null
    handleSelection?: boolean | null
    highlight?: boolean | null
    repository?: Repository | null
    newIsWorkdir?: boolean | null
    ignoreWhitespace?: boolean | null
    changesInline?: boolean | null
    contextLines?: number | null
}

/**
 * Signal callback interface for `options-changed`
 */
interface DiffView_OptionsChangedSignalCallback {
    (): void
}

interface DiffView {

    // Own properties of Gitg-1.0.Gitg.DiffView

    readonly options: Ggit.DiffOptions
    hasSelection: boolean
    diff: Ggit.Diff
    commit: Commit
    wrapLines: boolean
    staged: boolean
    unstaged: boolean
    showParents: boolean
    defaultCollapseAll: boolean
    useGravatar: boolean
    tabWidth: number
    handleSelection: boolean
    highlight: boolean
    repository: Repository
    newIsWorkdir: boolean
    ignoreWhitespace: boolean
    changesInline: boolean
    contextLines: number

    // Owm methods of Gitg-1.0.Gitg.DiffView

    applyLinkTags(buffer: Gtk.TextBuffer, regex: GLib.Regex, replacement: string | null, customColorLink: Gdk.RGBA, isCustomColor: boolean, isCustomLink: boolean): void
    followIfLink(texview: Gtk.Widget, iter: Gtk.TextIter): void
    getSelection(): PatchSet[]
    getOptions(): Ggit.DiffOptions
    getHasSelection(): boolean
    getDiff(): Ggit.Diff | null
    setDiff(value: Ggit.Diff | null): void
    getCommit(): Commit | null
    setCommit(value: Commit | null): void
    getWrapLines(): boolean
    setWrapLines(value: boolean): void
    getStaged(): boolean
    setStaged(value: boolean): void
    getUnstaged(): boolean
    setUnstaged(value: boolean): void
    getShowParents(): boolean
    setShowParents(value: boolean): void
    getDefaultCollapseAll(): boolean
    setDefaultCollapseAll(value: boolean): void
    getUseGravatar(): boolean
    setUseGravatar(value: boolean): void
    getTabWidth(): number
    setTabWidth(value: number): void
    getHandleSelection(): boolean
    setHandleSelection(value: boolean): void
    getHighlight(): boolean
    setHighlight(value: boolean): void
    getRepository(): Repository | null
    setRepository(value: Repository | null): void
    getNewIsWorkdir(): boolean
    setNewIsWorkdir(value: boolean): void
    getIgnoreWhitespace(): boolean
    setIgnoreWhitespace(value: boolean): void
    getChangesInline(): boolean
    setChangesInline(value: boolean): void
    getContextLines(): number
    setContextLines(value: number): void

    // Conflicting methods

    childNotify(...args: any[]): any

    // Own signals of Gitg-1.0.Gitg.DiffView

    connect(sigName: "options-changed", callback: DiffView_OptionsChangedSignalCallback): number
    on(sigName: "options-changed", callback: DiffView_OptionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "options-changed", callback: DiffView_OptionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "options-changed", callback: DiffView_OptionsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "options-changed", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.DiffView

    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::diff", callback: (...args: any[]) => void): number
    on(sigName: "notify::diff", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::diff", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::diff", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::diff", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::wrap-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap-lines", ...args: any[]): void
    connect(sigName: "notify::staged", callback: (...args: any[]) => void): number
    on(sigName: "notify::staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::staged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::staged", ...args: any[]): void
    connect(sigName: "notify::unstaged", callback: (...args: any[]) => void): number
    on(sigName: "notify::unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unstaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unstaged", ...args: any[]): void
    connect(sigName: "notify::show-parents", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-parents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-parents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-parents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-parents", ...args: any[]): void
    connect(sigName: "notify::default-collapse-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-collapse-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-collapse-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-collapse-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-collapse-all", ...args: any[]): void
    connect(sigName: "notify::use-gravatar", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-gravatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-gravatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-gravatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-gravatar", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::handle-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle-selection", ...args: any[]): void
    connect(sigName: "notify::highlight", callback: (...args: any[]) => void): number
    on(sigName: "notify::highlight", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::highlight", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::highlight", ...args: any[]): void
    connect(sigName: "notify::repository", callback: (...args: any[]) => void): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::new-is-workdir", callback: (...args: any[]) => void): number
    on(sigName: "notify::new-is-workdir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::new-is-workdir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::new-is-workdir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::new-is-workdir", ...args: any[]): void
    connect(sigName: "notify::ignore-whitespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-whitespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-whitespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-whitespace", ...args: any[]): void
    connect(sigName: "notify::changes-inline", callback: (...args: any[]) => void): number
    on(sigName: "notify::changes-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::changes-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::changes-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::changes-inline", ...args: any[]): void
    connect(sigName: "notify::context-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::context-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context-lines", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (...args: any[]) => void): number
    on(sigName: "notify::baseline-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baseline-row", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baseline-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-homogeneous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (...args: any[]) => void): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DiffView extends Gtk.Grid {

    // Own properties of Gitg-1.0.Gitg.DiffView

    static name: string
    static $gtype: GObject.GType<DiffView>

    // Constructors of Gitg-1.0.Gitg.DiffView

    constructor(config?: DiffView_ConstructProps) 
    constructor() 
    static new(): DiffView

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: DiffView_ConstructProps): void
}

interface FontManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface FontManager {

    // Class property signals of Gitg-1.0.Gitg.FontManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FontManager extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.FontManager

    static name: string
    static $gtype: GObject.GType<FontManager>

    // Constructors of Gitg-1.0.Gitg.FontManager

    constructor(config?: FontManager_ConstructProps) 
    constructor(textView: Gtk.TextView, plugin: boolean) 
    static new(textView: Gtk.TextView, plugin: boolean): FontManager
    _init(config?: FontManager_ConstructProps): void
}

interface Hook_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Hook

    environment?: Gee.HashMap | null
    name?: string | null
    workingDirectory?: Gio.File | null
}

interface Hook {

    // Own properties of Gitg-1.0.Gitg.Hook

    environment: Gee.HashMap
    name: string
    workingDirectory: Gio.File
    readonly output: string[]

    // Owm methods of Gitg-1.0.Gitg.Hook

    addArgument(arg: string): void
    existsIn(repository: Ggit.Repository): boolean
    runSync(repository: Ggit.Repository): number
    run(repository: Ggit.Repository, callback: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): number
    getEnvironment(): Gee.HashMap
    setEnvironment(value: Gee.HashMap): void
    getName(): string
    setName(value: string): void
    getWorkingDirectory(): Gio.File | null
    setWorkingDirectory(value: Gio.File | null): void
    getOutput(): string[]

    // Class property signals of Gitg-1.0.Gitg.Hook

    connect(sigName: "notify::environment", callback: (...args: any[]) => void): number
    on(sigName: "notify::environment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::environment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::environment", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::working-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::working-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::working-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::working-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::working-directory", ...args: any[]): void
    connect(sigName: "notify::output", callback: (...args: any[]) => void): number
    on(sigName: "notify::output", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Hook extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Hook

    static name: string
    static $gtype: GObject.GType<Hook>

    // Constructors of Gitg-1.0.Gitg.Hook

    constructor(config?: Hook_ConstructProps) 
    constructor(name: string) 
    static new(name: string): Hook
    _init(config?: Hook_ConstructProps): void
}

interface LabelRenderer {

    // Own fields of Gitg-1.0.Gitg.LabelRenderer

    refCount: number
}

class LabelRenderer {

    // Own properties of Gitg-1.0.Gitg.LabelRenderer

    static name: string

    // Constructors of Gitg-1.0.Gitg.LabelRenderer

    constructor() 
    static new(): LabelRenderer
    static width(widget: Gtk.Widget, font: object | null, labels: Ref[]): number
    static draw(widget: Gtk.Widget, font: Pango.FontDescription, context: cairo.Context, labels: Ref[], area: Gdk.Rectangle): void
    static getRefAtPos(widget: Gtk.Widget, font: Pango.FontDescription, labels: Ref[], x: number): [ /* returnType */ Ref | null, /* hotX */ number ]
    static renderRef(widget: Gtk.Widget, font: Pango.FontDescription, r: Ref, height: number, minwidth: number): GdkPixbuf.Pixbuf
}

interface Lanes_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Lanes

    inactiveMax?: number | null
    inactiveCollapse?: number | null
    inactiveGap?: number | null
    inactiveEnabled?: boolean | null
    missCommits?: Gee.LinkedList | null
}

interface Lanes {

    // Own properties of Gitg-1.0.Gitg.Lanes

    inactiveMax: number
    inactiveCollapse: number
    inactiveGap: number
    inactiveEnabled: boolean
    missCommits: Gee.LinkedList

    // Owm methods of Gitg-1.0.Gitg.Lanes

    reset(reserved: Ggit.OId[] | null, roots: Gee.HashSet | null): void
    next(next: Commit, saveMiss: boolean): [ /* returnType */ boolean, /* lanes */ Lane[], /* nextpos */ number ]
    getInactiveMax(): number
    setInactiveMax(value: number): void
    getInactiveCollapse(): number
    setInactiveCollapse(value: number): void
    getInactiveGap(): number
    setInactiveGap(value: number): void
    getInactiveEnabled(): boolean
    setInactiveEnabled(value: boolean): void
    getMissCommits(): Gee.LinkedList
    setMissCommits(value: Gee.LinkedList): void

    // Class property signals of Gitg-1.0.Gitg.Lanes

    connect(sigName: "notify::inactive-max", callback: (...args: any[]) => void): number
    on(sigName: "notify::inactive-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inactive-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inactive-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inactive-max", ...args: any[]): void
    connect(sigName: "notify::inactive-collapse", callback: (...args: any[]) => void): number
    on(sigName: "notify::inactive-collapse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inactive-collapse", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inactive-collapse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inactive-collapse", ...args: any[]): void
    connect(sigName: "notify::inactive-gap", callback: (...args: any[]) => void): number
    on(sigName: "notify::inactive-gap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inactive-gap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inactive-gap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inactive-gap", ...args: any[]): void
    connect(sigName: "notify::inactive-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::inactive-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inactive-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inactive-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inactive-enabled", ...args: any[]): void
    connect(sigName: "notify::miss-commits", callback: (...args: any[]) => void): number
    on(sigName: "notify::miss-commits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::miss-commits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::miss-commits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::miss-commits", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Lanes extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Lanes

    static name: string
    static $gtype: GObject.GType<Lanes>

    // Constructors of Gitg-1.0.Gitg.Lanes

    constructor(config?: Lanes_ConstructProps) 
    constructor() 
    static new(): Lanes
    _init(config?: Lanes_ConstructProps): void
}

interface Lane_ConstructProps extends GObject.Object_ConstructProps {
}

interface Lane {

    // Own fields of Gitg-1.0.Gitg.Lane

    color: Color
    from: number[]
    tag: LaneTag
    boundaryId: Ggit.OId | null

    // Owm methods of Gitg-1.0.Gitg.Lane

    copy(): Lane
    dup(): Lane

    // Class property signals of Gitg-1.0.Gitg.Lane

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Lane extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Lane

    static name: string
    static $gtype: GObject.GType<Lane>

    // Constructors of Gitg-1.0.Gitg.Lane

    constructor(config?: Lane_ConstructProps) 
    constructor() 
    static new(): Lane
    static withColor(color: Color | null): Lane
    _init(config?: Lane_ConstructProps): void
}

interface ProgressBin_ConstructProps extends Gtk.Bin_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.ProgressBin

    fraction?: number | null
}

interface ProgressBin {

    // Own properties of Gitg-1.0.Gitg.ProgressBin

    fraction: number

    // Owm methods of Gitg-1.0.Gitg.ProgressBin

    getFraction(): number
    setFraction(value: number): void

    // Conflicting methods

    childNotify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.ProgressBin

    connect(sigName: "notify::fraction", callback: (...args: any[]) => void): number
    on(sigName: "notify::fraction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fraction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fraction", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ProgressBin extends Gtk.Bin {

    // Own properties of Gitg-1.0.Gitg.ProgressBin

    static name: string
    static $gtype: GObject.GType<ProgressBin>

    // Constructors of Gitg-1.0.Gitg.ProgressBin

    constructor(config?: ProgressBin_ConstructProps) 
    constructor() 
    static new(): ProgressBin
    _init(config?: ProgressBin_ConstructProps): void
}

interface RefBase_ConstructProps extends Ref_ConstructProps, Ggit.Ref_ConstructProps {
}

interface RefBase extends Ref {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getOwner(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.RefBase

    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-parsed-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (...args: any[]) => void): number
    on(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::d-pushes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::d-pushes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (...args: any[]) => void): number
    on(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::working", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::working", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RefBase extends Ggit.Ref {

    // Own properties of Gitg-1.0.Gitg.RefBase

    static name: string
    static $gtype: GObject.GType<RefBase>

    // Constructors of Gitg-1.0.Gitg.RefBase

    constructor(config?: RefBase_ConstructProps) 
    constructor() 
    static new(): RefBase
    _init(config?: RefBase_ConstructProps): void
}

interface ParsedRefName_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.ParsedRefName

    rtype?: RefType | null
}

interface ParsedRefName {

    // Own properties of Gitg-1.0.Gitg.ParsedRefName

    rtype: RefType
    readonly name: string
    readonly shortname: string
    readonly remoteName: string
    readonly remoteBranch: string
    readonly prefix: string

    // Owm methods of Gitg-1.0.Gitg.ParsedRefName

    getRtype(): RefType
    getName(): string
    getShortname(): string
    getRemoteName(): string | null
    getRemoteBranch(): string | null
    getPrefix(): string | null

    // Class property signals of Gitg-1.0.Gitg.ParsedRefName

    connect(sigName: "notify::rtype", callback: (...args: any[]) => void): number
    on(sigName: "notify::rtype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rtype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rtype", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::shortname", callback: (...args: any[]) => void): number
    on(sigName: "notify::shortname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shortname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shortname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shortname", ...args: any[]): void
    connect(sigName: "notify::remote-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-name", ...args: any[]): void
    connect(sigName: "notify::remote-branch", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-branch", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (...args: any[]) => void): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ParsedRefName extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.ParsedRefName

    static name: string
    static $gtype: GObject.GType<ParsedRefName>

    // Constructors of Gitg-1.0.Gitg.ParsedRefName

    constructor(config?: ParsedRefName_ConstructProps) 
    constructor(name: string) 
    static new(name: string): ParsedRefName
    _init(config?: ParsedRefName_ConstructProps): void
}

interface Remote_ConstructProps extends Ggit.Remote_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Remote

    state?: RemoteState | null
    fetchSpecs?: string[] | null
    pushSpecs?: string[] | null
    credentialsProvider?: CredentialsProvider | null
}

/**
 * Signal callback interface for `tip-updated`
 */
interface Remote_TipUpdatedSignalCallback {
    (refname: string, a: Ggit.OId, b: Ggit.OId): void
}

interface Remote {

    // Own properties of Gitg-1.0.Gitg.Remote

    readonly transferProgress: number
    state: RemoteState
    fetchSpecs: string[]
    pushSpecs: string[]
    credentialsProvider: CredentialsProvider

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Remote

    // TODO fix conflict: connect(direction: Ggit.Direction, callbacks: Ggit.RemoteCallbacks | null, callback: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): void
    disconnect(callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of disconnect

    /**
     * Closes the connection to the remote and frees the underlying
     * transport.
     */
    disconnect(): void
    disconnect(...args: any[]): any
    disconnect(...args: any[]): void | any
    disconnectFinish(res: Gio.AsyncResult): void
    download(callbacks: Ggit.RemoteCallbacks | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of download

    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing and download the resulting packfile and
     * its index.
     * @param specs the ref specs.
     * @param fetchOptions a #GgitFetchOptions.
     */
    download(specs: string[] | null, fetchOptions?: Ggit.FetchOptions): boolean
    download(...args: any[]): any
    download(args_or_specs: any[] | string[] | null, fetchOptions?: Ggit.FetchOptions): void | boolean | any
    downloadFinish(res: Gio.AsyncResult): void
    push(branch: string, callbacks?: Ggit.RemoteCallbacks | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of push

    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing, create a packfile with the missing
     * objects and send it.
     * @param specs the ref specs.
     * @param pushOptions a #GgitPushOptions.
     */
    push(specs: string[] | null, pushOptions?: Ggit.PushOptions): boolean
    push(...args: any[]): any
    push(args_or_specs: any[] | string[] | null, pushOptions?: Ggit.PushOptions): void | boolean | any
    pushFinish(res: Gio.AsyncResult): void
    fetch(message: string | null, callbacks: Ggit.RemoteCallbacks | null, callback: Gio.AsyncReadyCallback | null): void
    fetchFinish(res: Gio.AsyncResult): void
    getTransferProgress(): number
    getState(): RemoteState
    getFetchSpecs(): string[] | null
    setFetchSpecs(value: string[] | null): void
    getPushSpecs(): string[] | null
    setPushSpecs(value: string[] | null): void
    getCredentialsProvider(): CredentialsProvider | null
    setCredentialsProvider(value: CredentialsProvider | null): void

    // Own signals of Gitg-1.0.Gitg.Remote

    connect(sigName: "tip-updated", callback: Remote_TipUpdatedSignalCallback): number
    on(sigName: "tip-updated", callback: Remote_TipUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tip-updated", callback: Remote_TipUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tip-updated", callback: Remote_TipUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "tip-updated", a: Ggit.OId, b: Ggit.OId, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.Remote

    connect(sigName: "notify::transfer-progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::transfer-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transfer-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transfer-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transfer-progress", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::fetch-specs", callback: (...args: any[]) => void): number
    on(sigName: "notify::fetch-specs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fetch-specs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fetch-specs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fetch-specs", ...args: any[]): void
    connect(sigName: "notify::push-specs", callback: (...args: any[]) => void): number
    on(sigName: "notify::push-specs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::push-specs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::push-specs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::push-specs", ...args: any[]): void
    connect(sigName: "notify::credentials-provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::credentials-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::credentials-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::credentials-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::credentials-provider", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Remote extends Ggit.Remote {

    // Own properties of Gitg-1.0.Gitg.Remote

    static name: string
    static $gtype: GObject.GType<Remote>

    // Constructors of Gitg-1.0.Gitg.Remote

    constructor(config?: Remote_ConstructProps) 
    constructor() 
    static new(): Remote

    // Overloads of new

    /**
     * Creates a remote with the default refspecs in memory. You can use
     * this when you have a URL instead of a remote's name.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param name the remote's name.
     * @param url the remote repository's URL.
     */
    static new(repository: Ggit.Repository, name: string, url: string): Ggit.Remote
    _init(config?: Remote_ConstructProps): void
}

interface RepositoryListBox_ConstructProps extends Gtk.ListBox_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.RepositoryListBox

    mode?: SelectionMode | null
    bookmarksFromRecentFiles?: boolean | null
    location?: Gio.File | null
}

/**
 * Signal callback interface for `repository-activated`
 */
interface RepositoryListBox_RepositoryActivatedSignalCallback {
    (repository: Repository): void
}

/**
 * Signal callback interface for `show-error`
 */
interface RepositoryListBox_ShowErrorSignalCallback {
    (primaryMessage: string, secondaryMessage: string): void
}

interface RepositoryListBox {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBox

    mode: SelectionMode
    bookmarksFromRecentFiles: boolean
    location: Gio.File
    readonly hasSelection: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.RepositoryListBox

    populateBookmarks(): void
    endCloning(row: RepositoryListBoxRow, repository: Repository | null): void
    beginCloning(location: Gio.File): RepositoryListBoxRow | null
    addRepository(repository: Repository, visited: GLib.DateTime | null): RepositoryListBoxRow | null
    getSelection(): RepositoryListBoxRow[]
    filterText(text: string | null): void
    getMode(): SelectionMode
    setMode(value: SelectionMode): void
    getBookmarksFromRecentFiles(): boolean
    setBookmarksFromRecentFiles(value: boolean): void
    getLocation(): Gio.File | null
    setLocation(value: Gio.File | null): void
    getHasSelection(): boolean

    // Conflicting methods

    childNotify(...args: any[]): any

    // Own signals of Gitg-1.0.Gitg.RepositoryListBox

    connect(sigName: "repository-activated", callback: RepositoryListBox_RepositoryActivatedSignalCallback): number
    on(sigName: "repository-activated", callback: RepositoryListBox_RepositoryActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-activated", callback: RepositoryListBox_RepositoryActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-activated", callback: RepositoryListBox_RepositoryActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "repository-activated", ...args: any[]): void
    connect(sigName: "show-error", callback: RepositoryListBox_ShowErrorSignalCallback): number
    on(sigName: "show-error", callback: RepositoryListBox_ShowErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-error", callback: RepositoryListBox_ShowErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-error", callback: RepositoryListBox_ShowErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-error", secondaryMessage: string, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.RepositoryListBox

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::bookmarks-from-recent-files", callback: (...args: any[]) => void): number
    on(sigName: "notify::bookmarks-from-recent-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bookmarks-from-recent-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bookmarks-from-recent-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bookmarks-from-recent-files", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::selection-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::selection-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selection-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selection-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RepositoryListBox extends Gtk.ListBox {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBox

    static name: string
    static $gtype: GObject.GType<RepositoryListBox>

    // Constructors of Gitg-1.0.Gitg.RepositoryListBox

    constructor(config?: RepositoryListBox_ConstructProps) 
    constructor() 
    static new(): RepositoryListBox

    // Overloads of new

    /**
     * Creates a new #GtkListBox container.
     * @constructor 
     */
    static new(): Gtk.ListBox
    _init(config?: RepositoryListBox_ConstructProps): void
}

interface RepositoryListBoxRow_ConstructProps extends Gtk.ListBoxRow_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.RepositoryListBoxRow

    mode?: SelectionMode | null
    selected?: boolean | null
    repository?: Repository | null
    canRemove?: boolean | null
    time?: GLib.DateTime | null
    fraction?: number | null
    repositoryName?: string | null
    dirname?: string | null
    branchName?: string | null
    loading?: boolean | null
}

/**
 * Signal callback interface for `request-remove`
 */
interface RepositoryListBoxRow_RequestRemoveSignalCallback {
    (): void
}

interface RepositoryListBoxRow {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRow

    mode: SelectionMode
    selected: boolean
    repository: Repository
    canRemove: boolean
    time: GLib.DateTime
    fraction: number
    repositoryName: string
    dirname: string
    branchName: string
    loading: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.RepositoryListBoxRow

    getMode(): SelectionMode
    setMode(value: SelectionMode): void
    getSelected(): boolean
    setSelected(value: boolean): void
    getRepository(): Repository | null
    setRepository(value: Repository | null): void
    getCanRemove(): boolean
    setCanRemove(value: boolean): void
    getTime(): GLib.DateTime
    setTime(value: GLib.DateTime): void
    setFraction(value: number): void
    getRepositoryName(): string | null
    setRepositoryName(value: string | null): void
    getDirname(): string | null
    setDirname(value: string | null): void
    getBranchName(): string | null
    setBranchName(value: string | null): void
    getLoading(): boolean
    setLoading(value: boolean): void

    // Conflicting methods

    childNotify(...args: any[]): any

    // Own signals of Gitg-1.0.Gitg.RepositoryListBoxRow

    connect(sigName: "request-remove", callback: RepositoryListBoxRow_RequestRemoveSignalCallback): number
    on(sigName: "request-remove", callback: RepositoryListBoxRow_RequestRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-remove", callback: RepositoryListBoxRow_RequestRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-remove", callback: RepositoryListBoxRow_RequestRemoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-remove", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.RepositoryListBoxRow

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::repository", callback: (...args: any[]) => void): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::can-remove", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-remove", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-remove", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-remove", ...args: any[]): void
    connect(sigName: "notify::time", callback: (...args: any[]) => void): number
    on(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::fraction", callback: (...args: any[]) => void): number
    on(sigName: "notify::fraction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fraction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fraction", ...args: any[]): void
    connect(sigName: "notify::repository-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::repository-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repository-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repository-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repository-name", ...args: any[]): void
    connect(sigName: "notify::dirname", callback: (...args: any[]) => void): number
    on(sigName: "notify::dirname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dirname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dirname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dirname", ...args: any[]): void
    connect(sigName: "notify::branch-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::branch-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::branch-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::branch-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::branch-name", ...args: any[]): void
    connect(sigName: "notify::loading", callback: (...args: any[]) => void): number
    on(sigName: "notify::loading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loading", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (...args: any[]) => void): number
    on(sigName: "notify::activatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::activatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::activatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RepositoryListBoxRow extends Gtk.ListBoxRow {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRow

    static name: string
    static $gtype: GObject.GType<RepositoryListBoxRow>

    // Constructors of Gitg-1.0.Gitg.RepositoryListBoxRow

    constructor(config?: RepositoryListBoxRow_ConstructProps) 
    constructor(repository: Repository | null, dirname: string) 
    static new(repository: Repository | null, dirname: string): RepositoryListBoxRow

    // Overloads of new

    /**
     * Creates a new #GtkListBoxRow, to be used as a child of a #GtkListBox.
     * @constructor 
     */
    static new(): Gtk.ListBoxRow
    _init(config?: RepositoryListBoxRow_ConstructProps): void
}

interface Repository_ConstructProps extends Ggit.Repository_ConstructProps {
}

interface Repository {

    // Own properties of Gitg-1.0.Gitg.Repository

    readonly name: string
    readonly stage: Stage

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Repository

    clearRefsCache(): void
    refsForId(id: Ggit.OId): Ref[]
    lookup(tType: GObject.GType, tDupFunc?: GObject.BoxedCopyFunc, tDestroyFunc?: GLib.DestroyNotify, id?: Ggit.OId): object | null

    // Overloads of lookup

    /**
     * Lookups a reference to one of the objects in the `repository`.
     * 
     * The generated reference must be freed with g_object_unref().
     * 
     * The `gtype` must match the type of the object
     * in the odb; the method will fail otherwise.
     * The special value %G_TYPE_NONE may be passed to let
     * the method guess the object's type.
     * @param oid a #GgitOId.
     * @param gtype a #GType.
     */
    lookup(oid: Ggit.OId, gtype?: GObject.GType): Ggit.Object | null
    lookup(...args: any[]): any
    lookup(args_or_oid: any[] | Ggit.OId, gtype?: GObject.GType): object | null | Ggit.Object | null | any
    lookupReference(name: string): Ref

    // Overloads of lookupReference

    /**
     * Lookups a reference by its name in `repository`. The returned #GgitRef must
     * be freed with g_object_unref().
     * @param name the long name for the reference (e.g. HEAD, ref/heads/master, refs/tags/v0.1.0, ...).
     */
    lookupReference(name: string): Ggit.Ref | null
    lookupReference(...args: any[]): any
    lookupReference(args_or_name: any[] | string): Ref | Ggit.Ref | null | any
    lookupReferenceDwim(shortName: string): Ref

    // Overloads of lookupReferenceDwim

    /**
     * Lookups a reference by its short name in `repository` applying the git precendence
     * rules to the given shorthand to determine which reference the user is referring to.
     * The returned #GgitRef must be freed with g_object_unref().
     * @param shortName the short name for the reference (e.g. master, v0.1.0, ...).
     */
    lookupReferenceDwim(shortName: string): Ggit.Ref | null
    lookupReferenceDwim(...args: any[]): any
    lookupReferenceDwim(args_or_shortName: any[] | string): Ref | Ggit.Ref | null | any
    createBranch(name: string, obj?: Ggit.Object, flags?: Ggit.CreateFlags): Branch

    // Overloads of createBranch

    /**
     * Creates a new branch pointing at a target commit.
     * @param branchName the name of the branch.
     * @param target a #GgitObject.
     * @param flags a #GgitCreateFlags.
     */
    createBranch(branchName: string, target?: Ggit.Object, flags?: Ggit.CreateFlags): Ggit.Branch | null
    createBranch(...args: any[]): any
    createBranch(args_or_branchName: any[] | string, target?: Ggit.Object, flags?: Ggit.CreateFlags): Branch | Ggit.Branch | null | any
    createReference(name: string, oid?: Ggit.OId, message?: string): Ref

    // Overloads of createReference

    /**
     * Creates a new object id reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param oid the #GgitOId pointed to by the reference.
     * @param logMessage The one line long message to be appended to the reflog.
     */
    createReference(name: string, oid?: Ggit.OId, logMessage?: string): Ggit.Ref | null
    createReference(...args: any[]): any
    createReference(args_or_name: any[] | string, oid?: Ggit.OId, logMessage?: string): Ref | Ggit.Ref | null | any
    createSymbolicReference(name: string, target?: string, message?: string): Ref

    // Overloads of createSymbolicReference

    /**
     * Creates a new symbolic reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param target the full name to the reference.
     * @param logMessage The one line long message to be appended to the reflog.
     */
    createSymbolicReference(name: string, target?: string, logMessage?: string): Ggit.Ref | null
    createSymbolicReference(...args: any[]): any
    createSymbolicReference(args_or_name: any[] | string, target?: string, logMessage?: string): Ref | Ggit.Ref | null | any
    getHead(): Ref

    // Overloads of getHead

    /**
     * Get and resolves the current HEAD reference of the repository. Note that the
     * returned ref is already resolved (if HEAD is symbolic). If you want to
     * retrieve the symbolic ref called HEAD, then use #ggit_repository_lookup_reference
     * instead.
     */
    getHead(): Ggit.Ref | null
    getHead(...args: any[]): any
    getHead(...args: any[]): Ref | Ggit.Ref | null | any
    getSignatureWithEnvironment(env: Gee.Map, envname: string): Ggit.Signature
    getName(): string | null
    getStage(): Stage

    // Class property signals of Gitg-1.0.Gitg.Repository

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::stage", callback: (...args: any[]) => void): number
    on(sigName: "notify::stage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stage", ...args: any[]): void
    connect(sigName: "notify::clone-options", callback: (...args: any[]) => void): number
    on(sigName: "notify::clone-options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clone-options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clone-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clone-options", ...args: any[]): void
    connect(sigName: "notify::head", callback: (...args: any[]) => void): number
    on(sigName: "notify::head", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::head", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::head", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::head", ...args: any[]): void
    connect(sigName: "notify::init", callback: (...args: any[]) => void): number
    on(sigName: "notify::init", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::init", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::init", ...args: any[]): void
    connect(sigName: "notify::is-bare", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-bare", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-bare", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-bare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-bare", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::url", callback: (...args: any[]) => void): number
    on(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::workdir", callback: (...args: any[]) => void): number
    on(sigName: "notify::workdir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::workdir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::workdir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::workdir", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Repository extends Ggit.Repository {

    // Own properties of Gitg-1.0.Gitg.Repository

    static name: string
    static $gtype: GObject.GType<Repository>

    // Constructors of Gitg-1.0.Gitg.Repository

    constructor(config?: Repository_ConstructProps) 
    constructor(location: Gio.File, workdir: Gio.File | null) 
    static new(location: Gio.File, workdir: Gio.File | null): Repository
    _init(config?: Repository_ConstructProps): void
    static initRepository(location: Gio.File, isBare?: boolean): Repository

    // Overloads of initRepository

    /**
     * Creates a new git repository in the given folder.
     * @param location the location of the repository.
     * @param isBare if %TRUE, a git repository without a working directory is created           at the pointed path. If %FALSE, provided path will be considered as the working           directory into which the .git directory will be created.
     */
    static initRepository(location: Gio.File, isBare?: boolean): Ggit.Repository | null
    static initRepository(...args: any[]): any
    static initRepository(args_or_location: any[] | Gio.File, isBare?: boolean): Repository | Ggit.Repository | null | any
}

interface Resource {

    // Own fields of Gitg-1.0.Gitg.Resource

    refCount: number
}

class Resource {

    // Own properties of Gitg-1.0.Gitg.Resource

    static name: string

    // Constructors of Gitg-1.0.Gitg.Resource

    constructor() 
    static new(): Resource
    static loadCss(id: string): Gtk.CssProvider | null
}

interface SidebarStore_ConstructProps extends Gtk.TreeStore_ConstructProps {
}

interface SidebarStore {

    // Own properties of Gitg-1.0.Gitg.SidebarStore

    readonly clearing: boolean

    // Owm methods of Gitg-1.0.Gitg.SidebarStore

    appendDummy(text: string): SidebarStore
    append(item: SidebarItem): SidebarStore

    // Overloads of append

    /**
     * Appends a new row to `tree_store`.  If `parent` is non-%NULL, then it will append the
     * new row after the last child of `parent,` otherwise it will append a row to
     * the top level.  `iter` will be changed to point to this new row.  The row will
     * be empty after this function is called.  To fill in values, you need to call
     * gtk_tree_store_set() or gtk_tree_store_set_value().
     * @param parent A valid #GtkTreeIter, or %NULL
     */
    append(parent: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    append(...args: any[]): any
    append(args_or_parent: any[] | Gtk.TreeIter | null): [ /* returnType */ SidebarStore | void | any, /* iter */ Gtk.TreeIter ]
    beginHeader(text: string, id: number): SidebarStoreSidebarHeader
    endHeader(): SidebarStore
    beginSection(): number
    endSection(): void
    clear(): void
    itemForIter(iter: Gtk.TreeIter): SidebarItem
    activate(iter: Gtk.TreeIter, numclick: number): void
    getClearing(): boolean

    // Class property signals of Gitg-1.0.Gitg.SidebarStore

    connect(sigName: "notify::clearing", callback: (...args: any[]) => void): number
    on(sigName: "notify::clearing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clearing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clearing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clearing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SidebarStore extends Gtk.TreeStore {

    // Own properties of Gitg-1.0.Gitg.SidebarStore

    static name: string
    static $gtype: GObject.GType<SidebarStore>

    // Constructors of Gitg-1.0.Gitg.SidebarStore

    constructor(config?: SidebarStore_ConstructProps) 
    constructor() 
    static new(): SidebarStore

    // Overloads of new

    /**
     * Non vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.TreeStore
    _init(config?: SidebarStore_ConstructProps): void
}

interface SidebarStoreSidebarText_ConstructProps extends SidebarItem_ConstructProps, GObject.Object_ConstructProps {
}

interface SidebarStoreSidebarText extends SidebarItem {

    // Class property signals of Gitg-1.0.Gitg.SidebarStoreSidebarText

    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SidebarStoreSidebarText extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarText

    static name: string
    static $gtype: GObject.GType<SidebarStoreSidebarText>

    // Constructors of Gitg-1.0.Gitg.SidebarStoreSidebarText

    constructor(config?: SidebarStoreSidebarText_ConstructProps) 
    constructor(text: string) 
    static new(text: string): SidebarStoreSidebarText
    _init(config?: SidebarStoreSidebarText_ConstructProps): void
}

interface SidebarStoreSidebarHeader_ConstructProps extends SidebarStoreSidebarText_ConstructProps {
}

interface SidebarStoreSidebarHeader {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    readonly id: number

    // Owm methods of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    getId(): number

    // Class property signals of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

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

class SidebarStoreSidebarHeader extends SidebarStoreSidebarText {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    static name: string
    static $gtype: GObject.GType<SidebarStoreSidebarHeader>

    // Constructors of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    constructor(config?: SidebarStoreSidebarHeader_ConstructProps) 
    constructor(text: string, id: number) 
    static new(text: string, id: number): SidebarStoreSidebarHeader

    // Overloads of new

    static new(text: string): SidebarStoreSidebarText
    _init(config?: SidebarStoreSidebarHeader_ConstructProps): void
}

interface Sidebar_ConstructProps extends Gtk.TreeView_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Sidebar

    model?: SidebarStore | null
}

/**
 * Signal callback interface for `deselected`
 */
interface Sidebar_DeselectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `populate-popup`
 */
interface Sidebar_PopulatePopupSignalCallback {
    (menu: Gtk.Menu): void
}

interface Sidebar {

    // Own properties of Gitg-1.0.Gitg.Sidebar

    model: SidebarStore

    // Owm methods of Gitg-1.0.Gitg.Sidebar

    selectFunction(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    selectionChanged(sel: Gtk.TreeSelection): void
    getSelectedIter(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getSelectedItem(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): object | null
    getSelectedItems(tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): [ /* returnType */ object[], /* resultLength1 */ number ]
    select(item: SidebarItem): void
    isSelected(item: SidebarItem): boolean
    getModel(): SidebarStore

    // Overloads of getModel

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     */
    getModel(): Gtk.TreeModel | null
    getModel(...args: any[]): any
    getModel(...args: any[]): SidebarStore | Gtk.TreeModel | null | any
    setModel(value: SidebarStore): void

    // Overloads of setModel

    /**
     * Sets the model for a #GtkTreeView.  If the `tree_view` already has a model
     * set, it will remove it before setting the new model.  If `model` is %NULL,
     * then it will unset the old model.
     * @param model The model.
     */
    setModel(model: Gtk.TreeModel | null): void
    setModel(...args: any[]): any
    setModel(args_or_model: any[] | Gtk.TreeModel | null): void | any

    // Conflicting methods

    childNotify(...args: any[]): any

    // Own signals of Gitg-1.0.Gitg.Sidebar

    connect(sigName: "deselected", callback: Sidebar_DeselectedSignalCallback): number
    on(sigName: "deselected", callback: Sidebar_DeselectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deselected", callback: Sidebar_DeselectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deselected", callback: Sidebar_DeselectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "deselected", ...args: any[]): void
    connect(sigName: "populate-popup", callback: Sidebar_PopulatePopupSignalCallback): number
    on(sigName: "populate-popup", callback: Sidebar_PopulatePopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "populate-popup", callback: Sidebar_PopulatePopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "populate-popup", callback: Sidebar_PopulatePopupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "populate-popup", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.Sidebar

    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::activate-on-single-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-tree-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::expander-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expander-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expander-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-height-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers-clickable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers-clickable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers-clickable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::headers-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::headers-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::headers-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (...args: any[]) => void): number
    on(sigName: "notify::level-indentation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level-indentation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level-indentation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (...args: any[]) => void): number
    on(sigName: "notify::reorderable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reorderable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reorderable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): number
    on(sigName: "notify::rubber-banding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rubber-banding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rubber-banding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::rules-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rules-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rules-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-expanders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-expanders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-expanders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-column", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Sidebar extends Gtk.TreeView {

    // Own properties of Gitg-1.0.Gitg.Sidebar

    static name: string
    static $gtype: GObject.GType<Sidebar>

    // Constructors of Gitg-1.0.Gitg.Sidebar

    constructor(config?: Sidebar_ConstructProps) 
    constructor() 
    static new(): Sidebar

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    _init(config?: Sidebar_ConstructProps): void
}

interface StageStatusFile_ConstructProps extends StageStatusItem_ConstructProps, GObject.Object_ConstructProps {
}

interface StageStatusFile extends StageStatusItem {

    // Own properties of Gitg-1.0.Gitg.StageStatusFile

    readonly flags: Ggit.StatusFlags

    // Owm methods of Gitg-1.0.Gitg.StageStatusFile

    getFlags(): Ggit.StatusFlags

    // Class property signals of Gitg-1.0.Gitg.StageStatusFile

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-staged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-unstaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-untracked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-untracked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-untracked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StageStatusFile extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusFile

    static name: string
    static $gtype: GObject.GType<StageStatusFile>

    // Constructors of Gitg-1.0.Gitg.StageStatusFile

    constructor(config?: StageStatusFile_ConstructProps) 
    constructor(path: string, flags: Ggit.StatusFlags) 
    static new(path: string, flags: Ggit.StatusFlags): StageStatusFile
    _init(config?: StageStatusFile_ConstructProps): void
}

interface StageStatusSubmodule_ConstructProps extends StageStatusItem_ConstructProps, GObject.Object_ConstructProps {
}

interface StageStatusSubmodule extends StageStatusItem {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmodule

    readonly submodule: Ggit.Submodule
    readonly isDirty: boolean
    readonly flags: Ggit.SubmoduleStatus

    // Owm methods of Gitg-1.0.Gitg.StageStatusSubmodule

    getSubmodule(): Ggit.Submodule
    getIsDirty(): boolean
    getFlags(): Ggit.SubmoduleStatus

    // Class property signals of Gitg-1.0.Gitg.StageStatusSubmodule

    connect(sigName: "notify::submodule", callback: (...args: any[]) => void): number
    on(sigName: "notify::submodule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::submodule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::submodule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::submodule", ...args: any[]): void
    connect(sigName: "notify::is-dirty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-dirty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-staged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-staged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-unstaged", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-unstaged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-untracked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-untracked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-untracked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StageStatusSubmodule extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmodule

    static name: string
    static $gtype: GObject.GType<StageStatusSubmodule>

    // Constructors of Gitg-1.0.Gitg.StageStatusSubmodule

    constructor(config?: StageStatusSubmodule_ConstructProps) 
    constructor(submodule: Ggit.Submodule) 
    static new(submodule: Ggit.Submodule): StageStatusSubmodule
    _init(config?: StageStatusSubmodule_ConstructProps): void
}

interface StageStatusEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}

interface StageStatusEnumerator {

    // Owm methods of Gitg-1.0.Gitg.StageStatusEnumerator

    cancel(): void
    nextItems(num: number, callback: Gio.AsyncReadyCallback | null): void
    nextItemsFinish(res: Gio.AsyncResult): StageStatusItem[]

    // Class property signals of Gitg-1.0.Gitg.StageStatusEnumerator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StageStatusEnumerator extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusEnumerator

    static name: string
    static $gtype: GObject.GType<StageStatusEnumerator>

    // Constructors of Gitg-1.0.Gitg.StageStatusEnumerator

    constructor(config?: StageStatusEnumerator_ConstructProps) 
    _init(config?: StageStatusEnumerator_ConstructProps): void
}

interface PatchSet {

    // Own fields of Gitg-1.0.Gitg.PatchSet

    refCount: number
    filename: string
    patches: PatchSetPatch[]
    patchesLength1: number

    // Owm methods of Gitg-1.0.Gitg.PatchSet

    reversed(): PatchSet
}

class PatchSet {

    // Own properties of Gitg-1.0.Gitg.PatchSet

    static name: string

    // Constructors of Gitg-1.0.Gitg.PatchSet

    constructor() 
    static new(): PatchSet
}

interface Stage_ConstructProps extends GObject.Object_ConstructProps {
}

interface Stage {

    // Owm methods of Gitg-1.0.Gitg.Stage

    refresh(callback: Gio.AsyncReadyCallback | null): void
    refreshFinish(res: Gio.AsyncResult): void
    getHeadTree(callback: Gio.AsyncReadyCallback | null): void
    getHeadTreeFinish(res: Gio.AsyncResult): Ggit.Tree | null
    fileStatus(options: Ggit.StatusOptions | null): StageStatusEnumerator
    preCommitHook(author: Ggit.Signature, callback: Gio.AsyncReadyCallback | null): void
    preCommitHookFinish(res: Gio.AsyncResult): void
    commitIndex(index: Ggit.Index, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, callback: Gio.AsyncReadyCallback | null): void
    commitIndexFinish(res: Gio.AsyncResult): Ggit.OId | null
    commitTree(treeoid: Ggit.OId, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, callback: Gio.AsyncReadyCallback | null): void
    commitTreeFinish(res: Gio.AsyncResult): Ggit.OId | null
    commit(message: string, author: Ggit.Signature, committer: Ggit.Signature, options: StageCommitOptions, callback: Gio.AsyncReadyCallback | null): void
    commitFinish(res: Gio.AsyncResult): Ggit.OId | null
    revert(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    revertFinish(res: Gio.AsyncResult): void
    revertPath(path: string, callback: Gio.AsyncReadyCallback | null): void
    revertPathFinish(res: Gio.AsyncResult): void
    revertPatch(patch: PatchSet, callback: Gio.AsyncReadyCallback | null): void
    revertPatchFinish(res: Gio.AsyncResult): void
    delete(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): void
    deletePath(path: string, callback: Gio.AsyncReadyCallback | null): void
    deletePathFinish(res: Gio.AsyncResult): void
    stage(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    stageFinish(res: Gio.AsyncResult): void
    stagePath(path: string, callback: Gio.AsyncReadyCallback | null): void
    stagePathFinish(res: Gio.AsyncResult): void
    stageCommit(path: string, commit: Ggit.Commit, callback: Gio.AsyncReadyCallback | null): void
    stageCommitFinish(res: Gio.AsyncResult): void
    stagePatch(patch: PatchSet, callback: Gio.AsyncReadyCallback | null): void
    stagePatchFinish(res: Gio.AsyncResult): void
    unstage(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    unstageFinish(res: Gio.AsyncResult): void
    unstagePath(path: string, callback: Gio.AsyncReadyCallback | null): void
    unstagePathFinish(res: Gio.AsyncResult): void
    unstagePatch(patch: PatchSet, callback: Gio.AsyncReadyCallback | null): void
    unstagePatchFinish(res: Gio.AsyncResult): void
    diffIndexAll(files: StageStatusItem[] | null, defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffIndexAllFinish(res: Gio.AsyncResult): Ggit.Diff | null
    diffIndex(f: StageStatusItem, defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffIndexFinish(res: Gio.AsyncResult): Ggit.Diff | null
    diffWorkdirAll(files: StageStatusItem[], defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffWorkdirAllFinish(res: Gio.AsyncResult): Ggit.Diff | null
    diffWorkdir(f: StageStatusItem, defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffWorkdirFinish(res: Gio.AsyncResult): Ggit.Diff | null

    // Class property signals of Gitg-1.0.Gitg.Stage

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Stage extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Stage

    static name: string
    static $gtype: GObject.GType<Stage>

    // Constructors of Gitg-1.0.Gitg.Stage

    constructor(config?: Stage_ConstructProps) 
    _init(config?: Stage_ConstructProps): void
}

interface TextConv {

    // Own fields of Gitg-1.0.Gitg.TextConv

    refCount: number
}

class TextConv {

    // Own properties of Gitg-1.0.Gitg.TextConv

    static name: string

    // Constructors of Gitg-1.0.Gitg.TextConv

    constructor() 
    static new(): TextConv
    static hasTextconvCommand(repository: Repository, file: Ggit.DiffFile): boolean
    static getTextconvContent(repository: Repository, file: Ggit.DiffFile): Uint8Array
    static getTextconvContentFromRaw(repository: Repository, file: Ggit.DiffFile, rawContent: Uint8Array | null): Uint8Array
}

interface Theme_ConstructProps extends Gtk.Widget_ConstructProps {
}

interface Theme {

    // Owm methods of Gitg-1.0.Gitg.Theme

    isThemeDark(): boolean

    // Class property signals of Gitg-1.0.Gitg.Theme

    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Theme extends Gtk.Widget {

    // Own properties of Gitg-1.0.Gitg.Theme

    static name: string
    static $gtype: GObject.GType<Theme>

    // Constructors of Gitg-1.0.Gitg.Theme

    constructor(config?: Theme_ConstructProps) 
    constructor() 
    static new(): Theme
    _init(config?: Theme_ConstructProps): void
    static instance(): Theme
}

interface Utils {

    // Own fields of Gitg-1.0.Gitg.Utils

    refCount: number
}

class Utils {

    // Own properties of Gitg-1.0.Gitg.Utils

    static name: string

    // Constructors of Gitg-1.0.Gitg.Utils

    constructor() 
    static new(): Utils
    static replaceHomeDirWithTilde(file: Gio.File): string
    static expandHomeDir(path: string): string
}

interface WhenMapped {

    // Own fields of Gitg-1.0.Gitg.WhenMapped

    refCount: number

    // Owm methods of Gitg-1.0.Gitg.WhenMapped

    update(mapped: any, lifetime: GObject.Object | null): void
}

class WhenMapped {

    // Own properties of Gitg-1.0.Gitg.WhenMapped

    static name: string

    // Constructors of Gitg-1.0.Gitg.WhenMapped

    constructor(widget: Gtk.Widget) 
    static new(widget: Gtk.Widget): WhenMapped
}

interface AsyncClass {
}

abstract class AsyncClass {

    // Own properties of Gitg-1.0.Gitg.AsyncClass

    static name: string
}

interface AsyncPrivate {
}

class AsyncPrivate {

    // Own properties of Gitg-1.0.Gitg.AsyncPrivate

    static name: string
}

interface AuthenticationDialogClass {
}

abstract class AuthenticationDialogClass {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialogClass

    static name: string
}

interface AuthenticationDialogPrivate {
}

class AuthenticationDialogPrivate {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialogPrivate

    static name: string
}

interface AvatarCacheClass {
}

abstract class AvatarCacheClass {

    // Own properties of Gitg-1.0.Gitg.AvatarCacheClass

    static name: string
}

interface AvatarCachePrivate {
}

class AvatarCachePrivate {

    // Own properties of Gitg-1.0.Gitg.AvatarCachePrivate

    static name: string
}

interface BranchBaseClass {
}

abstract class BranchBaseClass {

    // Own properties of Gitg-1.0.Gitg.BranchBaseClass

    static name: string
}

interface BranchBasePrivate {
}

class BranchBasePrivate {

    // Own properties of Gitg-1.0.Gitg.BranchBasePrivate

    static name: string
}

interface CellRendererLanesClass {
}

abstract class CellRendererLanesClass {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanesClass

    static name: string
}

interface CellRendererLanesPrivate {
}

class CellRendererLanesPrivate {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanesPrivate

    static name: string
}

interface ColorClass {
}

abstract class ColorClass {

    // Own properties of Gitg-1.0.Gitg.ColorClass

    static name: string
}

interface ColorPrivate {
}

class ColorPrivate {

    // Own properties of Gitg-1.0.Gitg.ColorPrivate

    static name: string
}

interface CommitListViewClass {
}

abstract class CommitListViewClass {

    // Own properties of Gitg-1.0.Gitg.CommitListViewClass

    static name: string
}

interface CommitListViewPrivate {
}

class CommitListViewPrivate {

    // Own properties of Gitg-1.0.Gitg.CommitListViewPrivate

    static name: string
}

interface CommitModelClass {
}

abstract class CommitModelClass {

    // Own properties of Gitg-1.0.Gitg.CommitModelClass

    static name: string
}

interface CommitModelPrivate {
}

class CommitModelPrivate {

    // Own properties of Gitg-1.0.Gitg.CommitModelPrivate

    static name: string
}

interface CommitClass {
}

abstract class CommitClass {

    // Own properties of Gitg-1.0.Gitg.CommitClass

    static name: string
}

interface CommitPrivate {
}

class CommitPrivate {

    // Own properties of Gitg-1.0.Gitg.CommitPrivate

    static name: string
}

interface CredentialsManagerClass {
}

abstract class CredentialsManagerClass {

    // Own properties of Gitg-1.0.Gitg.CredentialsManagerClass

    static name: string
}

interface CredentialsManagerPrivate {
}

class CredentialsManagerPrivate {

    // Own properties of Gitg-1.0.Gitg.CredentialsManagerPrivate

    static name: string
}

interface DateClass {
}

abstract class DateClass {

    // Own properties of Gitg-1.0.Gitg.DateClass

    static name: string
}

interface DatePrivate {
}

class DatePrivate {

    // Own properties of Gitg-1.0.Gitg.DatePrivate

    static name: string
}

interface DiffStatClass {
}

abstract class DiffStatClass {

    // Own properties of Gitg-1.0.Gitg.DiffStatClass

    static name: string
}

interface DiffStatPrivate {
}

class DiffStatPrivate {

    // Own properties of Gitg-1.0.Gitg.DiffStatPrivate

    static name: string
}

interface DiffViewOptionsClass {
}

abstract class DiffViewOptionsClass {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptionsClass

    static name: string
}

interface DiffViewOptionsPrivate {
}

class DiffViewOptionsPrivate {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptionsPrivate

    static name: string
}

interface DiffViewClass {

    // Own fields of Gitg-1.0.Gitg.DiffViewClass

    optionsChanged: (self: DiffView) => void
}

abstract class DiffViewClass {

    // Own properties of Gitg-1.0.Gitg.DiffViewClass

    static name: string
}

interface DiffViewPrivate {
}

class DiffViewPrivate {

    // Own properties of Gitg-1.0.Gitg.DiffViewPrivate

    static name: string
}

interface FontManagerClass {
}

abstract class FontManagerClass {

    // Own properties of Gitg-1.0.Gitg.FontManagerClass

    static name: string
}

interface FontManagerPrivate {
}

class FontManagerPrivate {

    // Own properties of Gitg-1.0.Gitg.FontManagerPrivate

    static name: string
}

interface HookClass {
}

abstract class HookClass {

    // Own properties of Gitg-1.0.Gitg.HookClass

    static name: string
}

interface HookPrivate {
}

class HookPrivate {

    // Own properties of Gitg-1.0.Gitg.HookPrivate

    static name: string
}

interface LabelRendererClass {
}

abstract class LabelRendererClass {

    // Own properties of Gitg-1.0.Gitg.LabelRendererClass

    static name: string
}

interface LabelRendererPrivate {
}

class LabelRendererPrivate {

    // Own properties of Gitg-1.0.Gitg.LabelRendererPrivate

    static name: string
}

interface LanesClass {
}

abstract class LanesClass {

    // Own properties of Gitg-1.0.Gitg.LanesClass

    static name: string
}

interface LanesPrivate {
}

class LanesPrivate {

    // Own properties of Gitg-1.0.Gitg.LanesPrivate

    static name: string
}

interface LaneClass {
}

abstract class LaneClass {

    // Own properties of Gitg-1.0.Gitg.LaneClass

    static name: string
}

interface LanePrivate {
}

class LanePrivate {

    // Own properties of Gitg-1.0.Gitg.LanePrivate

    static name: string
}

interface ProgressBinClass {
}

abstract class ProgressBinClass {

    // Own properties of Gitg-1.0.Gitg.ProgressBinClass

    static name: string
}

interface ProgressBinPrivate {
}

class ProgressBinPrivate {

    // Own properties of Gitg-1.0.Gitg.ProgressBinPrivate

    static name: string
}

interface RefBaseClass {
}

abstract class RefBaseClass {

    // Own properties of Gitg-1.0.Gitg.RefBaseClass

    static name: string
}

interface RefBasePrivate {
}

class RefBasePrivate {

    // Own properties of Gitg-1.0.Gitg.RefBasePrivate

    static name: string
}

interface ParsedRefNameClass {
}

abstract class ParsedRefNameClass {

    // Own properties of Gitg-1.0.Gitg.ParsedRefNameClass

    static name: string
}

interface ParsedRefNamePrivate {
}

class ParsedRefNamePrivate {

    // Own properties of Gitg-1.0.Gitg.ParsedRefNamePrivate

    static name: string
}

interface RemoteClass {
}

abstract class RemoteClass {

    // Own properties of Gitg-1.0.Gitg.RemoteClass

    static name: string
}

interface RemotePrivate {
}

class RemotePrivate {

    // Own properties of Gitg-1.0.Gitg.RemotePrivate

    static name: string
}

interface RepositoryListBoxClass {
}

abstract class RepositoryListBoxClass {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxClass

    static name: string
}

interface RepositoryListBoxPrivate {
}

class RepositoryListBoxPrivate {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxPrivate

    static name: string
}

interface RepositoryListBoxRowClass {
}

abstract class RepositoryListBoxRowClass {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRowClass

    static name: string
}

interface RepositoryListBoxRowPrivate {
}

class RepositoryListBoxRowPrivate {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRowPrivate

    static name: string
}

interface RepositoryClass {
}

abstract class RepositoryClass {

    // Own properties of Gitg-1.0.Gitg.RepositoryClass

    static name: string
}

interface RepositoryPrivate {
}

class RepositoryPrivate {

    // Own properties of Gitg-1.0.Gitg.RepositoryPrivate

    static name: string
}

interface ResourceClass {
}

abstract class ResourceClass {

    // Own properties of Gitg-1.0.Gitg.ResourceClass

    static name: string
}

interface ResourcePrivate {
}

class ResourcePrivate {

    // Own properties of Gitg-1.0.Gitg.ResourcePrivate

    static name: string
}

interface SidebarStoreClass {
}

abstract class SidebarStoreClass {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreClass

    static name: string
}

interface SidebarStorePrivate {
}

class SidebarStorePrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarStorePrivate

    static name: string
}

interface SidebarStoreSidebarTextClass {
}

abstract class SidebarStoreSidebarTextClass {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarTextClass

    static name: string
}

interface SidebarStoreSidebarTextPrivate {
}

class SidebarStoreSidebarTextPrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarTextPrivate

    static name: string
}

interface SidebarStoreSidebarHeaderClass {
}

abstract class SidebarStoreSidebarHeaderClass {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeaderClass

    static name: string
}

interface SidebarStoreSidebarHeaderPrivate {
}

class SidebarStoreSidebarHeaderPrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeaderPrivate

    static name: string
}

interface SidebarClass {

    // Own fields of Gitg-1.0.Gitg.SidebarClass

    selectFunction: (self: Sidebar, sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean) => boolean
    selectionChanged: (self: Sidebar, sel: Gtk.TreeSelection) => void
}

abstract class SidebarClass {

    // Own properties of Gitg-1.0.Gitg.SidebarClass

    static name: string
}

interface SidebarPrivate {
}

class SidebarPrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarPrivate

    static name: string
}

interface StageStatusFileClass {
}

abstract class StageStatusFileClass {

    // Own properties of Gitg-1.0.Gitg.StageStatusFileClass

    static name: string
}

interface StageStatusFilePrivate {
}

class StageStatusFilePrivate {

    // Own properties of Gitg-1.0.Gitg.StageStatusFilePrivate

    static name: string
}

interface StageStatusSubmoduleClass {
}

abstract class StageStatusSubmoduleClass {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmoduleClass

    static name: string
}

interface StageStatusSubmodulePrivate {
}

class StageStatusSubmodulePrivate {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmodulePrivate

    static name: string
}

interface StageStatusEnumeratorClass {
}

abstract class StageStatusEnumeratorClass {

    // Own properties of Gitg-1.0.Gitg.StageStatusEnumeratorClass

    static name: string
}

interface StageStatusEnumeratorPrivate {
}

class StageStatusEnumeratorPrivate {

    // Own properties of Gitg-1.0.Gitg.StageStatusEnumeratorPrivate

    static name: string
}

interface PatchSetClass {
}

abstract class PatchSetClass {

    // Own properties of Gitg-1.0.Gitg.PatchSetClass

    static name: string
}

interface PatchSetPrivate {
}

class PatchSetPrivate {

    // Own properties of Gitg-1.0.Gitg.PatchSetPrivate

    static name: string
}

interface PatchSetPatch {

    // Own fields of Gitg-1.0.Gitg.PatchSetPatch

    type: PatchSetType
    oldOffset: number
    newOffset: number
    length: number
}

class PatchSetPatch {

    // Own properties of Gitg-1.0.Gitg.PatchSetPatch

    static name: string
}

interface StageClass {
}

abstract class StageClass {

    // Own properties of Gitg-1.0.Gitg.StageClass

    static name: string
}

interface StagePrivate {
}

class StagePrivate {

    // Own properties of Gitg-1.0.Gitg.StagePrivate

    static name: string
}

interface TextConvClass {
}

abstract class TextConvClass {

    // Own properties of Gitg-1.0.Gitg.TextConvClass

    static name: string
}

interface TextConvPrivate {
}

class TextConvPrivate {

    // Own properties of Gitg-1.0.Gitg.TextConvPrivate

    static name: string
}

interface ThemeClass {
}

abstract class ThemeClass {

    // Own properties of Gitg-1.0.Gitg.ThemeClass

    static name: string
}

interface ThemePrivate {
}

class ThemePrivate {

    // Own properties of Gitg-1.0.Gitg.ThemePrivate

    static name: string
}

interface UtilsClass {
}

abstract class UtilsClass {

    // Own properties of Gitg-1.0.Gitg.UtilsClass

    static name: string
}

interface UtilsPrivate {
}

class UtilsPrivate {

    // Own properties of Gitg-1.0.Gitg.UtilsPrivate

    static name: string
}

interface WhenMappedClass {
}

abstract class WhenMappedClass {

    // Own properties of Gitg-1.0.Gitg.WhenMappedClass

    static name: string
}

interface WhenMappedPrivate {
}

class WhenMappedPrivate {

    // Own properties of Gitg-1.0.Gitg.WhenMappedPrivate

    static name: string
}

interface BranchIface {

    // Own fields of Gitg-1.0.Gitg.BranchIface

    getUpstream: (self: Branch) => Ref
}

abstract class BranchIface {

    // Own properties of Gitg-1.0.Gitg.BranchIface

    static name: string
}

interface RefIface {

    // Own fields of Gitg-1.0.Gitg.RefIface

    getOwner: (self: Ref) => Repository
    getDParsedName: (self: Ref) => ParsedRefName
    setDParsedName: (self: Ref, value: ParsedRefName) => void
    getDPushes: (self: Ref) => Ref[] | null
    setDPushes: (self: Ref, value: Ref[] | null) => void
    getState: (self: Ref) => RefState
    setState: (self: Ref, value: RefState) => void
    getWorking: (self: Ref) => boolean
    setWorking: (self: Ref, value: boolean) => void
}

abstract class RefIface {

    // Own properties of Gitg-1.0.Gitg.RefIface

    static name: string
}

interface CredentialsProviderIface {

    // Own fields of Gitg-1.0.Gitg.CredentialsProviderIface

    credentials: (self: CredentialsProvider, url: string, usernameFromUrl: string | null, allowedTypes: Ggit.Credtype) => Ggit.Cred | null
}

abstract class CredentialsProviderIface {

    // Own properties of Gitg-1.0.Gitg.CredentialsProviderIface

    static name: string
}

interface SidebarItemIface {

    // Own fields of Gitg-1.0.Gitg.SidebarItemIface

    activate: (self: SidebarItem, numclick: number) => void
    getText: (self: SidebarItem) => string
    getIconName: (self: SidebarItem) => string | null
}

abstract class SidebarItemIface {

    // Own properties of Gitg-1.0.Gitg.SidebarItemIface

    static name: string
}

interface StageStatusItemIface {

    // Own fields of Gitg-1.0.Gitg.StageStatusItemIface

    getPath: (self: StageStatusItem) => string
    getIsStaged: (self: StageStatusItem) => boolean
    getIsUnstaged: (self: StageStatusItem) => boolean
    getIsUntracked: (self: StageStatusItem) => boolean
    getIconName: (self: StageStatusItem) => string | null
}

abstract class StageStatusItemIface {

    // Own properties of Gitg-1.0.Gitg.StageStatusItemIface

    static name: string
}

}
export default Gitg;