// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EvinceView-3.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type EvinceDocument from './EvinceDocument-3.0';

export namespace EvinceView {

enum JobPriority {
    PRIORITY_URGENT,
    PRIORITY_HIGH,
    PRIORITY_LOW,
    PRIORITY_NONE,
    N_PRIORITIES,
}
enum JobRunMode {
    THREAD,
    MAIN_LOOP,
}
enum JobThumbnailFormat {
    PIXBUF,
    SURFACE,
}
enum PageLayout {
    SINGLE,
    DUAL,
    AUTOMATIC,
}
enum SizingMode {
    /**
     * Since: 3.8
     */
    FIT_PAGE,
    /**
     * Same as %EV_SIZING_FIT_PAGE. Deprecated:
     */
    BEST_FIT,
    FIT_WIDTH,
    FREE,
    /**
     * Since: 3.8
     */
    AUTOMATIC,
}
enum JobPageDataFlags {
    NONE,
    LINKS,
    TEXT,
    TEXT_MAPPING,
    TEXT_LAYOUT,
    TEXT_ATTRS,
    TEXT_LOG_ATTRS,
    IMAGES,
    FORMS,
    ANNOTS,
    MEDIA,
    ALL,
}
const STOCK_ANNOT_SQUIGGLY: string
const STOCK_ANNOT_TEXT: string
const STOCK_ATTACHMENT: string
const STOCK_CLOSE: string
const STOCK_FIND_UNSUPPORTED: string
const STOCK_INVERTED_COLORS: string
const STOCK_OUTLINE: string
const STOCK_RESIZE_SE: string
const STOCK_RESIZE_SW: string
const STOCK_ROTATE_LEFT: string
const STOCK_ROTATE_RIGHT: string
const STOCK_RUN_PRESENTATION: string
const STOCK_SEND_TO: string
const STOCK_VIEW_CONTINUOUS: string
const STOCK_VIEW_DUAL: string
const STOCK_VIEW_SIDEBAR: string
const STOCK_VISIBLE: string
const STOCK_ZOOM: string
const STOCK_ZOOM_PAGE: string
const STOCK_ZOOM_WIDTH: string
/**
 * Creates a new icon factory, adding the base stock icons to it.
 */
function stock_icons_init(): void
function stock_icons_set_screen(screen: Gdk.Screen): void
function stock_icons_shutdown(): void
interface DocumentModel_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceView-3.0.EvinceView.DocumentModel

    continuous?: boolean | null
    document?: EvinceDocument.Document | null
    dual_odd_left?: boolean | null
    dual_page?: boolean | null
    fullscreen?: boolean | null
    inverted_colors?: boolean | null
    max_scale?: number | null
    min_scale?: number | null
    page?: number | null
    page_layout?: PageLayout | null
    rotation?: number | null
    rtl?: boolean | null
    scale?: number | null
    sizing_mode?: SizingMode | null
}

/**
 * Signal callback interface for `page-changed`
 */
interface DocumentModel_PageChangedSignalCallback {
    ($obj: DocumentModel, object: number, p0: number): void
}

interface DocumentModel {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModel

    continuous: boolean
    document: EvinceDocument.Document
    dual_odd_left: boolean
    dual_page: boolean
    fullscreen: boolean
    inverted_colors: boolean
    max_scale: number
    min_scale: number
    page: number
    page_layout: PageLayout
    rotation: number
    rtl: boolean
    scale: number
    sizing_mode: SizingMode

    // Owm methods of EvinceView-3.0.EvinceView.DocumentModel

    get_continuous(): boolean
    /**
     * Returns the #EvDocument referenced by the model.
     */
    get_document(): EvinceDocument.Document
    get_dual_page(): boolean
    get_dual_page_odd_pages_left(): boolean
    get_fullscreen(): boolean
    get_inverted_colors(): boolean
    get_max_scale(): number
    get_min_scale(): number
    get_page(): number
    get_page_layout(): PageLayout
    get_rotation(): number
    get_rtl(): boolean
    get_scale(): number
    get_sizing_mode(): SizingMode
    set_continuous(continuous: boolean): void
    set_document(document: EvinceDocument.Document): void
    /**
     * Sets the document model's page layout to %EV_PAGE_LAYOUT_SINGLE or
     * %EV_PAGE_LAYOUT_DUAL.
     * @param dual_page whether to enable dual page mode
     */
    set_dual_page(dual_page: boolean): void
    set_dual_page_odd_pages_left(odd_left: boolean): void
    set_fullscreen(fullscreen: boolean): void
    set_inverted_colors(inverted_colors: boolean): void
    set_max_scale(max_scale: number): void
    set_min_scale(min_scale: number): void
    set_page(page: number): void
    set_page_by_label(page_label: string): void
    /**
     * Sets the document model's page layout to `layout`.
     * @param layout a #EvPageLayout
     */
    set_page_layout(layout: PageLayout): void
    set_rotation(rotation: number): void
    set_rtl(rtl: boolean): void
    set_scale(scale: number): void
    set_sizing_mode(mode: SizingMode): void

