// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EvinceView-3.0
 */

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
function stockIconsInit(): void
function stockIconsSetScreen(screen: Gdk.Screen): void
function stockIconsShutdown(): void
interface DocumentModel_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `page-changed`
 */
interface DocumentModel_PageChangedSignalCallback {
    (object: number, p0: number): void
}

interface DocumentModel {

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

    getContinuous(): boolean
    /**
     * Returns the #EvDocument referenced by the model.
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
    setPageByLabel(pageLabel: string): void
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

    connect(sigName: "page-changed", callback: DocumentModel_PageChangedSignalCallback): number
    on(sigName: "page-changed", callback: DocumentModel_PageChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: DocumentModel_PageChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: DocumentModel_PageChangedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DocumentModel extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModel

    static name: string
    static $gtype: GObject.GType<DocumentModel>

    // Constructors of EvinceView-3.0.EvinceView.DocumentModel

    constructor(config?: DocumentModel_ConstructProps) 
    constructor() 
    static new(): DocumentModel
    static newWithDocument(document: EvinceDocument.Document): DocumentModel
    _init(config?: DocumentModel_ConstructProps): void
}

interface Job_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `cancelled`
 */
interface Job_CancelledSignalCallback {
    (): void
}

/**
 * Signal callback interface for `finished`
 */
interface Job_FinishedSignalCallback {
    (): void
}

interface Job {

    // Own fields of EvinceView-3.0.EvinceView.Job

    parent: GObject.Object
    document: EvinceDocument.Document
    runMode: JobRunMode
    cancelled: number
    finished: number
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
    run(): boolean
    schedulerPushJob(priority: JobPriority): void
    schedulerUpdateJob(priority: JobPriority): void
    setRunMode(runMode: JobRunMode): void
    succeeded(): void

    // Own signals of EvinceView-3.0.EvinceView.Job

