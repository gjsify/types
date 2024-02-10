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
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type EvinceDocument from '@girs/evincedocument-3.0';

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
    const STOCK_ANNOT_SQUIGGLY: string;
    const STOCK_ANNOT_TEXT: string;
    const STOCK_ATTACHMENT: string;
    const STOCK_CLOSE: string;
    const STOCK_FIND_UNSUPPORTED: string;
    const STOCK_INVERTED_COLORS: string;
    const STOCK_OUTLINE: string;
    const STOCK_RESIZE_SE: string;
    const STOCK_RESIZE_SW: string;
    const STOCK_ROTATE_LEFT: string;
    const STOCK_ROTATE_RIGHT: string;
    const STOCK_RUN_PRESENTATION: string;
    const STOCK_SEND_TO: string;
    const STOCK_VIEW_CONTINUOUS: string;
    const STOCK_VIEW_DUAL: string;
    const STOCK_VIEW_SIDEBAR: string;
    const STOCK_VISIBLE: string;
    const STOCK_ZOOM: string;
    const STOCK_ZOOM_PAGE: string;
    const STOCK_ZOOM_WIDTH: string;
    /**
     * Creates a new icon factory, adding the base stock icons to it.
     */
    function stock_icons_init(): void;
    function stock_icons_set_screen(screen: Gdk.Screen): void;
    function stock_icons_shutdown(): void;
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
    module DocumentModel {
        // Signal callback interfaces

        interface PageChanged {
            (object: number, p0: number): void;
        }

        // Constructor properties interface
    }

    class DocumentModel extends GObject.Object {
        // Own properties of EvinceView-3.0.DocumentModel

        continuous: boolean;
        document: EvinceDocument.Document;
        dual_odd_left: boolean;
        dualOddLeft: boolean;
        dual_page: boolean;
        dualPage: boolean;
        fullscreen: boolean;
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

        // Constructors of EvinceView-3.0.DocumentModel

        static ['new'](): DocumentModel;

        static new_with_document(document: EvinceDocument.Document): DocumentModel;

        // Owm methods of EvinceView-3.0.DocumentModel

        get_continuous(): boolean;
        /**
         * Returns the #EvDocument referenced by the model.
         * @returns a #EvDocument
         */
        get_document(): EvinceDocument.Document;
        get_dual_page(): boolean;
        get_dual_page_odd_pages_left(): boolean;
        get_fullscreen(): boolean;
        get_inverted_colors(): boolean;
        get_max_scale(): number;
        get_min_scale(): number;
        get_page(): number;
        get_page_layout(): PageLayout;
        get_rotation(): number;
        get_rtl(): boolean;
        get_scale(): number;
        get_sizing_mode(): SizingMode;
        set_continuous(continuous: boolean): void;
        set_document(document: EvinceDocument.Document): void;
        /**
         * Sets the document model's page layout to %EV_PAGE_LAYOUT_SINGLE or
         * %EV_PAGE_LAYOUT_DUAL.
         * @param dual_page whether to enable dual page mode
         */
        set_dual_page(dual_page: boolean): void;
        set_dual_page_odd_pages_left(odd_left: boolean): void;
        set_fullscreen(fullscreen: boolean): void;
        set_inverted_colors(inverted_colors: boolean): void;
        set_max_scale(max_scale: number): void;
        set_min_scale(min_scale: number): void;
        set_page(page: number): void;
        set_page_by_label(page_label: string): void;
        /**
         * Sets the document model's page layout to `layout`.
         * @param layout a #EvPageLayout
         */
        set_page_layout(layout: PageLayout): void;
        set_rotation(rotation: number): void;
        set_rtl(rtl: boolean): void;
        set_scale(scale: number): void;
        set_sizing_mode(mode: SizingMode): void;
    }

    module Job {
        // Signal callback interfaces

        interface Cancelled {
            (): void;
        }

        interface Finished {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Job extends GObject.Object {
        // Own fields of EvinceView-3.0.Job

        document: EvinceDocument.Document;
        run_mode: JobRunMode;
        cancelled: number;
        finished: number;
        error: GLib.Error;
        cancellable: Gio.Cancellable;
        idle_finished_id: number;
        idle_cancelled_id: number;

        // Owm methods of EvinceView-3.0.Job

        static scheduler_get_running_thread_job(): Job;
        /**
         * Synchronously waits until all jobs are done.
         * Remember that main loop is not running already probably.
         */
        static scheduler_wait(): void;

        // Owm methods of EvinceView-3.0.Job

        cancel(): void;
        failed(error: GLib.Error): void;
        get_run_mode(): JobRunMode;
        is_failed(): boolean;
        is_finished(): boolean;
        run(): boolean;
        scheduler_push_job(priority: JobPriority): void;
        scheduler_update_job(priority: JobPriority): void;
        set_run_mode(run_mode: JobRunMode): void;
        succeeded(): void;
    }

    module JobAnnots {
        // Constructor properties interface
    }

    class JobAnnots extends Job {
        // Own fields of EvinceView-3.0.JobAnnots

        annots: any[];

        // Constructors of EvinceView-3.0.JobAnnots

        static ['new'](document: EvinceDocument.Document): JobAnnots;
    }

    module JobAttachments {
        // Constructor properties interface
    }

    class JobAttachments extends Job {
        // Own fields of EvinceView-3.0.JobAttachments

        attachments: any[];

        // Constructors of EvinceView-3.0.JobAttachments

        static ['new'](document: EvinceDocument.Document): JobAttachments;
    }

    module JobExport {
        // Constructor properties interface
    }

    class JobExport extends Job {
        // Own fields of EvinceView-3.0.JobExport

        page: number;
        rc: EvinceDocument.RenderContext;

        // Constructors of EvinceView-3.0.JobExport

        static ['new'](document: EvinceDocument.Document): JobExport;

        // Owm methods of EvinceView-3.0.JobExport

        set_page(page: number): void;
    }

    module JobFind {
        // Signal callback interfaces

        interface Updated {
            (object: number): void;
        }

        // Constructor properties interface
    }

    class JobFind extends Job {
        // Own fields of EvinceView-3.0.JobFind

        start_page: number;
        current_page: number;
        n_pages: number;
        pages: any[];
        text: string;
        case_sensitive: boolean;
        options: EvinceDocument.FindOptions;

        // Constructors of EvinceView-3.0.JobFind

        static ['new'](
            document: EvinceDocument.Document,
            start_page: number,
            n_pages: number,
            text: string,
            case_sensitive: boolean,
        ): JobFind;

        // Owm methods of EvinceView-3.0.JobFind

        /**
         * This is similar to ev_job_find_get_n_results() but it takes
         * care to treat any multi-line matches as being only one result.
         * @param page number of the page we want to count its match results.
         * @returns total number of match results in @page
         */
        get_n_main_results(page: number): number;
        get_n_results(pages: number): number;
        get_options(): EvinceDocument.FindOptions;
        get_progress(): number;
        has_results(): boolean;
        set_options(options: EvinceDocument.FindOptions): void;
    }

    module JobFonts {
        // Signal callback interfaces

        interface Updated {
            (object: number): void;
        }

        // Constructor properties interface
    }

    class JobFonts extends Job {
        // Own fields of EvinceView-3.0.JobFonts

        scan_completed: boolean;

        // Constructors of EvinceView-3.0.JobFonts

        static ['new'](document: EvinceDocument.Document): JobFonts;
    }

    module JobLayers {
        // Constructor properties interface
    }

    class JobLayers extends Job {
        // Own fields of EvinceView-3.0.JobLayers

        model: Gtk.TreeModel;

        // Constructors of EvinceView-3.0.JobLayers

        static ['new'](document: EvinceDocument.Document): JobLayers;
    }

    module JobLinks {
        // Constructor properties interface
    }

    class JobLinks extends Job {
        // Own fields of EvinceView-3.0.JobLinks

        model: Gtk.TreeModel;

        // Constructors of EvinceView-3.0.JobLinks

        static ['new'](document: EvinceDocument.Document): JobLinks;

        // Owm methods of EvinceView-3.0.JobLinks

        /**
         * Get a #GtkTreeModel loaded with the links
         * @returns The #GtkTreeModel loaded
         */
        get_model(): Gtk.TreeModel;
    }

    module JobLoad {
        // Constructor properties interface
    }

    class JobLoad extends Job {
        // Own fields of EvinceView-3.0.JobLoad

        uri: string;
        password: string;

        // Constructors of EvinceView-3.0.JobLoad

        static ['new'](uri: string): JobLoad;

        // Owm methods of EvinceView-3.0.JobLoad

        set_password(password: string): void;
        set_uri(uri: string): void;
    }

    module JobLoadFd {
        // Constructor properties interface
    }

    /**
     * A job class to load a #EvDocument from a file descriptor
     * referring to a regular file.
     */
    class JobLoadFd extends Job {
        // Own fields of EvinceView-3.0.JobLoadFd

        mime_type: string;
        password: string;
        fd: number;
        flags: EvinceDocument.DocumentLoadFlags;

        // Constructors of EvinceView-3.0.JobLoadFd

        static ['new'](fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd;

        static new_take(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd;

        // Owm methods of EvinceView-3.0.JobLoadFd

        /**
         * Sets `fd` as the file descriptor in `job`. If duplicating `fd` fails,
         * returns %FALSE with `error` filled in.
         * @param fd a file descriptor
         * @returns %TRUE if the file descriptor could be set
         */
        set_fd(fd: number): boolean;
        set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;
        set_mime_type(mime_type: string): void;
        set_password(password: string): void;
        /**
         * Sets `fd` as the file descriptor in `job`.
         * Note that `job` takes ownership of `fd;` you must not do anything
         * with it afterwards.
         * @param fd a file descriptor
         */
        take_fd(fd: number): void;
    }

    module JobLoadGFile {
        // Constructor properties interface
    }

    /**
     * A job class to load a #EvDocument from a #GFile.
     */
    class JobLoadGFile extends Job {
        // Own fields of EvinceView-3.0.JobLoadGFile

        password: string;
        gfile: Gio.File;
        flags: EvinceDocument.DocumentLoadFlags;

        // Constructors of EvinceView-3.0.JobLoadGFile

        static ['new'](gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags): JobLoadGFile;

        // Owm methods of EvinceView-3.0.JobLoadGFile

        set_gfile(gfile: Gio.File): void;
        set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;
        set_password(password: string): void;
    }

    module JobLoadStream {
        // Constructor properties interface
    }

    /**
     * A job class to load a #EvDocument from a #GInputStream.
     */
    class JobLoadStream extends Job {
        // Own fields of EvinceView-3.0.JobLoadStream

        password: string;
        stream: Gio.InputStream;
        flags: EvinceDocument.DocumentLoadFlags;

        // Constructors of EvinceView-3.0.JobLoadStream

        static ['new'](stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags): JobLoadStream;

        // Owm methods of EvinceView-3.0.JobLoadStream

        set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;
        set_mime_type(mime_type: string): void;
        set_password(password: string): void;
        set_stream(stream: Gio.InputStream): void;
    }

    module JobPageData {
        // Constructor properties interface
    }

    class JobPageData extends Job {
        // Own fields of EvinceView-3.0.JobPageData

        page: number;
        flags: JobPageDataFlags;
        text: string;
        text_layout: EvinceDocument.Rectangle;
        text_layout_length: number;
        text_log_attrs: Pango.LogAttr;
        text_log_attrs_length: number;

        // Constructors of EvinceView-3.0.JobPageData

        static ['new'](document: EvinceDocument.Document, page: number, flags: JobPageDataFlags): JobPageData;
    }

    module JobPrint {
        // Constructor properties interface
    }

    class JobPrint extends Job {
        // Own fields of EvinceView-3.0.JobPrint

        page: number;

        // Constructors of EvinceView-3.0.JobPrint

        static ['new'](document: EvinceDocument.Document): JobPrint;

        // Owm methods of EvinceView-3.0.JobPrint

        set_cairo(cr: cairo.Context): void;
        set_page(page: number): void;
    }

    module JobRender {
        // Constructor properties interface
    }

    class JobRender extends Job {
        // Own fields of EvinceView-3.0.JobRender

        page: number;
        rotation: number;
        scale: number;
        page_ready: boolean;
        target_width: number;
        target_height: number;
        include_selection: boolean;
        selection_points: EvinceDocument.Rectangle;
        selection_style: EvinceDocument.SelectionStyle;
        base: Gdk.Color;
        text: Gdk.Color;

        // Constructors of EvinceView-3.0.JobRender

        static ['new'](
            document: EvinceDocument.Document,
            page: number,
            rotation: number,
            scale: number,
            width: number,
            height: number,
        ): JobRender;

        // Owm methods of EvinceView-3.0.JobRender

        set_selection_info(
            selection_points: EvinceDocument.Rectangle,
            selection_style: EvinceDocument.SelectionStyle,
            text: Gdk.Color,
            base: Gdk.Color,
        ): void;
    }

    module JobSave {
        // Constructor properties interface
    }

    class JobSave extends Job {
        // Own fields of EvinceView-3.0.JobSave

        uri: string;
        document_uri: string;

        // Constructors of EvinceView-3.0.JobSave

        static ['new'](document: EvinceDocument.Document, uri: string, document_uri: string): JobSave;
    }

    module JobThumbnail {
        // Constructor properties interface
    }

    class JobThumbnail extends Job {
        // Own fields of EvinceView-3.0.JobThumbnail

        page: number;
        rotation: number;
        scale: number;
        target_width: number;
        target_height: number;
        thumbnail: GdkPixbuf.Pixbuf;
        has_frame: boolean;
        format: JobThumbnailFormat;

        // Constructors of EvinceView-3.0.JobThumbnail

        static ['new'](document: EvinceDocument.Document, page: number, rotation: number, scale: number): JobThumbnail;

        static new_with_target_size(
            document: EvinceDocument.Document,
            page: number,
            rotation: number,
            target_width: number,
            target_height: number,
        ): JobThumbnail;

        // Owm methods of EvinceView-3.0.JobThumbnail

        set_has_frame(has_frame: boolean): void;
        /**
         * Set the desired output format for the generated thumbnail
         * @param format a #EvJobThumbnailFormat
         */
        set_output_format(format: JobThumbnailFormat): void;
    }

    module PrintOperation {
        // Signal callback interfaces

        interface BeginPrint {
            (): void;
        }

        interface Done {
            (object: Gtk.PrintOperationResult): void;
        }

        interface StatusChanged {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class PrintOperation extends GObject.Object {
        // Own properties of EvinceView-3.0.PrintOperation

        document: EvinceDocument.Document;

        // Constructors of EvinceView-3.0.PrintOperation

        static ['new'](document: EvinceDocument.Document): PrintOperation;

        // Owm methods of EvinceView-3.0.PrintOperation

        static exists_for_document(document: EvinceDocument.Document): boolean;

        // Owm methods of EvinceView-3.0.PrintOperation

        cancel(): void;
        get_default_page_setup(): Gtk.PageSetup;
        get_embed_page_setup(): boolean;
        get_error(): void;
        get_job_name(): string;
        get_print_settings(): Gtk.PrintSettings;
        get_progress(): number;
        get_status(): string;
        run(parent: Gtk.Window): void;
        set_current_page(current_page: number): void;
        set_default_page_setup(page_setup: Gtk.PageSetup): void;
        set_embed_page_setup(embed: boolean): void;
        set_job_name(job_name: string): void;
        set_print_settings(print_settings: Gtk.PrintSettings): void;
    }

    module View {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface AnnotAdded {
            (object: EvinceDocument.Annotation): void;
        }

        interface AnnotCancelAdd {
            (): void;
        }

        interface AnnotChanged {
            (object: EvinceDocument.Annotation): void;
        }

        interface AnnotRemoved {
            (object: EvinceDocument.Annotation): void;
        }

        interface CursorMoved {
            (object: number, p0: number): void;
        }

        interface ExternalLink {
            (object: GObject.Object): void;
        }

        interface HandleLink {
            (object: number, p0: GObject.Object): void;
        }

        interface LayersChanged {
            (): void;
        }

        interface MoveCursor {
            (object: Gtk.MovementStep, p0: number, p1: boolean): boolean;
        }

        interface Popup {
            (object?: any | null): void;
        }

        interface Scroll {
            (object: Gtk.ScrollType, p0: Gtk.Orientation): void;
        }

        interface SelectionChanged {
            (): void;
        }

        interface SyncSource {
            (object: EvinceDocument.SourceLink): void;
        }

        // Constructor properties interface
    }

    class View extends Gtk.Container {
        // Own properties of EvinceView-3.0.View

        readonly can_zoom_in: boolean;
        readonly canZoomIn: boolean;
        readonly can_zoom_out: boolean;
        readonly canZoomOut: boolean;
        /**
         * Allows to implement a custom notification system.
         */
        readonly is_loading: boolean;
        /**
         * Allows to implement a custom notification system.
         */
        readonly isLoading: boolean;

        // Constructors of EvinceView-3.0.View

        static ['new'](): View;

        // Owm methods of EvinceView-3.0.View

        /**
         * Adds a Text Markup annotation (defaulting to a 'highlight' one) to
         * the currently selected text on the document.
         *
         * When the selected text spans more than one page, it will add a
         * corresponding annotation for each page that contains selected text.
         * @returns %TRUE if annotations were added successfully, %FALSE otherwise.
         */
        add_text_markup_annotation_for_selected_text(): boolean;
        autoscroll_start(): void;
        autoscroll_stop(): void;
        begin_add_annotation(annot_type: EvinceDocument.AnnotationType): void;
        cancel_add_annotation(): void;
        copy(): void;
        copy_link_address(action: EvinceDocument.LinkAction): void;
        current_event_is_type(type: Gdk.EventType): boolean;
        find_cancel(): void;
        find_next(): void;
        find_previous(): void;
        /**
         * Restart the current search operation from the given `page`.
         * @param page a page index
         */
        find_restart(page: number): void;
        find_search_changed(): void;
        find_set_highlight_search(value: boolean): void;
        /**
         * FIXME
         * @param page
         * @param result
         */
        find_set_result(page: number, result: number): void;
        find_started(job: JobFind): void;
        focus_annotation(annot_mapping: EvinceDocument.Mapping): void;
        get_allow_links_change_zoom(): boolean;
        get_enable_spellchecking(): boolean;
        get_has_selection(): boolean;
        get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean;
        get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean;
        /**
         * Returns a pointer to a constant string containing the selected
         * text in the view.
         *
         * The value returned may be NULL if there is no selected text.
         * @returns The string representing selected text.
         */
        get_selected_text(): string;
        handle_link(link: EvinceDocument.Link): void;
        hide_cursor(): void;
        highlight_forward_search(link: EvinceDocument.SourceLink): void;
        is_caret_navigation_enabled(): boolean;
        next_page(): boolean;
        previous_page(): boolean;
        reload(): void;
        remove_annotation(annot: EvinceDocument.Annotation): void;
        scroll(scroll: Gtk.ScrollType, horizontal: boolean): void;
        select_all(): void;
        set_allow_links_change_zoom(allowed: boolean): void;
        set_caret_cursor_position(page: number, offset: number): void;
        /**
         * Enables or disables caret navigation mode for the document.
         * @param enabled whether to enable caret navigation mode
         */
        set_caret_navigation_enabled(enabled: boolean): void;
        set_enable_spellchecking(spellcheck: boolean): void;
        set_loading(loading: boolean): void;
        set_model(model: DocumentModel): void;
        /**
         * Sets the maximum size in bytes that will be used to cache
         * rendered pages. Use 0 to disable caching rendered pages.
         *
         * Note that this limit doesn't affect the current visible page range,
         * which will always be rendered. In order to limit the total memory used
         * you have to use ev_document_model_set_max_scale() too.
         * @param cache_size size in bytes
         */
        set_page_cache_size(cache_size: number): void;
        show_cursor(): void;
        supports_caret_navigation(): boolean;
        zoom_in(): void;
        zoom_out(): void;
    }

    module ViewPresentation {
        // Signal callback interfaces

        interface ChangePage {
            (object: Gtk.ScrollType): void;
        }

        interface ExternalLink {
            (object: GObject.Object): void;
        }

        interface Finished {
            (): void;
        }

        // Constructor properties interface
    }

    class ViewPresentation extends Gtk.Widget {
        // Own properties of EvinceView-3.0.ViewPresentation

        current_page: number;
        currentPage: number;
        document: EvinceDocument.Document;
        inverted_colors: boolean;
        invertedColors: boolean;
        rotation: number;

        // Constructors of EvinceView-3.0.ViewPresentation

        static ['new'](
            document: EvinceDocument.Document,
            current_page: number,
            rotation: number,
            inverted_colors: boolean,
        ): ViewPresentation;

        // Owm methods of EvinceView-3.0.ViewPresentation

        get_current_page(): number;
        get_rotation(): number;
        next_page(): void;
        previous_page(): void;
        set_rotation(rotation: number): void;
    }

    class DocumentModelClass {}

    class JobAnnotsClass {}

    class JobAttachmentsClass {}

    class JobClass {}

    class JobExportClass {}

    class JobFindClass {}

    class JobFontsClass {}

    class JobLayersClass {}

    class JobLinksClass {}

    class JobLoadClass {}

    class JobLoadFdClass {}

    class JobLoadGFileClass {}

    class JobLoadStreamClass {}

    class JobPageDataClass {}

    class JobPrintClass {}

    class JobRenderClass {}

    class JobSaveClass {}

    class JobThumbnailClass {}

    class PrintOperationClass {}

    class ViewClass {}

    class ViewPresentationClass {}

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

export default EvinceView;
// END