    // Own signals of EvinceView-3.0.EvinceView.DocumentModel

    connect(sigName: "page-changed", callback: DocumentModel_PageChangedSignalCallback): number
    connect_after(sigName: "page-changed", callback: DocumentModel_PageChangedSignalCallback): number
    emit(sigName: "page-changed", object: number, p0: number, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.DocumentModel

    connect(sigName: "notify::continuous", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continuous", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::continuous", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::dual-odd-left", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dual-odd-left", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dual-odd-left", ...args: any[]): void
    connect(sigName: "notify::dual-page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dual-page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dual-page", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::inverted-colors", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted-colors", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverted-colors", ...args: any[]): void
    connect(sigName: "notify::max-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-scale", ...args: any[]): void
    connect(sigName: "notify::min-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-scale", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::page-layout", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-layout", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::rtl", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtl", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtl", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::sizing-mode", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sizing-mode", callback: (($obj: DocumentModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sizing-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DocumentModel extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModel

    static name: string
    static $gtype: GObject.GType<DocumentModel>

    // Constructors of EvinceView-3.0.EvinceView.DocumentModel

    constructor(config?: DocumentModel_ConstructProps) 
    constructor() 
    static new(): DocumentModel
    static new_with_document(document: EvinceDocument.Document): DocumentModel
    _init(config?: DocumentModel_ConstructProps): void
}

interface Job_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `cancelled`
 */
interface Job_CancelledSignalCallback {
    ($obj: Job): void
}

/**
 * Signal callback interface for `finished`
 */
interface Job_FinishedSignalCallback {
    ($obj: Job): void
}

interface Job {

    // Own fields of EvinceView-3.0.EvinceView.Job

    parent: GObject.Object
    document: EvinceDocument.Document
    run_mode: JobRunMode
    cancelled: number
    finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idle_finished_id: number
    idle_cancelled_id: number

    // Owm methods of EvinceView-3.0.EvinceView.Job

    cancel(): void
    get_run_mode(): JobRunMode
    is_failed(): boolean
    is_finished(): boolean
    run(): boolean
    scheduler_push_job(priority: JobPriority): void
    scheduler_update_job(priority: JobPriority): void
    set_run_mode(run_mode: JobRunMode): void
    succeeded(): void

    // Own virtual methods of EvinceView-3.0.EvinceView.Job

    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_run(): boolean

    // Own signals of EvinceView-3.0.EvinceView.Job

    connect(sigName: "cancelled", callback: Job_CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Job_CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Job_FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.Job

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Job extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of EvinceView-3.0.EvinceView.Job

    constructor(config?: Job_ConstructProps) 
    _init(config?: Job_ConstructProps): void
    static scheduler_get_running_thread_job(): Job
}

interface JobAnnots_ConstructProps extends Job_ConstructProps {
}

interface JobAnnots {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnots

    parent: Job
    annots: object[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAnnots

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobAnnots extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnots

    static name: string
    static $gtype: GObject.GType<JobAnnots>

    // Constructors of EvinceView-3.0.EvinceView.JobAnnots

    constructor(config?: JobAnnots_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobAnnots
    _init(config?: JobAnnots_ConstructProps): void
}

interface JobAttachments_ConstructProps extends Job_ConstructProps {
}

interface JobAttachments {

    // Own fields of EvinceView-3.0.EvinceView.JobAttachments

    parent: Job
    attachments: object[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobAttachments extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachments

    static name: string
    static $gtype: GObject.GType<JobAttachments>

    // Constructors of EvinceView-3.0.EvinceView.JobAttachments

    constructor(config?: JobAttachments_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobAttachments
    _init(config?: JobAttachments_ConstructProps): void
}

interface JobExport_ConstructProps extends Job_ConstructProps {
}

interface JobExport {

    // Own fields of EvinceView-3.0.EvinceView.JobExport

    parent: Job
    page: number
    rc: EvinceDocument.RenderContext

    // Owm methods of EvinceView-3.0.EvinceView.JobExport

    set_page(page: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobExport

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobExport extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobExport

    static name: string
    static $gtype: GObject.GType<JobExport>

    // Constructors of EvinceView-3.0.EvinceView.JobExport

    constructor(config?: JobExport_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobExport
    _init(config?: JobExport_ConstructProps): void
}

interface JobFind_ConstructProps extends Job_ConstructProps {
}

/**
 * Signal callback interface for `updated`
 */
interface JobFind_UpdatedSignalCallback {
    ($obj: JobFind, object: number): void
}

interface JobFind {

    // Own fields of EvinceView-3.0.EvinceView.JobFind

    parent: Job
    start_page: number
    current_page: number
    n_pages: number
    pages: object[]
    text: string
    case_sensitive: boolean
    has_results: boolean
    options: EvinceDocument.FindOptions

    // Owm methods of EvinceView-3.0.EvinceView.JobFind

    get_n_results(pages: number): number
    get_options(): EvinceDocument.FindOptions
    get_progress(): number
    set_options(options: EvinceDocument.FindOptions): void

    // Own virtual methods of EvinceView-3.0.EvinceView.JobFind

    vfunc_updated(page: number): void

    // Own signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: "updated", callback: JobFind_UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: JobFind_UpdatedSignalCallback): number
    emit(sigName: "updated", object: number, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobFind extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFind

    static name: string
    static $gtype: GObject.GType<JobFind>

    // Constructors of EvinceView-3.0.EvinceView.JobFind

    constructor(config?: JobFind_ConstructProps) 
    constructor(document: EvinceDocument.Document, start_page: number, n_pages: number, text: string, case_sensitive: boolean) 
    static new(document: EvinceDocument.Document, start_page: number, n_pages: number, text: string, case_sensitive: boolean): JobFind
    _init(config?: JobFind_ConstructProps): void
}

interface JobFonts_ConstructProps extends Job_ConstructProps {
}

/**
 * Signal callback interface for `updated`
 */
interface JobFonts_UpdatedSignalCallback {
    ($obj: JobFonts, object: number): void
}

interface JobFonts {

    // Own fields of EvinceView-3.0.EvinceView.JobFonts

    parent: Job
    scan_completed: boolean

    // Own virtual methods of EvinceView-3.0.EvinceView.JobFonts

    vfunc_updated(progress: number): void

    // Own signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: "updated", callback: JobFonts_UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: JobFonts_UpdatedSignalCallback): number
    emit(sigName: "updated", object: number, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobFonts extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFonts

    static name: string
    static $gtype: GObject.GType<JobFonts>

    // Constructors of EvinceView-3.0.EvinceView.JobFonts

    constructor(config?: JobFonts_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobFonts
    _init(config?: JobFonts_ConstructProps): void
}

interface JobLayers_ConstructProps extends Job_ConstructProps {
}

interface JobLayers {

    // Own fields of EvinceView-3.0.EvinceView.JobLayers

    parent: Job
    model: Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLayers extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLayers

    static name: string
    static $gtype: GObject.GType<JobLayers>

    // Constructors of EvinceView-3.0.EvinceView.JobLayers

    constructor(config?: JobLayers_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobLayers
    _init(config?: JobLayers_ConstructProps): void
}

interface JobLinks_ConstructProps extends Job_ConstructProps {
}

interface JobLinks {

    // Own fields of EvinceView-3.0.EvinceView.JobLinks

    parent: Job
    model: Gtk.TreeModel

    // Owm methods of EvinceView-3.0.EvinceView.JobLinks

    /**
     * Get a #GtkTreeModel loaded with the links
     */
    get_model(): Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLinks extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLinks

    static name: string
    static $gtype: GObject.GType<JobLinks>

    // Constructors of EvinceView-3.0.EvinceView.JobLinks

    constructor(config?: JobLinks_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobLinks
    _init(config?: JobLinks_ConstructProps): void
}

interface JobLoad_ConstructProps extends Job_ConstructProps {
}

interface JobLoad {

    // Own fields of EvinceView-3.0.EvinceView.JobLoad

    parent: Job
    uri: string
    password: string

    // Owm methods of EvinceView-3.0.EvinceView.JobLoad

    set_password(password: string): void
    set_uri(uri: string): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoad

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLoad extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoad

    static name: string
    static $gtype: GObject.GType<JobLoad>

    // Constructors of EvinceView-3.0.EvinceView.JobLoad

    constructor(config?: JobLoad_ConstructProps) 
    constructor(uri: string) 
    static new(uri: string): JobLoad
    _init(config?: JobLoad_ConstructProps): void
}

interface JobLoadFd_ConstructProps extends Job_ConstructProps {
}

interface JobLoadFd {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFd

    parent: Job
    mime_type: string
    password: string
    fd: number
    flags: EvinceDocument.DocumentLoadFlags

    // Owm methods of EvinceView-3.0.EvinceView.JobLoadFd

    /**
     * Sets `fd` as the file descriptor in `job`.
     * Note that `job` takes ownership of `fd;` you must not do anything
     * with it afterwards.
     * @param fd 
     */
    set_fd(fd: number): boolean
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void
    set_mime_type(mime_type: string): void
    set_password(password: string): void
    take_fd(fd: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadFd

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A job class to load a #EvDocument from a file descriptor
 * referring to a regular file.
 * @class 
 */
class JobLoadFd extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFd

    static name: string
    static $gtype: GObject.GType<JobLoadFd>

    // Constructors of EvinceView-3.0.EvinceView.JobLoadFd

    constructor(config?: JobLoadFd_ConstructProps) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mime_type the mime type
     * @param flags flags from #EvDocumentLoadFlags
     */
    constructor(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mime_type the mime type
     * @param flags flags from #EvDocumentLoadFlags
     */
    static new(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    static new_take(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    _init(config?: JobLoadFd_ConstructProps): void
}

interface JobLoadGFile_ConstructProps extends Job_ConstructProps {
}

interface JobLoadGFile {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFile

    parent: Job
    password: string
    gfile: Gio.File
    flags: EvinceDocument.DocumentLoadFlags

    // Owm methods of EvinceView-3.0.EvinceView.JobLoadGFile

    set_gfile(gfile: Gio.File): void
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void
    set_password(password: string): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadGFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A job class to load a #EvDocument from a #GFile.
 * @class 
 */
class JobLoadGFile extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFile

    static name: string
    static $gtype: GObject.GType<JobLoadGFile>

    // Constructors of EvinceView-3.0.EvinceView.JobLoadGFile

    constructor(config?: JobLoadGFile_ConstructProps) 
    constructor(gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags) 
    static new(gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags): JobLoadGFile
    _init(config?: JobLoadGFile_ConstructProps): void
}

interface JobLoadStream_ConstructProps extends Job_ConstructProps {
}

interface JobLoadStream {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStream

    parent: Job
    password: string
    stream: Gio.InputStream
    flags: EvinceDocument.DocumentLoadFlags

    // Owm methods of EvinceView-3.0.EvinceView.JobLoadStream

    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void
    set_mime_type(mime_type: string): void
    set_password(password: string): void
    set_stream(stream: Gio.InputStream): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadStream

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A job class to load a #EvDocument from a #GInputStream.
 * @class 
 */
class JobLoadStream extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStream

    static name: string
    static $gtype: GObject.GType<JobLoadStream>

    // Constructors of EvinceView-3.0.EvinceView.JobLoadStream

    constructor(config?: JobLoadStream_ConstructProps) 
    constructor(stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags) 
    static new(stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags): JobLoadStream
    _init(config?: JobLoadStream_ConstructProps): void
}

interface JobPageData_ConstructProps extends Job_ConstructProps {
}

interface JobPageData {

    // Own fields of EvinceView-3.0.EvinceView.JobPageData

    parent: Job
    page: number
    flags: JobPageDataFlags
    link_mapping: EvinceDocument.MappingList
    image_mapping: EvinceDocument.MappingList
    form_field_mapping: EvinceDocument.MappingList
    annot_mapping: EvinceDocument.MappingList
    media_mapping: EvinceDocument.MappingList
    text_mapping: cairo.Region
    text: string
    text_layout: EvinceDocument.Rectangle
    text_layout_length: number
    text_attrs: Pango.AttrList
    text_log_attrs: Pango.LogAttr
    text_log_attrs_length: number

    // Class property signals of EvinceView-3.0.EvinceView.JobPageData

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobPageData extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobPageData

    static name: string
    static $gtype: GObject.GType<JobPageData>

    // Constructors of EvinceView-3.0.EvinceView.JobPageData

    constructor(config?: JobPageData_ConstructProps) 
    constructor(document: EvinceDocument.Document, page: number, flags: JobPageDataFlags) 
    static new(document: EvinceDocument.Document, page: number, flags: JobPageDataFlags): JobPageData
    _init(config?: JobPageData_ConstructProps): void
}

interface JobPrint_ConstructProps extends Job_ConstructProps {
}

interface JobPrint {

    // Own fields of EvinceView-3.0.EvinceView.JobPrint

    parent: Job
    page: number
    cr: cairo.Context

    // Owm methods of EvinceView-3.0.EvinceView.JobPrint

    set_cairo(cr: cairo.Context): void
    set_page(page: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobPrint extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobPrint

    static name: string
    static $gtype: GObject.GType<JobPrint>

    // Constructors of EvinceView-3.0.EvinceView.JobPrint

    constructor(config?: JobPrint_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobPrint
    _init(config?: JobPrint_ConstructProps): void
}

interface JobRender_ConstructProps extends Job_ConstructProps {
}

interface JobRender {

    // Own fields of EvinceView-3.0.EvinceView.JobRender

    parent: Job
    page: number
    rotation: number
    scale: number
    page_ready: boolean
    target_width: number
    target_height: number
    surface: cairo.Surface
    include_selection: boolean
    selection: cairo.Surface
    selection_region: cairo.Region
    selection_points: EvinceDocument.Rectangle
    selection_style: EvinceDocument.SelectionStyle
    base: Gdk.Color
    text: Gdk.Color

    // Owm methods of EvinceView-3.0.EvinceView.JobRender

    set_selection_info(selection_points: EvinceDocument.Rectangle, selection_style: EvinceDocument.SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of EvinceView-3.0.EvinceView.JobRender

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobRender extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobRender

    static name: string
    static $gtype: GObject.GType<JobRender>

    // Constructors of EvinceView-3.0.EvinceView.JobRender

    constructor(config?: JobRender_ConstructProps) 
    constructor(document: EvinceDocument.Document, page: number, rotation: number, scale: number, width: number, height: number) 
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number, width: number, height: number): JobRender
    _init(config?: JobRender_ConstructProps): void
}

interface JobSave_ConstructProps extends Job_ConstructProps {
}

interface JobSave {

    // Own fields of EvinceView-3.0.EvinceView.JobSave

    parent: Job
    uri: string
    document_uri: string

    // Class property signals of EvinceView-3.0.EvinceView.JobSave

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobSave extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobSave

    static name: string
    static $gtype: GObject.GType<JobSave>

    // Constructors of EvinceView-3.0.EvinceView.JobSave

    constructor(config?: JobSave_ConstructProps) 
    constructor(document: EvinceDocument.Document, uri: string, document_uri: string) 
    static new(document: EvinceDocument.Document, uri: string, document_uri: string): JobSave
    _init(config?: JobSave_ConstructProps): void
}

interface JobThumbnail_ConstructProps extends Job_ConstructProps {
}

interface JobThumbnail {

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnail

    parent: Job
    page: number
    rotation: number
    scale: number
    target_width: number
    target_height: number
    thumbnail: GdkPixbuf.Pixbuf
    has_frame: boolean
    format: JobThumbnailFormat
    thumbnail_surface: cairo.Surface

    // Owm methods of EvinceView-3.0.EvinceView.JobThumbnail

    set_has_frame(has_frame: boolean): void
    /**
     * Set the desired output format for the generated thumbnail
     * @param format a #EvJobThumbnailFormat
     */
    set_output_format(format: JobThumbnailFormat): void

    // Class property signals of EvinceView-3.0.EvinceView.JobThumbnail

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobThumbnail extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnail

    static name: string
    static $gtype: GObject.GType<JobThumbnail>

    // Constructors of EvinceView-3.0.EvinceView.JobThumbnail

    constructor(config?: JobThumbnail_ConstructProps) 
    constructor(document: EvinceDocument.Document, page: number, rotation: number, scale: number) 
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail
    static new_with_target_size(document: EvinceDocument.Document, page: number, rotation: number, target_width: number, target_height: number): JobThumbnail
    _init(config?: JobThumbnail_ConstructProps): void
}

interface PrintOperation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EvinceView-3.0.EvinceView.PrintOperation

    document?: EvinceDocument.Document | null
}

/**
 * Signal callback interface for `begin-print`
 */
interface PrintOperation_BeginPrintSignalCallback {
    ($obj: PrintOperation): void
}

/**
 * Signal callback interface for `done`
 */
interface PrintOperation_DoneSignalCallback {
    ($obj: PrintOperation, object: Gtk.PrintOperationResult): void
}

/**
 * Signal callback interface for `status-changed`
 */
interface PrintOperation_StatusChangedSignalCallback {
    ($obj: PrintOperation): void
}

interface PrintOperation {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperation

    readonly document: EvinceDocument.Document

    // Owm methods of EvinceView-3.0.EvinceView.PrintOperation

    cancel(): void
    get_default_page_setup(): Gtk.PageSetup
    get_embed_page_setup(): boolean
    get_error(): void
    get_job_name(): string
    get_print_settings(): Gtk.PrintSettings
    get_progress(): number
    get_status(): string
    run(parent: Gtk.Window): void
    set_current_page(current_page: number): void
    set_default_page_setup(page_setup: Gtk.PageSetup): void
    set_embed_page_setup(embed: boolean): void
    set_job_name(job_name: string): void
    set_print_settings(print_settings: Gtk.PrintSettings): void

    // Own signals of EvinceView-3.0.EvinceView.PrintOperation

    connect(sigName: "begin-print", callback: PrintOperation_BeginPrintSignalCallback): number
    connect_after(sigName: "begin-print", callback: PrintOperation_BeginPrintSignalCallback): number
    emit(sigName: "begin-print", ...args: any[]): void
    connect(sigName: "done", callback: PrintOperation_DoneSignalCallback): number
    connect_after(sigName: "done", callback: PrintOperation_DoneSignalCallback): number
    emit(sigName: "done", object: Gtk.PrintOperationResult, ...args: any[]): void
    connect(sigName: "status-changed", callback: PrintOperation_StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: PrintOperation_StatusChangedSignalCallback): number
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.PrintOperation

    connect(sigName: "notify::document", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PrintOperation extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperation

    static name: string
    static $gtype: GObject.GType<PrintOperation>

    // Constructors of EvinceView-3.0.EvinceView.PrintOperation

    constructor(config?: PrintOperation_ConstructProps) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): PrintOperation
    _init(config?: PrintOperation_ConstructProps): void
    static exists_for_document(document: EvinceDocument.Document): boolean
}

interface View_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.Container_ConstructProps {
}

/**
 * Signal callback interface for `activate`
 */
interface View_ActivateSignalCallback {
    ($obj: View): void
}

/**
 * Signal callback interface for `annot-added`
 */
interface View_AnnotAddedSignalCallback {
    ($obj: View, object: EvinceDocument.Annotation): void
}

/**
 * Signal callback interface for `annot-changed`
 */
interface View_AnnotChangedSignalCallback {
    ($obj: View, object: EvinceDocument.Annotation): void
}

/**
 * Signal callback interface for `annot-removed`
 */
interface View_AnnotRemovedSignalCallback {
    ($obj: View, object: EvinceDocument.Annotation): void
}

/**
 * Signal callback interface for `cursor-moved`
 */
interface View_CursorMovedSignalCallback {
    ($obj: View, object: number, p0: number): void
}

/**
 * Signal callback interface for `external-link`
 */
interface View_ExternalLinkSignalCallback {
    ($obj: View, object: GObject.Object): void
}

/**
 * Signal callback interface for `handle-link`
 */
interface View_HandleLinkSignalCallback {
    ($obj: View, object: number, p0: GObject.Object): void
}

/**
 * Signal callback interface for `layers-changed`
 */
interface View_LayersChangedSignalCallback {
    ($obj: View): void
}

/**
 * Signal callback interface for `move-cursor`
 */
interface View_MoveCursorSignalCallback {
    ($obj: View, object: Gtk.MovementStep, p0: number, p1: boolean): boolean
}

/**
 * Signal callback interface for `popup`
 */
interface View_PopupSignalCallback {
    ($obj: View, object: object | null): void
}

/**
 * Signal callback interface for `scroll`
 */
interface View_ScrollSignalCallback {
    ($obj: View, object: Gtk.ScrollType, p0: Gtk.Orientation): void
}

/**
 * Signal callback interface for `selection-changed`
 */
interface View_SelectionChangedSignalCallback {
    ($obj: View): void
}

/**
 * Signal callback interface for `sync-source`
 */
interface View_SyncSourceSignalCallback {
    ($obj: View, object: EvinceDocument.SourceLink): void
}

interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of EvinceView-3.0.EvinceView.View

    readonly can_zoom_in: boolean
    readonly can_zoom_out: boolean
    /**
     * Allows to implement a custom notification system.
     */
    readonly is_loading: boolean

    // Owm methods of EvinceView-3.0.EvinceView.View

    /**
     * Adds a Text Markup annotation (defaulting to a 'highlight' one) to
     * the currently selected text on the document.
     * 
     * When the selected text spans more than one page, it will add a
     * corresponding annotation for each page that contains selected text.
     */
    add_text_markup_annotation_for_selected_text(): boolean
    autoscroll_start(): void
    autoscroll_stop(): void
    begin_add_annotation(annot_type: EvinceDocument.AnnotationType): void
    cancel_add_annotation(): void
    copy(): void
    copy_link_address(action: EvinceDocument.LinkAction): void
    find_cancel(): void
    find_next(): void
    find_previous(): void
    /**
     * Restart the current search operation from the given `page`.
     * @param page a page index
     */
    find_restart(page: number): void
    find_search_changed(): void
    find_set_highlight_search(value: boolean): void
    /**
     * FIXME
     * @param page 
     * @param result 
     */
    find_set_result(page: number, result: number): void
    find_started(job: JobFind): void
    focus_annotation(annot_mapping: EvinceDocument.Mapping): void
    get_allow_links_change_zoom(): boolean
    get_enable_spellchecking(): boolean
    get_has_selection(): boolean
    get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean
    get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean
    /**
     * Returns a pointer to a constant string containing the selected
     * text in the view.
     * 
     * The value returned may be NULL if there is no selected text.
     */
    get_selected_text(): string
    handle_link(link: EvinceDocument.Link): void
    hide_cursor(): void
    highlight_forward_search(link: EvinceDocument.SourceLink): void
    is_caret_navigation_enabled(): boolean
    next_page(): boolean
    previous_page(): boolean
    reload(): void
    remove_annotation(annot: EvinceDocument.Annotation): void
    scroll(scroll: Gtk.ScrollType, horizontal: boolean): void
    select_all(): void
    set_allow_links_change_zoom(allowed: boolean): void
    set_caret_cursor_position(page: number, offset: number): void
    /**
     * Enables or disables caret navigation mode for the document.
     * @param enabled whether to enable caret navigation mode
     */
    set_caret_navigation_enabled(enabled: boolean): void
    set_enable_spellchecking(spellcheck: boolean): void
    set_loading(loading: boolean): void
    set_model(model: DocumentModel): void
    /**
     * Sets the maximum size in bytes that will be used to cache
     * rendered pages. Use 0 to disable caching rendered pages.
     * 
     * Note that this limit doesn't affect the current visible page range,
     * which will always be rendered. In order to limit the total memory used
     * you have to use ev_document_model_set_max_scale() too.
     * @param cache_size size in bytes
     */
    set_page_cache_size(cache_size: number): void
    show_cursor(): void
    supports_caret_navigation(): boolean
    zoom_in(): void
    zoom_out(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of EvinceView-3.0.EvinceView.View

    connect(sigName: "activate", callback: View_ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: View_ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "annot-added", callback: View_AnnotAddedSignalCallback): number
    connect_after(sigName: "annot-added", callback: View_AnnotAddedSignalCallback): number
    emit(sigName: "annot-added", object: EvinceDocument.Annotation, ...args: any[]): void
    connect(sigName: "annot-changed", callback: View_AnnotChangedSignalCallback): number
    connect_after(sigName: "annot-changed", callback: View_AnnotChangedSignalCallback): number
    emit(sigName: "annot-changed", object: EvinceDocument.Annotation, ...args: any[]): void
    connect(sigName: "annot-removed", callback: View_AnnotRemovedSignalCallback): number
    connect_after(sigName: "annot-removed", callback: View_AnnotRemovedSignalCallback): number
    emit(sigName: "annot-removed", object: EvinceDocument.Annotation, ...args: any[]): void
    connect(sigName: "cursor-moved", callback: View_CursorMovedSignalCallback): number
    connect_after(sigName: "cursor-moved", callback: View_CursorMovedSignalCallback): number
    emit(sigName: "cursor-moved", object: number, p0: number, ...args: any[]): void
    connect(sigName: "external-link", callback: View_ExternalLinkSignalCallback): number
    connect_after(sigName: "external-link", callback: View_ExternalLinkSignalCallback): number
    emit(sigName: "external-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "handle-link", callback: View_HandleLinkSignalCallback): number
    connect_after(sigName: "handle-link", callback: View_HandleLinkSignalCallback): number
    emit(sigName: "handle-link", object: number, p0: GObject.Object, ...args: any[]): void
    connect(sigName: "layers-changed", callback: View_LayersChangedSignalCallback): number
    connect_after(sigName: "layers-changed", callback: View_LayersChangedSignalCallback): number
    emit(sigName: "layers-changed", ...args: any[]): void
    connect(sigName: "move-cursor", callback: View_MoveCursorSignalCallback): number
    connect_after(sigName: "move-cursor", callback: View_MoveCursorSignalCallback): number
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number, p1: boolean, ...args: any[]): void
    connect(sigName: "popup", callback: View_PopupSignalCallback): number
    connect_after(sigName: "popup", callback: View_PopupSignalCallback): number
    emit(sigName: "popup", object: object | null, ...args: any[]): void
    connect(sigName: "scroll", callback: View_ScrollSignalCallback): number
    connect_after(sigName: "scroll", callback: View_ScrollSignalCallback): number
    emit(sigName: "scroll", object: Gtk.ScrollType, p0: Gtk.Orientation, ...args: any[]): void
    connect(sigName: "selection-changed", callback: View_SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: View_SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "sync-source", callback: View_SyncSourceSignalCallback): number
    connect_after(sigName: "sync-source", callback: View_SyncSourceSignalCallback): number
    emit(sigName: "sync-source", object: EvinceDocument.SourceLink, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.View

    connect(sigName: "notify::can-zoom-in", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-zoom-in", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-zoom-in", ...args: any[]): void
    connect(sigName: "notify::can-zoom-out", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-zoom-out", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-zoom-out", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class View extends Gtk.Container {

    // Own properties of EvinceView-3.0.EvinceView.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of EvinceView-3.0.EvinceView.View

    constructor(config?: View_ConstructProps) 
    constructor() 
    static new(): View
    _init(config?: View_ConstructProps): void
}

interface ViewPresentation_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Widget_ConstructProps {

    // Own constructor properties of EvinceView-3.0.EvinceView.ViewPresentation

    current_page?: number | null
    document?: EvinceDocument.Document | null
    inverted_colors?: boolean | null
    rotation?: number | null
}

/**
 * Signal callback interface for `change-page`
 */
interface ViewPresentation_ChangePageSignalCallback {
    ($obj: ViewPresentation, object: Gtk.ScrollType): void
}

/**
 * Signal callback interface for `external-link`
 */
interface ViewPresentation_ExternalLinkSignalCallback {
    ($obj: ViewPresentation, object: GObject.Object): void
}

/**
 * Signal callback interface for `finished`
 */
interface ViewPresentation_FinishedSignalCallback {
    ($obj: ViewPresentation): void
}

interface ViewPresentation extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    current_page: number
    readonly document: EvinceDocument.Document
    readonly inverted_colors: boolean
    rotation: number

    // Owm methods of EvinceView-3.0.EvinceView.ViewPresentation

    get_current_page(): number
    get_rotation(): number
    next_page(): void
    previous_page(): void
    set_rotation(rotation: number): void

    // Own signals of EvinceView-3.0.EvinceView.ViewPresentation

    connect(sigName: "change-page", callback: ViewPresentation_ChangePageSignalCallback): number
    connect_after(sigName: "change-page", callback: ViewPresentation_ChangePageSignalCallback): number
    emit(sigName: "change-page", object: Gtk.ScrollType, ...args: any[]): void
    connect(sigName: "external-link", callback: ViewPresentation_ExternalLinkSignalCallback): number
    connect_after(sigName: "external-link", callback: ViewPresentation_ExternalLinkSignalCallback): number
    emit(sigName: "external-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "finished", callback: ViewPresentation_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: ViewPresentation_FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.ViewPresentation

    connect(sigName: "notify::current-page", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-page", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-page", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::inverted-colors", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverted-colors", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inverted-colors", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ViewPresentation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ViewPresentation extends Gtk.Widget {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    static name: string
    static $gtype: GObject.GType<ViewPresentation>

    // Constructors of EvinceView-3.0.EvinceView.ViewPresentation

    constructor(config?: ViewPresentation_ConstructProps) 
    constructor(document: EvinceDocument.Document, current_page: number, rotation: number, inverted_colors: boolean) 
    static new(document: EvinceDocument.Document, current_page: number, rotation: number, inverted_colors: boolean): ViewPresentation
    _init(config?: ViewPresentation_ConstructProps): void
}

interface DocumentModelClass {

    // Own fields of EvinceView-3.0.EvinceView.DocumentModelClass

    parent_class: GObject.ObjectClass
}

abstract class DocumentModelClass {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModelClass

    static name: string
}

interface JobAnnotsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnotsClass

    parent_class: JobClass
}

abstract class JobAnnotsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnotsClass

    static name: string
}

interface JobAttachmentsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAttachmentsClass

    parent_class: JobClass
}

abstract class JobAttachmentsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachmentsClass

    static name: string
}

interface JobClass {

    // Own fields of EvinceView-3.0.EvinceView.JobClass

    parent_class: GObject.ObjectClass
    run: (job: Job) => boolean
    cancelled: (job: Job) => void
    finished: (job: Job) => void
}

abstract class JobClass {

    // Own properties of EvinceView-3.0.EvinceView.JobClass

    static name: string
}

interface JobExportClass {

    // Own fields of EvinceView-3.0.EvinceView.JobExportClass

    parent_class: JobClass
}

abstract class JobExportClass {

    // Own properties of EvinceView-3.0.EvinceView.JobExportClass

    static name: string
}

interface JobFindClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFindClass

    parent_class: JobClass
    updated: (job: JobFind, page: number) => void
}

abstract class JobFindClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFindClass

    static name: string
}

interface JobFontsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFontsClass

    parent_class: JobClass
    updated: (job: JobFonts, progress: number) => void
}

abstract class JobFontsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFontsClass

    static name: string
}

interface JobLayersClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLayersClass

    parent_class: JobClass
}

abstract class JobLayersClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLayersClass

    static name: string
}

interface JobLinksClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLinksClass

    parent_class: JobClass
}

abstract class JobLinksClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLinksClass

    static name: string
}

interface JobLoadClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadClass

    parent_class: JobClass
}

abstract class JobLoadClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadClass

    static name: string
}

interface JobLoadFdClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFdClass

    parent_class: JobClass
}

abstract class JobLoadFdClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFdClass

    static name: string
}

interface JobLoadGFileClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFileClass

    parent_class: JobClass
}

abstract class JobLoadGFileClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFileClass

    static name: string
}

interface JobLoadStreamClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStreamClass

    parent_class: JobClass
}

abstract class JobLoadStreamClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStreamClass

    static name: string
}

interface JobPageDataClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPageDataClass

    parent_class: JobClass
}

abstract class JobPageDataClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPageDataClass

    static name: string
}

interface JobPrintClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPrintClass

    parent_class: JobClass
}

abstract class JobPrintClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPrintClass

    static name: string
}

interface JobRenderClass {

    // Own fields of EvinceView-3.0.EvinceView.JobRenderClass

    parent_class: JobClass
}

abstract class JobRenderClass {

    // Own properties of EvinceView-3.0.EvinceView.JobRenderClass

    static name: string
}

interface JobSaveClass {

    // Own fields of EvinceView-3.0.EvinceView.JobSaveClass

    parent_class: JobClass
}

abstract class JobSaveClass {

    // Own properties of EvinceView-3.0.EvinceView.JobSaveClass

    static name: string
}

interface JobThumbnailClass {

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnailClass

    parent_class: JobClass
}

abstract class JobThumbnailClass {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnailClass

    static name: string
}

interface PrintOperationClass {
}

abstract class PrintOperationClass {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperationClass

    static name: string
}

interface ViewClass {
}

abstract class ViewClass {

    // Own properties of EvinceView-3.0.EvinceView.ViewClass

    static name: string
}

interface ViewPresentationClass {
}

abstract class ViewPresentationClass {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentationClass

    static name: string
}

}
export default EvinceView;