// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gitg-1.0
 */

import type * as Gjs from './Gjs';
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
function commit_model_columns_type(): GObject.GType
function init(): void
interface Branch_ConstructProps extends Ggit.Branch_ConstructProps, Ref_ConstructProps, GObject.Object_ConstructProps {
}

interface Branch extends Ggit.Branch, Ref {

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.Branch

    get_upstream(): Ref

    // Overloads of get_upstream

    /**
     * Gets the reference supporting the remote tracking branch,
     * given a local branch reference.
     */
    get_upstream(): Ggit.Ref | null
    get_upstream(...args: any[]): any
    get_upstream(...args: any[]): Ref | Ggit.Ref | null | any

    // Conflicting methods

    get_owner(...args: any[]): any

    // Own virtual methods of Gitg-1.0.Gitg.Branch

    vfunc_get_upstream(): Ref

    // Class property signals of Gitg-1.0.Gitg.Branch

    connect(sigName: "notify::d-parsed-name", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: Branch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    d_parsed_name?: ParsedRefName | null
    d_pushes?: Ref[] | null
    state?: RefState | null
    working?: boolean | null
}

interface Ref extends Ggit.Ref {

    // Own properties of Gitg-1.0.Gitg.Ref

    d_parsed_name: ParsedRefName
    d_pushes: Ref[]
    state: RefState
    working: boolean

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.Ref

    get_owner(): Repository

    // Overloads of get_owner

    /**
     * Gets the repository where `ref` resides.
     */
    get_owner(): Ggit.Repository | null
    get_owner(...args: any[]): any
    get_owner(...args: any[]): Repository | Ggit.Repository | null | any
    get_d_parsed_name(): ParsedRefName
    set_d_parsed_name(value: ParsedRefName): void
    get_d_pushes(): Ref[] | null
    set_d_pushes(value: Ref[] | null): void
    get_state(): RefState
    set_state(value: RefState): void
    get_working(): boolean
    set_working(value: boolean): void
    get_parsed_name(): ParsedRefName
    get_pushes(): Ref[]

    // Own virtual methods of Gitg-1.0.Gitg.Ref

    vfunc_get_owner(): Repository
    vfunc_get_d_parsed_name(): ParsedRefName
    vfunc_set_d_parsed_name(value: ParsedRefName): void
    vfunc_get_d_pushes(): Ref[] | null
    vfunc_set_d_pushes(value: Ref[] | null): void
    vfunc_get_state(): RefState
    vfunc_set_state(value: RefState): void
    vfunc_get_working(): boolean
    vfunc_set_working(value: boolean): void

    // Class property signals of Gitg-1.0.Gitg.Ref

    connect(sigName: "notify::d-parsed-name", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: Ref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null

    // Own virtual methods of Gitg-1.0.Gitg.CredentialsProvider

    vfunc_credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null

    // Class property signals of Gitg-1.0.Gitg.CredentialsProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: SidebarItem, numclick: number): void
}

interface SidebarItem extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.SidebarItem

    readonly text: string
    readonly icon_name: string

    // Owm methods of Gitg-1.0.Gitg.SidebarItem

    activate(numclick: number): void
    get_text(): string
    get_icon_name(): string | null

    // Own virtual methods of Gitg-1.0.Gitg.SidebarItem

    vfunc_activate(numclick: number): void
    vfunc_get_text(): string
    vfunc_get_icon_name(): string | null

    // Own signals of Gitg-1.0.Gitg.SidebarItem

