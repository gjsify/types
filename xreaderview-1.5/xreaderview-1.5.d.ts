
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type XreaderDocument from '@girs/xreaderdocument-1.5';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace XreaderView {

    /**
     * XreaderView-1.5
     */


    /**
     * @gir-type Enum
     */
    export namespace JobPriority {
        export const $gtype: GObject.GType<JobPriority>;
    }

    /**
     * @gir-type Enum
     */
    enum JobPriority {
        PRIORITY_URGENT,
        PRIORITY_HIGH,
        PRIORITY_LOW,
        PRIORITY_NONE,
        N_PRIORITIES,
    }


    /**
     * @gir-type Enum
     */
    export namespace JobRunMode {
        export const $gtype: GObject.GType<JobRunMode>;
    }

    /**
     * @gir-type Enum
     */
    enum JobRunMode {
        THREAD,
        MAIN_LOOP,
    }


    /**
     * @gir-type Enum
     */
    export namespace SizingMode {
        export const $gtype: GObject.GType<SizingMode>;
    }

    /**
     * @gir-type Enum
     */
    enum SizingMode {
        BEST_FIT,
        FIT_WIDTH,
        FREE,
    }


    /**
     * @gir-type Enum
     */
    export namespace ViewSelectionMode {
        export const $gtype: GObject.GType<ViewSelectionMode>;
    }

    /**
     * @gir-type Enum
     */
    enum ViewSelectionMode {
        TEXT,
        RECTANGLE,
    }


    const STOCK_ATTACHMENT: string;

    const STOCK_CLOSE: string;

    const STOCK_INVERTED_COLORS: string;

    const STOCK_RESIZE_SE: string;

    const STOCK_RESIZE_SW: string;

    const STOCK_ROTATE_LEFT: string;

    const STOCK_ROTATE_RIGHT: string;

    const STOCK_RUN_PRESENTATION: string;

    const STOCK_VIEW_CONTINUOUS: string;

    const STOCK_VIEW_DUAL: string;

    const STOCK_VISIBLE: string;

    const STOCK_ZOOM: string;

    const STOCK_ZOOM_PAGE: string;

    const STOCK_ZOOM_WIDTH: string;

    /**
     * Creates a new icon factory, adding the base stock icons to it.
     */
    function stock_icons_init(): void;

    /**
     * @param screen 
     */
    function stock_icons_set_screen(screen: Gdk.Screen): void;

    function stock_icons_shutdown(): void;

    /**
     * @gir-type Flags
     */
    export namespace JobPageDataFlags {
        export const $gtype: GObject.GType<JobPageDataFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum JobPageDataFlags {
        NONE,
        LINKS,
        TEXT,
        TEXT_MAPPING,
        TEXT_LAYOUT,
        IMAGES,
        FORMS,
        ANNOTS,
        ALL,
    }


    namespace DocumentModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "page-changed": (arg0: number, arg1: number) => void;
            "notify::continuous": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::dual-odd-left": (pspec: GObject.ParamSpec) => void;
            "notify::dual-page": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::inverted-colors": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::rotation": (pspec: GObject.ParamSpec) => void;
            "notify::rtl": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::sizing-mode": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            continuous: boolean;
            document: XreaderDocument.Document;
            dual_odd_left: boolean;
            dualOddLeft: boolean;
            dual_page: boolean;
            dualPage: boolean;
            fullscreen: boolean;
            inverted_colors: boolean;
            invertedColors: boolean;
            page: number;
            rotation: number;
            rtl: boolean;
            scale: number;
            sizing_mode: SizingMode;
            sizingMode: SizingMode;
        }
    }

    /**
     * @gir-type Class
     */
    class DocumentModel extends GObject.Object {
        static $gtype: GObject.GType<DocumentModel>;

        // Properties
        /**
         * @default true
         */
        get continuous(): boolean;
        set continuous(val: boolean);

        get document(): XreaderDocument.Document;
        set document(val: XreaderDocument.Document);

        /**
         * @default false
         */
        get dual_odd_left(): boolean;
        set dual_odd_left(val: boolean);

        /**
         * @default false
         */
        get dualOddLeft(): boolean;
        set dualOddLeft(val: boolean);

        /**
         * @default false
         */
        get dual_page(): boolean;
        set dual_page(val: boolean);

        /**
         * @default false
         */
        get dualPage(): boolean;
        set dualPage(val: boolean);

        /**
         * @default false
         */
        get fullscreen(): boolean;
        set fullscreen(val: boolean);

        /**
         * @default false
         */
        get inverted_colors(): boolean;
        set inverted_colors(val: boolean);

        /**
         * @default false
         */
        get invertedColors(): boolean;
        set invertedColors(val: boolean);

        /**
         * @default -1
         */
        get page(): number;
        set page(val: number);

        /**
         * @default 0
         */
        get rotation(): number;
        set rotation(val: number);

        /**
         * @default false
         */
        get rtl(): boolean;
        set rtl(val: boolean);

        /**
         * @default 1
         */
        get scale(): number;
        set scale(val: number);

        /**
         * @default XreaderView.SizingMode.FIT_WIDTH
         */
        get sizing_mode(): SizingMode;
        set sizing_mode(val: SizingMode);

        /**
         * @default XreaderView.SizingMode.FIT_WIDTH
         */
        get sizingMode(): SizingMode;
        set sizingMode(val: SizingMode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DocumentModel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DocumentModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DocumentModel;

        static new_with_document(document: XreaderDocument.Document): DocumentModel;

        // Signals
        /** @signal */
        connect<K extends keyof DocumentModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DocumentModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DocumentModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DocumentModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DocumentModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_continuous(): boolean;

        /**
         * Returns the {@link XreaderDocument.Document} referenced by the model.
         * @returns a {@link XreaderDocument.Document}
         */
        get_document(): XreaderDocument.Document;

        get_dual_page(): boolean;

        get_dual_page_odd_pages_left(): boolean;

        get_fullscreen(): boolean;

        get_inverted_colors(): boolean;

        get_max_scale(): number;

        get_min_scale(): number;

        get_page(): number;

        get_rotation(): number;

        get_rtl(): boolean;

        get_scale(): number;

        get_sizing_mode(): SizingMode;

        /**
         * @param continuous 
         */
        set_continuous(continuous: boolean): void;

        /**
         * @param document 
         */
        set_document(document: XreaderDocument.Document): void;

        /**
         * @param dual_page 
         */
        set_dual_page(dual_page: boolean): void;

        /**
         * @param odd_left 
         */
        set_dual_page_odd_pages_left(odd_left: boolean): void;

        /**
         * @param fullscreen 
         */
        set_fullscreen(fullscreen: boolean): void;

        /**
         * @param inverted_colors 
         */
        set_inverted_colors(inverted_colors: boolean): void;

        /**
         * @param max_scale 
         */
        set_max_scale(max_scale: number): void;

        /**
         * @param min_scale 
         */
        set_min_scale(min_scale: number): void;

        /**
         * @param page 
         */
        set_page(page: number): void;

        /**
         * @param page_label 
         */
        set_page_by_label(page_label: string): void;

        /**
         * @param rotation 
         */
        set_rotation(rotation: number): void;

        /**
         * @param rtl 
         */
        set_rtl(rtl: boolean): void;

        /**
         * @param scale 
         */
        set_scale(scale: number): void;

        /**
         * @param mode 
         */
        set_sizing_mode(mode: SizingMode): void;
    }


    namespace Job {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            cancelled: () => void;
            /**
             * @signal
             * @run-first
             */
            finished: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class Job extends GObject.Object {
        static $gtype: GObject.GType<Job>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Job.SignalSignatures;

        // Fields
        document: XreaderDocument.Document;

        run_mode: JobRunMode;

        cancelled: number;

        finished: number;

        error: GLib.Error;

        cancellable: Gio.Cancellable;

        idle_finished_id: number;

        idle_cancelled_id: number;

        // Constructors
        constructor(properties?: Partial<Job.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Job.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Job.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Job.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Job.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Job.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Job.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_cancelled(): void;

        /**
         * @virtual
         */
        vfunc_finished(): void;

        /**
         * @virtual
         */
        vfunc_run(): boolean;

        // Methods
        cancel(): void;

        /**
         * @param error 
         */
        failed_from_error(error: GLib.Error): void;

        get_run_mode(): JobRunMode;

        is_failed(): boolean;

        is_finished(): boolean;

        run(): boolean;

        /**
         * @param priority 
         */
        scheduler_push_job(priority: JobPriority): void;

        /**
         * @param priority 
         */
        scheduler_update_job(priority: JobPriority): void;

        /**
         * @param run_mode 
         */
        set_run_mode(run_mode: JobRunMode): void;

        succeeded(): void;
    }


    namespace JobAnnots {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobAnnots extends Job {
        static $gtype: GObject.GType<JobAnnots>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobAnnots.SignalSignatures;

        // Fields
        annots: null[];

        // Constructors
        constructor(properties?: Partial<JobAnnots.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobAnnots;

        // Signals
        /** @signal */
        connect<K extends keyof JobAnnots.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobAnnots.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobAnnots.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobAnnots.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobAnnots.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobAnnots.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace JobAttachments {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobAttachments extends Job {
        static $gtype: GObject.GType<JobAttachments>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobAttachments.SignalSignatures;

        // Fields
        attachments: null[];

        // Constructors
        constructor(properties?: Partial<JobAttachments.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobAttachments;

        // Signals
        /** @signal */
        connect<K extends keyof JobAttachments.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobAttachments.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobAttachments.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobAttachments.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobAttachments.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobAttachments.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace JobExport {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobExport extends Job {
        static $gtype: GObject.GType<JobExport>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobExport.SignalSignatures;

        // Fields
        page: number;

        rc: XreaderDocument.RenderContext;

        // Constructors
        constructor(properties?: Partial<JobExport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobExport;

        // Signals
        /** @signal */
        connect<K extends keyof JobExport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobExport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobExport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobExport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobExport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobExport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param page 
         */
        set_page(page: number): void;
    }


    namespace JobFind {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            updated: (arg0: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobFind extends Job {
        static $gtype: GObject.GType<JobFind>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobFind.SignalSignatures;

        // Fields
        start_page: number;

        current_page: number;

        n_pages: number;

        total_count: number;

        pages: null[];

        results: number;

        text: string;

        case_sensitive: boolean;

        // Constructors
        constructor(properties?: Partial<JobFind.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document, start_page: number, n_pages: number, text: string, case_sensitive: boolean): JobFind;

        // Signals
        /** @signal */
        connect<K extends keyof JobFind.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobFind.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobFind.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobFind.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobFind.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobFind.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param page 
         * @virtual
         */
        vfunc_updated(page: number): void;

        // Methods
        /**
         * @param pages 
         */
        get_n_results(pages: number): number;

        get_progress(): number;

        get_text(): string;

        has_results(): boolean;
    }


    namespace JobFonts {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            updated: (arg0: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobFonts extends Job {
        static $gtype: GObject.GType<JobFonts>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobFonts.SignalSignatures;

        // Fields
        scan_completed: boolean;

        // Constructors
        constructor(properties?: Partial<JobFonts.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobFonts;

        // Signals
        /** @signal */
        connect<K extends keyof JobFonts.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobFonts.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobFonts.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobFonts.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobFonts.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobFonts.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param progress 
         * @virtual
         */
        vfunc_updated(progress: number): void;
    }


    namespace JobLayers {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobLayers extends Job {
        static $gtype: GObject.GType<JobLayers>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobLayers.SignalSignatures;

        // Fields
        model: Gtk.TreeModel;

        // Constructors
        constructor(properties?: Partial<JobLayers.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobLayers;

        // Signals
        /** @signal */
        connect<K extends keyof JobLayers.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobLayers.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobLayers.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobLayers.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobLayers.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobLayers.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace JobLinks {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobLinks extends Job {
        static $gtype: GObject.GType<JobLinks>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobLinks.SignalSignatures;

        // Fields
        model: Gtk.TreeModel;

        // Constructors
        constructor(properties?: Partial<JobLinks.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobLinks;

        // Signals
        /** @signal */
        connect<K extends keyof JobLinks.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobLinks.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobLinks.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobLinks.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobLinks.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobLinks.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace JobLoad {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobLoad extends Job {
        static $gtype: GObject.GType<JobLoad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobLoad.SignalSignatures;

        // Fields
        uri: string;

        password: string;

        // Constructors
        constructor(properties?: Partial<JobLoad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](uri: string): JobLoad;

        // Signals
        /** @signal */
        connect<K extends keyof JobLoad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobLoad.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobLoad.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobLoad.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobLoad.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobLoad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param password 
         */
        set_password(password: string): void;

        /**
         * @param uri 
         */
        set_uri(uri: string): void;
    }


    namespace JobPageData {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobPageData extends Job {
        static $gtype: GObject.GType<JobPageData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobPageData.SignalSignatures;

        // Fields
        page: number;

        flags: JobPageDataFlags;

        text: string;

        text_layout: XreaderDocument.Rectangle;

        text_layout_length: number;

        // Constructors
        constructor(properties?: Partial<JobPageData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document, page: number, flags: JobPageDataFlags): JobPageData;

        // Signals
        /** @signal */
        connect<K extends keyof JobPageData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobPageData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobPageData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobPageData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobPageData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobPageData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace JobPrint {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobPrint extends Job {
        static $gtype: GObject.GType<JobPrint>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobPrint.SignalSignatures;

        // Fields
        page: number;

        // Constructors
        constructor(properties?: Partial<JobPrint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): JobPrint;

        // Signals
        /** @signal */
        connect<K extends keyof JobPrint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobPrint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobPrint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobPrint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobPrint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobPrint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param cr 
         */
        set_cairo(cr: cairo.Context): void;

        /**
         * @param page 
         */
        set_page(page: number): void;
    }


    namespace JobRender {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobRender extends Job {
        static $gtype: GObject.GType<JobRender>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobRender.SignalSignatures;

        // Fields
        page: number;

        rotation: number;

        scale: number;

        page_ready: boolean;

        target_width: number;

        target_height: number;

        include_selection: boolean;

        selection_points: XreaderDocument.Rectangle;

        selection_style: XreaderDocument.SelectionStyle;

        base: Gdk.Color;

        text: Gdk.Color;

        // Constructors
        constructor(properties?: Partial<JobRender.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document, page: number, rotation: number, scale: number, width: number, height: number): JobRender;

        // Signals
        /** @signal */
        connect<K extends keyof JobRender.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobRender.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobRender.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobRender.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobRender.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobRender.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param selection_points 
         * @param selection_style 
         * @param text 
         * @param base 
         */
        set_selection_info(selection_points: XreaderDocument.Rectangle, selection_style: XreaderDocument.SelectionStyle, text: Gdk.Color, base: Gdk.Color): void;
    }


    namespace JobSave {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobSave extends Job {
        static $gtype: GObject.GType<JobSave>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobSave.SignalSignatures;

        // Fields
        uri: string;

        document_uri: string;

        // Constructors
        constructor(properties?: Partial<JobSave.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document, uri: string, document_uri: string): JobSave;

        // Signals
        /** @signal */
        connect<K extends keyof JobSave.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobSave.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobSave.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobSave.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobSave.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobSave.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace JobThumbnail {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class JobThumbnail extends Job {
        static $gtype: GObject.GType<JobThumbnail>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobThumbnail.SignalSignatures;

        // Fields
        page: number;

        rotation: number;

        scale: number;

        thumbnail: GdkPixbuf.Pixbuf;

        // Constructors
        constructor(properties?: Partial<JobThumbnail.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document, page: number, rotation: number, scale: number): JobThumbnail;

        // Signals
        /** @signal */
        connect<K extends keyof JobThumbnail.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobThumbnail.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobThumbnail.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobThumbnail.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobThumbnail.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobThumbnail.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace PrintOperation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "begin-print": () => void;
            /**
             * @signal
             * @run-last
             */
            done: (arg0: Gtk.PrintOperationResult) => void;
            /**
             * @signal
             * @run-last
             */
            "status-changed": () => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document: XreaderDocument.Document;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class PrintOperation extends GObject.Object {
        static $gtype: GObject.GType<PrintOperation>;

        // Properties
        /**
         * @construct-only
         */
        set document(val: XreaderDocument.Document);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PrintOperation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PrintOperation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document): PrintOperation;

        // Signals
        /** @signal */
        connect<K extends keyof PrintOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintOperation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PrintOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintOperation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PrintOperation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PrintOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param document 
         */
        static exists_for_document(document: XreaderDocument.Document): boolean;

        // Methods
        cancel(): void;

        get_embed_page_setup(): boolean;

        get_error(): void;

        get_job_name(): string;

        get_progress(): number;

        get_status(): string;

        /**
         * @param parent 
         */
        run(parent: Gtk.Window): void;

        /**
         * @param current_page 
         */
        set_current_page(current_page: number): void;

        /**
         * @param page_setup 
         */
        set_default_page_setup(page_setup: Gtk.PageSetup): void;

        /**
         * @param embed 
         */
        set_embed_page_setup(embed: boolean): void;

        /**
         * @param job_name 
         */
        set_job_name(job_name: string): void;

        /**
         * @param print_settings 
         */
        set_print_settings(print_settings: Gtk.PrintSettings): void;
    }


    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-first
             */
            activate: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "annot-added": (arg0: XreaderDocument.Annotation) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "annot-removed": (arg0: XreaderDocument.Annotation) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "binding-activated": (arg0: Gtk.ScrollType, arg1: boolean) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "external-link": (arg0: GObject.Object) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "handle-link": (arg0: GObject.Object) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "layers-changed": () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            popup: (arg0: null) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "selection-changed": () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "sync-source": (arg0: null) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class View extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): View;

        // Signals
        /** @signal */
        connect<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof View.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        autoscroll_start(): void;

        autoscroll_stop(): void;

        /**
         * @param annot_type 
         */
        begin_add_annotation(annot_type: XreaderDocument.AnnotationType): void;

        can_zoom_in(): boolean;

        can_zoom_out(): boolean;

        cancel_add_annotation(): void;

        copy(): void;

        /**
         * @param action 
         */
        copy_link_address(action: XreaderDocument.LinkAction): void;

        /**
         * Disconnect all signal handlers from the model, to ensure error free operation of the webview,
         * we have an equivalent function for the webview.
         */
        disconnect_handlers(): void;

        find_cancel(): void;

        find_next(): void;

        find_previous(): void;

        find_search_changed(): void;

        /**
         * @param value 
         */
        find_set_highlight_search(value: boolean): void;

        /**
         * @param annot_mapping 
         */
        focus_annotation(annot_mapping: XreaderDocument.Mapping): void;

        get_has_selection(): boolean;

        /**
         * @param page 
         * @param page_area 
         * @param border 
         */
        get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean;

        /**
         * @param link 
         */
        handle_link(link: XreaderDocument.Link): void;

        hide_cursor(): void;

        /**
         * @param link 
         */
        highlight_forward_search(link: XreaderDocument.SourceLink): void;

        next_page(): boolean;

        previous_page(): boolean;

        reload(): void;

        /**
         * @param annot 
         */
        remove_annotation(annot: XreaderDocument.Annotation): void;

        /**
         * @param scroll 
         * @param horizontal 
         */
        scroll(scroll: Gtk.ScrollType, horizontal: boolean): void;

        select_all(): void;

        /**
         * @param loading 
         */
        set_loading(loading: boolean): void;

        /**
         * @param model 
         */
        set_model(model: DocumentModel): void;

        /**
         * Sets the maximum size in bytes that will be used to cache
         * rendered pages. Use 0 to disable caching rendered pages.
         * 
         * Note that this limit doesn't affect the current visible page range,
         * which will always be rendered. In order to limit the total memory used
         * you have to use `ev_document_model_set_max_scale()` too.
         * @param cache_size 
         */
        set_page_cache_size(cache_size: (bigint | number)): void;

        show_cursor(): void;

        zoom_in(): void;

        zoom_out(): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    namespace ViewPresentation {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "change-page": (arg0: Gtk.ScrollType) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "external-link": (arg0: GObject.Object) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            finished: () => void;
            "notify::current-page": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::inverted-colors": (pspec: GObject.ParamSpec) => void;
            "notify::rotation": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            current_page: number;
            currentPage: number;
            document: XreaderDocument.Document;
            inverted_colors: boolean;
            invertedColors: boolean;
            rotation: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ViewPresentation extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ViewPresentation>;

        // Properties
        /**
         * @construct-only
         * @default 0
         */
        set current_page(val: number);

        /**
         * @construct-only
         * @default 0
         */
        set currentPage(val: number);

        /**
         * @construct-only
         */
        set document(val: XreaderDocument.Document);

        /**
         * @construct-only
         * @default false
         */
        set inverted_colors(val: boolean);

        /**
         * @construct-only
         * @default false
         */
        set invertedColors(val: boolean);

        /**
         * @default 0
         */
        get rotation(): number;
        set rotation(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ViewPresentation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ViewPresentation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: XreaderDocument.Document, current_page: number, rotation: number, inverted_colors: boolean): ViewPresentation;

        // Signals
        /** @signal */
        connect<K extends keyof ViewPresentation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewPresentation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ViewPresentation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ViewPresentation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ViewPresentation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ViewPresentation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_current_page(): number;

        get_rotation(): number;

        next_page(): void;

        previous_page(): void;

        /**
         * @param rotation 
         */
        set_rotation(rotation: number): void;

        /**
         * @param rtl 
         */
        set_rtl(rtl: boolean): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    /**
     * @gir-type Alias
     */
    type DocumentModelClass = typeof DocumentModel;

    /**
     * @gir-type Alias
     */
    type JobAnnotsClass = typeof JobAnnots;

    /**
     * @gir-type Alias
     */
    type JobAttachmentsClass = typeof JobAttachments;

    /**
     * @gir-type Alias
     */
    type JobClass = typeof Job;

    /**
     * @gir-type Alias
     */
    type JobExportClass = typeof JobExport;

    /**
     * @gir-type Alias
     */
    type JobFindClass = typeof JobFind;

    /**
     * @gir-type Alias
     */
    type JobFontsClass = typeof JobFonts;

    /**
     * @gir-type Alias
     */
    type JobLayersClass = typeof JobLayers;

    /**
     * @gir-type Alias
     */
    type JobLinksClass = typeof JobLinks;

    /**
     * @gir-type Alias
     */
    type JobLoadClass = typeof JobLoad;

    /**
     * @gir-type Alias
     */
    type JobPageDataClass = typeof JobPageData;

    /**
     * @gir-type Alias
     */
    type JobPrintClass = typeof JobPrint;

    /**
     * @gir-type Alias
     */
    type JobRenderClass = typeof JobRender;

    /**
     * @gir-type Alias
     */
    type JobSaveClass = typeof JobSave;

    /**
     * @gir-type Alias
     */
    type JobThumbnailClass = typeof JobThumbnail;

    /**
     * @gir-type Struct
     */
    abstract class JobWebThumbnail {
        static $gtype: GObject.GType<JobWebThumbnail>;
    }


    /**
     * @gir-type Struct
     */
    abstract class JobWebThumbnailClass {
        static $gtype: GObject.GType<JobWebThumbnailClass>;
    }


    /**
     * @gir-type Alias
     */
    type PrintOperationClass = typeof PrintOperation;

    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;

    /**
     * @gir-type Alias
     */
    type ViewPresentationClass = typeof ViewPresentation;

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default XreaderView;

// END
