
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
import type PapersDocument from '@girs/papersdocument-4.0';
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace PapersView {

    /**
     * PapersView-4.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AnnotationTool {
        export const $gtype: GObject.GType<AnnotationTool>;
    }

    /**
     * @gir-type Enum
     */
    enum AnnotationTool {
        PENCIL,
        HIGHLIGHT,
        ERASER,
        TEXT,
        MAX,
    }


    /**
     * @gir-type Struct
     */
    class AttachmentContextError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NOT_IMPLEMENTED: number;

        static EMPTY_INPUT: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


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
    export namespace PageLayout {
        export const $gtype: GObject.GType<PageLayout>;
    }

    /**
     * @gir-type Enum
     */
    enum PageLayout {
        SINGLE,
        DUAL,
        AUTOMATIC,
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
        FIT_PAGE,
        FIT_WIDTH,
        FREE,
        AUTOMATIC,
    }


    function attachment_context_error_quark(): GLib.Quark;

    /**
     * Returns `str` as a new string removing any character which
     * is not allowed in a css class name.
     * 
     * Css class names should only contain following characters:
     *   - a–z A–Z 0–9 - _
     *   - any Unicode character ≥ U+00A0
     * @param str input string
     * @returns newly allocated string
     */
    function css_utils_filter_class_chars(str: string): string;

    /**
     * @gir-type Callback
     */
    interface InkTransformation {
        (ink_annotation: PapersDocument.Annotation): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace AnnotationEditingState {
        export const $gtype: GObject.GType<AnnotationEditingState>;
    }

    /**
     * @gir-type Flags
     */
    enum AnnotationEditingState {
        NONE,
        INK,
        TEXT,
        STAMP,
        INSERT_TEXT,
    }


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
        TEXT_ATTRS,
        TEXT_LOG_ATTRS,
        IMAGES,
        FORMS,
        MEDIA,
        ALL,
    }


    namespace AnnotationModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::active-tool-str": (pspec: GObject.ParamSpec) => void;
            "notify::eraser-objects": (pspec: GObject.ParamSpec) => void;
            "notify::eraser-radius": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-color": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-radius": (pspec: GObject.ParamSpec) => void;
            "notify::pen-color": (pspec: GObject.ParamSpec) => void;
            "notify::pen-radius": (pspec: GObject.ParamSpec) => void;
            "notify::text-color": (pspec: GObject.ParamSpec) => void;
            "notify::text-font": (pspec: GObject.ParamSpec) => void;
            "notify::text-font-size": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_tool_str: string;
            activeToolStr: string;
            eraser_objects: boolean;
            eraserObjects: boolean;
            eraser_radius: number;
            eraserRadius: number;
            highlight_color: Gdk.RGBA;
            highlightColor: Gdk.RGBA;
            highlight_radius: number;
            highlightRadius: number;
            pen_color: Gdk.RGBA;
            penColor: Gdk.RGBA;
            pen_radius: number;
            penRadius: number;
            text_color: Gdk.RGBA;
            textColor: Gdk.RGBA;
            text_font: Pango.FontDescription;
            textFont: Pango.FontDescription;
            text_font_size: number;
            textFontSize: number;
            tool: number;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationModel extends GObject.Object {
        static $gtype: GObject.GType<AnnotationModel>;

        // Properties
        /**
         * @default pencil
         */
        get active_tool_str(): string;
        set active_tool_str(val: string);

        /**
         * @default pencil
         */
        get activeToolStr(): string;
        set activeToolStr(val: string);

        /**
         * @default true
         */
        get eraser_objects(): boolean;
        set eraser_objects(val: boolean);

        /**
         * @default true
         */
        get eraserObjects(): boolean;
        set eraserObjects(val: boolean);

        /**
         * @default 5
         */
        get eraser_radius(): number;
        set eraser_radius(val: number);

        /**
         * @default 5
         */
        get eraserRadius(): number;
        set eraserRadius(val: number);

        get highlight_color(): Gdk.RGBA;
        set highlight_color(val: Gdk.RGBA);

        get highlightColor(): Gdk.RGBA;
        set highlightColor(val: Gdk.RGBA);

        /**
         * @default 5
         */
        get highlight_radius(): number;
        set highlight_radius(val: number);

        /**
         * @default 5
         */
        get highlightRadius(): number;
        set highlightRadius(val: number);

        get pen_color(): Gdk.RGBA;
        set pen_color(val: Gdk.RGBA);

        get penColor(): Gdk.RGBA;
        set penColor(val: Gdk.RGBA);

        /**
         * @default 1
         */
        get pen_radius(): number;
        set pen_radius(val: number);

        /**
         * @default 1
         */
        get penRadius(): number;
        set penRadius(val: number);

        get text_color(): Gdk.RGBA;
        set text_color(val: Gdk.RGBA);

        get textColor(): Gdk.RGBA;
        set textColor(val: Gdk.RGBA);

        get text_font(): Pango.FontDescription;
        set text_font(val: Pango.FontDescription);

        get textFont(): Pango.FontDescription;
        set textFont(val: Pango.FontDescription);

        /**
         * @default 8
         */
        get text_font_size(): number;
        set text_font_size(val: number);

        /**
         * @default 8
         */
        get textFontSize(): number;
        set textFontSize(val: number);

        /**
         * @default 0
         */
        get tool(): number;
        set tool(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationModel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AnnotationModel;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_eraser_objects(): boolean;

        get_eraser_radius(): number;

        get_font_desc(): Pango.FontDescription;

        get_highlight_color(): Gdk.RGBA;

        get_highlight_radius(): number;

        get_pen_color(): Gdk.RGBA;

        get_pen_radius(): number;

        get_text_color(): Gdk.RGBA;

        /**
         * Gets the current tool of the annotation model.
         * @returns the current {@link PapersView.AnnotationTool}
         */
        get_tool(): AnnotationTool;

        /**
         * @param radius 
         */
        set_eraser_radius(radius: number): void;

        /**
         * @param font_desc 
         */
        set_font_desc(font_desc: Pango.FontDescription): void;

        /**
         * @param font_size 
         */
        set_font_size(font_size: number): void;

        /**
         * @param pen_color 
         */
        set_highlight_color(pen_color: Gdk.RGBA): void;

        /**
         * @param radius 
         */
        set_highlight_radius(radius: number): void;

        /**
         * @param pen_color 
         */
        set_pen_color(pen_color: Gdk.RGBA): void;

        /**
         * @param radius 
         */
        set_pen_radius(radius: number): void;

        /**
         * @param color 
         */
        set_text_color(color: Gdk.RGBA): void;

        /**
         * Sets the current tool of the annotation model.
         * @param tool the {@link PapersView.AnnotationTool} to set
         */
        set_tool(tool: AnnotationTool): void;
    }


    namespace AnnotationsContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "annot-added": (arg0: PapersDocument.Annotation) => void;
            /**
             * @signal
             * @run-last
             */
            "annot-removed": (arg0: PapersDocument.Annotation) => void;
            /**
             * @signal
             * @run-last
             */
            "annots-loaded": () => void;
            "notify::document-model": (pspec: GObject.ParamSpec) => void;
            "notify::undo-context": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, UndoHandler.ConstructorProps {
            document_model: DocumentModel;
            documentModel: DocumentModel;
            undo_context: UndoContext;
            undoContext: UndoContext;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotationsContext extends GObject.Object implements UndoHandler {
        static $gtype: GObject.GType<AnnotationsContext>;

        // Properties
        /**
         * @construct-only
         */
        set document_model(val: DocumentModel);

        /**
         * @construct-only
         */
        set documentModel(val: DocumentModel);

        /**
         * @construct-only
         */
        set undo_context(val: UndoContext);

        /**
         * @construct-only
         */
        set undoContext(val: UndoContext);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationsContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationsContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: DocumentModel, undo_context: UndoContext): AnnotationsContext;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationsContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationsContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationsContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationsContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationsContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationsContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * This is a hack to be able to call rust code from C.
         * @param transformation a {@link GObject.Callback} to call everytime a new ink annotation is created
         */
        static register_ink_transformation(transformation: InkTransformation): void;

        // Methods
        /**
         * Add an annotation based on the provided information.
         * @param page_index the index of the page where the annotation will be added
         * @param type the type of annotation to add
         * @param start point where to start creating an annotation (ignored for ink annotations)
         * @param end point where to end creating the annotation. It is ignored for TEXT annotations and ink annotations.
         * @param color the color to give to the annotation
         * @param user_data a pointer with auxiliary data that is annotation-dependent. For text markup, this points to a {@link PapersDocument.AnnotationTextMarkupType}. For stamps, this points to a {@link cairo.Surface}. For free text, this points to a {@link Pango.FontDescription}. For ink, this points to a {@link PapersView.AnnotationInkAddData}.
         * @returns the newly created annotation
         */
        add_annotation_sync(page_index: number, type: PapersDocument.AnnotationType, start: PapersDocument.Point, end: PapersDocument.Point, color: Gdk.RGBA, user_data: null): PapersDocument.Annotation;

        /**
         * Finds the first index of an annotation for the specified page with a dichotomic
         * search.
         * @param page The page number to search for.
         * @returns The index of the first annotation for the specified page in the model, or the number of items if there is none.
         */
        first_index_for_page(page: number): number;

        /**
         * @param doc_point the document point where to search for annotations
         * @returns the {@link PapersDocument.Annotation}, if to be found
         */
        get_annot_at_doc_point(doc_point: PapersDocument.DocumentPoint): PapersDocument.Annotation | null;

        /**
         * @returns the returned {@link Gio.ListModel}. The model is owned but the {@link PapersView.AnnotationsContext} and shall not be modified outside of it.
         */
        get_annots_model(): Gio.ListModel;

        /**
         * @param annot 
         */
        remove_annotation(annot: PapersDocument.Annotation): void;

        /**
         * @param color 
         */
        set_color(color: Gdk.RGBA): void;

        /**
         * @param data 
         */
        free_action(data: null): void;

        /**
         * @param data 
         */
        undo(data: null): void;

        /**
         * @param data 
         * @virtual
         */
        vfunc_undo(data: null): void;
    }


    namespace AttachmentContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::document-model": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document_model: DocumentModel;
            documentModel: DocumentModel;
        }
    }

    /**
     * @gir-type Class
     */
    class AttachmentContext extends GObject.Object {
        static $gtype: GObject.GType<AttachmentContext>;

        // Properties
        /**
         * @construct-only
         */
        set document_model(val: DocumentModel);

        /**
         * @construct-only
         */
        set documentModel(val: DocumentModel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AttachmentContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AttachmentContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: DocumentModel): AttachmentContext;

        // Signals
        /** @signal */
        connect<K extends keyof AttachmentContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AttachmentContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AttachmentContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AttachmentContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AttachmentContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AttachmentContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the returned {@link Gio.ListModel} of {@link PapersDocument.Attachment} s
         */
        get_model(): Gio.ListModel;

        /**
         * This function initiates a file save operation.
         * 
         * The `callback` will be called when the dialog is dismissed.
         * @param attachments The attachments to save
         * @param parent the parent {@link Gtk.Window}
         * @param cancellable a {@link Gio.Cancellable} to cancel the operation
         */
        save_attachments_async(attachments: Gio.ListModel, parent: Gtk.Window | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * This function initiates a file save operation.
         * 
         * The `callback` will be called when the dialog is dismissed.
         * @param attachments The attachments to save
         * @param parent the parent {@link Gtk.Window}
         * @param cancellable a {@link Gio.Cancellable} to cancel the operation
         * @param callback a callback to call when the   operation is complete
         */
        save_attachments_async(attachments: Gio.ListModel, parent: Gtk.Window | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * This function initiates a file save operation.
         * 
         * The `callback` will be called when the dialog is dismissed.
         * @param attachments The attachments to save
         * @param parent the parent {@link Gtk.Window}
         * @param cancellable a {@link Gio.Cancellable} to cancel the operation
         * @param callback a callback to call when the   operation is complete
         */
        save_attachments_async(attachments: Gio.ListModel, parent: Gtk.Window | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes the {@link Pps.AttachmentContext.save_attachments_async} call
         * @param result a {@link Gio.AsyncResult}
         * @returns whether a files were stored
         */
        save_attachments_finish(result: Gio.AsyncResult): boolean;
    }


    namespace DocumentModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "page-changed": (arg0: number, arg1: number) => void;
            "notify::annotation-editing-state": (pspec: GObject.ParamSpec) => void;
            "notify::annotation-model": (pspec: GObject.ParamSpec) => void;
            "notify::continuous": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::dual-odd-left": (pspec: GObject.ParamSpec) => void;
            "notify::inverted-colors": (pspec: GObject.ParamSpec) => void;
            "notify::max-scale": (pspec: GObject.ParamSpec) => void;
            "notify::min-scale": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::page-layout": (pspec: GObject.ParamSpec) => void;
            "notify::rotation": (pspec: GObject.ParamSpec) => void;
            "notify::rtl": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::sizing-mode": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            annotation_editing_state: AnnotationEditingState;
            annotationEditingState: AnnotationEditingState;
            annotation_model: AnnotationModel;
            annotationModel: AnnotationModel;
            continuous: boolean;
            document: PapersDocument.Document;
            dual_odd_left: boolean;
            dualOddLeft: boolean;
            inverted_colors: boolean;
            invertedColors: boolean;
            max_scale: number;
            maxScale: number;
            min_scale: number;
            minScale: number;
            page: number;
            page_layout: PageLayout;
            pageLayout: PageLayout;
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
         * @default PapersView.AnnotationEditingState.NONE
         */
        get annotation_editing_state(): AnnotationEditingState;
        set annotation_editing_state(val: AnnotationEditingState);

        /**
         * @default PapersView.AnnotationEditingState.NONE
         */
        get annotationEditingState(): AnnotationEditingState;
        set annotationEditingState(val: AnnotationEditingState);

        /**
         * @construct-only
         */
        get annotation_model(): AnnotationModel;

        /**
         * @construct-only
         */
        get annotationModel(): AnnotationModel;

        /**
         * @default true
         */
        get continuous(): boolean;
        set continuous(val: boolean);

        get document(): PapersDocument.Document;
        set document(val: PapersDocument.Document);

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
        get inverted_colors(): boolean;
        set inverted_colors(val: boolean);

        /**
         * @default false
         */
        get invertedColors(): boolean;
        set invertedColors(val: boolean);

        /**
         * @default 5
         */
        get max_scale(): number;
        set max_scale(val: number);

        /**
         * @default 5
         */
        get maxScale(): number;
        set maxScale(val: number);

        /**
         * @default 0.25
         */
        get min_scale(): number;
        set min_scale(val: number);

        /**
         * @default 0.25
         */
        get minScale(): number;
        set minScale(val: number);

        /**
         * @default -1
         */
        get page(): number;
        set page(val: number);

        /**
         * @default PapersView.PageLayout.SINGLE
         */
        get page_layout(): PageLayout;
        set page_layout(val: PageLayout);

        /**
         * @default PapersView.PageLayout.SINGLE
         */
        get pageLayout(): PageLayout;
        set pageLayout(val: PageLayout);

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
         * @default PapersView.SizingMode.FIT_WIDTH
         */
        get sizing_mode(): SizingMode;
        set sizing_mode(val: SizingMode);

        /**
         * @default PapersView.SizingMode.FIT_WIDTH
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

        static new_with_document(document: PapersDocument.Document): DocumentModel;

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
        /**
         * Returns the current editing state.
         */
        get_annotation_editing_state(): AnnotationEditingState;

        /**
         * Gets the annotation model from the document model.
         * @returns a reference to the {@link PapersView.AnnotationModel}
         */
        get_annotation_model(): AnnotationModel;

        get_continuous(): boolean;

        /**
         * Returns the {@link PapersDocument.Document} referenced by the model.
         * @returns a {@link PapersDocument.Document}
         */
        get_document(): PapersDocument.Document;

        get_dual_page_odd_pages_left(): boolean;

        get_inverted_colors(): boolean;

        get_max_scale(): number;

        get_min_scale(): number;

        get_page(): number;

        /**
         * @returns the document model's page layout
         */
        get_page_layout(): PageLayout;

        get_rotation(): number;

        get_rtl(): boolean;

        get_scale(): number;

        get_sizing_mode(): SizingMode;

        /**
         * Sets the current editing state. In a {@link View}, This implies that editing
         * widgets for annotations may be shown and annotations not rendered by the
         * backend.
         * @param state The editing state of annotation
         */
        set_annotation_editing_state(state: AnnotationEditingState): void;

        /**
         * @param continuous 
         */
        set_continuous(continuous: boolean): void;

        /**
         * Set the document.
         * @param document a {@link PapersView.DocumentModel}
         */
        set_document(document: PapersDocument.Document | null): void;

        /**
         * @param odd_left 
         */
        set_dual_page_odd_pages_left(odd_left: boolean): void;

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
         * Sets the document model's page layout to `layout`.
         * @param layout a {@link PapersView.PageLayout}
         */
        set_page_layout(layout: PageLayout): void;

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


    namespace History {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "activate-link": (arg0: GObject.Object) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            changed: () => void;
            "notify::document-model": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document_model: DocumentModel;
            documentModel: DocumentModel;
        }
    }

    /**
     * @gir-type Class
     */
    class History extends GObject.Object {
        static $gtype: GObject.GType<History>;

        // Properties
        /**
         * @construct-only
         */
        set document_model(val: DocumentModel);

        /**
         * @construct-only
         */
        set documentModel(val: DocumentModel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: History.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<History.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: DocumentModel): History;

        // Signals
        /** @signal */
        connect<K extends keyof History.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, History.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof History.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, History.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof History.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<History.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param link 
         * @virtual
         */
        vfunc_activate_link(link: PapersDocument.Link): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        /**
         * @param link 
         */
        add_link(link: PapersDocument.Link): void;

        /**
         * @param page 
         */
        add_page(page: number): void;

        can_go_back(): boolean;

        can_go_forward(): boolean;

        freeze(): void;

        /**
         * @returns the back history
         */
        get_back_list(): PapersDocument.Link[];

        /**
         * @returns the forward history
         */
        get_forward_list(): PapersDocument.Link[];

        go_back(): void;

        go_forward(): void;

        /**
         * @param link 
         */
        go_to_link(link: PapersDocument.Link): boolean;

        is_frozen(): boolean;

        thaw(): void;
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
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document: PapersDocument.Document;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Job extends GObject.Object {
        static $gtype: GObject.GType<Job>;

        // Properties
        /**
         * @construct-only
         */
        set document(val: PapersDocument.Document);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Job.SignalSignatures;

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

        // Static methods
        /**
         * Synchronously waits until all jobs are done.
         * Remember that main loop is not running already probably.
         */
        static scheduler_wait(): void;

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
         * Starts or executes the specified job.
         * @virtual
         */
        vfunc_run(): void;

        // Methods
        /**
         * Cancels the specified job if it has not already been cancelled.
         * 
         * This function updates the job's state to indicate it has been cancelled,
         * cancels any associated cancellable object, and emits a CANCELLED signal.
         * It does nothing if the job is already cancelled or finished.
         * 
         * This function should not be called from a thread.
         */
        cancel(): void;

        /**
         * Marks the specified job as failed and sets the error associated with the failure.
         * 
         * This function updates the job's state to indicate it has failed, stores the error,
         * and emits a finished signal. It does nothing if the job is already finished or marked as failed.
         * @param error A {@link GLib.Error} containing details about the failure.
         */
        failed(error: GLib.Error): void;

        /**
         * Retrieves the {@link Gio.Cancellable} object associated with the specified job.
         * @returns The {@link Gio.Cancellable} object of the job, or NULL if the job is invalid or does not have an associated cancellable.
         */
        get_cancellable(): Gio.Cancellable;

        /**
         * Retrieves the {@link PapersDocument.Document} associated with the specified job.
         * @returns The {@link PapersDocument.Document} object associated with the job, or NULL if the job is invalid or does not have an associated document.
         */
        get_document(): PapersDocument.Document;

        /**
         * Checks if the specified job has finished execution.
         * @returns TRUE if the job is finished, FALSE otherwise.
         */
        is_finished(): boolean;

        /**
         * Determines the finish status of the specified job.
         * @returns TRUE if the job succeeded, FALSE otherwise.
         */
        is_succeeded(): boolean;

        /**
         * Resets the state of the specified job to its initial state.
         * 
         * This function clears any error, marks the job as not finished, and sets
         * the job's failure status to FALSE, effectively resetting its progress.
         */
        reset(): void;

        /**
         * Starts or executes the specified job.
         */
        run(): void;

        /**
         * @param priority 
         */
        scheduler_push_job(priority: JobPriority): void;

        /**
         * @param priority 
         */
        scheduler_update_job(priority: JobPriority): void;

        /**
         * Marks the specified job as succeeded.
         * 
         * This function should be called when the job finishes successfully.
         */
        succeeded(): void;
    }


    namespace JobAnnots {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobAnnots.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobAnnots;

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

        // Methods
        get_annots(): PapersDocument.Annotation[] | null;
    }


    namespace JobAttachments {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobAttachments.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobAttachments;

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

        // Methods
        /**
         * @returns a list of {@link PapersDocument.Attachment} objects
         */
        get_attachments(): PapersDocument.Attachment[] | null;
    }


    namespace JobExport {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobExport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobExport;

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
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        n_pages: number;

        pages: null[];

        text: string;

        options: PapersDocument.FindOptions;

        // Constructors
        constructor(properties?: Partial<JobFind.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document, start_page: number, n_pages: number, text: string, options: PapersDocument.FindOptions): JobFind;

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
         * This is similar to `pps_job_find_get_n_results()` but it takes
         * care to treat any multi-line matches as being only one result.
         * @param page number of the page we want to count its match results.
         * @returns total number of match results in `page`
         */
        get_n_main_results(page: number): number;

        /**
         * @returns the job's find options
         */
        get_options(): PapersDocument.FindOptions;

        has_results(): boolean;
    }


    namespace JobFonts {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobFonts.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobFonts;

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
    }


    namespace JobLayers {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobLayers.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobLayers;

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

        // Methods
        /**
         * @returns A {@link Gio.ListModel} contains the result
         */
        get_model(): Gio.ListModel;
    }


    namespace JobLinks {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobLinks.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobLinks;

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

        // Methods
        /**
         * Get a {@link Gio.ListModel} loaded with the links
         * @returns a {@link Gio.ListModel} of {@link PapersDocument.Outlines} objects
         */
        get_model(): Gio.ListModel | null;
    }


    namespace JobLoad {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
    }

    /**
     * A job class to load an {@link PapersDocument.Document}
     * 
     * Supports loading in different forms depending on the options
     * being set.
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

        // Constructors
        constructor(properties?: Partial<JobLoad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): JobLoad;

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
         * @returns The loaded document, if available
         */
        get_loaded_document(): PapersDocument.Document | null;

        get_password(): string;

        get_password_save(): Gio.PasswordSave;

        /**
         * Sets `fd` as the file descriptor in `job`. If duplicating `fd` fails,
         * returns `false` with `error` filled in.
         * 
         * It is an error to call this function if uri is set for the job
         * @param fd a file descriptor
         * @param mime_type the mime type of the file descriptor
         * @returns `true` if the file descriptor could be set
         */
        set_fd(fd: number, mime_type: string): boolean;

        /**
         * @param password the password
         */
        set_password(password: string | null): void;

        /**
         * @param save 
         */
        set_password_save(save: Gio.PasswordSave): void;

        /**
         * It is an error to call this function if the file descriptor
         * is set for the job.
         * @param uri an uri representing a file
         */
        set_uri(uri: string): void;

        /**
         * Sets `fd` as the file descriptor in `job`.
         * Note that `job` takes ownership of `fd`; you must not do anything
         * with it afterwards.
         * 
         * It is an error to call this function if uri is set for the job
         * @param fd a file descriptor
         * @param mime_type the mime type of the file descriptor
         */
        take_fd(fd: number, mime_type: string): void;
    }


    namespace JobPageData {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        text_layout: PapersDocument.Rectangle;

        text_layout_length: number;

        text_log_attrs: Pango.LogAttr;

        text_log_attrs_length: number;

        // Constructors
        constructor(properties?: Partial<JobPageData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document, page: number, flags: JobPageDataFlags): JobPageData;

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
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobPrint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobPrint;

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


    namespace JobRenderTexture {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class JobRenderTexture extends Job {
        static $gtype: GObject.GType<JobRenderTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobRenderTexture.SignalSignatures;

        // Fields
        page: number;

        rotation: number;

        scale: number;

        page_ready: boolean;

        target_width: number;

        target_height: number;

        texture: Gdk.Texture;

        include_selection: boolean;

        selection: Gdk.Texture;

        selection_points: PapersDocument.Rectangle;

        selection_style: PapersDocument.SelectionStyle;

        base: Gdk.RGBA;

        text: Gdk.RGBA;

        annot_flags: PapersDocument.RenderAnnotsFlags;

        // Constructors
        constructor(properties?: Partial<JobRenderTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document, page: number, rotation: number, scale: number, width: number, height: number, annot_flags: PapersDocument.RenderAnnotsFlags): JobRenderTexture;

        // Signals
        /** @signal */
        connect<K extends keyof JobRenderTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobRenderTexture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobRenderTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobRenderTexture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobRenderTexture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobRenderTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param selection_points 
         * @param selection_style 
         * @param text 
         * @param base 
         */
        set_selection_info(selection_points: PapersDocument.Rectangle, selection_style: PapersDocument.SelectionStyle, text: Gdk.RGBA, base: Gdk.RGBA): void;
    }


    namespace JobSave {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
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

        // Constructors
        constructor(properties?: Partial<JobSave.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document, uri: string, document_uri: string): JobSave;

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

        // Methods
        get_uri(): string;
    }


    namespace JobSignatures {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class JobSignatures extends Job {
        static $gtype: GObject.GType<JobSignatures>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobSignatures.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<JobSignatures.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document): JobSignatures;

        // Signals
        /** @signal */
        connect<K extends keyof JobSignatures.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobSignatures.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobSignatures.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobSignatures.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobSignatures.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobSignatures.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get all available signatures
         * @returns all available signatures
         */
        get_signatures(): PapersDocument.Signature[];
    }


    namespace JobThumbnailTexture {
        // Signal signatures
        interface SignalSignatures extends Job.SignalSignatures {
            "notify::document": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Job.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class JobThumbnailTexture extends Job {
        static $gtype: GObject.GType<JobThumbnailTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JobThumbnailTexture.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<JobThumbnailTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document: PapersDocument.Document, page: number, rotation: number, scale: number): JobThumbnailTexture;

        static new_with_target_size(document: PapersDocument.Document, page: number, rotation: number, target_width: number, target_height: number): JobThumbnailTexture;

        // Signals
        /** @signal */
        connect<K extends keyof JobThumbnailTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobThumbnailTexture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JobThumbnailTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JobThumbnailTexture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JobThumbnailTexture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JobThumbnailTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This is similar to `pps_job_find_get_n_results()` but it takes
         * care to treat any multi-line matches as being only one result.
         * @returns total number of match results in `page`
         */
        get_texture(): Gdk.Texture | null;
    }


    namespace Metadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Metadata extends GObject.Object {
        static $gtype: GObject.GType<Metadata>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Metadata.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](file: Gio.File): Metadata;

        // Signals
        /** @signal */
        connect<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Metadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Metadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Metadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Metadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param file 
         */
        static is_file_supported(file: Gio.File): boolean;

        // Methods
        /**
         * @param key The keyword of the metadata
         * @returns `true` on success, or `false` on failure.
         */
        get_boolean(key: string): [boolean, boolean];

        /**
         * @param key The keyword of the metadata
         * @returns `true` on success, or `false` on failure.
         */
        get_double(key: string): [boolean, number];

        /**
         * @param key The keyword of the metadata
         * @returns `true` on success, or `false` on failure.
         */
        get_int(key: string): [boolean, number];

        /**
         * @param key The keyword of the metadata
         * @returns `true` on success, or `false` on failure.
         */
        get_string(key: string): [boolean, string];

        /**
         * @param key 
         */
        has_key(key: string): boolean;

        is_empty(): boolean;

        /**
         * @param key 
         * @param value 
         */
        set_boolean(key: string, value: boolean): boolean;

        /**
         * @param key 
         * @param value 
         */
        set_double(key: string, value: number): boolean;

        /**
         * @param key 
         * @param value 
         */
        set_int(key: string, value: number): boolean;

        /**
         * @param key 
         * @param value 
         */
        set_string(key: string, value: string): boolean;
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
            document: PapersDocument.Document;
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
        set document(val: PapersDocument.Document);

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

        static ["new"](document: PapersDocument.Document): PrintOperation;

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
        static exists_for_document(document: PapersDocument.Document): boolean;

        // Methods
        cancel(): void;

        /**
         * @returns a {@link Gtk.PageSetup}
         */
        get_default_page_setup(): Gtk.PageSetup;

        get_embed_page_setup(): boolean;

        get_error(): void;

        get_job_name(): string;

        /**
         * @returns a {@link Gtk.PrintSettings}
         */
        get_print_settings(): Gtk.PrintSettings;

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


    namespace SearchContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            cleared: () => void;
            /**
             * @signal
             * @run-last
             */
            finished: (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "result-activated": (arg0: SearchResult) => void;
            /**
             * @signal
             * @run-last
             */
            started: () => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::document-model": (pspec: GObject.ParamSpec) => void;
            "notify::search-term": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            document_model: DocumentModel;
            documentModel: DocumentModel;
            search_term: string;
            searchTerm: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get active(): boolean;

        /**
         * @construct-only
         */
        set document_model(val: DocumentModel);

        /**
         * @construct-only
         */
        set documentModel(val: DocumentModel);

        get search_term(): string;
        set search_term(val: string);

        get searchTerm(): string;
        set searchTerm(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: DocumentModel): SearchContext;

        // Signals
        /** @signal */
        connect<K extends keyof SearchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        activate(): void;

        /**
         * @param result a {@link PapersView.SearchResult} to be the auto-selected one
         */
        autoselect_result(result: SearchResult): void;

        /**
         * @returns whether search is actively ongoing
         */
        get_active(): boolean;

        get_options(): PapersDocument.FindOptions;

        /**
         * @returns the returned {@link Gtk.SingleSelection}
         */
        get_result_model(): Gtk.SingleSelection;

        /**
         * @param page 
         * @returns {@link GLib.PtrArray} of {@link PapersView.SearchResult} on the current page
         */
        get_results_on_page(page: number): SearchResult[];

        get_search_term(): string;

        /**
         * @param page 
         */
        has_results_on_page(page: number): boolean;

        release(): void;

        restart(): void;

        /**
         * @param options 
         */
        set_options(options: PapersDocument.FindOptions): void;

        /**
         * @param search_term 
         */
        set_search_term(search_term: string): void;
    }


    namespace SearchResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SearchResult extends GObject.Object {
        static $gtype: GObject.GType<SearchResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchResult.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SearchResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](markup: string, label: string, page: number, index: number, global_index: number, rect: PapersDocument.FindRectangle): SearchResult;

        // Signals
        /** @signal */
        connect<K extends keyof SearchResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Appends a rectangle to the search result. This should not be used outside the
         * creation of the search result.
         * @param rect the {@link PapersDocument.FindRectangle} to append
         */
        append_rectangle(rect: PapersDocument.FindRectangle): void;

        /**
         * @returns the index of this result relative the complete result model.
         */
        get_global_index(): number;

        get_index(): number;

        get_label(): string;

        get_markup(): string;

        get_page(): number;

        /**
         * @returns the list of rectangles for this result.
         */
        get_rectangle_list(): PapersDocument.FindRectangle[] | null;
    }


    namespace UndoContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted whenever the undo or redo stacks are modified.
             * @signal
             * @run-last
             */
            "stacks-changed": (arg0: UndoHandler) => void;
            "notify::document-model": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document_model: DocumentModel;
            documentModel: DocumentModel;
        }
    }

    /**
     * This context singleton manages two stacks of `PpsUndoAction`
     * that contain actions that may be undone or redone.
     * 
     * These actions may be added by a number of objects that implement
     * PpsUndoHandler (e.g. the annotations context). Each handler provides a pointer
     * to an opaque structure that contains data to undo the action.
     * 
     * The switch between the undo/redo stacks is done transparently: actions are added
     * to the redo stack if and only if another action is being undone (i.e.
     * `pps_undo_context_undo` is being called).
     * @gir-type Class
     */
    class UndoContext extends GObject.Object {
        static $gtype: GObject.GType<UndoContext>;

        // Properties
        /**
         * @construct-only
         */
        get document_model(): DocumentModel;

        /**
         * @construct-only
         */
        get documentModel(): DocumentModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UndoContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UndoContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](document_model: DocumentModel): UndoContext;

        // Signals
        /** @signal */
        connect<K extends keyof UndoContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UndoContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UndoContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UndoContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UndoContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UndoContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This method adds a new action to the undo (or redo if it is used while
         * undoing) stack. If it is undone in the future, `pps_undo_handler_undo`
         * will be called on `handler` with `data`.
         * @param handler an object implementing {@link PapersView.UndoHandler}
         * @param data a pointer to a struct that `handler` will use to undo an action
         */
        add_action(handler: UndoHandler, data: null): void;

        get_last_action(): null;

        /**
         * @returns The last handler
         */
        get_last_handler(): UndoHandler;

        /**
         * Similar to the undo method, but taking an action from the redo stack.
         */
        redo(): void;

        /**
         * This pops the last action on the undo stack and undoes it by calling the
         * undo interface method of the {@link PapersView.UndoHandler} associated to the action.
         * While undoing, the {@link PapersView.UndoHandler} should add a new action with
         * `pps_undo_context_add_action` to redo what has just been undone, it will be
         * added to the redo stack by the undo context.
         */
        undo(): void;
    }


    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-first
             */
            activate: () => void;
            /**
             * @signal
             * @run-last
             */
            "cursor-moved": (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "external-link": (arg0: PapersDocument.LinkAction) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "handle-link": (arg0: GObject.Object, arg1: GObject.Object) => void;
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
            "move-cursor": (arg0: Gtk.MovementStep, arg1: number, arg2: boolean) => boolean | void;
            /**
             * @signal
             * @action
             * @run-last
             */
            popup: (arg0: null, arg1: number, arg2: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            scroll: (arg0: Gtk.ScrollType, arg1: Gtk.Orientation) => boolean | void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "selection-changed": () => void;
            /**
             * @signal
             * @action
             * @run-first
             */
            "signature-rect": (arg0: number, arg1: PapersDocument.Rectangle) => void;
            "notify::annotations-context": (pspec: GObject.ParamSpec) => void;
            "notify::can-zoom-in": (pspec: GObject.ParamSpec) => void;
            "notify::can-zoom-out": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::search-context": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            annotations_context: AnnotationsContext;
            annotationsContext: AnnotationsContext;
            can_zoom_in: boolean;
            canZoomIn: boolean;
            can_zoom_out: boolean;
            canZoomOut: boolean;
            model: DocumentModel;
            search_context: SearchContext;
            searchContext: SearchContext;
        }
    }

    /**
     * @gir-type Class
     */
    class View extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        // Properties
        get annotations_context(): AnnotationsContext;
        set annotations_context(val: AnnotationsContext);

        get annotationsContext(): AnnotationsContext;
        set annotationsContext(val: AnnotationsContext);

        /**
         * @read-only
         * @default true
         */
        get can_zoom_in(): boolean;

        /**
         * @read-only
         * @default true
         */
        get canZoomIn(): boolean;

        /**
         * @read-only
         * @default true
         */
        get can_zoom_out(): boolean;

        /**
         * @read-only
         * @default true
         */
        get canZoomOut(): boolean;

        get model(): DocumentModel;
        set model(val: DocumentModel);

        get search_context(): SearchContext;
        set search_context(val: SearchContext);

        get searchContext(): SearchContext;
        set searchContext(val: SearchContext);

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

        // Static methods
        static get_resource(): Gio.Resource;

        // Methods
        cancel_signature_rect(): void;

        copy(): void;

        /**
         * @param action 
         */
        copy_link_address(action: PapersDocument.LinkAction): void;

        /**
         * @param type 
         */
        current_event_is_type(type: Gdk.EventType): boolean;

        /**
         * @param annot 
         */
        focus_annotation(annot: PapersDocument.Annotation): void;

        get_allow_links_change_zoom(): boolean;

        /**
         * @param view_point_x the x coordinate over the view
         * @param view_point_y the y coordinate over the view
         * @returns a pointer to a {@link PapersDocument.DocumentPoint} that represents the location in the document for `view_point_x` and `view_point_y`. If the location is not in a page in the document, it returns NULL.
         */
        get_document_point_for_view_point(view_point_x: number, view_point_y: number): PapersDocument.DocumentPoint | null;

        get_enable_spellchecking(): boolean;

        /**
         * Returns a pointer to a constant string containing the selected
         * text in the view.
         * 
         * The value returned may be NULL if there is no selected text.
         * @returns The string representing selected text.
         */
        get_selected_text(): string;

        /**
         * @returns a list with the current selections.
         */
        get_selections(): ViewSelection[];

        /**
         * @param link 
         */
        handle_link(link: PapersDocument.Link): void;

        has_selection(): boolean;

        is_caret_navigation_enabled(): boolean;

        next_page(): boolean;

        /**
         * @param annot 
         */
        open_annotation_editor(annot: PapersDocument.Annotation): void;

        previous_page(): boolean;

        reload(): void;

        select_all(): void;

        /**
         * @param allowed 
         */
        set_allow_links_change_zoom(allowed: boolean): void;

        /**
         * @param context the {@link PapersView.AnnotationsContext} to set
         */
        set_annotations_context(context: AnnotationsContext): void;

        /**
         * @param page 
         * @param offset 
         */
        set_caret_cursor_position(page: number, offset: number): void;

        /**
         * Enables or disables caret navigation mode for the document.
         * @param enabled whether to enable caret navigation mode
         */
        set_caret_navigation_enabled(enabled: boolean): void;

        /**
         * @param spellcheck 
         */
        set_enable_spellchecking(spellcheck: boolean): void;

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
         * you have to use `pps_document_model_set_max_scale()` too.
         * @param cache_size size in bytes
         */
        set_page_cache_size(cache_size: bigint | number): void;

        /**
         * @param context 
         */
        set_search_context(context: SearchContext): void;

        start_signature_rect(): void;

        /**
         * @returns whether the document supports caret navigation
         */
        supports_caret_navigation(): boolean;

        zoom_in(): void;

        zoom_out(): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget.
         * 
         * This adjustment is shared between the scrollable widget and its parent.
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment | null;
        set hadjustment(val: Gtk.Adjustment | null);

        /**
         * Determines when horizontal scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines when horizontal scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Vertical {@link Gtk.Adjustment} of the scrollable widget.
         * 
         * This adjustment is shared between the scrollable widget and its parent.
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment | null;
        set vadjustment(val: Gtk.Adjustment | null);

        /**
         * Determines when vertical scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines when vertical scrolling should start.
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable.
         * 
         * An example for this would be treeview headers. GTK can use
         * this information to display overlaid graphics, like the
         * overshoot indication, at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment | null;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment | null;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy}.
         * 
         * The policy determines whether horizontal scrolling should start
         * below the minimum width or below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy}.
         * 
         * The policy determines whether vertical scrolling should start
         * below the minimum height or below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable.
         * 
         * An example for this would be treeview headers. GTK can use
         * this information to display overlaid graphics, like the
         * overshoot indication, at the right position.
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
            "external-link": (arg0: PapersDocument.LinkAction) => void;
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
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            current_page: number;
            currentPage: number;
            document: PapersDocument.Document;
            inverted_colors: boolean;
            invertedColors: boolean;
            rotation: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ViewPresentation extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<ViewPresentation>;

        // Properties
        /**
         * @default 0
         */
        get current_page(): number;
        set current_page(val: number);

        /**
         * @default 0
         */
        get currentPage(): number;
        set currentPage(val: number);

        /**
         * @write-only
         */
        set document(val: PapersDocument.Document);

        /**
         * @write-only
         * @default false
         */
        set inverted_colors(val: boolean);

        /**
         * @write-only
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

        static ["new"](document: PapersDocument.Document, current_page: number, rotation: number, inverted_colors: boolean): ViewPresentation;

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
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        /**
         * Requests the user's screen reader to announce the given message.
         * 
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         * 
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;

        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    /**
     * @gir-type Struct
     */
    class AnnotationInkAddData {
        static $gtype: GObject.GType<AnnotationInkAddData>;

        // Fields
        times: null[];

        highlight: boolean;

        line_width: number;
    }


    /**
     * @gir-type Alias
     */
    type AnnotationModelClass = typeof AnnotationModel;

    /**
     * @gir-type Alias
     */
    type AnnotationsContextClass = typeof AnnotationsContext;

    /**
     * @gir-type Alias
     */
    type AttachmentContextClass = typeof AttachmentContext;

    /**
     * @gir-type Alias
     */
    type DocumentModelClass = typeof DocumentModel;

    /**
     * @gir-type Alias
     */
    type HistoryClass = typeof History;

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
    type JobRenderTextureClass = typeof JobRenderTexture;

    /**
     * @gir-type Alias
     */
    type JobSaveClass = typeof JobSave;

    /**
     * @gir-type Alias
     */
    type JobSignaturesClass = typeof JobSignatures;

    /**
     * @gir-type Alias
     */
    type JobThumbnailTextureClass = typeof JobThumbnailTexture;

    /**
     * @gir-type Alias
     */
    type MetadataClass = typeof Metadata;

    /**
     * @gir-type Alias
     */
    type PrintOperationClass = typeof PrintOperation;

    /**
     * @gir-type Alias
     */
    type SearchContextClass = typeof SearchContext;

    /**
     * @gir-type Alias
     */
    type SearchResultClass = typeof SearchResult;

    /**
     * @gir-type Alias
     */
    type UndoContextClass = typeof UndoContext;

    /**
     * @gir-type Alias
     */
    type UndoHandlerInterface = typeof UndoHandler;

    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;

    /**
     * @gir-type Alias
     */
    type ViewPresentationClass = typeof ViewPresentation;

    /**
     * @gir-type Struct
     */
    class ViewSelection {
        static $gtype: GObject.GType<ViewSelection>;

        // Fields
        page: number;

        rect: PapersDocument.Rectangle;

        style: PapersDocument.SelectionStyle;

        // Methods
        copy(): ViewSelection;

        free(): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class _AnnotationsContextClass {
        static $gtype: GObject.GType<_AnnotationsContextClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _AttachmentContextClass {
        static $gtype: GObject.GType<_AttachmentContextClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _SearchContextClass {
        static $gtype: GObject.GType<_SearchContextClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _SearchResultClass {
        static $gtype: GObject.GType<_SearchResultClass>;
    }


    namespace UndoHandler {
        /**
         * Interface for implementing UndoHandler.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param data 
             * @virtual
             */
            vfunc_undo(data: null): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface UndoHandlerNamespace {
        $gtype: GObject.GType<UndoHandler>;
        prototype: UndoHandler;
    }
    /**
     * This interface is implemented by objects (e.g. the annotation context) that
     * aim to register actions that may be undone. Such actions must be registered
     * into the undo context so as they are added to the undo stack with
     * `pps_undo_context_add_action`.
     * Then, when an action must be undone (e.g. the user pressed Ctrl+Z), the
     * `pps_undo_handler_undo` interface method is called on the object.
     * An action is represented by an arbitrary pointer. The object must free
     * such pointers when the `pps_undo_handler_free_action` interface method is called.
     * 
     * For instance, the annotation context implements {@link PapersView.UndoHandler}. When an
     * annotation is added, the annotation context creates a custom struct that represents
     * this action, it contains (among other things) a pointer to the added {@link PapersDocument.Annotation}.
     * This action is added to the undo stack of the undo context. Then, if the user uses
     * Ctrl+Z, the `pps_undo_context_undo` method is called, the addition action is taken
     * from the undo stack and `pps_undo_handler_undo` is called on the annotation context
     * and the addition action. Then, the implementation of this interface in the
     * annotation context removes the annotation from the document. This removal entails that the annotation
     * context adds a new action to the undo context (a struct that represents the removal
     * of the annotation), and the undo context adds this action to the redo stack since this
     * happens while undoing.
     * @gir-type Interface
     */
    interface UndoHandler extends GObject.Object, UndoHandler.Interface {

        // Methods
        /**
         * @param data 
         */
        free_action(data: null): void;

        /**
         * @param data 
         */
        undo(data: null): void;
    }


    export const UndoHandler: UndoHandlerNamespace & {
        new (): UndoHandler; // This allows `obj instanceof UndoHandler`
    };

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

export default PapersView;

// END
