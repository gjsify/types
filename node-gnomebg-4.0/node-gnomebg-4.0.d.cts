
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GnomeBG-4.0
 */

import type GnomeDesktop from '@girs/gnomedesktop-4.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';

export module BG {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `transitioned`
     */
    export interface TransitionedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BG {

    // Own properties of GnomeBG-4.0.GnomeBG.BG

    __gtype__: number

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
     * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
     */
    createFrameThumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screenArea: cairo.RectangleInt, destWidth: number, destHeight: number, frameNum: number): GdkPixbuf.Pixbuf
    /**
     * Create a surface that can be set as background for `window`.
     * @param window 
     * @param width 
     * @param height 
     * @returns %NULL on error (e.g. out of X connections)
     */
    createSurface(window: Gdk.Surface, width: number, height: number): cairo.Surface
    createThumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screenArea: cairo.RectangleInt, destWidth: number, destHeight: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    getFilename(): string | null
    getImageSize(factory: GnomeDesktop.DesktopThumbnailFactory, bestWidth: number, bestHeight: number, width: number, height: number): boolean
    getPlacement(): GDesktopEnums.BackgroundStyle
    getRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    hasMultipleSizes(): boolean
    isDark(destWidth: number, destHeight: number): boolean
    loadFromPreferences(settings: Gio.Settings): void
    saveToPreferences(settings: Gio.Settings): void
    setFilename(filename: string | null): void
    setPlacement(placement: GDesktopEnums.BackgroundStyle): void
    setRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void

    // Own signals of GnomeBG-4.0.GnomeBG.BG

    connect(sigName: "changed", callback: BG.ChangedSignalCallback): number
    on(sigName: "changed", callback: BG.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: BG.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: BG.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    on(sigName: "transitioned", callback: BG.TransitionedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transitioned", callback: BG.TransitionedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transitioned", callback: BG.TransitionedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transitioned", ...args: any[]): void

    // Class property signals of GnomeBG-4.0.GnomeBG.BG

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

export class BG extends GObject.Object {

    // Own properties of GnomeBG-4.0.GnomeBG.BG

    static name: string

    // Constructors of GnomeBG-4.0.GnomeBG.BG

    constructor(config?: BG.ConstructorProperties) 
    constructor() 
    static new(): BG
    _init(config?: BG.ConstructorProperties): void
}

export module BGSlideShow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeBG-4.0.GnomeBG.BGSlideShow

        file?: Gio.File | null
    }

}

export interface BGSlideShow {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    readonly file: Gio.File
    readonly hasMultipleSizes: boolean
    readonly startTime: number
    readonly totalDuration: number
    __gtype__: number

    // Own fields of GnomeBG-4.0.GnomeBG.BGSlideShow

    parentObject: GObject.Object
    priv: BGSlideShowPrivate

    // Owm methods of GnomeBG-4.0.GnomeBG.BGSlideShow

    /**
     * Returns the current slides progress.
     * @param width monitor width
     * @param height monitor height
     */
    getCurrentSlide(width: number, height: number): [ /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string | null, /* file2 */ string | null ]
    /**
     * gets whether or not the slide show has multiple sizes for different monitors
     * @returns %TRUE if multiple sizes
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
     * @returns %TRUE if successful
     */
    getSlide(frameNumber: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string | null, /* file2 */ string | null ]
    /**
     * gets the start time of the slide show
     * @returns a timestamp
     */
    getStartTime(): number
    /**
     * gets the total duration of the slide show
     * @returns a timestamp
     */
    getTotalDuration(): number
    /**
     * Tries to load the slide show.
     * @returns %TRUE if successful
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

export class BGSlideShow extends GObject.Object {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    static name: string

    // Constructors of GnomeBG-4.0.GnomeBG.BGSlideShow

    constructor(config?: BGSlideShow.ConstructorProperties) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     * @returns the new #GnomeBGSlideShow
     */
    constructor(filename: string | null) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     * @returns the new #GnomeBGSlideShow
     */
    static new(filename: string | null): BGSlideShow
    _init(config?: BGSlideShow.ConstructorProperties): void
}

export interface BGClass {
}

export abstract class BGClass {

    // Own properties of GnomeBG-4.0.GnomeBG.BGClass

    static name: string
}

export interface BGSlideShowClass {

    // Own fields of GnomeBG-4.0.GnomeBG.BGSlideShowClass

    parentClass: GObject.ObjectClass
}

export abstract class BGSlideShowClass {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShowClass

    static name: string
}

export interface BGSlideShowPrivate {
}

export class BGSlideShowPrivate {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShowPrivate

    static name: string
}
