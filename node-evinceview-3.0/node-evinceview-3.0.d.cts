
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * EvinceView-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
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
export const STOCK_ANNOT_SQUIGGLY: string | null
export const STOCK_ANNOT_TEXT: string | null
export const STOCK_ATTACHMENT: string | null
export const STOCK_CLOSE: string | null
export const STOCK_FIND_UNSUPPORTED: string | null
export const STOCK_INVERTED_COLORS: string | null
export const STOCK_OUTLINE: string | null
export const STOCK_RESIZE_SE: string | null
export const STOCK_RESIZE_SW: string | null
export const STOCK_ROTATE_LEFT: string | null
export const STOCK_ROTATE_RIGHT: string | null
export const STOCK_RUN_PRESENTATION: string | null
export const STOCK_SEND_TO: string | null
export const STOCK_VIEW_CONTINUOUS: string | null
export const STOCK_VIEW_DUAL: string | null
export const STOCK_VIEW_SIDEBAR: string | null
export const STOCK_VISIBLE: string | null
export const STOCK_ZOOM: string | null
export const STOCK_ZOOM_PAGE: string | null
export const STOCK_ZOOM_WIDTH: string | null
/**
 * Creates a new icon factory, adding the base stock icons to it.
 */
export function stockIconsInit(): void
export function stockIconsSetScreen(screen: Gdk.Screen): void
export function stockIconsShutdown(): void
export module DocumentModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-changed`
     */
    export interface PageChangedSignalCallback {
        (object: number, p0: number): void
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
    __gtype__: number

    // Owm methods of EvinceView-3.0.EvinceView.DocumentModel

    getContinuous(): boolean
    /**
     * Returns the #EvDocument referenced by the model.
     * @returns a #EvDocument
     */
    getDocument(): EvinceDocument.Document
    getDualPage(): boolean
    getDualPageOddPagesLeft(): boolean
    getFullscreen(): boolean
    getInvertedColors(): boolean
    getMaxScale(): number
    getMinScale(): number
    getPage(): number
    getPageLayout(): PageLayout
    getRotation(): number
    getRtl(): boolean
    getScale(): number
    getSizingMode(): SizingMode
    setContinuous(continuous: boolean): void
    setDocument(document: EvinceDocument.Document): void
    /**
     * Sets the document model's page layout to %EV_PAGE_LAYOUT_SINGLE or
     * %EV_PAGE_LAYOUT_DUAL.
     * @param dualPage whether to enable dual page mode
     */
    setDualPage(dualPage: boolean): void
    setDualPageOddPagesLeft(oddLeft: boolean): void
    setFullscreen(fullscreen: boolean): void
    setInvertedColors(invertedColors: boolean): void
    setMaxScale(maxScale: number): void
    setMinScale(minScale: number): void
    setPage(page: number): void
    setPageByLabel(pageLabel: string | null): void
    /**
     * Sets the document model's page layout to `layout`.
     * @param layout a #EvPageLayout
     */
    setPageLayout(layout: PageLayout): void
    setRotation(rotation: number): void
    setRtl(rtl: boolean): void
    setScale(scale: number): void
    setSizingMode(mode: SizingMode): void

    // Own signals of EvinceView-3.0.EvinceView.DocumentModel

    connect(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback): number
    on(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: DocumentModel.PageChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-changed", p0: number, ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.DocumentModel

    connect(sigName: "notify::continuous", callback: (...args: any[]) => void): number
    on(sigName: "notify::continuous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::continuous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::continuous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::continuous", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::dual-odd-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::dual-odd-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dual-odd-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dual-odd-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dual-odd-left", ...args: any[]): void
    connect(sigName: "notify::dual-page", callback: (...args: any[]) => void): number
    on(sigName: "notify::dual-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dual-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dual-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dual-page", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (...args: any[]) => void): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::inverted-colors", callback: (...args: any[]) => void): number
    on(sigName: "notify::inverted-colors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inverted-colors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inverted-colors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inverted-colors", ...args: any[]): void
    connect(sigName: "notify::max-scale", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-scale", ...args: any[]): void
    connect(sigName: "notify::min-scale", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-scale", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::page-layout", callback: (...args: any[]) => void): number
    on(sigName: "notify::page-layout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page-layout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page-layout", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::rtl", callback: (...args: any[]) => void): number
    on(sigName: "notify::rtl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rtl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rtl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rtl", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::sizing-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::sizing-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sizing-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sizing-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sizing-mode", ...args: any[]): void
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
}

export class DocumentModel extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModel

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.DocumentModel

    constructor(config?: DocumentModel.ConstructorProperties) 
    constructor() 
    static new(): DocumentModel
    static newWithDocument(document: EvinceDocument.Document): DocumentModel
    _init(config?: DocumentModel.ConstructorProperties): void
}

export module Job {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Job {

    // Own properties of EvinceView-3.0.EvinceView.Job

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.Job

    parent: GObject.Object
    document: EvinceDocument.Document
    runMode: JobRunMode
    // Has conflict: cancelled: number
    // Has conflict: finished: number
    failed: number
    error: GLib.Error
    cancellable: Gio.Cancellable
    idleFinishedId: number
    idleCancelledId: number

    // Owm methods of EvinceView-3.0.EvinceView.Job

    cancel(): void
    getRunMode(): JobRunMode
    isFailed(): boolean
    isFinished(): boolean
    // Has conflict: run(): boolean
    schedulerPushJob(priority: JobPriority): void
    schedulerUpdateJob(priority: JobPriority): void
    setRunMode(runMode: JobRunMode): void
    succeeded(): void

    // Own virtual methods of EvinceView-3.0.EvinceView.Job

    cancelled(): void
    finished(): void
    run(): boolean

    // Own signals of EvinceView-3.0.EvinceView.Job

    connect(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    on(sigName: "cancelled", callback: Job.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: Job.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: Job.CancelledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job.FinishedSignalCallback): number
    on(sigName: "finished", callback: Job.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Job.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Job.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.Job

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
}

export class Job extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.Job

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.Job

    constructor(config?: Job.ConstructorProperties) 
    _init(config?: Job.ConstructorProperties): void
    static schedulerGetRunningThreadJob(): Job
    /**
     * Synchronously waits until all jobs are done.
     * Remember that main loop is not running already probably.
     */
    static schedulerWait(): void
}

export module JobAnnots {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobAnnots {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnots

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobAnnots

    parent: Job & GObject.Object
    annots: any[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAnnots

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
}

export class JobAnnots extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnots

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobAttachments

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobAttachments

    parent: Job & GObject.Object
    attachments: any[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAttachments

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
}

export class JobAttachments extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachments

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobExport

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobExport

    parent: Job & GObject.Object
    page: number
    rc: EvinceDocument.RenderContext

    // Owm methods of EvinceView-3.0.EvinceView.JobExport

    setPage(page: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobExport

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
}

export class JobExport extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobExport

    static name: string

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
        (object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobFind {

    // Own properties of EvinceView-3.0.EvinceView.JobFind

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobFind

    parent: Job & GObject.Object
    startPage: number
    currentPage: number
    nPages: number
    pages: any[]
    text: string | null
    caseSensitive: boolean
    hasResults: boolean
    options: EvinceDocument.FindOptions

    // Owm methods of EvinceView-3.0.EvinceView.JobFind

    /**
     * This is similar to ev_job_find_get_n_results() but it takes
     * care to treat any multi-line matches as being only one result.
     * @param page number of the page we want to count its match results.
     * @returns total number of match results in @page
     */
    getNMainResults(page: number): number
    getNResults(pages: number): number
    getOptions(): EvinceDocument.FindOptions
    getProgress(): number
    setOptions(options: EvinceDocument.FindOptions): void

    // Own virtual methods of EvinceView-3.0.EvinceView.JobFind

    updated(page: number): void

    // Own signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: "updated", callback: JobFind.UpdatedSignalCallback): number
    on(sigName: "updated", callback: JobFind.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: JobFind.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: JobFind.UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFind

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
}

export class JobFind extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFind

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.JobFind

    constructor(config?: JobFind.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, startPage: number, nPages: number, text: string | null, caseSensitive: boolean) 
    static new(document: EvinceDocument.Document, startPage: number, nPages: number, text: string | null, caseSensitive: boolean): JobFind
    _init(config?: JobFind.ConstructorProperties): void
}

export module JobFonts {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobFonts {

    // Own properties of EvinceView-3.0.EvinceView.JobFonts

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobFonts

    parent: Job & GObject.Object
    scanCompleted: boolean

    // Own virtual methods of EvinceView-3.0.EvinceView.JobFonts

    updated(progress: number): void

    // Own signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: "updated", callback: JobFonts.UpdatedSignalCallback): number
    on(sigName: "updated", callback: JobFonts.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: JobFonts.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: JobFonts.UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFonts

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
}

export class JobFonts extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFonts

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobLayers

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobLayers

    parent: Job & GObject.Object
    model: Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLayers

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
}

export class JobLayers extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLayers

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobLinks

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobLinks

    parent: Job & GObject.Object
    model: Gtk.TreeModel

    // Owm methods of EvinceView-3.0.EvinceView.JobLinks

    /**
     * Get a #GtkTreeModel loaded with the links
     * @returns The #GtkTreeModel loaded
     */
    getModel(): Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLinks

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
}

export class JobLinks extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLinks

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobLoad

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobLoad

    parent: Job & GObject.Object
    uri: string | null
    password: string | null

    // Owm methods of EvinceView-3.0.EvinceView.JobLoad

    setPassword(password: string | null): void
    setUri(uri: string | null): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoad

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
}

export class JobLoad extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoad

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.JobLoad

    constructor(config?: JobLoad.ConstructorProperties) 
    constructor(uri: string | null) 
    static new(uri: string | null): JobLoad
    _init(config?: JobLoad.ConstructorProperties): void
}

export module JobLoadFd {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoadFd {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFd

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFd

    parent: Job & GObject.Object
    mimeType: string | null
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
    setFd(fd: number): boolean
    setLoadFlags(flags: EvinceDocument.DocumentLoadFlags): void
    setMimeType(mimeType: string | null): void
    setPassword(password: string | null): void
    /**
     * Sets `fd` as the file descriptor in `job`.
     * Note that `job` takes ownership of `fd;` you must not do anything
     * with it afterwards.
     * @param fd a file descriptor
     */
    takeFd(fd: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadFd

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
}

/**
 * A job class to load a #EvDocument from a file descriptor
 * referring to a regular file.
 * @class 
 */
export class JobLoadFd extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFd

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.JobLoadFd

    constructor(config?: JobLoadFd.ConstructorProperties) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mimeType the mime type
     * @param flags flags from #EvDocumentLoadFlags
     * @returns the new #EvJobLoadFd, or %NULL
     */
    constructor(fd: number, mimeType: string | null, flags: EvinceDocument.DocumentLoadFlags) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mimeType the mime type
     * @param flags flags from #EvDocumentLoadFlags
     * @returns the new #EvJobLoadFd, or %NULL
     */
    static new(fd: number, mimeType: string | null, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    static newTake(fd: number, mimeType: string | null, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    _init(config?: JobLoadFd.ConstructorProperties): void
}

export module JobLoadGFile {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoadGFile {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFile

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFile

    parent: Job & GObject.Object
    password: string | null
    gfile: Gio.File
    flags: EvinceDocument.DocumentLoadFlags

    // Owm methods of EvinceView-3.0.EvinceView.JobLoadGFile

    setGfile(gfile: Gio.File): void
    setLoadFlags(flags: EvinceDocument.DocumentLoadFlags): void
    setPassword(password: string | null): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadGFile

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
}

/**
 * A job class to load a #EvDocument from a #GFile.
 * @class 
 */
export class JobLoadGFile extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFile

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStream

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStream

    parent: Job & GObject.Object
    password: string | null
    stream: Gio.InputStream
    flags: EvinceDocument.DocumentLoadFlags

    // Owm methods of EvinceView-3.0.EvinceView.JobLoadStream

    setLoadFlags(flags: EvinceDocument.DocumentLoadFlags): void
    setMimeType(mimeType: string | null): void
    setPassword(password: string | null): void
    setStream(stream: Gio.InputStream): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadStream

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
}

/**
 * A job class to load a #EvDocument from a #GInputStream.
 * @class 
 */
export class JobLoadStream extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStream

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobPageData

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobPageData

    parent: Job & GObject.Object
    page: number
    flags: JobPageDataFlags
    linkMapping: EvinceDocument.MappingList
    imageMapping: EvinceDocument.MappingList
    formFieldMapping: EvinceDocument.MappingList
    annotMapping: EvinceDocument.MappingList
    mediaMapping: EvinceDocument.MappingList
    textMapping: cairo.Region
    text: string | null
    textLayout: EvinceDocument.Rectangle
    textLayoutLength: number
    textAttrs: Pango.AttrList
    textLogAttrs: Pango.LogAttr
    textLogAttrsLength: number

    // Class property signals of EvinceView-3.0.EvinceView.JobPageData

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
}

export class JobPageData extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobPageData

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobPrint

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobPrint

    parent: Job & GObject.Object
    page: number
    cr: cairo.Context

    // Owm methods of EvinceView-3.0.EvinceView.JobPrint

    setCairo(cr: cairo.Context): void
    setPage(page: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobPrint

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
}

export class JobPrint extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobPrint

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobRender

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobRender

    parent: Job & GObject.Object
    page: number
    rotation: number
    scale: number
    pageReady: boolean
    targetWidth: number
    targetHeight: number
    surface: cairo.Surface
    includeSelection: boolean
    selection: cairo.Surface
    selectionRegion: cairo.Region
    selectionPoints: EvinceDocument.Rectangle
    selectionStyle: EvinceDocument.SelectionStyle
    base: Gdk.Color
    text: Gdk.Color

    // Owm methods of EvinceView-3.0.EvinceView.JobRender

    setSelectionInfo(selectionPoints: EvinceDocument.Rectangle, selectionStyle: EvinceDocument.SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of EvinceView-3.0.EvinceView.JobRender

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
}

export class JobRender extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobRender

    static name: string

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

    // Own properties of EvinceView-3.0.EvinceView.JobSave

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobSave

    parent: Job & GObject.Object
    uri: string | null
    documentUri: string | null

    // Class property signals of EvinceView-3.0.EvinceView.JobSave

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
}

export class JobSave extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobSave

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.JobSave

    constructor(config?: JobSave.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, uri: string | null, documentUri: string | null) 
    static new(document: EvinceDocument.Document, uri: string | null, documentUri: string | null): JobSave
    _init(config?: JobSave.ConstructorProperties): void
}

export module JobThumbnail {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobThumbnail {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnail

    __gtype__: number

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnail

    parent: Job & GObject.Object
    page: number
    rotation: number
    scale: number
    targetWidth: number
    targetHeight: number
    thumbnail: GdkPixbuf.Pixbuf
    hasFrame: boolean
    format: JobThumbnailFormat
    thumbnailSurface: cairo.Surface

    // Owm methods of EvinceView-3.0.EvinceView.JobThumbnail

    setHasFrame(hasFrame: boolean): void
    /**
     * Set the desired output format for the generated thumbnail
     * @param format a #EvJobThumbnailFormat
     */
    setOutputFormat(format: JobThumbnailFormat): void

    // Class property signals of EvinceView-3.0.EvinceView.JobThumbnail

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
}

export class JobThumbnail extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnail

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.JobThumbnail

    constructor(config?: JobThumbnail.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, page: number, rotation: number, scale: number) 
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail
    static newWithTargetSize(document: EvinceDocument.Document, page: number, rotation: number, targetWidth: number, targetHeight: number): JobThumbnail
    _init(config?: JobThumbnail.ConstructorProperties): void
}

export module PrintOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-print`
     */
    export interface BeginPrintSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (object: Gtk.PrintOperationResult): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    export interface StatusChangedSignalCallback {
        (): void
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
    __gtype__: number

    // Owm methods of EvinceView-3.0.EvinceView.PrintOperation

    cancel(): void
    getDefaultPageSetup(): Gtk.PageSetup
    getEmbedPageSetup(): boolean
    getError(): void
    getJobName(): string | null
    getPrintSettings(): Gtk.PrintSettings
    getProgress(): number
    getStatus(): string | null
    run(parent: Gtk.Window): void
    setCurrentPage(currentPage: number): void
    setDefaultPageSetup(pageSetup: Gtk.PageSetup): void
    setEmbedPageSetup(embed: boolean): void
    setJobName(jobName: string | null): void
    setPrintSettings(printSettings: Gtk.PrintSettings): void

    // Own signals of EvinceView-3.0.EvinceView.PrintOperation

    connect(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback): number
    on(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-print", callback: PrintOperation.BeginPrintSignalCallback): NodeJS.EventEmitter
    emit(sigName: "begin-print", ...args: any[]): void
    connect(sigName: "done", callback: PrintOperation.DoneSignalCallback): number
    on(sigName: "done", callback: PrintOperation.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: PrintOperation.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: PrintOperation.DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: PrintOperation.StatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.PrintOperation

    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
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
}

export class PrintOperation extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperation

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.PrintOperation

    constructor(config?: PrintOperation.ConstructorProperties) 
    constructor(document: EvinceDocument.Document) 
    static new(document: EvinceDocument.Document): PrintOperation
    _init(config?: PrintOperation.ConstructorProperties): void
    static existsForDocument(document: EvinceDocument.Document): boolean
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `annot-added`
     */
    export interface AnnotAddedSignalCallback {
        (object: EvinceDocument.Annotation): void
    }

    /**
     * Signal callback interface for `annot-cancel-add`
     */
    export interface AnnotCancelAddSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `annot-changed`
     */
    export interface AnnotChangedSignalCallback {
        (object: EvinceDocument.Annotation): void
    }

    /**
     * Signal callback interface for `annot-removed`
     */
    export interface AnnotRemovedSignalCallback {
        (object: EvinceDocument.Annotation): void
    }

    /**
     * Signal callback interface for `cursor-moved`
     */
    export interface CursorMovedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `external-link`
     */
    export interface ExternalLinkSignalCallback {
        (object: GObject.Object): void
    }

    /**
     * Signal callback interface for `handle-link`
     */
    export interface HandleLinkSignalCallback {
        (object: number, p0: GObject.Object): void
    }

    /**
     * Signal callback interface for `layers-changed`
     */
    export interface LayersChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    export interface MoveCursorSignalCallback {
        (object: Gtk.MovementStep, p0: number, p1: boolean): boolean
    }

    /**
     * Signal callback interface for `popup`
     */
    export interface PopupSignalCallback {
        (object: any | null): void
    }

    /**
     * Signal callback interface for `scroll`
     */
    export interface ScrollSignalCallback {
        (object: Gtk.ScrollType, p0: Gtk.Orientation): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `sync-source`
     */
    export interface SyncSourceSignalCallback {
        (object: EvinceDocument.SourceLink): void
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
    __gtype__: number

    // Owm methods of EvinceView-3.0.EvinceView.View

    /**
     * Adds a Text Markup annotation (defaulting to a 'highlight' one) to
     * the currently selected text on the document.
     * 
     * When the selected text spans more than one page, it will add a
     * corresponding annotation for each page that contains selected text.
     * @returns %TRUE if annotations were added successfully, %FALSE otherwise.
     */
    addTextMarkupAnnotationForSelectedText(): boolean
    autoscrollStart(): void
    autoscrollStop(): void
    beginAddAnnotation(annotType: EvinceDocument.AnnotationType): void
    cancelAddAnnotation(): void
    copy(): void
    copyLinkAddress(action: EvinceDocument.LinkAction): void
    currentEventIsType(type: Gdk.EventType): boolean
    findCancel(): void
    findNext(): void
    findPrevious(): void
    /**
     * Restart the current search operation from the given `page`.
     * @param page a page index
     */
    findRestart(page: number): void
    findSearchChanged(): void
    findSetHighlightSearch(value: boolean): void
    /**
     * FIXME
     * @param page 
     * @param result 
     */
    findSetResult(page: number, result: number): void
    findStarted(job: JobFind): void
    focusAnnotation(annotMapping: EvinceDocument.Mapping): void
    getAllowLinksChangeZoom(): boolean
    getEnableSpellchecking(): boolean
    getHasSelection(): boolean
    getPageExtents(page: number, pageArea: Gdk.Rectangle, border: Gtk.Border): boolean
    getPageExtentsForBorder(page: number, border: Gtk.Border, pageArea: Gdk.Rectangle): boolean
    /**
     * Returns a pointer to a constant string containing the selected
     * text in the view.
     * 
     * The value returned may be NULL if there is no selected text.
     * @returns The string representing selected text.
     */
    getSelectedText(): string | null
    handleLink(link: EvinceDocument.Link): void
    hideCursor(): void
    highlightForwardSearch(link: EvinceDocument.SourceLink): void
    isCaretNavigationEnabled(): boolean
    nextPage(): boolean
    previousPage(): boolean
    reload(): void
    removeAnnotation(annot: EvinceDocument.Annotation): void
    scroll(scroll: Gtk.ScrollType, horizontal: boolean): void
    selectAll(): void
    setAllowLinksChangeZoom(allowed: boolean): void
    setCaretCursorPosition(page: number, offset: number): void
    /**
     * Enables or disables caret navigation mode for the document.
     * @param enabled whether to enable caret navigation mode
     */
    setCaretNavigationEnabled(enabled: boolean): void
    setEnableSpellchecking(spellcheck: boolean): void
    setLoading(loading: boolean): void
    setModel(model: DocumentModel): void
    /**
     * Sets the maximum size in bytes that will be used to cache
     * rendered pages. Use 0 to disable caching rendered pages.
     * 
     * Note that this limit doesn't affect the current visible page range,
     * which will always be rendered. In order to limit the total memory used
     * you have to use ev_document_model_set_max_scale() too.
     * @param cacheSize size in bytes
     */
    setPageCacheSize(cacheSize: number): void
    showCursor(): void
    supportsCaretNavigation(): boolean
    zoomIn(): void
    zoomOut(): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own signals of EvinceView-3.0.EvinceView.View

    connect(sigName: "activate", callback: View.ActivateSignalCallback): number
    on(sigName: "activate", callback: View.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: View.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: View.ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "annot-added", callback: View.AnnotAddedSignalCallback): number
    on(sigName: "annot-added", callback: View.AnnotAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-added", callback: View.AnnotAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-added", callback: View.AnnotAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-added", ...args: any[]): void
    connect(sigName: "annot-cancel-add", callback: View.AnnotCancelAddSignalCallback): number
    on(sigName: "annot-cancel-add", callback: View.AnnotCancelAddSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-cancel-add", callback: View.AnnotCancelAddSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-cancel-add", callback: View.AnnotCancelAddSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-cancel-add", ...args: any[]): void
    connect(sigName: "annot-changed", callback: View.AnnotChangedSignalCallback): number
    on(sigName: "annot-changed", callback: View.AnnotChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-changed", callback: View.AnnotChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-changed", callback: View.AnnotChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-changed", ...args: any[]): void
    connect(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback): number
    on(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-removed", callback: View.AnnotRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-removed", ...args: any[]): void
    connect(sigName: "cursor-moved", callback: View.CursorMovedSignalCallback): number
    on(sigName: "cursor-moved", callback: View.CursorMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: View.CursorMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: View.CursorMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-moved", p0: number, ...args: any[]): void
    connect(sigName: "external-link", callback: View.ExternalLinkSignalCallback): number
    on(sigName: "external-link", callback: View.ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "external-link", callback: View.ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "external-link", callback: View.ExternalLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "external-link", ...args: any[]): void
    connect(sigName: "handle-link", callback: View.HandleLinkSignalCallback): number
    on(sigName: "handle-link", callback: View.HandleLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-link", callback: View.HandleLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-link", callback: View.HandleLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-link", p0: GObject.Object, ...args: any[]): void
    connect(sigName: "layers-changed", callback: View.LayersChangedSignalCallback): number
    on(sigName: "layers-changed", callback: View.LayersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layers-changed", callback: View.LayersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layers-changed", callback: View.LayersChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layers-changed", ...args: any[]): void
    connect(sigName: "move-cursor", callback: View.MoveCursorSignalCallback): number
    on(sigName: "move-cursor", callback: View.MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: View.MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: View.MoveCursorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "move-cursor", p0: number, p1: boolean, ...args: any[]): void
    connect(sigName: "popup", callback: View.PopupSignalCallback): number
    on(sigName: "popup", callback: View.PopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup", callback: View.PopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup", callback: View.PopupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "popup", ...args: any[]): void
    connect(sigName: "scroll", callback: View.ScrollSignalCallback): number
    on(sigName: "scroll", callback: View.ScrollSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll", callback: View.ScrollSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll", callback: View.ScrollSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scroll", p0: Gtk.Orientation, ...args: any[]): void
    connect(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: View.SelectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "sync-source", callback: View.SyncSourceSignalCallback): number
    on(sigName: "sync-source", callback: View.SyncSourceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync-source", callback: View.SyncSourceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync-source", callback: View.SyncSourceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sync-source", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.View

    connect(sigName: "notify::can-zoom-in", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-zoom-in", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-zoom-in", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-zoom-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-zoom-in", ...args: any[]): void
    connect(sigName: "notify::can-zoom-out", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-zoom-out", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-zoom-out", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-zoom-out", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-zoom-out", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-loading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-loading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    connect(sigName: "notify::hadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class View extends Gtk.Container {

    // Own properties of EvinceView-3.0.EvinceView.View

    static name: string

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
        (object: Gtk.ScrollType): void
    }

    /**
     * Signal callback interface for `external-link`
     */
    export interface ExternalLinkSignalCallback {
        (object: GObject.Object): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
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
    __gtype__: number

    // Owm methods of EvinceView-3.0.EvinceView.ViewPresentation

    getCurrentPage(): number
    getRotation(): number
    nextPage(): void
    previousPage(): void
    setRotation(rotation: number): void

    // Conflicting methods

    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void

    // Own signals of EvinceView-3.0.EvinceView.ViewPresentation

    connect(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback): number
    on(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-page", callback: ViewPresentation.ChangePageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "change-page", ...args: any[]): void
    connect(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback): number
    on(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "external-link", callback: ViewPresentation.ExternalLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "external-link", ...args: any[]): void
    connect(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback): number
    on(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: ViewPresentation.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.ViewPresentation

    connect(sigName: "notify::current-page", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-page", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::inverted-colors", callback: (...args: any[]) => void): number
    on(sigName: "notify::inverted-colors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inverted-colors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inverted-colors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inverted-colors", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class ViewPresentation extends Gtk.Widget {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    static name: string

    // Constructors of EvinceView-3.0.EvinceView.ViewPresentation

    constructor(config?: ViewPresentation.ConstructorProperties) 
    constructor(document: EvinceDocument.Document, currentPage: number, rotation: number, invertedColors: boolean) 
    static new(document: EvinceDocument.Document, currentPage: number, rotation: number, invertedColors: boolean): ViewPresentation
    _init(config?: ViewPresentation.ConstructorProperties): void
}

export interface DocumentModelClass {

    // Own fields of EvinceView-3.0.EvinceView.DocumentModelClass

    parentClass: GObject.ObjectClass
}

export abstract class DocumentModelClass {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModelClass

    static name: string
}

export interface JobAnnotsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnotsClass

    parentClass: JobClass
}

export abstract class JobAnnotsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnotsClass

    static name: string
}

export interface JobAttachmentsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAttachmentsClass

    parentClass: JobClass
}

export abstract class JobAttachmentsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachmentsClass

    static name: string
}

export interface JobClass {

    // Own fields of EvinceView-3.0.EvinceView.JobClass

    parentClass: GObject.ObjectClass
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

    parentClass: JobClass
}

export abstract class JobExportClass {

    // Own properties of EvinceView-3.0.EvinceView.JobExportClass

    static name: string
}

export interface JobFindClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFindClass

    parentClass: JobClass
    updated: (job: JobFind, page: number) => void
}

export abstract class JobFindClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFindClass

    static name: string
}

export interface JobFontsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFontsClass

    parentClass: JobClass
    updated: (job: JobFonts, progress: number) => void
}

export abstract class JobFontsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFontsClass

    static name: string
}

export interface JobLayersClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLayersClass

    parentClass: JobClass
}

export abstract class JobLayersClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLayersClass

    static name: string
}

export interface JobLinksClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLinksClass

    parentClass: JobClass
}

export abstract class JobLinksClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLinksClass

    static name: string
}

export interface JobLoadClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadClass

    parentClass: JobClass
}

export abstract class JobLoadClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadClass

    static name: string
}

export interface JobLoadFdClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFdClass

    parentClass: JobClass
}

export abstract class JobLoadFdClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFdClass

    static name: string
}

export interface JobLoadGFileClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFileClass

    parentClass: JobClass
}

export abstract class JobLoadGFileClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFileClass

    static name: string
}

export interface JobLoadStreamClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStreamClass

    parentClass: JobClass
}

export abstract class JobLoadStreamClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStreamClass

    static name: string
}

export interface JobPageDataClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPageDataClass

    parentClass: JobClass
}

export abstract class JobPageDataClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPageDataClass

    static name: string
}

export interface JobPrintClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPrintClass

    parentClass: JobClass
}

export abstract class JobPrintClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPrintClass

    static name: string
}

export interface JobRenderClass {

    // Own fields of EvinceView-3.0.EvinceView.JobRenderClass

    parentClass: JobClass
}

export abstract class JobRenderClass {

    // Own properties of EvinceView-3.0.EvinceView.JobRenderClass

    static name: string
}

export interface JobSaveClass {

    // Own fields of EvinceView-3.0.EvinceView.JobSaveClass

    parentClass: JobClass
}

export abstract class JobSaveClass {

    // Own properties of EvinceView-3.0.EvinceView.JobSaveClass

    static name: string
}

export interface JobThumbnailClass {

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnailClass

    parentClass: JobClass
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
