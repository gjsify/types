
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './evinceview-3.0-ambient.d.ts';
import './evinceview-3.0-import.d.ts';
/**
 * EvinceView-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type EvinceDocument from '@girs/evincedocument-3.0';

export enum JobPriority {
    PRIORITY_URGENT,
    PRIORITY_HIGH,
    PRIORITY_LOW,
    PRIORITY_NONE,
    N_PRIORITIES,
}
export enum JobRunMode {
    THREAD,
    MAIN_LOOP,
}
export enum JobThumbnailFormat {
    PIXBUF,
    SURFACE,
}
export enum PageLayout {
    SINGLE,
    DUAL,
    AUTOMATIC,
}
export enum SizingMode {
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
export enum JobPageDataFlags {
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
export const STOCK_ANNOT_SQUIGGLY: string
export const STOCK_ANNOT_TEXT: string
export const STOCK_ATTACHMENT: string
export const STOCK_CLOSE: string
export const STOCK_FIND_UNSUPPORTED: string
export const STOCK_INVERTED_COLORS: string
export const STOCK_OUTLINE: string
export const STOCK_RESIZE_SE: string
export const STOCK_RESIZE_SW: string
export const STOCK_ROTATE_LEFT: string
export const STOCK_ROTATE_RIGHT: string
export const STOCK_RUN_PRESENTATION: string
export const STOCK_SEND_TO: string
export const STOCK_VIEW_CONTINUOUS: string
export const STOCK_VIEW_DUAL: string
export const STOCK_VIEW_SIDEBAR: string
export const STOCK_VISIBLE: string
export const STOCK_ZOOM: string
export const STOCK_ZOOM_PAGE: string
export const STOCK_ZOOM_WIDTH: string
/**
 * Creates a new icon factory, adding the base stock icons to it.
 */