    connect(sigName: "cancelled", callback: Job_CancelledSignalCallback): number
    on(sigName: "cancelled", callback: Job_CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: Job_CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: Job_CancelledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job_FinishedSignalCallback): number
    on(sigName: "finished", callback: Job_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Job_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Job_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.Job

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Job extends GObject.Object {

    // Own properties of EvinceView-3.0.EvinceView.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of EvinceView-3.0.EvinceView.Job

    constructor(config?: Job_ConstructProps) 
    _init(config?: Job_ConstructProps): void
    static schedulerGetRunningThreadJob(): Job
}

interface JobAnnots_ConstructProps extends Job_ConstructProps {
}

interface JobAnnots {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnots

    parent: Job
    annots: object[]

    // Class property signals of EvinceView-3.0.EvinceView.JobAnnots

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    setPage(page: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobExport

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (object: number): void
}

interface JobFind {

    // Own fields of EvinceView-3.0.EvinceView.JobFind

    parent: Job
    startPage: number
    currentPage: number
    nPages: number
    pages: object[]
    text: string
    caseSensitive: boolean
    hasResults: boolean
    options: EvinceDocument.FindOptions

    // Owm methods of EvinceView-3.0.EvinceView.JobFind

    getNResults(pages: number): number
    getOptions(): EvinceDocument.FindOptions
    getProgress(): number
    setOptions(options: EvinceDocument.FindOptions): void

    // Own signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: "updated", callback: JobFind_UpdatedSignalCallback): number
    on(sigName: "updated", callback: JobFind_UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: JobFind_UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: JobFind_UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class JobFind extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobFind

    static name: string
    static $gtype: GObject.GType<JobFind>

    // Constructors of EvinceView-3.0.EvinceView.JobFind

    constructor(config?: JobFind_ConstructProps) 
    constructor(document: EvinceDocument.Document, startPage: number, nPages: number, text: string, caseSensitive: boolean) 
    static new(document: EvinceDocument.Document, startPage: number, nPages: number, text: string, caseSensitive: boolean): JobFind
    _init(config?: JobFind_ConstructProps): void
}

interface JobFonts_ConstructProps extends Job_ConstructProps {
}

/**
 * Signal callback interface for `updated`
 */
interface JobFonts_UpdatedSignalCallback {
    (object: number): void
}

interface JobFonts {

    // Own fields of EvinceView-3.0.EvinceView.JobFonts

    parent: Job
    scanCompleted: boolean

    // Own signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: "updated", callback: JobFonts_UpdatedSignalCallback): number
    on(sigName: "updated", callback: JobFonts_UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: JobFonts_UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: JobFonts_UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.JobFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getModel(): Gtk.TreeModel

    // Class property signals of EvinceView-3.0.EvinceView.JobLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    setPassword(password: string): void
    setUri(uri: string): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoad

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    mimeType: string
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
    setFd(fd: number): boolean
    setLoadFlags(flags: EvinceDocument.DocumentLoadFlags): void
    setMimeType(mimeType: string): void
    setPassword(password: string): void
    takeFd(fd: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadFd

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
     * @param mimeType the mime type
     * @param flags flags from #EvDocumentLoadFlags
     */
    constructor(fd: number, mimeType: string, flags: EvinceDocument.DocumentLoadFlags) 
    /**
     * Creates a new #EvJobLoadFd for `fd`. If duplicating `fd` fails,
     * returns %NULL with `error` filled in.
     * @constructor 
     * @param fd a file descriptor
     * @param mimeType the mime type
     * @param flags flags from #EvDocumentLoadFlags
     */
    static new(fd: number, mimeType: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
    static newTake(fd: number, mimeType: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd
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

    setGfile(gfile: Gio.File): void
    setLoadFlags(flags: EvinceDocument.DocumentLoadFlags): void
    setPassword(password: string): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadGFile

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

    setLoadFlags(flags: EvinceDocument.DocumentLoadFlags): void
    setMimeType(mimeType: string): void
    setPassword(password: string): void
    setStream(stream: Gio.InputStream): void

    // Class property signals of EvinceView-3.0.EvinceView.JobLoadStream

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
    linkMapping: EvinceDocument.MappingList
    imageMapping: EvinceDocument.MappingList
    formFieldMapping: EvinceDocument.MappingList
    annotMapping: EvinceDocument.MappingList
    mediaMapping: EvinceDocument.MappingList
    textMapping: cairo.Region
    text: string
    textLayout: EvinceDocument.Rectangle
    textLayoutLength: number
    textAttrs: Pango.AttrList
    textLogAttrs: Pango.LogAttr
    textLogAttrsLength: number

    // Class property signals of EvinceView-3.0.EvinceView.JobPageData

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    setCairo(cr: cairo.Context): void
    setPage(page: number): void

    // Class property signals of EvinceView-3.0.EvinceView.JobPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    documentUri: string

    // Class property signals of EvinceView-3.0.EvinceView.JobSave

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class JobSave extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobSave

    static name: string
    static $gtype: GObject.GType<JobSave>

    // Constructors of EvinceView-3.0.EvinceView.JobSave

    constructor(config?: JobSave_ConstructProps) 
    constructor(document: EvinceDocument.Document, uri: string, documentUri: string) 
    static new(document: EvinceDocument.Document, uri: string, documentUri: string): JobSave
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

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class JobThumbnail extends Job {

    // Own properties of EvinceView-3.0.EvinceView.JobThumbnail

    static name: string
    static $gtype: GObject.GType<JobThumbnail>

    // Constructors of EvinceView-3.0.EvinceView.JobThumbnail

    constructor(config?: JobThumbnail_ConstructProps) 
    constructor(document: EvinceDocument.Document, page: number, rotation: number, scale: number) 
    static new(document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail
    static newWithTargetSize(document: EvinceDocument.Document, page: number, rotation: number, targetWidth: number, targetHeight: number): JobThumbnail
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
    (): void
}

/**
 * Signal callback interface for `done`
 */
interface PrintOperation_DoneSignalCallback {
    (object: Gtk.PrintOperationResult): void
}

/**
 * Signal callback interface for `status-changed`
 */
interface PrintOperation_StatusChangedSignalCallback {
    (): void
}

interface PrintOperation {

    // Own properties of EvinceView-3.0.EvinceView.PrintOperation

    readonly document: EvinceDocument.Document

    // Owm methods of EvinceView-3.0.EvinceView.PrintOperation

    cancel(): void
    getDefaultPageSetup(): Gtk.PageSetup
    getEmbedPageSetup(): boolean
    getError(): void
    getJobName(): string
    getPrintSettings(): Gtk.PrintSettings
    getProgress(): number
    getStatus(): string
    run(parent: Gtk.Window): void
    setCurrentPage(currentPage: number): void
    setDefaultPageSetup(pageSetup: Gtk.PageSetup): void
    setEmbedPageSetup(embed: boolean): void
    setJobName(jobName: string): void
    setPrintSettings(printSettings: Gtk.PrintSettings): void

    // Own signals of EvinceView-3.0.EvinceView.PrintOperation

    connect(sigName: "begin-print", callback: PrintOperation_BeginPrintSignalCallback): number
    on(sigName: "begin-print", callback: PrintOperation_BeginPrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-print", callback: PrintOperation_BeginPrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-print", callback: PrintOperation_BeginPrintSignalCallback): NodeJS.EventEmitter
    emit(sigName: "begin-print", ...args: any[]): void
    connect(sigName: "done", callback: PrintOperation_DoneSignalCallback): number
    on(sigName: "done", callback: PrintOperation_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: PrintOperation_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: PrintOperation_DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "status-changed", callback: PrintOperation_StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: PrintOperation_StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: PrintOperation_StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: PrintOperation_StatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of EvinceView-3.0.EvinceView.PrintOperation

    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static existsForDocument(document: EvinceDocument.Document): boolean
}

interface View_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.Container_ConstructProps {
}

/**
 * Signal callback interface for `activate`
 */
interface View_ActivateSignalCallback {
    (): void
}

/**
 * Signal callback interface for `annot-added`
 */
interface View_AnnotAddedSignalCallback {
    (object: EvinceDocument.Annotation): void
}

/**
 * Signal callback interface for `annot-changed`
 */
interface View_AnnotChangedSignalCallback {
    (object: EvinceDocument.Annotation): void
}

/**
 * Signal callback interface for `annot-removed`
 */
interface View_AnnotRemovedSignalCallback {
    (object: EvinceDocument.Annotation): void
}

/**
 * Signal callback interface for `cursor-moved`
 */
interface View_CursorMovedSignalCallback {
    (object: number, p0: number): void
}

/**
 * Signal callback interface for `external-link`
 */
interface View_ExternalLinkSignalCallback {
    (object: GObject.Object): void
}

/**
 * Signal callback interface for `handle-link`
 */
interface View_HandleLinkSignalCallback {
    (object: number, p0: GObject.Object): void
}

/**
 * Signal callback interface for `layers-changed`
 */
interface View_LayersChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `move-cursor`
 */
interface View_MoveCursorSignalCallback {
    (object: Gtk.MovementStep, p0: number, p1: boolean): boolean
}

/**
 * Signal callback interface for `popup`
 */
interface View_PopupSignalCallback {
    (object: object | null): void
}

/**
 * Signal callback interface for `scroll`
 */
interface View_ScrollSignalCallback {
    (object: Gtk.ScrollType, p0: Gtk.Orientation): void
}

/**
 * Signal callback interface for `selection-changed`
 */
interface View_SelectionChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `sync-source`
 */
interface View_SyncSourceSignalCallback {
    (object: EvinceDocument.SourceLink): void
}

interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

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
     */
    addTextMarkupAnnotationForSelectedText(): boolean
    autoscrollStart(): void
    autoscrollStop(): void
    beginAddAnnotation(annotType: EvinceDocument.AnnotationType): void
    cancelAddAnnotation(): void
    copy(): void
    copyLinkAddress(action: EvinceDocument.LinkAction): void
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
     */
    getSelectedText(): string
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

    childNotify(...args: any[]): any

    // Own signals of EvinceView-3.0.EvinceView.View

    connect(sigName: "activate", callback: View_ActivateSignalCallback): number
    on(sigName: "activate", callback: View_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: View_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: View_ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "annot-added", callback: View_AnnotAddedSignalCallback): number
    on(sigName: "annot-added", callback: View_AnnotAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-added", callback: View_AnnotAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-added", callback: View_AnnotAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-added", ...args: any[]): void
    connect(sigName: "annot-changed", callback: View_AnnotChangedSignalCallback): number
    on(sigName: "annot-changed", callback: View_AnnotChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-changed", callback: View_AnnotChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-changed", callback: View_AnnotChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-changed", ...args: any[]): void
    connect(sigName: "annot-removed", callback: View_AnnotRemovedSignalCallback): number
    on(sigName: "annot-removed", callback: View_AnnotRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "annot-removed", callback: View_AnnotRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "annot-removed", callback: View_AnnotRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "annot-removed", ...args: any[]): void
    connect(sigName: "cursor-moved", callback: View_CursorMovedSignalCallback): number
    on(sigName: "cursor-moved", callback: View_CursorMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: View_CursorMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: View_CursorMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-moved", p0: number, ...args: any[]): void
    connect(sigName: "external-link", callback: View_ExternalLinkSignalCallback): number
    on(sigName: "external-link", callback: View_ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "external-link", callback: View_ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "external-link", callback: View_ExternalLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "external-link", ...args: any[]): void
    connect(sigName: "handle-link", callback: View_HandleLinkSignalCallback): number
    on(sigName: "handle-link", callback: View_HandleLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-link", callback: View_HandleLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-link", callback: View_HandleLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-link", p0: GObject.Object, ...args: any[]): void
    connect(sigName: "layers-changed", callback: View_LayersChangedSignalCallback): number
    on(sigName: "layers-changed", callback: View_LayersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layers-changed", callback: View_LayersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layers-changed", callback: View_LayersChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layers-changed", ...args: any[]): void
    connect(sigName: "move-cursor", callback: View_MoveCursorSignalCallback): number
    on(sigName: "move-cursor", callback: View_MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: View_MoveCursorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: View_MoveCursorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "move-cursor", p0: number, p1: boolean, ...args: any[]): void
    connect(sigName: "popup", callback: View_PopupSignalCallback): number
    on(sigName: "popup", callback: View_PopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup", callback: View_PopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup", callback: View_PopupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "popup", ...args: any[]): void
    connect(sigName: "scroll", callback: View_ScrollSignalCallback): number
    on(sigName: "scroll", callback: View_ScrollSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll", callback: View_ScrollSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll", callback: View_ScrollSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scroll", p0: Gtk.Orientation, ...args: any[]): void
    connect(sigName: "selection-changed", callback: View_SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: View_SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: View_SelectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: View_SelectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "sync-source", callback: View_SyncSourceSignalCallback): number
    on(sigName: "sync-source", callback: View_SyncSourceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync-source", callback: View_SyncSourceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync-source", callback: View_SyncSourceSignalCallback): NodeJS.EventEmitter
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

    currentPage?: number | null
    document?: EvinceDocument.Document | null
    invertedColors?: boolean | null
    rotation?: number | null
}

/**
 * Signal callback interface for `change-page`
 */
interface ViewPresentation_ChangePageSignalCallback {
    (object: Gtk.ScrollType): void
}

/**
 * Signal callback interface for `external-link`
 */
interface ViewPresentation_ExternalLinkSignalCallback {
    (object: GObject.Object): void
}

/**
 * Signal callback interface for `finished`
 */
interface ViewPresentation_FinishedSignalCallback {
    (): void
}

interface ViewPresentation extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    currentPage: number
    readonly document: EvinceDocument.Document
    readonly invertedColors: boolean
    rotation: number

    // Owm methods of EvinceView-3.0.EvinceView.ViewPresentation

    getCurrentPage(): number
    getRotation(): number
    nextPage(): void
    previousPage(): void
    setRotation(rotation: number): void

    // Own signals of EvinceView-3.0.EvinceView.ViewPresentation

    connect(sigName: "change-page", callback: ViewPresentation_ChangePageSignalCallback): number
    on(sigName: "change-page", callback: ViewPresentation_ChangePageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-page", callback: ViewPresentation_ChangePageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-page", callback: ViewPresentation_ChangePageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "change-page", ...args: any[]): void
    connect(sigName: "external-link", callback: ViewPresentation_ExternalLinkSignalCallback): number
    on(sigName: "external-link", callback: ViewPresentation_ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "external-link", callback: ViewPresentation_ExternalLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "external-link", callback: ViewPresentation_ExternalLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "external-link", ...args: any[]): void
    connect(sigName: "finished", callback: ViewPresentation_FinishedSignalCallback): number
    on(sigName: "finished", callback: ViewPresentation_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: ViewPresentation_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: ViewPresentation_FinishedSignalCallback): NodeJS.EventEmitter
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

class ViewPresentation extends Gtk.Widget {

    // Own properties of EvinceView-3.0.EvinceView.ViewPresentation

    static name: string
    static $gtype: GObject.GType<ViewPresentation>

    // Constructors of EvinceView-3.0.EvinceView.ViewPresentation

    constructor(config?: ViewPresentation_ConstructProps) 
    constructor(document: EvinceDocument.Document, currentPage: number, rotation: number, invertedColors: boolean) 
    static new(document: EvinceDocument.Document, currentPage: number, rotation: number, invertedColors: boolean): ViewPresentation
    _init(config?: ViewPresentation_ConstructProps): void
}

interface DocumentModelClass {

    // Own fields of EvinceView-3.0.EvinceView.DocumentModelClass

    parentClass: GObject.ObjectClass
}

abstract class DocumentModelClass {

    // Own properties of EvinceView-3.0.EvinceView.DocumentModelClass

    static name: string
}

interface JobAnnotsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAnnotsClass

    parentClass: JobClass
}

abstract class JobAnnotsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAnnotsClass

    static name: string
}

interface JobAttachmentsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobAttachmentsClass

    parentClass: JobClass
}

abstract class JobAttachmentsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobAttachmentsClass

    static name: string
}

interface JobClass {

    // Own fields of EvinceView-3.0.EvinceView.JobClass

    parentClass: GObject.ObjectClass
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

    parentClass: JobClass
}

abstract class JobExportClass {

    // Own properties of EvinceView-3.0.EvinceView.JobExportClass

    static name: string
}

interface JobFindClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFindClass

    parentClass: JobClass
    updated: (job: JobFind, page: number) => void
}

abstract class JobFindClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFindClass

    static name: string
}

interface JobFontsClass {

    // Own fields of EvinceView-3.0.EvinceView.JobFontsClass

    parentClass: JobClass
    updated: (job: JobFonts, progress: number) => void
}

abstract class JobFontsClass {

    // Own properties of EvinceView-3.0.EvinceView.JobFontsClass

    static name: string
}

interface JobLayersClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLayersClass

    parentClass: JobClass
}

abstract class JobLayersClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLayersClass

    static name: string
}

interface JobLinksClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLinksClass

    parentClass: JobClass
}

abstract class JobLinksClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLinksClass

    static name: string
}

interface JobLoadClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadClass

    parentClass: JobClass
}

abstract class JobLoadClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadClass

    static name: string
}

interface JobLoadFdClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadFdClass

    parentClass: JobClass
}

abstract class JobLoadFdClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadFdClass

    static name: string
}

interface JobLoadGFileClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadGFileClass

    parentClass: JobClass
}

abstract class JobLoadGFileClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadGFileClass

    static name: string
}

interface JobLoadStreamClass {

    // Own fields of EvinceView-3.0.EvinceView.JobLoadStreamClass

    parentClass: JobClass
}

abstract class JobLoadStreamClass {

    // Own properties of EvinceView-3.0.EvinceView.JobLoadStreamClass

    static name: string
}

interface JobPageDataClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPageDataClass

    parentClass: JobClass
}

abstract class JobPageDataClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPageDataClass

    static name: string
}

interface JobPrintClass {

    // Own fields of EvinceView-3.0.EvinceView.JobPrintClass

    parentClass: JobClass
}

abstract class JobPrintClass {

    // Own properties of EvinceView-3.0.EvinceView.JobPrintClass

    static name: string
}

interface JobRenderClass {

    // Own fields of EvinceView-3.0.EvinceView.JobRenderClass

    parentClass: JobClass
}

abstract class JobRenderClass {

    // Own properties of EvinceView-3.0.EvinceView.JobRenderClass

    static name: string
}

interface JobSaveClass {

    // Own fields of EvinceView-3.0.EvinceView.JobSaveClass

    parentClass: JobClass
}

abstract class JobSaveClass {

    // Own properties of EvinceView-3.0.EvinceView.JobSaveClass

    static name: string
}

interface JobThumbnailClass {

    // Own fields of EvinceView-3.0.EvinceView.JobThumbnailClass

    parentClass: JobClass
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