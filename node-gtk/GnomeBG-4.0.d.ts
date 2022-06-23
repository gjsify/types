// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeBG-4.0
 */

import type GnomeDesktop from './GnomeDesktop-4.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type GDesktopEnums from './GDesktopEnums-3.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';

export namespace GnomeBG {

interface BG_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface BG_ChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `transitioned`
 */
interface BG_TransitionedSignalCallback {
    (): void
}

interface BG {

    // Owm methods of GnomeBG-4.0.GnomeBG.BG

    changesWithTime(): boolean
    /**
     * Creates a thumbnail for a certain frame, where 'frame' is somewhat
     * vaguely defined as 'suitable point to show while single-stepping
     * through the slideshow'.
     * @param factory 
     * @param screenArea 
     * @param destWidth 
     * @param destHeight 
     * @param frameNum 
     */
    createFrameThumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screenArea: cairo.RectangleInt, destWidth: number, destHeight: number, frameNum: number): GdkPixbuf.Pixbuf
    /**
     * Create a surface that can be set as background for `window`.
     * @param window 
     * @param width 
     * @param height 
     */
    createSurface(window: Gdk.Surface, width: number, height: number): cairo.Surface
    createThumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screenArea: cairo.RectangleInt, destWidth: number, destHeight: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    getFilename(): string
    getImageSize(factory: GnomeDesktop.DesktopThumbnailFactory, bestWidth: number, bestHeight: number, width: number, height: number): boolean
    getPlacement(): GDesktopEnums.BackgroundStyle
    getRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    hasMultipleSizes(): boolean
    isDark(destWidth: number, destHeight: number): boolean
    loadFromPreferences(settings: Gio.Settings): void
    saveToPreferences(settings: Gio.Settings): void
    setFilename(filename: string): void
    setPlacement(placement: GDesktopEnums.BackgroundStyle): void
    setRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void

    // Own signals of GnomeBG-4.0.GnomeBG.BG

    connect(sigName: "changed", callback: BG_ChangedSignalCallback): number
    on(sigName: "changed", callback: BG_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: BG_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: BG_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "transitioned", callback: BG_TransitionedSignalCallback): number
    on(sigName: "transitioned", callback: BG_TransitionedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transitioned", callback: BG_TransitionedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transitioned", callback: BG_TransitionedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transitioned", ...args: any[]): void

    // Class property signals of GnomeBG-4.0.GnomeBG.BG

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BG extends GObject.Object {

    // Own properties of GnomeBG-4.0.GnomeBG.BG

    static name: string
    static $gtype: GObject.GType<BG>

    // Constructors of GnomeBG-4.0.GnomeBG.BG

    constructor(config?: BG_ConstructProps) 
    constructor() 
    static new(): BG
    _init(config?: BG_ConstructProps): void
}

interface BGSlideShow_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    file?: Gio.File | null
}

interface BGSlideShow {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    readonly file: Gio.File
    readonly hasMultipleSizes: boolean
    readonly startTime: number
    readonly totalDuration: number

    // Own fields of GnomeBG-4.0.GnomeBG.BGSlideShow

    parentObject: GObject.Object
    priv: BGSlideShowPrivate

    // Owm methods of GnomeBG-4.0.GnomeBG.BGSlideShow

    /**
     * Returns the current slides progress.
     * @param width monitor width
     * @param height monitor height
     */
    getCurrentSlide(width: number, height: number): [ /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets whether or not the slide show has multiple sizes for different monitors
     */
    getHasMultipleSizes(): boolean
    /**
     * Returns number of slides in slide show
     */
    getNumSlides(): number
    /**
     * Retrieves slide by frame number
     * @param frameNumber frame number
     * @param width monitor width
     * @param height monitor height
     */
    getSlide(frameNumber: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets the start time of the slide show
     */
    getStartTime(): number
    /**
     * gets the total duration of the slide show
     */
    getTotalDuration(): number
    /**
     * Tries to load the slide show.
     */
    load(): boolean
    /**
     * Tries to load the slide show asynchronously.
     * @param cancellable a #GCancellable
     * @param callback the callback
     */
    loadAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GnomeBG-4.0.GnomeBG.BGSlideShow

    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-multiple-sizes", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::total-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-duration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BGSlideShow extends GObject.Object {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    static name: string
    static $gtype: GObject.GType<BGSlideShow>

    // Constructors of GnomeBG-4.0.GnomeBG.BGSlideShow

    constructor(config?: BGSlideShow_ConstructProps) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     */
    constructor(filename: string) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     */
    static new(filename: string): BGSlideShow
    _init(config?: BGSlideShow_ConstructProps): void
}

interface BGClass {
}

abstract class BGClass {

    // Own properties of GnomeBG-4.0.GnomeBG.BGClass

    static name: string
}

interface BGSlideShowClass {

    // Own fields of GnomeBG-4.0.GnomeBG.BGSlideShowClass

    parentClass: GObject.ObjectClass
}

abstract class BGSlideShowClass {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShowClass

    static name: string
}

interface BGSlideShowPrivate {
}

class BGSlideShowPrivate {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShowPrivate

    static name: string
}

}
export default GnomeBG;