    connect(sigName: "activated", callback: SidebarItem_ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: SidebarItem_ActivatedSignalCallback): number
    emit(sigName: "activated", numclick: number, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.SidebarItem

    connect(sigName: "notify::text", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SidebarItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly is_staged: boolean
    readonly is_unstaged: boolean
    readonly is_untracked: boolean
    readonly icon_name: string

    // Owm methods of Gitg-1.0.Gitg.StageStatusItem

    get_path(): string
    get_is_staged(): boolean
    get_is_unstaged(): boolean
    get_is_untracked(): boolean
    get_icon_name(): string | null

    // Own virtual methods of Gitg-1.0.Gitg.StageStatusItem

    vfunc_get_path(): string
    vfunc_get_is_staged(): boolean
    vfunc_get_is_unstaged(): boolean
    vfunc_get_is_untracked(): boolean
    vfunc_get_icon_name(): string | null

    // Class property signals of Gitg-1.0.Gitg.StageStatusItem

    connect(sigName: "notify::path", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-staged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-unstaged", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-untracked", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StageStatusItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number
}

class Async {

    // Own properties of Gitg-1.0.Gitg.Async

    static name: string

    // Constructors of Gitg-1.0.Gitg.Async

    constructor() 
    static new(): Async
    static thread(func: any, _callback_: Gio.AsyncReadyCallback | null): void
    static thread_finish(_res_: Gio.AsyncResult): void
    static thread_try(func: any, _callback_: Gio.AsyncReadyCallback | null): void
    static thread_try_finish(_res_: Gio.AsyncResult): void
}

interface AuthenticationDialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}

interface AuthenticationDialog {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialog

    readonly username: string
    readonly password: string
    readonly life_time: AuthenticationLifeTime

    // Conflicting properties

    window: any

    // Owm methods of Gitg-1.0.Gitg.AuthenticationDialog

    get_username(): string
    get_password(): string
    get_life_time(): AuthenticationLifeTime

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.AuthenticationDialog

    connect(sigName: "notify::username", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::life-time", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::life-time", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::life-time", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: AuthenticationDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    load(email: string, size: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    load_finish(_res_: Gio.AsyncResult): GdkPixbuf.Pixbuf | null

    // Class property signals of Gitg-1.0.Gitg.AvatarCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: any

    // Conflicting methods

    get_owner(...args: any[]): any
    get_upstream(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.BranchBase

    connect(sigName: "notify::native", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::d-parsed-name", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: BranchBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    next_commit?: Commit | null
    lane_width?: number | null
    dot_width?: number | null
    labels?: Ref[] | null
}

interface CellRendererLanes {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanes

    commit: Commit
    next_commit: Commit
    lane_width: number
    dot_width: number
    labels: Ref[]

    // Owm methods of Gitg-1.0.Gitg.CellRendererLanes

    get_ref_at_pos(widget: Gtk.Widget, x: number, cell_w: number): [ /* returnType */ Ref | null, /* hot_x */ number ]
    get_commit(): Commit | null
    set_commit(value: Commit | null): void
    get_next_commit(): Commit | null
    set_next_commit(value: Commit | null): void
    get_lane_width(): number
    set_lane_width(value: number): void
    get_dot_width(): number
    set_dot_width(value: number): void
    get_labels(): Ref[]
    set_labels(value: Ref[]): void

    // Class property signals of Gitg-1.0.Gitg.CellRendererLanes

    connect(sigName: "notify::commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::next-commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-commit", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-commit", ...args: any[]): void
    connect(sigName: "notify::lane-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lane-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lane-width", ...args: any[]): void
    connect(sigName: "notify::dot-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dot-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dot-width", ...args: any[]): void
    connect(sigName: "notify::labels", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::labels", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::labels", ...args: any[]): void
    connect(sigName: "notify::align-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::single-paragraph-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-paragraph-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererLanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    next_index(): Color
    copy(): Color
    get_r(): number
    get_g(): number
    get_b(): number

    // Class property signals of Gitg-1.0.Gitg.Color

    connect(sigName: "notify::r", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::r", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::r", ...args: any[]): void
    connect(sigName: "notify::g", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g", ...args: any[]): void
    connect(sigName: "notify::b", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::b", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::b", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    find_cell_at_pos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [ /* returnType */ Gtk.CellRenderer | null, /* width */ number ]

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.CommitListView

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CommitListView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static for_repository(repository: Repository): CommitListView
    _init(config?: CommitListView_ConstructProps): void
}

interface CommitModel_ConstructProps extends Gtk.TreeModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.CommitModel

    limit?: number | null
    sort_mode?: Ggit.SortMode | null
    repository?: Repository | null
}

/**
 * Signal callback interface for `started`
 */
interface CommitModel_StartedSignalCallback {
    ($obj: CommitModel): void
}

/**
 * Signal callback interface for `update`
 */
interface CommitModel_UpdateSignalCallback {
    ($obj: CommitModel, added: number): void
}

/**
 * Signal callback interface for `finished`
 */
interface CommitModel_FinishedSignalCallback {
    ($obj: CommitModel): void
}

/**
 * Signal callback interface for `begin-clear`
 */
interface CommitModel_BeginClearSignalCallback {
    ($obj: CommitModel): void
}

/**
 * Signal callback interface for `end-clear`
 */
interface CommitModel_EndClearSignalCallback {
    ($obj: CommitModel): void
}

interface CommitModel extends Gtk.TreeModel {

    // Own properties of Gitg-1.0.Gitg.CommitModel

    limit: number
    sort_mode: Ggit.SortMode
    repository: Repository

    // Owm methods of Gitg-1.0.Gitg.CommitModel

    get_permanent_lanes(): Ggit.OId[]
    set_permanent_lanes(value: Ggit.OId[]): void
    reload(): void
    size(): number
    get(idx: number): Commit | null
    set_include(ids: Ggit.OId[]): void
    get_include(): Ggit.OId[]
    set_exclude(ids: Ggit.OId[]): void
    commit_from_iter(iter: Gtk.TreeIter): Commit | null
    path_from_commit(commit: Commit): Gtk.TreePath | null
    commit_from_path(path: Gtk.TreePath): Commit | null
    get_limit(): number
    set_limit(value: number): void
    get_sort_mode(): Ggit.SortMode
    set_sort_mode(value: Ggit.SortMode): void
    get_repository(): Repository
    set_repository(value: Repository): void

    // Own signals of Gitg-1.0.Gitg.CommitModel

    connect(sigName: "started", callback: CommitModel_StartedSignalCallback): number
    connect_after(sigName: "started", callback: CommitModel_StartedSignalCallback): number
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "update", callback: CommitModel_UpdateSignalCallback): number
    connect_after(sigName: "update", callback: CommitModel_UpdateSignalCallback): number
    emit(sigName: "update", added: number, ...args: any[]): void
    connect(sigName: "finished", callback: CommitModel_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: CommitModel_FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "begin-clear", callback: CommitModel_BeginClearSignalCallback): number
    connect_after(sigName: "begin-clear", callback: CommitModel_BeginClearSignalCallback): number
    emit(sigName: "begin-clear", ...args: any[]): void
    connect(sigName: "end-clear", callback: CommitModel_EndClearSignalCallback): number
    connect_after(sigName: "end-clear", callback: CommitModel_EndClearSignalCallback): number
    emit(sigName: "end-clear", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.CommitModel

    connect(sigName: "notify::limit", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::limit", ...args: any[]): void
    connect(sigName: "notify::sort-mode", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-mode", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-mode", ...args: any[]): void
    connect(sigName: "notify::repository", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: CommitModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly format_patch_name: string
    readonly committer_date_for_display: string
    readonly author_date_for_display: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.Commit

    get_lanes(): Lane[]
    insert_lane(lane: Lane, idx: number): Lane[]
    remove_lane(lane: Lane): Lane[]
    update_lanes(lanes: Lane[], mylane: number): void
    get_diff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff
    get_note(): Ggit.Note
    get_tag(): LaneTag
    set_tag(value: LaneTag): void
    get_mylane(): number
    set_mylane(value: number): void
    get_lane(): Lane
    get_format_patch_name(): string
    get_committer_date_for_display(): string
    get_author_date_for_display(): string

    // Class property signals of Gitg-1.0.Gitg.Commit

    connect(sigName: "notify::tag", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::mylane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mylane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mylane", ...args: any[]): void
    connect(sigName: "notify::lane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lane", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lane", ...args: any[]): void
    connect(sigName: "notify::format-patch-name", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-patch-name", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-patch-name", ...args: any[]): void
    connect(sigName: "notify::committer-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::committer-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::committer-date-for-display", ...args: any[]): void
    connect(sigName: "notify::author-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author-date-for-display", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author-date-for-display", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Commit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number

    // Owm methods of Gitg-1.0.Gitg.CredentialsManager

    credentials(url: string, username: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null
}

class CredentialsManager {

    // Own properties of Gitg-1.0.Gitg.CredentialsManager

    static name: string

    // Constructors of Gitg-1.0.Gitg.CredentialsManager

    constructor(config: Ggit.Config | null, window: Gtk.Window, save_user_in_config: boolean) 
    static new(config: Ggit.Config | null, window: Gtk.Window, save_user_in_config: boolean): CredentialsManager
}

interface Date_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Date

    date_string?: string | null
}

interface Date extends Gio.Initable {

    // Own properties of Gitg-1.0.Gitg.Date

    date_string: string
    readonly date: GLib.DateTime

    // Owm methods of Gitg-1.0.Gitg.Date

    for_display(): string
    get_date_string(): string
    set_date_string(value: string): void
    get_date(): GLib.DateTime

    // Class property signals of Gitg-1.0.Gitg.Date

    connect(sigName: "notify::date-string", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-string", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date-string", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Date

    static name: string
    static $gtype: GObject.GType<Date>

    // Constructors of Gitg-1.0.Gitg.Date

    constructor(config?: Date_ConstructProps) 
    constructor(date: string) 
    static new(date: string): Date
    static for_date_time(dt: GLib.DateTime): Date
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

    get_added(): number
    set_added(value: number): void
    get_removed(): number
    set_removed(value: number): void

    // Class property signals of Gitg-1.0.Gitg.DiffStat

    connect(sigName: "notify::added", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::added", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::added", ...args: any[]): void
    connect(sigName: "notify::removed", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removed", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::removed", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DiffStat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    context_lines?: number | null
    view?: DiffView | null
}

interface DiffViewOptions {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptions

    context_lines: number
    view: DiffView

    // Owm methods of Gitg-1.0.Gitg.DiffViewOptions

    get_context_lines(): number
    set_context_lines(value: number): void
    get_view(): DiffView | null
    set_view(value: DiffView | null): void

    // Conflicting methods

    get_icon_size(...args: any[]): any
    get_style(...args: any[]): any
    set_style(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.DiffViewOptions

    connect(sigName: "notify::context-lines", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context-lines", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context-lines", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::icon-size", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-size", ...args: any[]): void
    connect(sigName: "notify::icon-size-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-size-set", ...args: any[]): void
    connect(sigName: "notify::show-arrow", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-arrow", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-arrow", ...args: any[]): void
    connect(sigName: "notify::toolbar-style", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toolbar-style", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toolbar-style", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DiffViewOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    has_selection?: boolean | null
    diff?: Ggit.Diff | null
    commit?: Commit | null
    wrap_lines?: boolean | null
    staged?: boolean | null
    unstaged?: boolean | null
    show_parents?: boolean | null
    default_collapse_all?: boolean | null
    use_gravatar?: boolean | null
    tab_width?: number | null
    handle_selection?: boolean | null
    highlight?: boolean | null
    repository?: Repository | null
    new_is_workdir?: boolean | null
    ignore_whitespace?: boolean | null
    changes_inline?: boolean | null
    context_lines?: number | null
}

/**
 * Signal callback interface for `options-changed`
 */
interface DiffView_OptionsChangedSignalCallback {
    ($obj: DiffView): void
}

interface DiffView {

    // Own properties of Gitg-1.0.Gitg.DiffView

    readonly options: Ggit.DiffOptions
    has_selection: boolean
    diff: Ggit.Diff
    commit: Commit
    wrap_lines: boolean
    staged: boolean
    unstaged: boolean
    show_parents: boolean
    default_collapse_all: boolean
    use_gravatar: boolean
    tab_width: number
    handle_selection: boolean
    highlight: boolean
    repository: Repository
    new_is_workdir: boolean
    ignore_whitespace: boolean
    changes_inline: boolean
    context_lines: number

    // Owm methods of Gitg-1.0.Gitg.DiffView

    apply_link_tags(buffer: Gtk.TextBuffer, regex: GLib.Regex, replacement: string | null, custom_color_link: Gdk.RGBA, is_custom_color: boolean, is_custom_link: boolean): void
    follow_if_link(texview: Gtk.Widget, iter: Gtk.TextIter): void
    get_selection(): PatchSet[]
    get_options(): Ggit.DiffOptions
    get_has_selection(): boolean
    get_diff(): Ggit.Diff | null
    set_diff(value: Ggit.Diff | null): void
    get_commit(): Commit | null
    set_commit(value: Commit | null): void
    get_wrap_lines(): boolean
    set_wrap_lines(value: boolean): void
    get_staged(): boolean
    set_staged(value: boolean): void
    get_unstaged(): boolean
    set_unstaged(value: boolean): void
    get_show_parents(): boolean
    set_show_parents(value: boolean): void
    get_default_collapse_all(): boolean
    set_default_collapse_all(value: boolean): void
    get_use_gravatar(): boolean
    set_use_gravatar(value: boolean): void
    get_tab_width(): number
    set_tab_width(value: number): void
    get_handle_selection(): boolean
    set_handle_selection(value: boolean): void
    get_highlight(): boolean
    set_highlight(value: boolean): void
    get_repository(): Repository | null
    set_repository(value: Repository | null): void
    get_new_is_workdir(): boolean
    set_new_is_workdir(value: boolean): void
    get_ignore_whitespace(): boolean
    set_ignore_whitespace(value: boolean): void
    get_changes_inline(): boolean
    set_changes_inline(value: boolean): void
    get_context_lines(): number
    set_context_lines(value: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gitg-1.0.Gitg.DiffView

    vfunc_options_changed(): void

    // Own signals of Gitg-1.0.Gitg.DiffView

    connect(sigName: "options-changed", callback: DiffView_OptionsChangedSignalCallback): number
    connect_after(sigName: "options-changed", callback: DiffView_OptionsChangedSignalCallback): number
    emit(sigName: "options-changed", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.DiffView

    connect(sigName: "notify::options", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::diff", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::diff", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::diff", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::wrap-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-lines", ...args: any[]): void
    connect(sigName: "notify::staged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::staged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::staged", ...args: any[]): void
    connect(sigName: "notify::unstaged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unstaged", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unstaged", ...args: any[]): void
    connect(sigName: "notify::show-parents", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-parents", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-parents", ...args: any[]): void
    connect(sigName: "notify::default-collapse-all", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-collapse-all", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-collapse-all", ...args: any[]): void
    connect(sigName: "notify::use-gravatar", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gravatar", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-gravatar", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::handle-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-selection", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-selection", ...args: any[]): void
    connect(sigName: "notify::highlight", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight", ...args: any[]): void
    connect(sigName: "notify::repository", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::new-is-workdir", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-is-workdir", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::new-is-workdir", ...args: any[]): void
    connect(sigName: "notify::ignore-whitespace", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-whitespace", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ignore-whitespace", ...args: any[]): void
    connect(sigName: "notify::changes-inline", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changes-inline", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::changes-inline", ...args: any[]): void
    connect(sigName: "notify::context-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context-lines", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context-lines", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DiffView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FontManager extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.FontManager

    static name: string
    static $gtype: GObject.GType<FontManager>

    // Constructors of Gitg-1.0.Gitg.FontManager

    constructor(config?: FontManager_ConstructProps) 
    constructor(text_view: Gtk.TextView, plugin: boolean) 
    static new(text_view: Gtk.TextView, plugin: boolean): FontManager
    _init(config?: FontManager_ConstructProps): void
}

interface Hook_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Hook

    environment?: Gee.HashMap | null
    name?: string | null
    working_directory?: Gio.File | null
}

interface Hook {

    // Own properties of Gitg-1.0.Gitg.Hook

    environment: Gee.HashMap
    name: string
    working_directory: Gio.File
    readonly output: string[]

    // Owm methods of Gitg-1.0.Gitg.Hook

    add_argument(arg: string): void
    exists_in(repository: Ggit.Repository): boolean
    run_sync(repository: Ggit.Repository): number
    run(repository: Ggit.Repository, _callback_: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): number
    get_environment(): Gee.HashMap
    set_environment(value: Gee.HashMap): void
    get_name(): string
    set_name(value: string): void
    get_working_directory(): Gio.File | null
    set_working_directory(value: Gio.File | null): void
    get_output(): string[]

    // Class property signals of Gitg-1.0.Gitg.Hook

    connect(sigName: "notify::environment", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::environment", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::environment", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::working-directory", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working-directory", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::working-directory", ...args: any[]): void
    connect(sigName: "notify::output", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output", callback: (($obj: Hook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number
}

class LabelRenderer {

    // Own properties of Gitg-1.0.Gitg.LabelRenderer

    static name: string

    // Constructors of Gitg-1.0.Gitg.LabelRenderer

    constructor() 
    static new(): LabelRenderer
    static width(widget: Gtk.Widget, font: object | null, labels: Ref[]): number
    static draw(widget: Gtk.Widget, font: Pango.FontDescription, context: cairo.Context, labels: Ref[], area: Gdk.Rectangle): void
    static get_ref_at_pos(widget: Gtk.Widget, font: Pango.FontDescription, labels: Ref[], x: number): [ /* returnType */ Ref | null, /* hot_x */ number ]
    static render_ref(widget: Gtk.Widget, font: Pango.FontDescription, r: Ref, height: number, minwidth: number): GdkPixbuf.Pixbuf
}

interface Lanes_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gitg-1.0.Gitg.Lanes

    inactive_max?: number | null
    inactive_collapse?: number | null
    inactive_gap?: number | null
    inactive_enabled?: boolean | null
    miss_commits?: Gee.LinkedList | null
}

interface Lanes {

    // Own properties of Gitg-1.0.Gitg.Lanes

    inactive_max: number
    inactive_collapse: number
    inactive_gap: number
    inactive_enabled: boolean
    miss_commits: Gee.LinkedList

    // Owm methods of Gitg-1.0.Gitg.Lanes

    reset(reserved: Ggit.OId[] | null, roots: Gee.HashSet | null): void
    next(next: Commit, save_miss: boolean): [ /* returnType */ boolean, /* lanes */ Lane[], /* nextpos */ number ]
    get_inactive_max(): number
    set_inactive_max(value: number): void
    get_inactive_collapse(): number
    set_inactive_collapse(value: number): void
    get_inactive_gap(): number
    set_inactive_gap(value: number): void
    get_inactive_enabled(): boolean
    set_inactive_enabled(value: boolean): void
    get_miss_commits(): Gee.LinkedList
    set_miss_commits(value: Gee.LinkedList): void

    // Class property signals of Gitg-1.0.Gitg.Lanes

    connect(sigName: "notify::inactive-max", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-max", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactive-max", ...args: any[]): void
    connect(sigName: "notify::inactive-collapse", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-collapse", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactive-collapse", ...args: any[]): void
    connect(sigName: "notify::inactive-gap", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-gap", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactive-gap", ...args: any[]): void
    connect(sigName: "notify::inactive-enabled", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactive-enabled", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactive-enabled", ...args: any[]): void
    connect(sigName: "notify::miss-commits", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::miss-commits", callback: (($obj: Lanes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::miss-commits", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    boundary_id: Ggit.OId | null

    // Owm methods of Gitg-1.0.Gitg.Lane

    copy(): Lane
    dup(): Lane

    // Class property signals of Gitg-1.0.Gitg.Lane

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Lane extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Lane

    static name: string
    static $gtype: GObject.GType<Lane>

    // Constructors of Gitg-1.0.Gitg.Lane

    constructor(config?: Lane_ConstructProps) 
    constructor() 
    static new(): Lane
    static with_color(color: Color | null): Lane
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

    get_fraction(): number
    set_fraction(value: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.ProgressBin

    connect(sigName: "notify::fraction", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fraction", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fraction", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ProgressBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: any

    // Conflicting methods

    get_owner(...args: any[]): any

    // Class property signals of Gitg-1.0.Gitg.RefBase

    connect(sigName: "notify::native", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::d-parsed-name", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-parsed-name", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::d-pushes", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: RefBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly remote_name: string
    readonly remote_branch: string
    readonly prefix: string

    // Owm methods of Gitg-1.0.Gitg.ParsedRefName

    get_rtype(): RefType
    get_name(): string
    get_shortname(): string
    get_remote_name(): string | null
    get_remote_branch(): string | null
    get_prefix(): string | null

    // Class property signals of Gitg-1.0.Gitg.ParsedRefName

    connect(sigName: "notify::rtype", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtype", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtype", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::shortname", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortname", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shortname", ...args: any[]): void
    connect(sigName: "notify::remote-name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-name", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-name", ...args: any[]): void
    connect(sigName: "notify::remote-branch", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-branch", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-branch", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: ParsedRefName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    fetch_specs?: string[] | null
    push_specs?: string[] | null
    credentials_provider?: CredentialsProvider | null
}

/**
 * Signal callback interface for `tip-updated`
 */
interface Remote_TipUpdatedSignalCallback {
    ($obj: Remote, refname: string, a: Ggit.OId, b: Ggit.OId): void
}

interface Remote {

    // Own properties of Gitg-1.0.Gitg.Remote

    readonly transfer_progress: number
    state: RemoteState
    fetch_specs: string[]
    push_specs: string[]
    credentials_provider: CredentialsProvider

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.Remote

    // TODO fix conflict: connect(direction: Ggit.Direction, callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback | null): void
    connect_finish(_res_: Gio.AsyncResult): void
    disconnect(_callback_: Gio.AsyncReadyCallback | null): void
    disconnect_finish(_res_: Gio.AsyncResult): void
    download(callbacks: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback | null): void

    // Overloads of download

    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing and download the resulting packfile and
     * its index.
     * @param specs the ref specs.
     * @param fetch_options a #GgitFetchOptions.
     */
    download(specs: string[] | null, fetch_options?: Ggit.FetchOptions): boolean
    download(...args: any[]): any
    download(args_or_specs: any[] | string[] | null, fetch_options?: Ggit.FetchOptions): void | boolean | any
    download_finish(_res_: Gio.AsyncResult): void
    push(branch: string, callbacks?: Ggit.RemoteCallbacks | null, _callback_?: Gio.AsyncReadyCallback | null): void

    // Overloads of push

    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing, create a packfile with the missing
     * objects and send it.
     * @param specs the ref specs.
     * @param push_options a #GgitPushOptions.
     */
    push(specs: string[] | null, push_options?: Ggit.PushOptions): boolean
    push(...args: any[]): any
    push(args_or_specs: any[] | string[] | null, push_options?: Ggit.PushOptions): void | boolean | any
    push_finish(_res_: Gio.AsyncResult): void
    fetch(message: string | null, callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback | null): void
    fetch_finish(_res_: Gio.AsyncResult): void
    get_transfer_progress(): number
    get_state(): RemoteState
    get_fetch_specs(): string[] | null
    set_fetch_specs(value: string[] | null): void
    get_push_specs(): string[] | null
    set_push_specs(value: string[] | null): void
    get_credentials_provider(): CredentialsProvider | null
    set_credentials_provider(value: CredentialsProvider | null): void

    // Own signals of Gitg-1.0.Gitg.Remote

    connect(sigName: "tip-updated", callback: Remote_TipUpdatedSignalCallback): number
    connect_after(sigName: "tip-updated", callback: Remote_TipUpdatedSignalCallback): number
    emit(sigName: "tip-updated", refname: string, a: Ggit.OId, b: Ggit.OId, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.Remote

    connect(sigName: "notify::transfer-progress", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transfer-progress", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transfer-progress", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::fetch-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fetch-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fetch-specs", ...args: any[]): void
    connect(sigName: "notify::push-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::push-specs", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::push-specs", ...args: any[]): void
    connect(sigName: "notify::credentials-provider", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credentials-provider", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::credentials-provider", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    bookmarks_from_recent_files?: boolean | null
    location?: Gio.File | null
}

/**
 * Signal callback interface for `repository-activated`
 */
interface RepositoryListBox_RepositoryActivatedSignalCallback {
    ($obj: RepositoryListBox, repository: Repository): void
}

/**
 * Signal callback interface for `show-error`
 */
interface RepositoryListBox_ShowErrorSignalCallback {
    ($obj: RepositoryListBox, primary_message: string, secondary_message: string): void
}

interface RepositoryListBox {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBox

    mode: SelectionMode
    bookmarks_from_recent_files: boolean
    location: Gio.File
    readonly has_selection: boolean

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.RepositoryListBox

    populate_bookmarks(): void
    end_cloning(row: RepositoryListBoxRow, repository: Repository | null): void
    begin_cloning(location: Gio.File): RepositoryListBoxRow | null
    add_repository(repository: Repository, visited: GLib.DateTime | null): RepositoryListBoxRow | null
    get_selection(): RepositoryListBoxRow[]
    filter_text(text: string | null): void
    get_mode(): SelectionMode
    set_mode(value: SelectionMode): void
    get_bookmarks_from_recent_files(): boolean
    set_bookmarks_from_recent_files(value: boolean): void
    get_location(): Gio.File | null
    set_location(value: Gio.File | null): void
    get_has_selection(): boolean

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Gitg-1.0.Gitg.RepositoryListBox

    connect(sigName: "repository-activated", callback: RepositoryListBox_RepositoryActivatedSignalCallback): number
    connect_after(sigName: "repository-activated", callback: RepositoryListBox_RepositoryActivatedSignalCallback): number
    emit(sigName: "repository-activated", repository: Repository, ...args: any[]): void
    connect(sigName: "show-error", callback: RepositoryListBox_ShowErrorSignalCallback): number
    connect_after(sigName: "show-error", callback: RepositoryListBox_ShowErrorSignalCallback): number
    emit(sigName: "show-error", primary_message: string, secondary_message: string, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.RepositoryListBox

    connect(sigName: "notify::mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::bookmarks-from-recent-files", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bookmarks-from-recent-files", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bookmarks-from-recent-files", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::selection-mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RepositoryListBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    can_remove?: boolean | null
    time?: GLib.DateTime | null
    fraction?: number | null
    repository_name?: string | null
    dirname?: string | null
    branch_name?: string | null
    loading?: boolean | null
}

/**
 * Signal callback interface for `request-remove`
 */
interface RepositoryListBoxRow_RequestRemoveSignalCallback {
    ($obj: RepositoryListBoxRow): void
}

interface RepositoryListBoxRow {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRow

    mode: SelectionMode
    selected: boolean
    repository: Repository
    can_remove: boolean
    time: GLib.DateTime
    fraction: number
    repository_name: string
    dirname: string
    branch_name: string
    loading: boolean

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.RepositoryListBoxRow

    get_mode(): SelectionMode
    set_mode(value: SelectionMode): void
    get_selected(): boolean
    set_selected(value: boolean): void
    get_repository(): Repository | null
    set_repository(value: Repository | null): void
    get_can_remove(): boolean
    set_can_remove(value: boolean): void
    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void
    set_fraction(value: number): void
    get_repository_name(): string | null
    set_repository_name(value: string | null): void
    get_dirname(): string | null
    set_dirname(value: string | null): void
    get_branch_name(): string | null
    set_branch_name(value: string | null): void
    get_loading(): boolean
    set_loading(value: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Gitg-1.0.Gitg.RepositoryListBoxRow

    connect(sigName: "request-remove", callback: RepositoryListBoxRow_RequestRemoveSignalCallback): number
    connect_after(sigName: "request-remove", callback: RepositoryListBoxRow_RequestRemoveSignalCallback): number
    emit(sigName: "request-remove", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.RepositoryListBoxRow

    connect(sigName: "notify::mode", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::repository", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::can-remove", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-remove", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::fraction", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fraction", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fraction", ...args: any[]): void
    connect(sigName: "notify::repository-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repository-name", ...args: any[]): void
    connect(sigName: "notify::dirname", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirname", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dirname", ...args: any[]): void
    connect(sigName: "notify::branch-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch-name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::branch-name", ...args: any[]): void
    connect(sigName: "notify::loading", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loading", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loading", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RepositoryListBoxRow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: any

    // Owm methods of Gitg-1.0.Gitg.Repository

    clear_refs_cache(): void
    refs_for_id(id: Ggit.OId): Ref[]
    lookup(t_type: GObject.GType, t_dup_func?: GObject.BoxedCopyFunc, t_destroy_func?: GLib.DestroyNotify, id?: Ggit.OId): object | null

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
    lookup_reference(name: string): Ref

    // Overloads of lookup_reference

    /**
     * Lookups a reference by its name in `repository`. The returned #GgitRef must
     * be freed with g_object_unref().
     * @param name the long name for the reference (e.g. HEAD, ref/heads/master, refs/tags/v0.1.0, ...).
     */
    lookup_reference(name: string): Ggit.Ref | null
    lookup_reference(...args: any[]): any
    lookup_reference(args_or_name: any[] | string): Ref | Ggit.Ref | null | any
    lookup_reference_dwim(short_name: string): Ref

    // Overloads of lookup_reference_dwim

    /**
     * Lookups a reference by its short name in `repository` applying the git precendence
     * rules to the given shorthand to determine which reference the user is referring to.
     * The returned #GgitRef must be freed with g_object_unref().
     * @param short_name the short name for the reference (e.g. master, v0.1.0, ...).
     */
    lookup_reference_dwim(short_name: string): Ggit.Ref | null
    lookup_reference_dwim(...args: any[]): any
    lookup_reference_dwim(args_or_short_name: any[] | string): Ref | Ggit.Ref | null | any
    create_branch(name: string, obj?: Ggit.Object, flags?: Ggit.CreateFlags): Branch

    // Overloads of create_branch

    /**
     * Creates a new branch pointing at a target commit.
     * @param branch_name the name of the branch.
     * @param target a #GgitObject.
     * @param flags a #GgitCreateFlags.
     */
    create_branch(branch_name: string, target?: Ggit.Object, flags?: Ggit.CreateFlags): Ggit.Branch | null
    create_branch(...args: any[]): any
    create_branch(args_or_branch_name: any[] | string, target?: Ggit.Object, flags?: Ggit.CreateFlags): Branch | Ggit.Branch | null | any
    create_reference(name: string, oid?: Ggit.OId, message?: string): Ref

    // Overloads of create_reference

    /**
     * Creates a new object id reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param oid the #GgitOId pointed to by the reference.
     * @param log_message The one line long message to be appended to the reflog.
     */
    create_reference(name: string, oid?: Ggit.OId, log_message?: string): Ggit.Ref | null
    create_reference(...args: any[]): any
    create_reference(args_or_name: any[] | string, oid?: Ggit.OId, log_message?: string): Ref | Ggit.Ref | null | any
    create_symbolic_reference(name: string, target?: string, message?: string): Ref

    // Overloads of create_symbolic_reference

    /**
     * Creates a new symbolic reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param target the full name to the reference.
     * @param log_message The one line long message to be appended to the reflog.
     */
    create_symbolic_reference(name: string, target?: string, log_message?: string): Ggit.Ref | null
    create_symbolic_reference(...args: any[]): any
    create_symbolic_reference(args_or_name: any[] | string, target?: string, log_message?: string): Ref | Ggit.Ref | null | any
    get_head(): Ref

    // Overloads of get_head

    /**
     * Get and resolves the current HEAD reference of the repository. Note that the
     * returned ref is already resolved (if HEAD is symbolic). If you want to
     * retrieve the symbolic ref called HEAD, then use #ggit_repository_lookup_reference
     * instead.
     */
    get_head(): Ggit.Ref | null
    get_head(...args: any[]): any
    get_head(...args: any[]): Ref | Ggit.Ref | null | any
    get_signature_with_environment(env: Gee.Map, envname: string): Ggit.Signature
    get_name(): string | null
    get_stage(): Stage

    // Class property signals of Gitg-1.0.Gitg.Repository

    connect(sigName: "notify::name", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::stage", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stage", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stage", ...args: any[]): void
    connect(sigName: "notify::clone-options", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clone-options", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clone-options", ...args: any[]): void
    connect(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::head", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::head", ...args: any[]): void
    connect(sigName: "notify::init", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::init", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::init", ...args: any[]): void
    connect(sigName: "notify::is-bare", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-bare", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-bare", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workdir", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::workdir", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static init_repository(location: Gio.File, is_bare?: boolean): Repository

    // Overloads of init_repository

    /**
     * Creates a new git repository in the given folder.
     * @param location the location of the repository.
     * @param is_bare if %TRUE, a git repository without a working directory is created           at the pointed path. If %FALSE, provided path will be considered as the working           directory into which the .git directory will be created.
     */
    static init_repository(location: Gio.File, is_bare?: boolean): Ggit.Repository | null
    static init_repository(...args: any[]): any
    static init_repository(args_or_location: any[] | Gio.File, is_bare?: boolean): Repository | Ggit.Repository | null | any
}

interface Resource {

    // Own fields of Gitg-1.0.Gitg.Resource

    ref_count: number
}

class Resource {

    // Own properties of Gitg-1.0.Gitg.Resource

    static name: string

    // Constructors of Gitg-1.0.Gitg.Resource

    constructor() 
    static new(): Resource
    static load_css(id: string): Gtk.CssProvider | null
}

interface SidebarStore_ConstructProps extends Gtk.TreeStore_ConstructProps {
}

interface SidebarStore {

    // Own properties of Gitg-1.0.Gitg.SidebarStore

    readonly clearing: boolean

    // Owm methods of Gitg-1.0.Gitg.SidebarStore

    append_dummy(text: string): SidebarStore
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
    begin_header(text: string, id: number): SidebarStoreSidebarHeader
    end_header(): SidebarStore
    begin_section(): number
    end_section(): void
    clear(): void
    item_for_iter(iter: Gtk.TreeIter): SidebarItem
    activate(iter: Gtk.TreeIter, numclick: number): void
    get_clearing(): boolean

    // Class property signals of Gitg-1.0.Gitg.SidebarStore

    connect(sigName: "notify::clearing", callback: (($obj: SidebarStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clearing", callback: (($obj: SidebarStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clearing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    connect(sigName: "notify::text", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SidebarStoreSidebarText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_id(): number

    // Class property signals of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    connect(sigName: "notify::id", callback: (($obj: SidebarStoreSidebarHeader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SidebarStoreSidebarHeader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: Sidebar): void
}

/**
 * Signal callback interface for `populate-popup`
 */
interface Sidebar_PopulatePopupSignalCallback {
    ($obj: Sidebar, menu: Gtk.Menu): void
}

interface Sidebar {

    // Own properties of Gitg-1.0.Gitg.Sidebar

    model: SidebarStore

    // Owm methods of Gitg-1.0.Gitg.Sidebar

    select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    selection_changed(sel: Gtk.TreeSelection): void
    get_selected_iter(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_selected_item(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): object | null
    get_selected_items(t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): [ /* returnType */ object[], /* result_length1 */ number ]
    select(item: SidebarItem): void
    is_selected(item: SidebarItem): boolean
    get_model(): SidebarStore

    // Overloads of get_model

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     */
    get_model(): Gtk.TreeModel | null
    get_model(...args: any[]): any
    get_model(...args: any[]): SidebarStore | Gtk.TreeModel | null | any
    set_model(value: SidebarStore): void

    // Overloads of set_model

    /**
     * Sets the model for a #GtkTreeView.  If the `tree_view` already has a model
     * set, it will remove it before setting the new model.  If `model` is %NULL,
     * then it will unset the old model.
     * @param model The model.
     */
    set_model(model: Gtk.TreeModel | null): void
    set_model(...args: any[]): any
    set_model(args_or_model: any[] | Gtk.TreeModel | null): void | any

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gitg-1.0.Gitg.Sidebar

    vfunc_select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    vfunc_selection_changed(sel: Gtk.TreeSelection): void

    // Own signals of Gitg-1.0.Gitg.Sidebar

    connect(sigName: "deselected", callback: Sidebar_DeselectedSignalCallback): number
    connect_after(sigName: "deselected", callback: Sidebar_DeselectedSignalCallback): number
    emit(sigName: "deselected", ...args: any[]): void
    connect(sigName: "populate-popup", callback: Sidebar_PopulatePopupSignalCallback): number
    connect_after(sigName: "populate-popup", callback: Sidebar_PopulatePopupSignalCallback): number
    emit(sigName: "populate-popup", menu: Gtk.Menu, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.Sidebar

    connect(sigName: "notify::model", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_flags(): Ggit.StatusFlags

    // Class property signals of Gitg-1.0.Gitg.StageStatusFile

    connect(sigName: "notify::flags", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-staged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-unstaged", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-untracked", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StageStatusFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly is_dirty: boolean
    readonly flags: Ggit.SubmoduleStatus

    // Owm methods of Gitg-1.0.Gitg.StageStatusSubmodule

    get_submodule(): Ggit.Submodule
    get_is_dirty(): boolean
    get_flags(): Ggit.SubmoduleStatus

    // Class property signals of Gitg-1.0.Gitg.StageStatusSubmodule

    connect(sigName: "notify::submodule", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::submodule", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::submodule", ...args: any[]): void
    connect(sigName: "notify::is-dirty", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-dirty", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-staged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-unstaged", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-untracked", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StageStatusSubmodule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    next_items(num: number, _callback_: Gio.AsyncReadyCallback | null): void
    next_items_finish(_res_: Gio.AsyncResult): StageStatusItem[]

    // Class property signals of Gitg-1.0.Gitg.StageStatusEnumerator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number
    filename: string
    patches: PatchSetPatch[]
    patches_length1: number

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

    refresh(_callback_: Gio.AsyncReadyCallback | null): void
    refresh_finish(_res_: Gio.AsyncResult): void
    get_head_tree(_callback_: Gio.AsyncReadyCallback | null): void
    get_head_tree_finish(_res_: Gio.AsyncResult): Ggit.Tree | null
    file_status(options: Ggit.StatusOptions | null): StageStatusEnumerator
    pre_commit_hook(author: Ggit.Signature, _callback_: Gio.AsyncReadyCallback | null): void
    pre_commit_hook_finish(_res_: Gio.AsyncResult): void
    commit_index(index: Ggit.Index, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, _callback_: Gio.AsyncReadyCallback | null): void
    commit_index_finish(_res_: Gio.AsyncResult): Ggit.OId | null
    commit_tree(treeoid: Ggit.OId, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, _callback_: Gio.AsyncReadyCallback | null): void
    commit_tree_finish(_res_: Gio.AsyncResult): Ggit.OId | null
    commit(message: string, author: Ggit.Signature, committer: Ggit.Signature, options: StageCommitOptions, _callback_: Gio.AsyncReadyCallback | null): void
    commit_finish(_res_: Gio.AsyncResult): Ggit.OId | null
    revert(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    revert_finish(_res_: Gio.AsyncResult): void
    revert_path(path: string, _callback_: Gio.AsyncReadyCallback | null): void
    revert_path_finish(_res_: Gio.AsyncResult): void
    revert_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback | null): void
    revert_patch_finish(_res_: Gio.AsyncResult): void
    delete(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    delete_finish(_res_: Gio.AsyncResult): void
    delete_path(path: string, _callback_: Gio.AsyncReadyCallback | null): void
    delete_path_finish(_res_: Gio.AsyncResult): void
    stage(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    stage_finish(_res_: Gio.AsyncResult): void
    stage_path(path: string, _callback_: Gio.AsyncReadyCallback | null): void
    stage_path_finish(_res_: Gio.AsyncResult): void
    stage_commit(path: string, commit: Ggit.Commit, _callback_: Gio.AsyncReadyCallback | null): void
    stage_commit_finish(_res_: Gio.AsyncResult): void
    stage_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback | null): void
    stage_patch_finish(_res_: Gio.AsyncResult): void
    unstage(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null): void
    unstage_finish(_res_: Gio.AsyncResult): void
    unstage_path(path: string, _callback_: Gio.AsyncReadyCallback | null): void
    unstage_path_finish(_res_: Gio.AsyncResult): void
    unstage_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback | null): void
    unstage_patch_finish(_res_: Gio.AsyncResult): void
    diff_index_all(files: StageStatusItem[] | null, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null): void
    diff_index_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
    diff_index(f: StageStatusItem, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null): void
    diff_index_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
    diff_workdir_all(files: StageStatusItem[], defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null): void
    diff_workdir_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null
    diff_workdir(f: StageStatusItem, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null): void
    diff_workdir_finish(_res_: Gio.AsyncResult): Ggit.Diff | null

    // Class property signals of Gitg-1.0.Gitg.Stage

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number
}

class TextConv {

    // Own properties of Gitg-1.0.Gitg.TextConv

    static name: string

    // Constructors of Gitg-1.0.Gitg.TextConv

    constructor() 
    static new(): TextConv
    static has_textconv_command(repository: Repository, file: Ggit.DiffFile): boolean
    static get_textconv_content(repository: Repository, file: Ggit.DiffFile): Uint8Array
    static get_textconv_content_from_raw(repository: Repository, file: Ggit.DiffFile, raw_content: Uint8Array | null): Uint8Array
}

interface Theme_ConstructProps extends Gtk.Widget_ConstructProps {
}

interface Theme {

    // Owm methods of Gitg-1.0.Gitg.Theme

    is_theme_dark(): boolean

    // Class property signals of Gitg-1.0.Gitg.Theme

    connect(sigName: "notify::app-paintable", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number
}

class Utils {

    // Own properties of Gitg-1.0.Gitg.Utils

    static name: string

    // Constructors of Gitg-1.0.Gitg.Utils

    constructor() 
    static new(): Utils
    static replace_home_dir_with_tilde(file: Gio.File): string
    static expand_home_dir(path: string): string
}

interface WhenMapped {

    // Own fields of Gitg-1.0.Gitg.WhenMapped

    ref_count: number

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

    options_changed: (self: DiffView) => void
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

    select_function: (self: Sidebar, sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean) => boolean
    selection_changed: (self: Sidebar, sel: Gtk.TreeSelection) => void
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
    old_offset: number
    new_offset: number
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

    get_upstream: (self: Branch) => Ref
}

abstract class BranchIface {

    // Own properties of Gitg-1.0.Gitg.BranchIface

    static name: string
}

interface RefIface {

    // Own fields of Gitg-1.0.Gitg.RefIface

    get_owner: (self: Ref) => Repository
    get_d_parsed_name: (self: Ref) => ParsedRefName
    set_d_parsed_name: (self: Ref, value: ParsedRefName) => void
    get_d_pushes: (self: Ref) => Ref[] | null
    set_d_pushes: (self: Ref, value: Ref[] | null) => void
    get_state: (self: Ref) => RefState
    set_state: (self: Ref, value: RefState) => void
    get_working: (self: Ref) => boolean
    set_working: (self: Ref, value: boolean) => void
}

abstract class RefIface {

    // Own properties of Gitg-1.0.Gitg.RefIface

    static name: string
}

interface CredentialsProviderIface {

    // Own fields of Gitg-1.0.Gitg.CredentialsProviderIface

    credentials: (self: CredentialsProvider, url: string, username_from_url: string | null, allowed_types: Ggit.Credtype) => Ggit.Cred | null
}

abstract class CredentialsProviderIface {

    // Own properties of Gitg-1.0.Gitg.CredentialsProviderIface

    static name: string
}

interface SidebarItemIface {

    // Own fields of Gitg-1.0.Gitg.SidebarItemIface

    activate: (self: SidebarItem, numclick: number) => void
    get_text: (self: SidebarItem) => string
    get_icon_name: (self: SidebarItem) => string | null
}

abstract class SidebarItemIface {

    // Own properties of Gitg-1.0.Gitg.SidebarItemIface

    static name: string
}

interface StageStatusItemIface {

    // Own fields of Gitg-1.0.Gitg.StageStatusItemIface

    get_path: (self: StageStatusItem) => string
    get_is_staged: (self: StageStatusItem) => boolean
    get_is_unstaged: (self: StageStatusItem) => boolean
    get_is_untracked: (self: StageStatusItem) => boolean
    get_icon_name: (self: StageStatusItem) => string | null
}

abstract class StageStatusItemIface {

    // Own properties of Gitg-1.0.Gitg.StageStatusItemIface

    static name: string
}

}
export default Gitg;