export function stock_icons_init(): void
export function stock_icons_set_screen(screen: Gdk.Screen): void
export function stock_icons_shutdown(): void
export module DocumentModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-changed`
     */
    export interface PageChangedSignalCallback {
        ($obj: DocumentModel, object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceView-3.0.EvinceView.DocumentModel

        continuous?: boolean | null
        document?: EvinceDocument.Document | null
        dualOddLeft?: boolean | null
        dualPage?: boolean | null
        fullscreen?: boolean | null
        invertedColors?: boolean | null
        maxScale?: number | null
        minScale?: number | null
        page?: number | null
        pageLayout?: PageLayout | null
        rotation?: number | null
        rtl?: boolean | null
        scale?: number | null
        sizingMode?: SizingMode | null
    }

}

export interface DocumentModel {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModel

    continuous: boolean
    document: EvinceDocument.Document
    dualOddLeft: boolean
    dualPage: boolean
    fullscreen: boolean
    invertedColors: boolean
    maxScale: number
    minScale: number
    page: number
    pageLayout: PageLayout
    rotation: number
    rtl: boolean
    scale: number
    sizingMode: SizingMode

    // Owm methods of EvinceView-3.0.EvinceView.DocumentModel

    get_continuous(): boolean
    /**
     * Returns the #EvDocument referenced by the model.
     * @returns a #EvDocument
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

    connect(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback): number
    connect_after(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback): number
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

export class DocumentModel extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModel

    static name: string
    static $gtype: GObject.GType<DocumentModel>

    // Constructors of EvinceView-3.0.EvinceView.DocumentModel

    constructor(config?: DocumentModel.ConstructorProperties) 
    constructor() 
    static new(): DocumentModel
    static new_with_document(document: EvinceDocument.Document): DocumentModel
    _init(config?: DocumentModel.ConstructorProperties): void
}

export module Job {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        ($obj: Job): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: Job): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Job {

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

    connect(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Job.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.Job

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Job extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of EvinceView-3.0.EvinceView.Job

    constructor(config?: Job.ConstructorProperties) 
    _init(config?: Job.ConstructorProperties): void
    static scheduler_get_running_thread_job(): Job
    /**
     * Synchronously waits until all jobs are done.
     * Remember that main loop is not running already probably.
     */
    static scheduler_wait(): void
}

export module JobAnnots {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobAnnots {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnots

    parent: Job & GObject.Object
    annots: any[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAnnots

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobAnnots extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnots

    static name: string
    static $gtype: GObject.GType<JobAnnots>

    // Constructors of EvinceView-3.0.EvinceView.JobAnnots

    constructor(config?: JobAnnots.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobAnnots
    _init(config?: JobAnnots.ConstructorProperties): void
}

export module JobAttachments {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobAttachments {

    // Own fields of EvinceView-3.0.EvinceView.JobAttachments

    parent: Job & GObject.Object
    attachments: any[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobAttachments extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachments

    static name: string
    static $gtype: GObject.GType<JobAttachments>

    // Constructors of EvinceView-3.0.EvinceView.JobAttachments

    constructor(config?: JobAttachments.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobAttachments
    _init(config?: JobAttachments.ConstructorProperties): void
}

export module JobExport {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobExport {

    // Own fields of EvinceView-3.0.EvinceView.JobExport

    parent: Job & GObject.Object
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

export class JobExport extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobExport

    static name: string
    static $gtype: GObject.GType<JobExport>

    // Constructors of EvinceView-3.0.EvinceView.JobExport

    constructor(config?: JobExport.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobExport
    _init(config?: JobExport.ConstructorProperties): void
}

export module JobFind {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        ($obj: JobFind, object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobFind {

    // Own fields of EvinceView-3.0.EvinceView.JobFind

    parent: Job & GObject.Object
    start_page: number
    current_page: number
    n_pages: number
    pages: any[]
    text: string | null
    case_sensitive: boolean
    has_results: boolean
    options: EvinceDocument.FindOptions

    // Owm methods of EvinceView-3.0.EvinceView.JobFind

    /**
     * This is similar to ev_job_find_get_n_results() but it takes
     * care to treat any multi-line matches as being only one result.
     * @param page number of the page we want to count its match results.
     * @returns total number of match results in @page
     */
    get_n_main_results(page: number): number
    get_n_results(pages: number): number
    get_options(): EvinceDocument.FindOptions
    get_progress(): number
    set_options(options: EvinceDocument.FindOptions): void

    // Own virtual methods of EvinceView-3.0.EvinceView.JobFind

    vfunc_updated(page: number): void

    // Own signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: "updated", callback: JobFind.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: JobFind.UpdatedSignalCallback): number
    emit(sigName: "updated", object: number, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobFind extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFind

    static name: string
    static $gtype: GObject.GType<JobFind>

    // Constructors of EvinceView-3.0.EvinceView.JobFind

    constructor(config?: JobFind.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, start_page: number, n_pages: number, text: string, case_sensitive: boolean) 
    static new(document: EvinceDocument.Document, start_page: number, n_pages: number, text: string, case_sensitive: boolean): JobFind
    _init(config?: JobFind.ConstructorProperties): void
}

export module JobFonts {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        ($obj: JobFonts, object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobFonts {

    // Own fields of EvinceView-3.0.EvinceView.JobFonts

    parent: Job & GObject.Object
    scan_completed: boolean

    // Own virtual methods of EvinceView-3.0.EvinceView.JobFonts

    vfunc_updated(progress: number): void

    // Own signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: "updated", callback: JobFonts.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: JobFonts.UpdatedSignalCallback): number
    emit(sigName: "updated", object: number, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobFonts extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFonts

    static name: string
    static $gtype: GObject.GType<JobFonts>

    // Constructors of EvinceView-3.0.EvinceView.JobFonts

    constructor(config?: JobFonts.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobFonts
    _init(config?: JobFonts.ConstructorProperties): void
}

export module JobLayers {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLayers {

    // Own fields of EvinceView-3.0.EvinceView.JobLayers

    parent: Job & GObject.Object
    model: Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobLayers extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLayers

    static name: string
    static $gtype: GObject.GType<JobLayers>

    // Constructors of EvinceView-3.0.EvinceView.JobLayers

    constructor(config?: JobLayers.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobLayers
    _init(config?: JobLayers.ConstructorProperties): void
}

export module JobLinks {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLinks {

    // Own fields of EvinceView-3.0.EvinceView.JobLinks

    parent: Job & GObject.Object
    model: Gtk.TreeModel

    // Owm methods of EvinceView-3.0.EvinceView.JobLinks

    /**
     * Get a #GtkTreeModel loaded with the links
     * @returns The #GtkTreeModel loaded
     */
    get_model(): Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobLinks extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLinks

    static name: string
    static $gtype: GObject.GType<JobLinks>

    // Constructors of EvinceView-3.0.EvinceView.JobLinks

    constructor(config?: JobLinks.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobLinks
    _init(config?: JobLinks.ConstructorProperties): void
}

export module JobLoad {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoad {

    // Own fields of EvinceView-3.0.EvinceView.JobLoad

    parent: Job & GObject.Object
    uri: string | null
    password: string | null

    // Owm methods of EvinceView-3.0.EvinceView.JobLoad

    set_password(password: string): void
    set_uri(uri: string): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoad

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobLoad extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoad

    static name: string
    static $gtype: GObject.GType<JobLoad>

    // Constructors of EvinceView-3.0.EvinceView.JobLoad

    constructor(config?: JobLoad.ConstructorProperties) 
    constructor(uri: string) 
    static new(uri: string): JobLoad
    _init(config?: JobLoad.ConstructorProperties): void
}

export module JobLoadFd {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoadFd {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFd

    parent: Job & GObject.Object
    mime_type: string | null
    password: string | null
    fd: number
    flags: EvinceDocument.DocumentLoadFlags

    // Owm methods of EvinceView-3.0.EvinceView.JobLoadFd

    /**
     * Sets `fd` as the file descriptor in `job`. If duplicating `fd` fails,
     * returns %FALSE with `error` filled in.
     * @param fd a file descriptor
     * @returns %TRUE if the file descriptor could be set
     */
    set_fd(fd: number): boolean
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void
    set_mime_type(mime_type: string): void
    set_password(password: string): void
    /**
     * Sets `fd` as the file descriptor in `job`.
     * Note that `job` takes ownership of `fd;` you must not do anything
     * with it afterwards.
     * @param fd a file descriptor
     */
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
export class JobLoadFd extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFd

    static name: string
    static $gtype: GObject.GType<JobLoadFd>

    // Constructors of EvinceView-3.0.EvinceView.JobLoadFd

    constructor(config?: JobLoadFd.ConstructorProperties) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mime_type the mime type
     * @param flags flags from #EvDocumentLoadFlags
     * @returns the new #EvJobLoadFd, or %NULL
     */
    constructor(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mime_type the mime type
     * @param flags flags from #EvDocumentLoadFlags
     * @returns the new #EvJobLoadFd, or %NULL
     */
    static new(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    static new_take(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    _init(config?: JobLoadFd.ConstructorProperties): void
}

export module JobLoadGFile {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoadGFile {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFile

    parent: Job & GObject.Object
    password: string | null
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
export class JobLoadGFile extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFile

    static name: string
    static $gtype: GObject.GType<JobLoadGFile>

    // Constructors of EvinceView-3.0.EvinceView.JobLoadGFile

    constructor(config?: JobLoadGFile.ConstructorProperties) 
    constructor(gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags) 
    static new(gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags): JobLoadGFile
    _init(config?: JobLoadGFile.ConstructorProperties): void
}

export module JobLoadStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoadStream {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStream

    parent: Job & GObject.Object
    password: string | null
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
export class JobLoadStream extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStream

    static name: string
    static $gtype: GObject.GType<JobLoadStream>

    // Constructors of EvinceView-3.0.EvinceView.JobLoadStream

    constructor(config?: JobLoadStream.ConstructorProperties) 
    constructor(stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags) 
    static new(stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags): JobLoadStream
    _init(config?: JobLoadStream.ConstructorProperties): void
}

export module JobPageData {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobPageData {

    // Own fields of EvinceView-3.0.EvinceView.JobPageData

    parent: Job & GObject.Object
    page: number
    flags: JobPageDataFlags
    link_mapping: EvinceDocument.MappingList
    image_mapping: EvinceDocument.MappingList
    form_field_mapping: EvinceDocument.MappingList
    annot_mapping: EvinceDocument.MappingList
    media_mapping: EvinceDocument.MappingList
    text_mapping: cairo.Region
    text: string | null
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

export class JobPageData extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobPageData

    static name: string
    static $gtype: GObject.GType<JobPageData>

    // Constructors of EvinceView-3.0.EvinceView.JobPageData

    constructor(config?: JobPageData.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, page: number, flags: JobPageDataFlags) 
    static new(document: EvinceDocument.Document, page: number, flags: JobPageDataFlags): JobPageData
    _init(config?: JobPageData.ConstructorProperties): void
}

export module JobPrint {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobPrint {

    // Own fields of EvinceView-3.0.EvinceView.JobPrint

    parent: Job & GObject.Object
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

export class JobPrint extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobPrint

    static name: string
    static $gtype: GObject.GType<JobPrint>

    // Constructors of EvinceView-3.0.EvinceView.JobPrint

    constructor(config?: JobPrint.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): JobPrint
    _init(config?: JobPrint.ConstructorProperties): void
}

export module JobRender {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobRender {

    // Own fields of EvinceView-3.0.EvinceView.JobRender

    parent: Job & GObject.Object
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

export class JobRender extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobRender

    static name: string
    static $gtype: GObject.GType<JobRender>

    // Constructors of EvinceView-3.0.EvinceView.JobRender

    constructor(config?: JobRender.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, page: number, rotation: number, scale: number, width: number, height: number) 
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number, width: number, height: number): JobRender
    _init(config?: JobRender.ConstructorProperties): void
}

export module JobSave {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobSave {

    // Own fields of EvinceView-3.0.EvinceView.JobSave

    parent: Job & GObject.Object
    uri: string | null
    document_uri: string | null

    // Class property signals of EvinceView-3.0.EvinceView.JobSave

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobSave extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobSave

    static name: string
    static $gtype: GObject.GType<JobSave>

    // Constructors of EvinceView-3.0.EvinceView.JobSave

    constructor(config?: JobSave.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, uri: string, document_uri: string) 
    static new(document: EvinceDocument.Document, uri: string, document_uri: string): JobSave
    _init(config?: JobSave.ConstructorProperties): void
}

export module JobThumbnail {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobThumbnail {

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnail

    parent: Job & GObject.Object
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

export class JobThumbnail extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnail

    static name: string
    static $gtype: GObject.GType<JobThumbnail>

    // Constructors of EvinceView-3.0.EvinceView.JobThumbnail

    constructor(config?: JobThumbnail.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, page: number, rotation: number, scale: number) 
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail
    static new_with_target_size(document: EvinceDocument.Document, page: number, rotation: number, target_width: number, target_height: number): JobThumbnail
    _init(config?: JobThumbnail.ConstructorProperties): void
}

export module PrintOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-print`
     */
    export interface BeginPrintSignalCallback {
        ($obj: PrintOperation): void
    }

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        ($obj: PrintOperation, object: Gtk.PrintOperationResult): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    export interface StatusChangedSignalCallback {
        ($obj: PrintOperation): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceView-3.0.EvinceView.PrintOperation

        document?: EvinceDocument.Document | null
    }

}

export interface PrintOperation {

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

    connect(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback): number
    connect_after(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback): number
    emit(sigName: "begin-print", ...args: any[]): void
    connect(sigName: "done", callback: PrintOperation.DoneSignalCallback): number
    connect_after(sigName: "done", callback: PrintOperation.DoneSignalCallback): number
    emit(sigName: "done", object: Gtk.PrintOperationResult, ...args: any[]): void
    connect(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback): number
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

export class PrintOperation extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperation

    static name: string
    static $gtype: GObject.GType<PrintOperation>

    // Constructors of EvinceView-3.0.EvinceView.PrintOperation

    constructor(config?: PrintOperation.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): PrintOperation
    _init(config?: PrintOperation.ConstructorProperties): void
    static exists_for_document(document: EvinceDocument.Document): boolean
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `annot-added`
     */
    export interface AnnotAddedSignalCallback {
        ($obj: View, object: EvinceDocument.Annotation): void
    }

    /**
     * Signal callback interface for `annot-cancel-add`
     */
    export interface AnnotCancelAddSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `annot-changed`
     */
    export interface AnnotChangedSignalCallback {
        ($obj: View, object: EvinceDocument.Annotation): void
    }

    /**
     * Signal callback interface for `annot-removed`
     */
    export interface AnnotRemovedSignalCallback {
        ($obj: View, object: EvinceDocument.Annotation): void
    }

    /**
     * Signal callback interface for `cursor-moved`
     */
    export interface CursorMovedSignalCallback {
        ($obj: View, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `external-link`
     */
    export interface ExternalLinkSignalCallback {
        ($obj: View, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `handle-link`
     */
    export interface HandleLinkSignalCallback {
        ($obj: View, object: number, p0: GObject.Object): void
    }

    /**
     * Signal callback interface for `layers-changed`
     */
    export interface LayersChangedSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    export interface MoveCursorSignalCallback {
        ($obj: View, object: Gtk.MovementStep, p0: number, p1: boolean): boolean
    }

    /**
     * Signal callback interface for `popup`
     */
    export interface PopupSignalCallback {
        ($obj: View, object: any | null): void
    }

    /**
     * Signal callback interface for `scroll`
     */
    export interface ScrollSignalCallback {
        ($obj: View, object: Gtk.ScrollType, p0: Gtk.Orientation): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `sync-source`
     */
    export interface SyncSourceSignalCallback {
        ($obj: View, object: EvinceDocument.SourceLink): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Container.ConstructorProperties {
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of EvinceView-3.0.EvinceView.View

    readonly canZoomIn: boolean
    readonly canZoomOut: boolean
    /**
     * Allows to implement a custom notification system.
     */
    readonly isLoading: boolean

    // Owm methods of EvinceView-3.0.EvinceView.View

    /**
     * Adds a Text Markup annotation (defaulting to a 'highlight' one) to
     * the currently selected text on the document.
     * 
     * When the selected text spans more than one page, it will add a
     * corresponding annotation for each page that contains selected text.
     * @returns %TRUE if annotations were added successfully, %FALSE otherwise.
     */
    add_text_markup_annotation_for_selected_text(): boolean
    autoscroll_start(): void
    autoscroll_stop(): void
    begin_add_annotation(annot_type: EvinceDocument.AnnotationType): void
    can_zoom_in(): boolean
    can_zoom_out(): boolean
    cancel_add_annotation(): void
    copy(): void
    copy_link_address(action: EvinceDocument.LinkAction): void
    current_event_is_type(type: Gdk.EventType): boolean
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
     * @returns The string representing selected text.
     */
    get_selected_text(): string | null
    handle_link(link: EvinceDocument.Link): void
    hide_cursor(): void
    highlight_forward_search(link: EvinceDocument.SourceLink): void
    is_caret_navigation_enabled(): boolean
    is_loading(): boolean
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

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own signals of EvinceView-3.0.EvinceView.View

    connect(sigName: "activate", callback: View.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: View.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "annot-added", callback: View.AnnotAddedSignalCallback): number
    connect_after(sigName: "annot-added", callback: View.AnnotAddedSignalCallback): number
    emit(sigName: "annot-added", object: EvinceDocument.Annotation, ...args: any[]): void
    connect(sigName: "annot-cancel-add", callback: View.AnnotCancelAddSignalCallback): number
    connect_after(sigName: "annot-cancel-add", callback: View.AnnotCancelAddSignalCallback): number
    emit(sigName: "annot-cancel-add", ...args: any[]): void
    connect(sigName: "annot-changed", callback: View.AnnotChangedSignalCallback): number
    connect_after(sigName: "annot-changed", callback: View.AnnotChangedSignalCallback): number
    emit(sigName: "annot-changed", object: EvinceDocument.Annotation, ...args: any[]): void
    connect(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback): number
    connect_after(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback): number
    emit(sigName: "annot-removed", object: EvinceDocument.Annotation, ...args: any[]): void
    connect(sigName: "cursor-moved", callback: View.CursorMovedSignalCallback): number
    connect_after(sigName: "cursor-moved", callback: View.CursorMovedSignalCallback): number
    emit(sigName: "cursor-moved", object: number, p0: number, ...args: any[]): void
    connect(sigName: "external-link", callback: View.ExternalLinkSignalCallback): number
    connect_after(sigName: "external-link", callback: View.ExternalLinkSignalCallback): number
    emit(sigName: "external-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "handle-link", callback: View.HandleLinkSignalCallback): number
    connect_after(sigName: "handle-link", callback: View.HandleLinkSignalCallback): number
    emit(sigName: "handle-link", object: number, p0: GObject.Object, ...args: any[]): void
    connect(sigName: "layers-changed", callback: View.LayersChangedSignalCallback): number
    connect_after(sigName: "layers-changed", callback: View.LayersChangedSignalCallback): number
    emit(sigName: "layers-changed", ...args: any[]): void
    connect(sigName: "move-cursor", callback: View.MoveCursorSignalCallback): number
    connect_after(sigName: "move-cursor", callback: View.MoveCursorSignalCallback): number
    emit(sigName: "move-cursor", object: Gtk.MovementStep, p0: number, p1: boolean, ...args: any[]): void
    connect(sigName: "popup", callback: View.PopupSignalCallback): number
    connect_after(sigName: "popup", callback: View.PopupSignalCallback): number
    emit(sigName: "popup", object: any | null, ...args: any[]): void
    connect(sigName: "scroll", callback: View.ScrollSignalCallback): number
    connect_after(sigName: "scroll", callback: View.ScrollSignalCallback): number
    emit(sigName: "scroll", object: Gtk.ScrollType, p0: Gtk.Orientation, ...args: any[]): void
    connect(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "sync-source", callback: View.SyncSourceSignalCallback): number
    connect_after(sigName: "sync-source", callback: View.SyncSourceSignalCallback): number
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

export class View extends Gtk.Container {

    // Own properties of EvinceView-3.0.EvinceView.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of EvinceView-3.0.EvinceView.View

    constructor(config?: View.ConstructorProperties) 
    constructor() 
    static new(): View
    _init(config?: View.ConstructorProperties): void
}

export module ViewPresentation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `change-page`
     */
    export interface ChangePageSignalCallback {
        ($obj: ViewPresentation, object: Gtk.ScrollType): void
    }

    /**
     * Signal callback interface for `external-link`
     */
    export interface ExternalLinkSignalCallback {
        ($obj: ViewPresentation, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: ViewPresentation): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of EvinceView-3.0.EvinceView.ViewPresentation

        currentPage?: number | null
        document?: EvinceDocument.Document | null
        invertedColors?: boolean | null
        rotation?: number | null
    }

}

export interface ViewPresentation extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    currentPage: number
    readonly document: EvinceDocument.Document
    readonly invertedColors: boolean
    rotation: number

    // Owm methods of EvinceView-3.0.EvinceView.ViewPresentation

    get_current_page(): number
    get_rotation(): number
    next_page(): void
    previous_page(): void
    set_rotation(rotation: number): void

    // Own signals of EvinceView-3.0.EvinceView.ViewPresentation

    connect(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback): number
    connect_after(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback): number
    emit(sigName: "change-page", object: Gtk.ScrollType, ...args: any[]): void
    connect(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback): number
    connect_after(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback): number
    emit(sigName: "external-link", object: GObject.Object, ...args: any[]): void
    connect(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback): number
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

export class ViewPresentation extends Gtk.Widget {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    static name: string
    static $gtype: GObject.GType<ViewPresentation>

    // Constructors of EvinceView-3.0.EvinceView.ViewPresentation

    constructor(config?: ViewPresentation.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, current_page: number, rotation: number, inverted_colors: boolean) 
    static new(document: EvinceDocument.Document, current_page: number, rotation: number, inverted_colors: boolean): ViewPresentation
    _init(config?: ViewPresentation.ConstructorProperties): void
}

export interface DocumentModelClass {

    // Own fields of EvinceView-3.0.EvinceView.DocumentModelClass

    parent_class: GObject.ObjectClass
}

export abstract class DocumentModelClass {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModelClass

    static name: string
}

export interface JobAnnotsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnotsClass

    parent_class: JobClass
}

export abstract class JobAnnotsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnotsClass

    static name: string
}

export interface JobAttachmentsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAttachmentsClass

    parent_class: JobClass
}

export abstract class JobAttachmentsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachmentsClass

    static name: string
}

export interface JobClass {

    // Own fields of EvinceView-3.0.EvinceView.JobClass

    parent_class: GObject.ObjectClass
    run: (job: Job) => boolean
    cancelled: (job: Job) => void
    finished: (job: Job) => void
}

export abstract class JobClass {

    // Own properties of EvinceView-3.0.EvinceView.JobClass

    static name: string
}

export interface JobExportClass {

    // Own fields of EvinceView-3.0.EvinceView.JobExportClass

    parent_class: JobClass
}

export abstract class JobExportClass {

    // Own properties of EvinceView-3.0.EvinceView.JobExportClass

    static name: string
}

export interface JobFindClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFindClass

    parent_class: JobClass
    updated: (job: JobFind, page: number) => void
}

export abstract class JobFindClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFindClass

    static name: string
}

export interface JobFontsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFontsClass

    parent_class: JobClass
    updated: (job: JobFonts, progress: number) => void
}

export abstract class JobFontsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFontsClass

    static name: string
}

export interface JobLayersClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLayersClass

    parent_class: JobClass
}

export abstract class JobLayersClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLayersClass

    static name: string
}

export interface JobLinksClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLinksClass

    parent_class: JobClass
}

export abstract class JobLinksClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLinksClass

    static name: string
}

export interface JobLoadClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadClass

    parent_class: JobClass
}

export abstract class JobLoadClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadClass

    static name: string
}

export interface JobLoadFdClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFdClass

    parent_class: JobClass
}

export abstract class JobLoadFdClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFdClass

    static name: string
}

export interface JobLoadGFileClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFileClass

    parent_class: JobClass
}

export abstract class JobLoadGFileClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFileClass

    static name: string
}

export interface JobLoadStreamClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStreamClass

    parent_class: JobClass
}

export abstract class JobLoadStreamClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStreamClass

    static name: string
}

export interface JobPageDataClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPageDataClass

    parent_class: JobClass
}

export abstract class JobPageDataClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPageDataClass

    static name: string
}

export interface JobPrintClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPrintClass

    parent_class: JobClass
}

export abstract class JobPrintClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPrintClass

    static name: string
}

export interface JobRenderClass {

    // Own fields of EvinceView-3.0.EvinceView.JobRenderClass

    parent_class: JobClass
}

export abstract class JobRenderClass {

    // Own properties of EvinceView-3.0.EvinceView.JobRenderClass

    static name: string
}

export interface JobSaveClass {

    // Own fields of EvinceView-3.0.EvinceView.JobSaveClass

    parent_class: JobClass
}

export abstract class JobSaveClass {

    // Own properties of EvinceView-3.0.EvinceView.JobSaveClass

    static name: string
}

export interface JobThumbnailClass {

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnailClass

    parent_class: JobClass
}

export abstract class JobThumbnailClass {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnailClass

    static name: string
}

export interface PrintOperationClass {
}

export abstract class PrintOperationClass {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperationClass

    static name: string
}

export interface ViewClass {
}

export abstract class ViewClass {

    // Own properties of EvinceView-3.0.EvinceView.ViewClass

    static name: string
}

export interface ViewPresentationClass {
}

export abstract class ViewPresentationClass {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentationClass

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