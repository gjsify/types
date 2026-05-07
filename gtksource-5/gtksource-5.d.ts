
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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace GtkSource {

    /**
     * GtkSource-5
     */


    /**
     * @gir-type Enum
     */
    export namespace AnnotationStyle {
        export const $gtype: GObject.GType<AnnotationStyle>;
    }

    /**
     * @gir-type Enum
     * @since 5.18
     */
    enum AnnotationStyle {
        /**
         * same color as drawn spaces
         */
        NONE,
        /**
         * same as the diff:changed-line foreground color
         */
        WARNING,
        /**
         * same as the diff:removed-line foreground color
         */
        ERROR,
        /**
         * same as the diff:added-line foreground color
         */
        ACCENT,
    }


    /**
     * @gir-type Enum
     */
    export namespace BackgroundPatternType {
        export const $gtype: GObject.GType<BackgroundPatternType>;
    }

    /**
     * @gir-type Enum
     */
    enum BackgroundPatternType {
        /**
         * no pattern
         */
        NONE,
        /**
         * grid pattern
         */
        GRID,
    }


    /**
     * @gir-type Enum
     */
    export namespace BracketMatchType {
        export const $gtype: GObject.GType<BracketMatchType>;
    }

    /**
     * @gir-type Enum
     */
    enum BracketMatchType {
        /**
         * there is no bracket to match.
         */
        NONE,
        /**
         * matching a bracket
         *  failed because the maximum range was reached.
         */
        OUT_OF_RANGE,
        /**
         * a matching bracket was not found.
         */
        NOT_FOUND,
        /**
         * a matching bracket was found.
         */
        FOUND,
    }


    /**
     * @gir-type Enum
     */
    export namespace ChangeCaseType {
        export const $gtype: GObject.GType<ChangeCaseType>;
    }

    /**
     * @gir-type Enum
     */
    enum ChangeCaseType {
        /**
         * change case to lowercase.
         */
        LOWER,
        /**
         * change case to uppercase.
         */
        UPPER,
        /**
         * toggle case of each character.
         */
        TOGGLE,
        /**
         * capitalize each word.
         */
        TITLE,
    }


    /**
     * @gir-type Enum
     */
    export namespace CompletionActivation {
        export const $gtype: GObject.GType<CompletionActivation>;
    }

    /**
     * @gir-type Enum
     */
    enum CompletionActivation {
        NONE,
        INTERACTIVE,
        USER_REQUESTED,
    }


    /**
     * @gir-type Enum
     */
    export namespace CompletionColumn {
        export const $gtype: GObject.GType<CompletionColumn>;
    }

    /**
     * @gir-type Enum
     */
    enum CompletionColumn {
        ICON,
        BEFORE,
        TYPED_TEXT,
        AFTER,
        COMMENT,
        DETAILS,
    }


    /**
     * @gir-type Enum
     */
    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

    /**
     * @gir-type Enum
     */
    enum CompressionType {
        /**
         * plain text.
         */
        NONE,
        /**
         * gzip compression.
         */
        GZIP,
    }


    /**
     * An error code used with the `GTK_SOURCE_FILE_LOADER_ERROR` domain.
     * @gir-type Struct
     */
    class FileLoaderError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The file is too big.
         */
        static TOO_BIG: number;

        /**
         * It is not
         * possible to detect the encoding automatically.
         */
        static ENCODING_AUTO_DETECTION_FAILED: number;

        /**
         * There was an encoding
         * conversion error and it was needed to use a fallback character.
         */
        static CONVERSION_FALLBACK: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * An error code used with the `GTK_SOURCE_FILE_SAVER_ERROR` domain.
     * @gir-type Struct
     */
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The buffer contains invalid
         *   characters.
         */
        static INVALID_CHARS: number;

        /**
         * The file is externally
         *   modified.
         */
        static EXTERNALLY_MODIFIED: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace GutterRendererAlignmentMode {
        export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
    }

    /**
     * The alignment mode of the renderer, when a cell spans multiple lines (due to
     * text wrapping).
     * @gir-type Enum
     */
    enum GutterRendererAlignmentMode {
        /**
         * The full cell.
         */
        CELL,
        /**
         * The first line.
         */
        FIRST,
        /**
         * The last line.
         */
        LAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
    }

    /**
     * @gir-type Enum
     */
    enum NewlineType {
        /**
         * line feed, used on UNIX.
         */
        LF,
        /**
         * carriage return, used on Mac.
         */
        CR,
        /**
         * carriage return followed by a line feed, used
         *   on Windows.
         */
        CR_LF,
    }


    /**
     * @gir-type Enum
     */
    export namespace SmartHomeEndType {
        export const $gtype: GObject.GType<SmartHomeEndType>;
    }

    /**
     * @gir-type Enum
     */
    enum SmartHomeEndType {
        /**
         * smart-home-end disabled.
         */
        DISABLED,
        /**
         * move to the first/last
         * non-whitespace character on the first press of the HOME/END keys and
         * to the beginning/end of the line on the second press.
         */
        BEFORE,
        /**
         * move to the beginning/end of the
         * line on the first press of the HOME/END keys and to the first/last
         * non-whitespace character on the second press.
         */
        AFTER,
        /**
         * always move to the first/last
         * non-whitespace character when the HOME/END keys are pressed.
         */
        ALWAYS,
    }


    /**
     * @gir-type Enum
     */
    export namespace ViewGutterPosition {
        export const $gtype: GObject.GType<ViewGutterPosition>;
    }

    /**
     * @gir-type Enum
     */
    enum ViewGutterPosition {
        /**
         * the gutter position of the lines
         * renderer
         */
        LINES,
        /**
         * the gutter position of the marks
         * renderer
         */
        MARKS,
    }


    /**
     * Like `gtk_source_get_major_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MAJOR_VERSION: number;

    /**
     * Like `gtk_source_get_micro_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MICRO_VERSION: number;

    /**
     * Like `gtk_source_get_minor_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MINOR_VERSION: number;

    /**
     * Like GTK_SOURCE_CHECK_VERSION, but the check for gtk_source_check_version is
     * at runtime instead of compile time. This is useful for compiling
     * against older versions of GtkSourceView, but using features from newer
     * versions.
     * @param major the major version to check
     * @param minor the minor version to check
     * @param micro the micro version to check
     * @returns `true` if the version of the GtkSourceView currently loaded is the same as or newer than the passed-in version.
     */
    function check_version(major: number, minor: number, micro: number): boolean;

    /**
     * Gets all encodings.
     * @returns a list of all {@link GtkSource.Encoding}'s. Free with `g_slist_free()`.
     */
    function encoding_get_all(): Encoding[];

    /**
     * Gets the {@link GtkSource.Encoding} for the current locale.
     * 
     * See also {@link GLib.get_charset}.
     * @returns the current locale encoding.
     */
    function encoding_get_current(): Encoding;

    /**
     * Gets the list of default candidate encodings to try when loading a file.
     * 
     * See {@link FileLoader.set_candidate_encodings}.
     * 
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * @returns the list of default candidate encodings. Free with `g_slist_free()`.
     */
    function encoding_get_default_candidates(): Encoding[];

    /**
     * Gets a {@link GtkSource.Encoding} from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @param charset a character set.
     * @returns the corresponding {@link GtkSource.Encoding}, or `null` if not found.
     */
    function encoding_get_from_charset(charset: string): (Encoding | null);

    /**
     * @returns the UTF-8 encoding.
     */
    function encoding_get_utf8(): Encoding;

    function file_loader_error_quark(): GLib.Quark;

    function file_saver_error_quark(): GLib.Quark;

    /**
     * Free the resources allocated by GtkSourceView. For example it unrefs the
     * singleton objects.
     * 
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * `main()`. It can be called several times.
     */
    function finalize(): void;

    /**
     * Returns the major version number of the GtkSourceView library.
     * (e.g. in GtkSourceView version 3.20.0 this is 3.)
     * 
     * This function is in the library, so it represents the GtkSourceView library
     * your code is running against. Contrast with the #GTK_SOURCE_MAJOR_VERSION
     * macro, which represents the major version of the GtkSourceView headers you
     * have included when compiling your code.
     * @returns the major version number of the GtkSourceView library
     */
    function get_major_version(): number;

    /**
     * Returns the micro version number of the GtkSourceView library.
     * (e.g. in GtkSourceView version 3.20.0 this is 0.)
     * 
     * This function is in the library, so it represents the GtkSourceView library
     * your code is running against. Contrast with the #GTK_SOURCE_MICRO_VERSION
     * macro, which represents the micro version of the GtkSourceView headers you
     * have included when compiling your code.
     * @returns the micro version number of the GtkSourceView library
     */
    function get_micro_version(): number;

    /**
     * Returns the minor version number of the GtkSourceView library.
     * (e.g. in GtkSourceView version 3.20.0 this is 20.)
     * 
     * This function is in the library, so it represents the GtkSourceView library
     * your code is running against. Contrast with the #GTK_SOURCE_MINOR_VERSION
     * macro, which represents the minor version of the GtkSourceView headers you
     * have included when compiling your code.
     * @returns the minor version number of the GtkSourceView library
     */
    function get_minor_version(): number;

    /**
     * Initializes the GtkSourceView library (e.g. for the internationalization).
     * 
     * This function can be called several times, but is meant to be called at the
     * beginning of `main()`, before any other GtkSourceView function call.
     * 
     * The counterpart to this function is {@link finalize} which can be convenient
     * when using memory debugging tools.
     */
    function init(): void;

    /**
     * Adds a new callback that will be executed as time permits on the main thread.
     * 
     * This is useful when you need to do a lot of background work but want to do
     * it incrementally.
     * 
     * `callback` will be provided a deadline that it should complete it's work by
     * (or near) and can be checked using {@link GLib.get_monotonic_time} for comparison.
     * 
     * Use {@link scheduler_remove} to remove the handler.
     * @param callback the callback to execute
     * @since 5.2
     */
    function scheduler_add(callback: SchedulerCallback): number;

    /**
     * Removes a scheduler callback previously registered with
     * {@link scheduler_add} or {@link scheduler_add_full}.
     * @param handler_id the handler id
     * @since 5.2
     */
    function scheduler_remove(handler_id: (bigint | number)): void;

    /**
     * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
     * 
     * For a regular expression search, use `g_regex_escape_string()` instead.
     * 
     * One possible use case is to take the {@link Gtk.TextBuffer}'s selection and put it in a
     * search entry. The selection can contain tabulations, newlines, etc. So it's
     * better to escape those special characters to better fit in the search entry.
     * 
     * See also: {@link utils_unescape_search_text}.
     * 
     * <warning>
     * Warning: the escape and unescape functions are not reciprocal! For example,
     * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
     * -> search settings -> escape -> search entry. The original search entry text
     * may be modified.
     * </warning>
     * @param text the text to escape.
     * @returns the escaped `text`.
     */
    function utils_escape_search_text(text: string): string;

    /**
     * Use this function before {@link SearchSettings.set_search_text}, to
     * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
     * The purpose is to easily write those characters in a search entry.
     * 
     * Note that unescaping the search text is not needed for regular expression
     * searches.
     * 
     * See also: {@link utils_escape_search_text}.
     * @param text the text to unescape.
     * @returns the unescaped `text`.
     */
    function utils_unescape_search_text(text: string): string;

    /**
     * @gir-type Callback
     */
    interface SchedulerCallback {
        (deadline: number): boolean;
    }

    /**
     * @gir-type Flags
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

    /**
     * Flags to define the behavior of a {@link FileSaverFlags}.
     * @gir-type Flags
     */
    enum FileSaverFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Ignore invalid characters.
         */
        IGNORE_INVALID_CHARS,
        /**
         * Save file despite external modifications.
         */
        IGNORE_MODIFICATION_TIME,
        /**
         * Create a backup before saving the file.
         */
        CREATE_BACKUP,
    }


    /**
     * @gir-type Flags
     */
    export namespace SortFlags {
        export const $gtype: GObject.GType<SortFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum SortFlags {
        /**
         * no flags specified
         */
        NONE,
        /**
         * case sensitive sort
         */
        CASE_SENSITIVE,
        /**
         * sort in reverse order
         */
        REVERSE_ORDER,
        /**
         * remove duplicates
         */
        REMOVE_DUPLICATES,
        /**
         * improved sorting for filenames.
         * 
         * see {@link GLib.utf8_collate_key_for_filename}
         */
        FILENAME,
    }


    /**
     * @gir-type Flags
     */
    export namespace SpaceLocationFlags {
        export const $gtype: GObject.GType<SpaceLocationFlags>;
    }

    /**
     * {@link GtkSource.SpaceLocationFlags} contains flags for white space locations.
     * 
     * If a line contains only white spaces (no text), the white spaces match both
     * {@link GtkSource.SpaceLocationFlags.LEADING} and {@link GtkSource.SpaceLocationFlags.TRAILING}.
     * @gir-type Flags
     */
    enum SpaceLocationFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Leading white spaces on a line, i.e. the
         *   indentation.
         */
        LEADING,
        /**
         * White spaces inside a line of text.
         */
        INSIDE_TEXT,
        /**
         * Trailing white spaces on a line.
         */
        TRAILING,
        /**
         * White spaces anywhere.
         */
        ALL,
    }


    /**
     * @gir-type Flags
     */
    export namespace SpaceTypeFlags {
        export const $gtype: GObject.GType<SpaceTypeFlags>;
    }

    /**
     * {@link GtkSource.SpaceTypeFlags} contains flags for white space types.
     * @gir-type Flags
     */
    enum SpaceTypeFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Space character.
         */
        SPACE,
        /**
         * Tab character.
         */
        TAB,
        /**
         * Line break character. If the
         *   {@link GtkSource.Buffer.implicit_trailing_newline} property is `true`,
         *   {@link GtkSource.SpaceDrawer} also draws a line break at the end of the buffer.
         */
        NEWLINE,
        /**
         * Non-breaking space character.
         */
        NBSP,
        /**
         * All white spaces.
         */
        ALL,
    }


    namespace Annotation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::line": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            icon: (Gio.Icon | null);
            line: number;
            style: AnnotationStyle;
        }
    }

    /**
     * Represents an annotation added to {@link View}, it has a {@link Annotation.line} property,
     * {@link Annotation.description}, icon and a style.
     * 
     * It will be displayed always at the end of a line.
     * 
     * If the style is GTK_SOURCE_ANNOTATION_STYLE_NONE it will use the same color as {@link SpaceDrawer}.
     * @gir-type Class
     * @since 5.18
     */
    class Annotation extends GObject.Object {
        static $gtype: GObject.GType<Annotation>;

        // Properties
        /**
         * The text description displayed at {@link Annotation.line}
         * @since 5.18
         * @read-only
         * @default null
         */
        get description(): string;

        /**
         * The icon displayed at {@link Annotation.line}
         * 
         * It will be displayed before the text description
         * @since 5.18
         * @read-only
         */
        get icon(): (Gio.Icon | null);

        /**
         * The line where to display the annotation
         * @since 5.18
         * @read-only
         * @default 1
         */
        get line(): number;

        /**
         * The style of the annotation
         * @since 5.18
         * @read-only
         * @default GtkSource.AnnotationStyle.NONE
         */
        get style(): AnnotationStyle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Annotation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Annotation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](description: (string | null), icon: (Gio.Icon | null), line: number, style: AnnotationStyle): Annotation;

        // Signals
        /** @signal */
        connect<K extends keyof Annotation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Annotation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annotation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Annotation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Annotation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the description text displayed
         */
        get_description(): string;

        /**
         * @returns a {@link Gio.Icon} or `null`
         */
        get_icon(): (Gio.Icon | null);

        /**
         * @returns the line number.
         */
        get_line(): number;

        /**
         * @returns the style of the annotation
         */
        get_style(): AnnotationStyle;
    }


    namespace AnnotationProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @since 5.18
             * @run-last
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * It is used to provide annotations and display them on {@link View} and also populate
     * {@link HoverDisplay} when the user hovers over an annotation.
     * 
     * You can subclass this object and implement {@link AnnotationProvider.populate_hover_async} and
     * {@link AnnotationProvider.populate_hover_finish} or connect to `GtkSource.AnnotationProvider::populate`
     * and call {@link AnnotationProvider.populate} or do it asynchronously.
     * @gir-type Class
     * @since 5.18
     */
    class AnnotationProvider extends GObject.Object {
        static $gtype: GObject.GType<AnnotationProvider>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotationProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotationProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AnnotationProvider;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotationProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotationProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotationProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotationProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotationProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Used to populate the {@link HoverDisplay} asynchronously, use
         * {@link AnnotationProvider.populate_hover} to do it synchronously.
         * @param annotation a {@link GtkSource.Annotation}
         * @param display a {@link GtkSource.HoverDisplay} to populate
         * @param cancellable 
         * @param callback 
         * @virtual
         */
        vfunc_populate_hover_async(annotation: Annotation, display: HoverDisplay, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes populating the {@link HoverDisplay} asynchronously.
         * @param result 
         * @virtual
         */
        vfunc_populate_hover_finish(result: Gio.AsyncResult): boolean;

        // Methods
        /**
         * Add an annotation to the provider.
         * @param annotation 
         */
        add_annotation(annotation: Annotation): void;

        /**
         * Used to populate the {@link HoverDisplay} asynchronously, use
         * {@link AnnotationProvider.populate_hover} to do it synchronously.
         * @param annotation a {@link GtkSource.Annotation}
         * @param display a {@link GtkSource.HoverDisplay} to populate
         * @param cancellable 
         */
        populate_hover_async(annotation: Annotation, display: HoverDisplay, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Used to populate the {@link HoverDisplay} asynchronously, use
         * {@link AnnotationProvider.populate_hover} to do it synchronously.
         * @param annotation a {@link GtkSource.Annotation}
         * @param display a {@link GtkSource.HoverDisplay} to populate
         * @param cancellable 
         * @param callback 
         */
        populate_hover_async(annotation: Annotation, display: HoverDisplay, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Used to populate the {@link HoverDisplay} asynchronously, use
         * {@link AnnotationProvider.populate_hover} to do it synchronously.
         * @param annotation a {@link GtkSource.Annotation}
         * @param display a {@link GtkSource.HoverDisplay} to populate
         * @param cancellable 
         * @param callback 
         */
        populate_hover_async(annotation: Annotation, display: HoverDisplay, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes populating the {@link HoverDisplay} asynchronously.
         * @param result 
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        populate_hover_finish(result: Gio.AsyncResult): boolean;

        /**
         * Removes all annotations from the provider.
         */
        remove_all(): void;

        /**
         * Remove an annotation from the provider.
         * @param annotation 
         * @returns `true` if the annotation was found and removed
         */
        remove_annotation(annotation: Annotation): boolean;
    }


    namespace Annotations {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Use this object to manage {@link Annotation}s. Each {@link View} has a single annotation
     * manager and it is guaranteed to be the same for the lifetime of {@link View}.
     * 
     * Add {@link AnnotationProvider}s with {@link Annotations.add_provider} to
     * display all the annotations added to each {@link AnnotationProvider}.
     * @gir-type Class
     * @since 5.18
     */
    class Annotations extends GObject.Object {
        static $gtype: GObject.GType<Annotations>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Annotations.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Annotations.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Annotations.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annotations.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Annotations.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Annotations.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Annotations.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Annotations.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a new annotation provider.
         * @param provider a {@link GtkSource.AnnotationProvider}.
         */
        add_provider(provider: AnnotationProvider): void;

        /**
         * Removes a provider.
         * @param provider a {@link GtkSource.AnnotationProvider}.
         * @returns `true` if the provider was found and removed
         */
        remove_provider(provider: AnnotationProvider): boolean;
    }


    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextBuffer.SignalSignatures {
            /**
             * `iter` is set to a valid iterator pointing to the matching bracket
             * if `state` is {@link GtkSource.BracketMatchType.FOUND}. Otherwise `iter` is
             * meaningless.
             * 
             * The signal is emitted only when the `state` changes, typically when
             * the cursor moves.
             * 
             * A use-case for this signal is to show messages in a {@link Gtk.Statusbar}.
             * @signal
             * @run-last
             */
            "bracket-matched": (arg0: (Gtk.TextIter | null), arg1: BracketMatchType) => void;
            /**
             * The "cursor-moved" signal is emitted when then insertion mark has moved.
             * @signal
             * @run-last
             */
            "cursor-moved": () => void;
            /**
             * The ::highlight-updated signal is emitted when the syntax
             * highlighting and [context classes](./class.Buffer.html#context-classes) are updated in a
             * certain region of the `buffer`.
             * @signal
             * @run-last
             */
            "highlight-updated": (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            /**
             * The ::source-mark-updated signal is emitted each time
             * a mark is added to, moved or removed from the `buffer`.
             * @signal
             * @run-last
             */
            "source-mark-updated": (arg0: Gtk.TextMark) => void;
            "notify::highlight-matching-brackets": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::implicit-trailing-newline": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::loading": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
            "notify::can-redo": (pspec: GObject.ParamSpec) => void;
            "notify::can-undo": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::enable-undo": (pspec: GObject.ParamSpec) => void;
            "notify::has-selection": (pspec: GObject.ParamSpec) => void;
            "notify::tag-table": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TextBuffer.ConstructorProps {
            highlight_matching_brackets: boolean;
            highlightMatchingBrackets: boolean;
            highlight_syntax: boolean;
            highlightSyntax: boolean;
            implicit_trailing_newline: boolean;
            implicitTrailingNewline: boolean;
            language: (Language | null);
            loading: boolean;
            style_scheme: (StyleScheme | null);
            styleScheme: (StyleScheme | null);
        }
    }

    /**
     * Subclass of {@link Gtk.TextBuffer}.
     * 
     * A {@link GtkSource.Buffer} object is the model for {@link View} widgets.
     * It extends the {@link Gtk.TextBuffer} class by adding features useful to display
     * and edit source code such as syntax highlighting and bracket matching.
     * 
     * To create a {@link GtkSource.Buffer} use {@link GtkSource.Buffer.new} or
     * {@link GtkSource.Buffer.new_with_language}. The second form is just a convenience
     * function which allows you to initially set a {@link Language}. You can also
     * directly create a {@link View} and get its {@link Buffer} with
     * {@link Gtk.TextView.get_buffer}.
     * 
     * The highlighting is enabled by default, but you can disable it with
     * {@link Buffer.set_highlight_syntax}.
     * 
     * # Context Classes:
     * 
     * It is possible to retrieve some information from the syntax highlighting
     * engine. The default context classes that are applied to regions of a
     * {@link GtkSource.Buffer}:
     * 
     *  - **comment**: the region delimits a comment;
     *  - **no-spell-check**: the region should not be spell checked;
     *  - **path**: the region delimits a path to a file;
     *  - **string**: the region delimits a string.
     * 
     * Custom language definition files can create their own context classes,
     * since the functions like {@link Buffer.iter_has_context_class} take
     * a string parameter as the context class.
     * 
     * {@link GtkSource.Buffer} provides an API to access the context classes:
     * {@link Buffer.iter_has_context_class},
     * {@link Buffer.get_context_classes_at_iter},
     * {@link Buffer.iter_forward_to_context_class_toggle} and
     * {@link Buffer.iter_backward_to_context_class_toggle}.
     * 
     * And the `GtkSource.Buffer::highlight-updated` signal permits to be notified
     * when a context class region changes.
     * 
     * Each context class has also an associated {@link Gtk.TextTag} with the name
     * `gtksourceview:context-classes:<name>`. For example to
     * retrieve the {@link Gtk.TextTag} for the string context class, one can write:
     * ```c
     * GtkTextTagTable *tag_table;
     * GtkTextTag *tag;
     * 
     * tag_table = gtk_text_buffer_get_tag_table (buffer);
     * tag = gtk_text_tag_table_lookup (tag_table, "gtksourceview:context-classes:string");
     * ```
     * ```python
     * buffer = GtkSource.Buffer()
     * 
     * tag_table = buffer.get_tag_table()
     * tag = tag_table.lookup(name="gtksourceview:context-classes:string")
     * ```
     * 
     * The tag must be used for read-only purposes.
     * 
     * Accessing a context class via the associated {@link Gtk.TextTag} is less
     * convenient than the {@link GtkSource.Buffer} API, because:
     * 
     *  - The tag doesn't always exist, you need to listen to the
     *    `Gtk.TextTagTable::tag-added` and `Gtk.TextTagTable::tag-removed` signals.
     *  - Instead of the `GtkSource.Buffer::highlight-updated` signal, you can listen
     *    to the `Gtk.TextBuffer::apply-tag` and `Gtk.TextBuffer::remove-tag` signals.
     * 
     * A possible use-case for accessing a context class via the associated
     * {@link Gtk.TextTag} is to read the region but without adding a hard dependency on the
     * GtkSourceView library (for example for a spell-checking library that wants to
     * read the no-spell-check region).
     * @gir-type Class
     */
    class Buffer extends Gtk.TextBuffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties
        /**
         * Whether to highlight matching brackets in the buffer.
         * @default true
         */
        get highlight_matching_brackets(): boolean;
        set highlight_matching_brackets(val: boolean);

        /**
         * Whether to highlight matching brackets in the buffer.
         * @default true
         */
        get highlightMatchingBrackets(): boolean;
        set highlightMatchingBrackets(val: boolean);

        /**
         * Whether to highlight syntax in the buffer.
         * @default true
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);

        /**
         * Whether to highlight syntax in the buffer.
         * @default true
         */
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);

        /**
         * Whether the buffer has an implicit trailing newline. See
         * {@link Buffer.set_implicit_trailing_newline}.
         * @default true
         */
        get implicit_trailing_newline(): boolean;
        set implicit_trailing_newline(val: boolean);

        /**
         * Whether the buffer has an implicit trailing newline. See
         * {@link Buffer.set_implicit_trailing_newline}.
         * @default true
         */
        get implicitTrailingNewline(): boolean;
        set implicitTrailingNewline(val: boolean);

        get language(): (Language | null);
        set language(val: (Language | null));

        /**
         * The "loading" property denotes that a {@link GtkSource.FileLoader} is
         * currently loading the buffer.
         * 
         * Applications may want to use this setting to avoid doing work
         * while the buffer is loading such as spellchecking.
         * @since 5.10
         * @read-only
         * @default false
         */
        get loading(): boolean;

        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        get style_scheme(): (StyleScheme | null);
        set style_scheme(val: (StyleScheme | null));

        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        get styleScheme(): (StyleScheme | null);
        set styleScheme(val: (StyleScheme | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buffer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](table: (Gtk.TextTagTable | null)): Buffer;

        static new_with_language(language: Language): Buffer;

        // Signals
        /** @signal */
        connect<K extends keyof Buffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Buffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Buffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param iter 
         * @param state 
         * @virtual
         */
        vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;

        // Methods
        /**
         * Moves `iter` to the position of the previous {@link Mark} of the given
         * category.
         * 
         * Returns `true` if `iter` was moved. If `category` is NULL, the
         * previous source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or `null`
         * @returns whether `iter` was moved.
         */
        backward_iter_to_source_mark(iter: Gtk.TextIter, category: (string | null)): [boolean, Gtk.TextIter];

        /**
         * Changes the case of the text between the specified iterators.
         * 
         * Since 5.4, this function will update the position of `start` and
         * `end` to surround the modified text.
         * @param case_type how to change the case.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         */
        change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;

        /**
         * Creates a source mark in the `buffer` of category `category`.
         * 
         * A source mark is a {@link Gtk.TextMark} but organized into categories.
         * Depending on the category a pixbuf can be specified that will be displayed
         * along the line of the mark.
         * 
         * Like a {@link Gtk.TextMark}, a {@link Mark} can be anonymous if the
         * passed `name` is `null`.  Also, the buffer owns the marks so you
         * shouldn't unreference it.
         * 
         * Marks always have left gravity and are moved to the beginning of
         * the line when the user deletes the line they were in.
         * 
         * Typical uses for a source mark are bookmarks, breakpoints, current
         * executing instruction indication in a source file, etc..
         * @param name the name of the mark, or `null`.
         * @param category a string defining the mark category.
         * @param where location to place the mark.
         * @returns a new {@link Mark}, owned by the buffer.
         */
        create_source_mark(name: (string | null), category: string, where: Gtk.TextIter): Mark;

        /**
         * Forces buffer to analyze and highlight the given area synchronously.
         * 
         * **Note**:
         * 
         * This is a potentially slow operation and should be used only
         * when you need to make sure that some text not currently
         * visible is highlighted, for instance before printing.
         * @param start start of the area to highlight.
         * @param end end of the area to highlight.
         */
        ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;

        /**
         * Moves `iter` to the position of the next {@link Mark} of the given
         * `category`.
         * 
         * Returns `true` if `iter` was moved. If `category` is NULL, the
         * next source mark can be of any category.
         * @param iter an iterator.
         * @param category category to search for, or `null`
         * @returns whether `iter` was moved.
         */
        forward_iter_to_source_mark(iter: Gtk.TextIter, category: (string | null)): [boolean, Gtk.TextIter];

        /**
         * Get all defined context classes at `iter`.
         * 
         * See the {@link Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @returns a new `null` terminated array of context class names. Use `g_strfreev()` to free the array if it is no longer needed.
         */
        get_context_classes_at_iter(iter: Gtk.TextIter): string[];

        /**
         * Determines whether bracket match highlighting is activated for the
         * source buffer.
         * @returns `true` if the source buffer will highlight matching brackets.
         */
        get_highlight_matching_brackets(): boolean;

        /**
         * Determines whether syntax highlighting is activated in the source
         * buffer.
         * @returns `true` if syntax highlighting is enabled, `false` otherwise.
         */
        get_highlight_syntax(): boolean;

        /**
         * @returns whether the `buffer` has an implicit trailing newline.
         */
        get_implicit_trailing_newline(): boolean;

        /**
         * Returns the {@link Language} associated with the buffer,
         * see {@link Buffer.set_language}.
         * 
         * The returned object should not be unreferenced by the user.
         * @returns the {@link Language} associated with the buffer, or `null`.
         */
        get_language(): (Language | null);

        get_loading(): boolean;

        /**
         * Returns the text in the specified range converting any text formatting
         * to equivalent Pango markup tags.
         * This allows the styled text to be displayed in other widgets that support
         * Pango markup, such as {@link Gtk.Label}.
         * 
         * For very long ranges this function can take long enough that you could
         * potentially miss frame renderings.
         * @param start start of range as a {@link Gtk.TextIter}
         * @param end end of range as a {@link Gtk.TextIter}
         * @returns a newly-allocated string containing the text   with Pango markup, or `null` if `start` and `end` are invalid.
         */
        get_markup(start: Gtk.TextIter, end: Gtk.TextIter): string;

        /**
         * Returns the list of marks of the given category at `iter`.
         * 
         * If `category` is `null` it returns all marks at `iter`.
         * @param iter an iterator.
         * @param category category to search for, or `null`
         * @returns a newly allocated {@link GLib.SList}.
         */
        get_source_marks_at_iter(iter: Gtk.TextIter, category: (string | null)): Mark[];

        /**
         * Returns the list of marks of the given category at `line`.
         * 
         * If `category` is `null`, all marks at `line` are returned.
         * @param line a line number.
         * @param category category to search for, or `null`
         * @returns a newly allocated {@link GLib.SList}.
         */
        get_source_marks_at_line(line: number, category: (string | null)): Mark[];

        /**
         * Returns the {@link StyleScheme} associated with the buffer,
         * see {@link Buffer.set_style_scheme}.
         * 
         * The returned object should not be unreferenced by the user.
         * @returns the {@link StyleScheme} associated with the buffer, or `null`.
         */
        get_style_scheme(): (StyleScheme | null);

        /**
         * Moves backward to the next toggle (on or off) of the context class.
         * 
         * If no matching context class toggles are found, returns `false`, otherwise `true`.
         * Does not return toggles located at `iter`, only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         * 
         * See the {@link Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class the context class.
         * @returns whether we found a context class toggle before `iter`
         */
        iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];

        /**
         * Moves forward to the next toggle (on or off) of the context class.
         * 
         * If no matching context class toggles are found, returns `false`, otherwise `true`.
         * Does not return toggles located at `iter`, only toggles after `iter`. Sets
         * `iter` to the location of the toggle, or to the end of the buffer if no
         * toggle is found.
         * 
         * See the {@link Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class the context class.
         * @returns whether we found a context class toggle after `iter`
         */
        iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];

        /**
         * Check if the class `context_class` is set on `iter`.
         * 
         * See the {@link Buffer} description for the list of default context classes.
         * @param iter a {@link Gtk.TextIter}.
         * @param context_class class to search for.
         * @returns whether `iter` has the context class.
         */
        iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;

        /**
         * Joins the lines of text between the specified iterators.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         */
        join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

        /**
         * Remove all marks of `category` between `start` and `end` from the buffer.
         * 
         * If `category` is NULL, all marks in the range will be removed.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param category category to search for, or `null`.
         */
        remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category: (string | null)): void;

        /**
         * Controls the bracket match highlighting function in the buffer.
         * 
         * If activated, when you position your cursor over a bracket character
         * (a parenthesis, a square bracket, etc.) the matching opening or
         * closing bracket character will be highlighted.
         * @param highlight `true` if you want matching brackets highlighted.
         */
        set_highlight_matching_brackets(highlight: boolean): void;

        /**
         * Controls whether syntax is highlighted in the buffer.
         * 
         * If `highlight` is `true`, the text will be highlighted according to the syntax
         * patterns specified in the {@link Language} set with {@link Buffer.set_language}.
         * 
         * If `highlight` is `false`, syntax highlighting is disabled and all the
         * {@link Gtk.TextTag} objects that have been added by the syntax highlighting engine
         * are removed from the buffer.
         * @param highlight `true` to enable syntax highlighting, `false` to disable it.
         */
        set_highlight_syntax(highlight: boolean): void;

        /**
         * Sets whether the `buffer` has an implicit trailing newline.
         * 
         * If an explicit trailing newline is present in a {@link Gtk.TextBuffer}, {@link Gtk.TextView}
         * shows it as an empty line. This is generally not what the user expects.
         * 
         * If `implicit_trailing_newline` is `true` (the default value):
         *  - when a {@link FileLoader} loads the content of a file into the `buffer`,
         *    the trailing newline (if present in the file) is not inserted into the
         *    `buffer`.
         *  - when a {@link FileSaver} saves the content of the `buffer` into a file, a
         *    trailing newline is added to the file.
         * 
         * On the other hand, if `implicit_trailing_newline` is `false`, the file's
         * content is not modified when loaded into the `buffer`, and the `buffer`'s
         * content is not modified when saved into a file.
         * @param implicit_trailing_newline the new value.
         */
        set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;

        /**
         * Associates a {@link Language} with the buffer.
         * 
         * Note that a {@link Language} affects not only the syntax highlighting, but
         * also the [context classes](./class.Buffer.html#context-classes). If you want to disable just the
         * syntax highlighting, see {@link Buffer.set_highlight_syntax}.
         * 
         * The buffer holds a reference to `language`.
         * @param language a {@link GtkSource.Language} to set, or `null`.
         */
        set_language(language: (Language | null)): void;

        /**
         * Sets a {@link StyleScheme} to be used by the buffer and the view.
         * 
         * Note that a {@link StyleScheme} affects not only the syntax highlighting,
         * but also other {@link View} features such as highlighting the current line,
         * matching brackets, the line numbers, etc.
         * 
         * Instead of setting a `null` `scheme`, it is better to disable syntax
         * highlighting with {@link Buffer.set_highlight_syntax}, and setting the
         * {@link StyleScheme} with the "classic" or "tango" ID, because those two
         * style schemes follow more closely the GTK theme (for example for the
         * background color).
         * 
         * The buffer holds a reference to `scheme`.
         * @param scheme a {@link GtkSource.StyleScheme} or `null`.
         */
        set_style_scheme(scheme: (StyleScheme | null)): void;

        /**
         * Sort the lines of text between the specified iterators.
         * @param start a {@link Gtk.TextIter}.
         * @param end a {@link Gtk.TextIter}.
         * @param flags {@link GtkSource.SortFlags} specifying how the sort should behave
         * @param column sort considering the text starting at the given column
         */
        sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
    }


    namespace Completion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "hide" signal is emitted when the completion window should
             * be hidden.
             * @signal
             * @action
             * @run-last
             */
            hide: () => void;
            /**
             * The "provided-added" signal is emitted when a new provider is
             * added to the completion.
             * @signal
             * @run-last
             */
            "provider-added": (arg0: CompletionProvider) => void;
            /**
             * The "provided-removed" signal is emitted when a provider has
             * been removed from the completion.
             * @signal
             * @run-last
             */
            "provider-removed": (arg0: CompletionProvider) => void;
            /**
             * The "show" signal is emitted when the completion window should
             * be shown.
             * @signal
             * @action
             * @run-last
             */
            show: () => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::page-size": (pspec: GObject.ParamSpec) => void;
            "notify::remember-info-visibility": (pspec: GObject.ParamSpec) => void;
            "notify::select-on-show": (pspec: GObject.ParamSpec) => void;
            "notify::show-icons": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextView;
            page_size: number;
            pageSize: number;
            remember_info_visibility: boolean;
            rememberInfoVisibility: boolean;
            select_on_show: boolean;
            selectOnShow: boolean;
            show_icons: boolean;
            showIcons: boolean;
            view: View;
        }
    }

    /**
     * Main Completion Object.
     * 
     * The completion system helps the user when they writes some text,
     * such as words, command names, functions, and suchlike. Proposals can
     * be shown, to complete the text the user is writing. Each proposal can
     * contain an additional piece of information (for example
     * documentation), that is displayed when the "Details" button is
     * clicked.
     * 
     * Proposals are created via a {@link CompletionProvider}. There can
     * be for example a provider to complete words (see {@link CompletionWords}),
     * another provider for the completion of
     * function names, etc. To add a provider, call
     * {@link Completion.add_provider}.
     * 
     * The {@link CompletionProposal} interface represents a proposal.
     * 
     * If a proposal contains extra information (see
     * {@link GtkSource.CompletionColumn.DETAILS}), it will be
     * displayed in a supplemental details window, which appears when
     * the "Details" button is clicked.
     * 
     * Each {@link View} object is associated with a {@link Completion}
     * instance. This instance can be obtained with
     * {@link View.get_completion}. The {@link View} class contains also the
     * `GtkSource.View::show-completion` signal.
     * 
     * A same {@link CompletionProvider} object can be used for several
     * {@link GtkSource.Completion}'s.
     * @gir-type Class
     */
    class Completion extends GObject.Object {
        static $gtype: GObject.GType<Completion>;

        // Properties
        /**
         * The {@link Gtk.TextBuffer} for the {@link GtkSource.Completion.view}.
         * This is a convenience property for providers.
         * @read-only
         */
        get buffer(): Gtk.TextView;

        /**
         * The number of rows to display to the user before scrolling.
         * @default 5
         */
        get page_size(): number;
        set page_size(val: number);

        /**
         * The number of rows to display to the user before scrolling.
         * @default 5
         */
        get pageSize(): number;
        set pageSize(val: number);

        /**
         * Determines whether the visibility of the info window should be saved when the
         * completion is hidden, and restored when the completion is shown again.
         * @default false
         */
        get remember_info_visibility(): boolean;
        set remember_info_visibility(val: boolean);

        /**
         * Determines whether the visibility of the info window should be saved when the
         * completion is hidden, and restored when the completion is shown again.
         * @default false
         */
        get rememberInfoVisibility(): boolean;
        set rememberInfoVisibility(val: boolean);

        /**
         * Determines whether the first proposal should be selected when the completion
         * is first shown.
         * @default false
         */
        get select_on_show(): boolean;
        set select_on_show(val: boolean);

        /**
         * Determines whether the first proposal should be selected when the completion
         * is first shown.
         * @default false
         */
        get selectOnShow(): boolean;
        set selectOnShow(val: boolean);

        /**
         * The "show-icons" property denotes if icons should be displayed within
         * the list of completions presented to the user.
         * @default true
         */
        get show_icons(): boolean;
        set show_icons(val: boolean);

        /**
         * The "show-icons" property denotes if icons should be displayed within
         * the list of completions presented to the user.
         * @default true
         */
        get showIcons(): boolean;
        set showIcons(val: boolean);

        /**
         * The "view" property is the {@link Gtk.TextView} for which this {@link GtkSource.Completion}
         * is providing completion features.
         * @construct-only
         */
        get view(): View;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Completion.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Completion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Completion.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * This will add `<b>` tags around matched characters in `haystack`
         * based on `casefold_query`.
         * @param haystack the string to be highlighted
         * @param casefold_query the typed-text used to highlight `haystack`
         */
        static fuzzy_highlight(haystack: string, casefold_query: string): (Pango.AttrList | null);

        /**
         * This helper function can do a fuzzy match for you giving a haystack and
         * casefolded needle.
         * 
         * Casefold your needle using {@link GLib.utf8_casefold} before
         * running the query.
         * 
         * Score will be set with the score of the match upon success. Otherwise,
         * it will be set to zero.
         * @param haystack the string to be searched.
         * @param casefold_needle A `g_utf8_casefold()` version of the needle.
         */
        static fuzzy_match(haystack: (string | null), casefold_needle: string): [boolean, number];

        // Methods
        /**
         * Adds a {@link CompletionProvider} to the list of providers to be queried
         * for completion results.
         * @param provider a {@link GtkSource.CompletionProvider}
         */
        add_provider(provider: CompletionProvider): void;

        block_interactive(): void;

        /**
         * Gets the connected {@link View}'s {@link Buffer}
         * @returns A {@link GtkSource.Buffer}
         */
        get_buffer(): Buffer;

        get_page_size(): number;

        /**
         * Gets the {@link View} that owns the {@link Completion}.
         * @returns A {@link GtkSource.View}
         */
        get_view(): View;

        /**
         * Emits the "hide" signal.
         * 
         * When the "hide" signal is emitted, the completion window will be
         * dismissed.
         */
        hide(): void;

        /**
         * Removes a {@link CompletionProvider} previously added with
         * {@link Completion.add_provider}.
         * @param provider a {@link GtkSource.CompletionProvider}
         */
        remove_provider(provider: CompletionProvider): void;

        /**
         * @param page_size 
         */
        set_page_size(page_size: number): void;

        /**
         * Emits the "show" signal.
         * 
         * When the "show" signal is emitted, the completion window will be
         * displayed if there are any results available.
         */
        show(): void;

        unblock_interactive(): void;
    }


    namespace CompletionCell {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::column": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::paintable": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
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
            column: CompletionColumn;
            markup: string;
            paintable: Gdk.Paintable;
            text: string;
            widget: (Gtk.Widget | null);
        }
    }

    /**
     * Widget for single cell of completion proposal.
     * 
     * The {@link GtkSource.CompletionCell} widget provides a container to display various
     * types of information with the completion display.
     * 
     * Each proposal may consist of multiple cells depending on the complexity of
     * the proposal. For example, programming language proposals may contain a cell
     * for the "left-hand-side" of an operation along with the "typed-text" for a
     * function name and "parameters". They may also optionally set an icon to
     * signify the kind of result.
     * 
     * A {@link CompletionProvider} should implement the
     * {@link CompletionProvider.display} virtual function to control
     * how to convert data from their {@link CompletionProposal} to content for
     * the {@link GtkSource.CompletionCell}.
     * @gir-type Class
     */
    class CompletionCell extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<CompletionCell>;

        // Properties
        /**
         * @construct-only
         * @default GtkSource.CompletionColumn.TYPED_TEXT
         */
        get column(): CompletionColumn;

        /**
         * @default null
         */
        get markup(): string;
        set markup(val: string);

        get paintable(): Gdk.Paintable;
        set paintable(val: Gdk.Paintable);

        /**
         * @default null
         */
        get text(): string;
        set text(val: string);

        get widget(): (Gtk.Widget | null);
        set widget(val: (Gtk.Widget | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionCell.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionCell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionCell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionCell.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionCell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionCell.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionCell.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionCell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_column(): CompletionColumn;

        /**
         * Gets the child {@link Gtk.Widget}, if any.
         * @returns a {@link Gtk.Widget} or `null`
         */
        get_widget(): (Gtk.Widget | null);

        /**
         * @param gicon 
         */
        set_gicon(gicon: Gio.Icon): void;

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param markup 
         */
        set_markup(markup: string): void;

        /**
         * @param paintable 
         */
        set_paintable(paintable: Gdk.Paintable): void;

        /**
         * Sets the text for the column cell. Use `null` to unset.
         * @param text the text to set or `null`
         */
        set_text(text: (string | null)): void;

        /**
         * @param text 
         * @param attrs 
         */
        set_text_with_attributes(text: string, attrs: Pango.AttrList): void;

        /**
         * @param child 
         */
        set_widget(child: Gtk.Widget): void;

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace CompletionContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a provider changes a model.
             * 
             * This signal is primarily useful for {@link GtkSource.CompletionProvider}'s
             * that want to track other providers in context. For example, it can
             * be used to create a "top results" provider.
             * @signal
             * @since 5.6
             * @run-last
             */
            "provider-model-changed": (arg0: CompletionProvider, arg1: (Gio.ListModel | null)) => void;
            "notify::busy": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::empty": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            busy: boolean;
            completion: (Completion | null);
            empty: boolean;
        }
    }

    /**
     * The context of a completion.
     * 
     * {@link GtkSource.CompletionContext} contains information about an attept to display
     * completion proposals to the user based on typed text in the {@link View}.
     * 
     * When typing, {@link Completion} may use registered
     * {@link CompletionProvider} to determine if there may be results which
     * could be displayed. If so, a {@link GtkSource.CompletionContext} is created with
     * information that is provided to the {@link CompletionProvider} to populate
     * results which might be useful to the user.
     * 
     * {@link CompletionProvider} are expected to provide {@link Gio.ListModel} with
     * {@link CompletionProposal} which may be joined together in a list of
     * results for the user. They are also responsible for how the contents are
     * displayed using {@link CompletionCell} which allows for some level of
     * customization.
     * @gir-type Class
     */
    class CompletionContext<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CompletionContext>;

        // Properties
        /**
         * The "busy" property is `true` while the completion context is
         * populating completion proposals.
         * @read-only
         * @default false
         */
        get busy(): boolean;

        /**
         * The "completion" is the {@link GtkSource.Completion} that was used to create the context.
         * @construct-only
         */
        get completion(): (Completion | null);

        /**
         * The "empty" property is `true` when there are no results.
         * 
         * It will be notified when the first result is added or the last
         * result is removed.
         * @read-only
         * @default true
         */
        get empty(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the mode for which the context was activated.
         */
        get_activation(): CompletionActivation;

        /**
         * Gets the bounds for the completion, which is the beginning of the
         * current word (taking break characters into account) to the current
         * insertion cursor.
         * 
         * If `begin` is non-`null`, it will be set to the start position of the
         * current word being completed.
         * 
         * If `end` is non-`null`, it will be set to the insertion cursor for the
         * current word being completed.
         * @returns `true` if the marks are still valid and `begin` or `end` was set.
         */
        get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];

        /**
         * Gets the underlying buffer used by the context.
         * 
         * This is a convenience function to get the buffer via the {@link GtkSource.Completion}
         * property.
         * @returns a {@link Gtk.TextBuffer} or `null`
         */
        get_buffer(): (Buffer | null);

        /**
         * Gets the "busy" property. This is set to `true` while the completion
         * context is actively fetching proposals from registered
         * {@link GtkSource.CompletionProvider}'s.
         * @returns `true` if the context is busy
         */
        get_busy(): boolean;

        /**
         * Gets the {@link GtkSource.Completion} that created the context.
         * @returns an {@link GtkSource.Completion} or `null`
         */
        get_completion(): (Completion | null);

        /**
         * Checks if any proposals have been provided to the context.
         * 
         * Out of convenience, this function will return `true` if `self` is `null`.
         * @returns `true` if there are no proposals in the context
         */
        get_empty(): boolean;

        /**
         * Gets the language of the underlying buffer, if any.
         * @returns a {@link GtkSource.Language} or `null`
         */
        get_language(): (Language | null);

        /**
         * Gets the {@link Gio.ListModel} associated with the provider.
         * 
         * You can connect to {@link GtkSource.CompletionContext.SignalSignatures.model_changed | GtkSource.CompletionContext::model-changed} to receive
         * notifications about when the model has been replaced by a new model.
         * @param provider a {@link GtkSource.CompletionProvider}
         * @returns a {@link Gio.ListModel} or `null`
         */
        get_proposals_for_provider(provider: CompletionProvider): (Gio.ListModel | null);

        /**
         * Gets the text view for the context.
         * @returns a {@link GtkSource.View} or `null`
         */
        get_view(): (View | null);

        /**
         * Gets the word that is being completed up to the position of the insert mark.
         * @returns a string containing the current word
         */
        get_word(): string;

        /**
         * Gets the providers that are associated with the context.
         * @returns a {@link Gio.ListModel} of {@link GtkSource.CompletionProvider}
         */
        list_providers(): Gio.ListModel;

        /**
         * This function allows providers to update their results for a context
         * outside of a call to {@link CompletionProvider.populate_async}.
         * 
         * This can be used to immediately return results for a provider while it does
         * additional asynchronous work. Doing so will allow the completions to
         * update while the operation is in progress.
         * @param provider an {@link GtkSource.CompletionProvider}
         * @param results a {@link Gio.ListModel} or `null`
         */
        set_proposals_for_provider(provider: CompletionProvider, results: (Gio.ListModel | null)): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): (A | null);

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): (A | null);

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    namespace CompletionSnippets {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProvider.ConstructorProps {
            priority: number;
            title: string;
        }
    }

    /**
     * A {@link CompletionProvider} for the completion of snippets.
     * 
     * The {@link GtkSource.CompletionSnippets} is an example of an implementation of
     * the {@link CompletionProvider} interface. The proposals are snippets
     * registered with the {@link SnippetManager}.
     * @gir-type Class
     */
    class CompletionSnippets extends GObject.Object implements CompletionProvider {
        static $gtype: GObject.GType<CompletionSnippets>;

        // Properties
        /**
         * @default 0
         */
        get priority(): number;
        set priority(val: number);

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionSnippets.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionSnippets.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CompletionSnippets;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionSnippets.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionSnippets.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionSnippets.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionSnippets.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionSnippets.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionSnippets.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         */
        activate(context: CompletionContext, proposal: CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         */
        display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         */
        get_priority(context: CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @returns a title for the provider or `null`
         */
        get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         */
        is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         */
        key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @returns a {@link GLib.PtrArray} of {@link GtkSource.CompletionProposal} or `null`.
         */
        list_alternates(context: CompletionContext, proposal: CompletionProposal): (CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.ListModel>;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.ListModel> | void);

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns a {@link Gio.ListModel} of {@link GtkSource.CompletionProposal}
         */
        populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         */
        refilter(context: CompletionContext, model: Gio.ListModel): void;

        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @virtual
         */
        vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         * @virtual
         */
        vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         * @virtual
         */
        vfunc_get_priority(context: CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @virtual
         */
        vfunc_get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         * @virtual
         */
        vfunc_is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         * @virtual
         */
        vfunc_key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @virtual
         */
        vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): (CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         * @virtual
         */
        vfunc_populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         * @virtual
         */
        vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
    }


    namespace CompletionWords {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::minimum-word-size": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::proposals-batch-size": (pspec: GObject.ParamSpec) => void;
            "notify::scan-batch-size": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProvider.ConstructorProps {
            minimum_word_size: number;
            minimumWordSize: number;
            priority: number;
            proposals_batch_size: number;
            proposalsBatchSize: number;
            scan_batch_size: number;
            scanBatchSize: number;
            title: string;
        }
    }

    /**
     * A {@link CompletionProvider} for the completion of words.
     * 
     * The {@link GtkSource.CompletionWords} is an example of an implementation of
     * the {@link CompletionProvider} interface. The proposals are words
     * appearing in the registered {@link Gtk.TextBuffer}s.
     * @gir-type Class
     */
    class CompletionWords extends GObject.Object implements CompletionProvider {
        static $gtype: GObject.GType<CompletionWords>;

        // Properties
        /**
         * @default 2
         */
        get minimum_word_size(): number;
        set minimum_word_size(val: number);

        /**
         * @default 2
         */
        get minimumWordSize(): number;
        set minimumWordSize(val: number);

        /**
         * @default 0
         */
        get priority(): number;
        set priority(val: number);

        /**
         * @default 300
         */
        get proposals_batch_size(): number;
        set proposals_batch_size(val: number);

        /**
         * @default 300
         */
        get proposalsBatchSize(): number;
        set proposalsBatchSize(val: number);

        /**
         * @default 50
         */
        get scan_batch_size(): number;
        set scan_batch_size(val: number);

        /**
         * @default 50
         */
        get scanBatchSize(): number;
        set scanBatchSize(val: number);

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionWords.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionWords.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null)): CompletionWords;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionWords.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionWords.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionWords.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionWords.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionWords.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionWords.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Registers `buffer` in the `words` provider.
         * @param buffer a {@link Gtk.TextBuffer}
         */
        register(buffer: Gtk.TextBuffer): void;

        /**
         * Unregisters `buffer` from the `words` provider.
         * @param buffer a {@link Gtk.TextBuffer}
         */
        unregister(buffer: Gtk.TextBuffer): void;

        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         */
        activate(context: CompletionContext, proposal: CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         */
        display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         */
        get_priority(context: CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @returns a title for the provider or `null`
         */
        get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         */
        is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         */
        key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @returns a {@link GLib.PtrArray} of {@link GtkSource.CompletionProposal} or `null`.
         */
        list_alternates(context: CompletionContext, proposal: CompletionProposal): (CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.ListModel>;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.ListModel> | void);

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns a {@link Gio.ListModel} of {@link GtkSource.CompletionProposal}
         */
        populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         */
        refilter(context: CompletionContext, model: Gio.ListModel): void;

        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @virtual
         */
        vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         * @virtual
         */
        vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         * @virtual
         */
        vfunc_get_priority(context: CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @virtual
         */
        vfunc_get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         * @virtual
         */
        vfunc_is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         * @virtual
         */
        vfunc_key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @virtual
         */
        vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): (CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         * @virtual
         */
        vfunc_populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         * @virtual
         */
        vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
    }


    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::compression-type": (pspec: GObject.ParamSpec) => void;
            "notify::encoding": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::newline-type": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            location: (Gio.File | null);
            newline_type: NewlineType;
            newlineType: NewlineType;
            read_only: boolean;
            readOnly: boolean;
        }
    }

    /**
     * On-disk representation of a {@link Buffer}.
     * 
     * A {@link GtkSource.File} object is the on-disk representation of a {@link Buffer}.
     * With a {@link GtkSource.File}, you can create and configure a {@link FileLoader}
     * and {@link FileSaver} which take by default the values of the
     * {@link GtkSource.File} properties (except for the file loader which auto-detect some
     * properties). On a successful load or save operation, the {@link GtkSource.File}
     * properties are updated. If an operation fails, the {@link GtkSource.File} properties
     * have still the previous valid values.
     * @gir-type Class
     */
    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties
        /**
         * The compression type.
         * @read-only
         * @default GtkSource.CompressionType.NONE
         */
        get compression_type(): CompressionType;

        /**
         * The compression type.
         * @read-only
         * @default GtkSource.CompressionType.NONE
         */
        get compressionType(): CompressionType;

        /**
         * The character encoding, initially `null`. After a successful file
         * loading or saving operation, the encoding is non-`null`.
         * @read-only
         */
        get encoding(): Encoding;

        /**
         * The location.
         */
        get location(): (Gio.File | null);
        set location(val: (Gio.File | null));

        /**
         * The line ending type.
         * @read-only
         * @default GtkSource.NewlineType.LF
         */
        get newline_type(): NewlineType;

        /**
         * The line ending type.
         * @read-only
         * @default GtkSource.NewlineType.LF
         */
        get newlineType(): NewlineType;

        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         * @read-only
         * @default false
         */
        get read_only(): boolean;

        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         * @read-only
         * @default false
         */
        get readOnly(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): File;

        // Signals
        /** @signal */
        connect<K extends keyof File.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, File.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof File.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, File.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof File.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks synchronously the file on disk, to know whether the file is externally
         * modified, or has been deleted, and whether the file is read-only.
         * 
         * {@link GtkSource.File} doesn't create a {@link Gio.FileMonitor} to track those properties, so
         * this function needs to be called instead. Creating lots of {@link Gio.FileMonitor}'s
         * would take lots of resources.
         * 
         * Since this function is synchronous, it is advised to call it only on local
         * files. See {@link File.is_local}.
         */
        check_file_on_disk(): void;

        /**
         * @returns the compression type.
         */
        get_compression_type(): CompressionType;

        /**
         * The encoding is initially `null`. After a successful file loading or saving
         * operation, the encoding is non-`null`.
         * @returns the character encoding.
         */
        get_encoding(): Encoding;

        /**
         * @returns the {@link Gio.File}.
         */
        get_location(): (Gio.File | null);

        /**
         * @returns the newline type.
         */
        get_newline_type(): NewlineType;

        /**
         * Returns whether the file has been deleted. If the
         * {@link File.location} is `null`, returns `false`.
         * 
         * To have an up-to-date value, you must first call
         * {@link File.check_file_on_disk}.
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;

        /**
         * Returns whether the file is externally modified. If the
         * {@link File.location} is `null`, returns `false`.
         * 
         * To have an up-to-date value, you must first call
         * {@link File.check_file_on_disk}.
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;

        /**
         * Returns whether the file is local. If the {@link File.location} is `null`,
         * returns `false`.
         * @returns whether the file is local.
         */
        is_local(): boolean;

        /**
         * Returns whether the file is read-only. If the
         * {@link File.location} is `null`, returns `false`.
         * 
         * To have an up-to-date value, you must first call
         * {@link File.check_file_on_disk}.
         * @returns whether the file is read-only.
         */
        is_readonly(): boolean;

        /**
         * Sets the location.
         * @param location the new {@link Gio.File}, or `null`.
         */
        set_location(location: (Gio.File | null)): void;
    }


    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::input-stream": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            file: File;
            input_stream: (Gio.InputStream | null);
            inputStream: (Gio.InputStream | null);
            location: (Gio.File | null);
        }
    }

    /**
     * Load a file into a GtkSourceBuffer.
     * 
     * A {@link GtkSource.FileLoader} object permits to load the contents of a {@link Gio.File} or a
     * {@link Gio.InputStream} into a {@link Buffer}.
     * 
     * A file loader should be used only for one load operation, including errors
     * handling. If an error occurs, you can reconfigure the loader and relaunch the
     * operation with {@link FileLoader.load_async}.
     * 
     * Running a {@link GtkSource.FileLoader} is an undoable action for the
     * {@link Buffer}.
     * 
     * After a file loading, the buffer is reset to the contents provided by the
     * {@link Gio.File} or {@link Gio.InputStream}, so the buffer is set as “unmodified”, that is,
     * {@link Gtk.TextBuffer.set_modified} is called with `false`. If the contents isn't
     * saved somewhere (for example if you load from stdin), then you should
     * probably call {@link Gtk.TextBuffer.set_modified} with `true` after calling
     * {@link FileLoader.load_finish}.
     * @gir-type Class
     */
    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties
        /**
         * The {@link GtkSource.Buffer} to load the contents into. The
         * {@link GtkSource.FileLoader} object has a weak reference to the buffer.
         * @construct-only
         */
        get buffer(): Buffer;

        /**
         * The {@link GtkSource.File}. The {@link GtkSource.FileLoader} object has a weak
         * reference to the file.
         * @construct-only
         */
        get file(): File;

        /**
         * The {@link Gio.InputStream} to load. Useful for reading stdin. If this property
         * is set, the {@link GtkSource.FileLoader.location} property is ignored.
         * @construct-only
         */
        get input_stream(): (Gio.InputStream | null);

        /**
         * The {@link Gio.InputStream} to load. Useful for reading stdin. If this property
         * is set, the {@link GtkSource.FileLoader.location} property is ignored.
         * @construct-only
         */
        get inputStream(): (Gio.InputStream | null);

        /**
         * The {@link Gio.File} to load. If the {@link GtkSource.FileLoader.input_stream} is
         * `null`, by default the location is taken from the {@link GtkSource.File} at
         * construction time.
         * @construct-only
         */
        get location(): (Gio.File | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLoader.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](buffer: Buffer, file: File): FileLoader;

        static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

        // Signals
        /** @signal */
        connect<K extends keyof FileLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileLoader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the {@link GtkSource.Buffer} to load the contents into.
         */
        get_buffer(): Buffer;

        /**
         * @returns the detected compression type.
         */
        get_compression_type(): CompressionType;

        /**
         * @returns the detected file encoding.
         */
        get_encoding(): Encoding;

        /**
         * @returns the {@link GtkSource.File}.
         */
        get_file(): File;

        /**
         * @returns the {@link Gio.InputStream} to load, or `null` if a {@link Gio.File} is used.
         */
        get_input_stream(): (Gio.InputStream | null);

        /**
         * @returns the {@link Gio.File} to load, or `null` if an input stream is used.
         */
        get_location(): (Gio.File | null);

        /**
         * @returns the detected newline type.
         */
        get_newline_type(): NewlineType;

        /**
         * Loads asynchronously the file or input stream contents into the {@link Buffer}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with progress information, or `null` if progress   information is not needed.
         */
        load_async(io_priority: number, cancellable: (Gio.Cancellable | null), progress_callback: (Gio.FileProgressCallback | null)): globalThis.Promise<boolean>;

        /**
         * Loads asynchronously the file or input stream contents into the {@link Buffer}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with progress information, or `null` if progress   information is not needed.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(io_priority: number, cancellable: (Gio.Cancellable | null), progress_callback: (Gio.FileProgressCallback | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Loads asynchronously the file or input stream contents into the {@link Buffer}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this
         * function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with progress information, or `null` if progress   information is not needed.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        load_async(io_priority: number, cancellable: (Gio.Cancellable | null), progress_callback: (Gio.FileProgressCallback | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes a file loading started with {@link FileLoader.load_async}.
         * 
         * If the contents has been loaded, the following {@link File} properties will
         * be updated: the location, the encoding, the newline type and the compression
         * type.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the contents has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;

        /**
         * Sets the candidate encodings for the file loading.
         * 
         * The encodings are tried in the same order as the list.
         * 
         * For convenience, `candidate_encodings` can contain duplicates. Only the first
         * occurrence of a duplicated encoding is kept in the list.
         * 
         * By default the candidate encodings are (in that order in the list):
         * 
         * 1. If set, the {@link File}'s encoding as returned by {@link File.get_encoding}.
         * 2. The default candidates as returned by {@link Encoding.get_default_candidates}.
         * @param candidate_encodings a list of   {@link GtkSource.Encoding}<!-- -->s.
         */
        set_candidate_encodings(candidate_encodings: Encoding[]): void;
    }


    namespace FileSaver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::compression-type": (pspec: GObject.ParamSpec) => void;
            "notify::encoding": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::newline-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            file: File;
            flags: FileSaverFlags;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
        }
    }

    /**
     * Save a {@link Buffer} into a file.
     * 
     * A {@link GtkSource.FileSaver} object permits to save a {@link Buffer} into a
     * {@link Gio.File}.
     * 
     * A file saver should be used only for one save operation, including errors
     * handling. If an error occurs, you can reconfigure the saver and relaunch the
     * operation with {@link FileSaver.save_async}.
     * @gir-type Class
     */
    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties
        /**
         * The {@link GtkSource.Buffer} to save. The {@link GtkSource.FileSaver} object has a
         * weak reference to the buffer.
         * @construct-only
         */
        get buffer(): Buffer;

        /**
         * The compression type.
         * @default GtkSource.CompressionType.NONE
         */
        get compression_type(): CompressionType;
        set compression_type(val: CompressionType);

        /**
         * The compression type.
         * @default GtkSource.CompressionType.NONE
         */
        get compressionType(): CompressionType;
        set compressionType(val: CompressionType);

        /**
         * The file's encoding.
         */
        get encoding(): Encoding;
        set encoding(val: Encoding);

        /**
         * The {@link GtkSource.File}. The {@link GtkSource.FileSaver} object has a weak
         * reference to the file.
         * @construct-only
         */
        get file(): File;

        /**
         * File saving flags.
         * @default GtkSource.FileSaverFlags.NONE
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);

        /**
         * The {@link Gio.File} where to save the buffer. By default the location is taken
         * from the {@link GtkSource.File} at construction time.
         * @construct-only
         */
        get location(): Gio.File;

        /**
         * The newline type.
         * @default GtkSource.NewlineType.LF
         */
        get newline_type(): NewlineType;
        set newline_type(val: NewlineType);

        /**
         * The newline type.
         * @default GtkSource.NewlineType.LF
         */
        get newlineType(): NewlineType;
        set newlineType(val: NewlineType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSaver.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Signals
        /** @signal */
        connect<K extends keyof FileSaver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileSaver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileSaver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileSaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the {@link GtkSource.Buffer} to save.
         */
        get_buffer(): Buffer;

        /**
         * @returns the compression type.
         */
        get_compression_type(): CompressionType;

        /**
         * @returns the encoding.
         */
        get_encoding(): Encoding;

        /**
         * @returns the {@link GtkSource.File}.
         */
        get_file(): File;

        /**
         * @returns the flags.
         */
        get_flags(): FileSaverFlags;

        /**
         * @returns the {@link Gio.File} where to save the buffer to.
         */
        get_location(): Gio.File;

        /**
         * @returns the newline type.
         */
        get_newline_type(): NewlineType;

        /**
         * Saves asynchronously the buffer into the file.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with progress information, or `null` if progress   information is not needed.
         */
        save_async(io_priority: number, cancellable: (Gio.Cancellable | null), progress_callback: (Gio.FileProgressCallback | null)): globalThis.Promise<boolean>;

        /**
         * Saves asynchronously the buffer into the file.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with progress information, or `null` if progress   information is not needed.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(io_priority: number, cancellable: (Gio.Cancellable | null), progress_callback: (Gio.FileProgressCallback | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Saves asynchronously the buffer into the file.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. `G_PRIORITY_LOW`,   `G_PRIORITY_DEFAULT` or `G_PRIORITY_HIGH`.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param progress_callback function to call back with progress information, or `null` if progress   information is not needed.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is   satisfied.
         */
        save_async(io_priority: number, cancellable: (Gio.Cancellable | null), progress_callback: (Gio.FileProgressCallback | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes a file saving started with {@link FileSaver.save_async}.
         * 
         * If the file has been saved successfully, the following {@link File}
         * properties will be updated: the location, the encoding, the newline type and
         * the compression type.
         * 
         * Since the 3.20 version, {@link Gtk.TextBuffer.set_modified} is called with `false`
         * if the file has been saved successfully.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether the file was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;

        /**
         * Sets the compression type. By default the compression type is taken from the
         * {@link GtkSource.File}.
         * @param compression_type the new compression type.
         */
        set_compression_type(compression_type: CompressionType): void;

        /**
         * Sets the encoding. If `encoding` is `null`, the UTF-8 encoding will be set.
         * 
         * By default the encoding is taken from the {@link GtkSource.File}.
         * @param encoding the new encoding, or `null` for UTF-8.
         */
        set_encoding(encoding: (Encoding | null)): void;

        /**
         * @param flags the new flags.
         */
        set_flags(flags: FileSaverFlags): void;

        /**
         * Sets the newline type. By default the newline type is taken from the
         * {@link GtkSource.File}.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType): void;
    }


    namespace Gutter {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::window-type": (pspec: GObject.ParamSpec) => void;
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
            view: View;
            window_type: Gtk.TextWindowType;
            windowType: Gtk.TextWindowType;
        }
    }

    /**
     * Gutter object for {@link View}.
     * 
     * The {@link GtkSource.Gutter} object represents the left or right gutter of the text
     * view. It is used by {@link View} to draw the line numbers and
     * {@link Mark}s that might be present on a line. By packing
     * additional {@link GutterRenderer} objects in the gutter, you can extend the
     * gutter with your own custom drawings.
     * 
     * To get a {@link GtkSource.Gutter}, use the {@link View.get_gutter} function.
     * 
     * The gutter works very much the same way as cells rendered in a {@link Gtk.TreeView}.
     * The concept is similar, with the exception that the gutter does not have an
     * underlying {@link Gtk.TreeModel}. The builtin line number renderer is at position
     * {@link GtkSource.ViewGutterPosition.LINES} (-30) and the marks renderer is at
     * {@link GtkSource.ViewGutterPosition.MARKS} (-20). The gutter sorts the renderers
     * in ascending order, from left to right. So the marks are displayed on the
     * right of the line numbers.
     * @gir-type Class
     */
    class Gutter extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Gutter>;

        // Properties
        /**
         * The {@link GtkSource.View} of the gutter.
         * @construct-only
         */
        get view(): View;

        /**
         * The text window type on which the window is placed.
         * @construct-only
         * @default Gtk.TextWindowType.LEFT
         */
        get window_type(): Gtk.TextWindowType;

        /**
         * The text window type on which the window is placed.
         * @construct-only
         * @default Gtk.TextWindowType.LEFT
         */
        get windowType(): Gtk.TextWindowType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Gutter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Gutter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Gutter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Gutter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Gutter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Gutter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Gutter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the associated {@link GtkSource.View}.
         */
        get_view(): View;

        /**
         * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
         * claims its ownership. Otherwise just increases renderer's reference count.
         * `renderer` cannot be already inserted to another gutter.
         * @param renderer a gutter renderer (must inherit from {@link GtkSource.GutterRenderer}).
         * @param position the renderer position.
         * @returns `true` if operation succeeded. Otherwise `false`.
         */
        insert(renderer: GutterRenderer, position: number): boolean;

        /**
         * @param renderer 
         */
        remove(renderer: GutterRenderer): void;

        /**
         * Reorders `renderer` in `gutter` to new `position`.
         * @param renderer a {@link Gtk.CellRenderer}.
         * @param position the new renderer position.
         */
        reorder(renderer: GutterRenderer, position: number): void;

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace GutterLines {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Collected information about visible lines.
     * 
     * The {@link GtkSource.GutterLines} object is used to collect information about
     * visible lines.
     * 
     * Use this from your `GtkSource.GutterRenderer::query-data` to collect the
     * necessary information on visible lines. Doing so reduces the number of
     * passes through the text btree allowing GtkSourceView to reach more
     * frames-per-second while performing kinetic scrolling.
     * @gir-type Class
     */
    class GutterLines extends GObject.Object {
        static $gtype: GObject.GType<GutterLines>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterLines.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GutterLines.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GutterLines.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterLines.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GutterLines.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterLines.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GutterLines.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterLines.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds the class `name` to `line`.
         * 
         * `name` will be converted to a {@link GLib.Quark} as part of this process. A
         * faster version of this function is available via
         * {@link GutterLines.add_qclass} for situations where the {@link GLib.Quark} is
         * known ahead of time.
         * @param line a line number starting from zero
         * @param name a class name
         */
        add_class(line: number, name: string): void;

        /**
         * Adds the class denoted by `qname` to `line`.
         * 
         * You may check if a line has `qname` by calling
         * {@link GutterLines.has_qclass}.
         * 
         * You can remove `qname` by calling
         * {@link GutterLines.remove_qclass}.
         * @param line a line number starting from zero
         * @param qname a class name as a {@link GLib.Quark}
         */
        add_qclass(line: number, qname: GLib.Quark): void;

        /**
         * Gets the {@link Gtk.TextBuffer} that the {@link GtkSource.GutterLines} represents.
         * @returns a {@link Gtk.TextBuffer}
         */
        get_buffer(): Gtk.TextBuffer;

        /**
         * Gets the line number (starting from 0) for the first line that is
         * user visible.
         * @returns a line number starting from 0
         */
        get_first(): number;

        /**
         * Gets a {@link Gtk.TextIter} for the current buffer at `line`
         * @param line the line number
         */
        get_iter_at_line(line: number): Gtk.TextIter;

        /**
         * Gets the line number (starting from 0) for the last line that is
         * user visible.
         * @returns a line number starting from 0
         */
        get_last(): number;

        /**
         * Gets the Y range for a line based on `mode`.
         * 
         * The value for `y` is relative to the renderers widget coordinates.
         * @param line a line number starting from zero
         * @param mode a {@link GtkSource.GutterRendererAlignmentMode}
         */
        get_line_extent(line: number, mode: GutterRendererAlignmentMode): [number, number];

        /**
         * Gets the Y range for a line based on `mode`.
         * 
         * The value for `y` is relative to the renderers widget coordinates.
         * @param line a line number starting from zero
         * @param mode a {@link GtkSource.GutterRendererAlignmentMode}
         */
        get_line_yrange(line: number, mode: GutterRendererAlignmentMode): [number, number];

        /**
         * Gets the {@link Gtk.TextView} that the {@link GtkSource.GutterLines} represents.
         * @returns a {@link Gtk.TextView}
         */
        get_view(): Gtk.TextView;

        /**
         * Checks to see if the line has any GQuark classes set. This can be
         * used to help renderer implementations avoid work if nothing has
         * been set on the class.
         * @param line a line contained within `lines`
         * @returns `true` if any quark was set for the line
         */
        has_any_class(line: number): boolean;

        /**
         * Checks to see if {@link GutterLines.add_class} was called with
         * the `name` for `line`.
         * 
         * A faster version of this function is provided via
         * {@link GutterLines.has_qclass} for situations where the quark
         * is known ahead of time.
         * @param line a line number starting from zero
         * @param name a class name that may be converted, to a {@link GLib.Quark}
         * @returns `true` if `line` contains `name`
         */
        has_class(line: number, name: string): boolean;

        /**
         * Checks to see if {@link GutterLines.add_qclass} was called with
         * the quark denoted by `qname` for `line`.
         * @param line a line number starting from zero
         * @param qname a {@link GLib.Quark} containing the class name
         * @returns `true` if `line` contains `qname`
         */
        has_qclass(line: number, qname: GLib.Quark): boolean;

        /**
         * Checks to see if `line` contains the insertion cursor.
         * @param line a line number starting from zero
         * @returns `true` if the insertion cursor is on `line`
         */
        is_cursor(line: number): boolean;

        /**
         * Checks to see if `line` is marked as prelit. Generally, this means
         * the mouse pointer is over the line within the gutter.
         * @param line a line number starting from zero
         * @returns `true` if the line is prelit
         */
        is_prelit(line: number): boolean;

        /**
         * Checks to see if the view had a selection and if that selection overlaps
         * `line` in some way.
         * @param line a line number starting from zero
         * @returns `true` if the line contains a selection
         */
        is_selected(line: number): boolean;

        /**
         * Removes the class matching `name` from `line`.
         * 
         * A faster version of this function is available via
         * {@link GutterLines.remove_qclass} for situations where the
         * {@link GLib.Quark} is known ahead of time.
         * @param line a line number starting from zero
         * @param name a class name
         */
        remove_class(line: number, name: string): void;

        /**
         * Reverses a call to {@link GutterLines.add_qclass} by removing
         * the {@link GLib.Quark} matching `qname`.
         * @param line a line number starting from zero
         * @param qname a {@link GLib.Quark} to remove from `line`
         */
        remove_qclass(line: number, qname: GLib.Quark): void;
    }


    namespace GutterRenderer {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The signal is emitted when the renderer is activated.
             * @signal
             * @run-last
             */
            activate: (arg0: Gtk.TextIter, arg1: Gdk.Rectangle, arg2: number, arg3: Gdk.ModifierType, arg4: number) => void;
            /**
             * The signal is emitted when the renderer can possibly be activated.
             * @signal
             * @run-last
             */
            "query-activatable": (arg0: Gtk.TextIter, arg1: Gdk.Rectangle) => (boolean | void);
            /**
             * @signal
             * @run-last
             */
            "query-data": (arg0: GObject.Object, arg1: number) => void;
            "notify::alignment-mode": (pspec: GObject.ParamSpec) => void;
            "notify::lines": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
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
            alignment_mode: GutterRendererAlignmentMode;
            alignmentMode: GutterRendererAlignmentMode;
            lines: GutterLines;
            view: Gtk.TextView;
            xalign: number;
            xpad: number;
            yalign: number;
            ypad: number;
        }
    }

    /**
     * Gutter cell renderer.
     * 
     * A {@link GtkSource.GutterRenderer} represents a column in a {@link Gutter}. The
     * column contains one cell for each visible line of the {@link Gtk.TextBuffer}. Due to
     * text wrapping, a cell can thus span multiple lines of the {@link Gtk.TextView}. In
     * this case, {@link GutterRendererAlignmentMode} controls the alignment of
     * the cell.
     * 
     * The gutter renderer is a {@link Gtk.Widget} and is measured using the normal widget
     * measurement facilities. The width of the gutter will be determined by the
     * measurements of the gutter renderers.
     * 
     * The width of a gutter renderer generally takes into account the entire text
     * buffer. For instance, to display the line numbers, if the buffer contains 100
     * lines, the gutter renderer will always set its width such as three digits can
     * be printed, even if only the first 20 lines are shown. Another strategy is to
     * take into account only the visible lines.  In this case, only two digits are
     * necessary to display the line numbers of the first 20 lines. To take another
     * example, the gutter renderer for {@link Mark}s doesn't need to take
     * into account the text buffer to announce its width. It only depends on the
     * icons size displayed in the gutter column.
     * 
     * When the available size to render a cell is greater than the required size to
     * render the cell contents, the cell contents can be aligned horizontally and
     * vertically with {@link GutterRenderer.set_alignment_mode}.
     * 
     * The cells rendering occurs using {@link Gtk.Widget.snapshot}. Implementations
     * should use `gtk_source_gutter_renderer_get_lines()` to retrieve information
     * about the lines to be rendered. To help with aligning content which takes
     * into account the padding and alignment of a cell, implementations may call
     * {@link GutterRenderer.align_cell} for a given line number with the
     * width and height measurement of the content they width to render.
     * @gir-type Class
     */
    abstract class GutterRenderer extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<GutterRenderer>;

        // Properties
        /**
         * The alignment mode of the renderer.
         * 
         * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line or the last line.
         * @default GtkSource.GutterRendererAlignmentMode.CELL
         */
        get alignment_mode(): GutterRendererAlignmentMode;
        set alignment_mode(val: GutterRendererAlignmentMode);

        /**
         * The alignment mode of the renderer.
         * 
         * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line or the last line.
         * @default GtkSource.GutterRendererAlignmentMode.CELL
         */
        get alignmentMode(): GutterRendererAlignmentMode;
        set alignmentMode(val: GutterRendererAlignmentMode);

        /**
         * Contains information about the lines to be rendered.
         * 
         * It should be used by {@link GtkSource.GutterRenderer} implementations from {@link Gtk.Widget.snapshot}.
         * @read-only
         */
        get lines(): GutterLines;

        /**
         * The view on which the renderer is placed.
         * @read-only
         */
        get view(): Gtk.TextView;

        /**
         * The horizontal alignment of the renderer.
         * 
         * Set to 0 for a left alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         * @default 0
         */
        get xalign(): number;
        set xalign(val: number);

        /**
         * The left and right padding of the renderer.
         * @default 0
         */
        get xpad(): number;
        set xpad(val: number);

        /**
         * The vertical alignment of the renderer.
         * 
         * Set to 0 for a top alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         * @default 0
         */
        get yalign(): number;
        set yalign(val: number);

        /**
         * The top and bottom padding of the renderer.
         * @default 0
         */
        get ypad(): number;
        set ypad(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GutterRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GutterRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GutterRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GutterRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emits the `GtkSource.GutterRenderer::activate` signal of the renderer. This is
         * called from {@link Gutter} and should never have to be called manually.
         * @param iter a {@link Gtk.TextIter} at the start of the line where the renderer is activated
         * @param area a {@link Gdk.Rectangle} of the cell area where the renderer is activated
         * @param button the button that was pressed
         * @param state a {@link Gdk.ModifierType}
         * @param n_presses the number of button presses
         * @virtual
         */
        vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void;

        /**
         * @param lines 
         * @virtual
         */
        vfunc_begin(lines: GutterLines): void;

        /**
         * This is called when the text buffer changes for `renderer`.
         * @param old_buffer the old {@link Gtk.TextBuffer}.
         * @virtual
         */
        vfunc_change_buffer(old_buffer: (Buffer | null)): void;

        /**
         * This is called when the text view changes for `renderer`.
         * @param old_view the old {@link Gtk.TextView}.
         * @virtual
         */
        vfunc_change_view(old_view: (View | null)): void;

        /**
         * @virtual
         */
        vfunc_end(): void;

        /**
         * Get whether the renderer is activatable at the location provided. This is
         * called from {@link Gutter} to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a {@link Gtk.TextIter} at the start of the line to be activated
         * @param area a {@link Gdk.Rectangle} of the cell area to be activated
         * @virtual
         */
        vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;

        /**
         * @param lines 
         * @param line 
         * @virtual
         */
        vfunc_query_data(lines: GutterLines, line: number): void;

        /**
         * @param snapshot 
         * @param lines 
         * @param line 
         * @virtual
         */
        vfunc_snapshot_line(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void;

        // Methods
        /**
         * Emits the `GtkSource.GutterRenderer::activate` signal of the renderer. This is
         * called from {@link Gutter} and should never have to be called manually.
         * @param iter a {@link Gtk.TextIter} at the start of the line where the renderer is activated
         * @param area a {@link Gdk.Rectangle} of the cell area where the renderer is activated
         * @param button the button that was pressed
         * @param state a {@link Gdk.ModifierType}
         * @param n_presses the number of button presses
         */
        activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, n_presses: number): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;

        /**
         * Locates where to render content that is `width` x `height` based on
         * the renderers alignment and padding.
         * 
         * The location will be placed into `x` and `y` and is relative to the
         * renderer's coordinates.
         * 
         * It is encouraged that renderers use this function when snappshotting
         * to ensure consistent placement of their contents.
         * @param line the line number for content
         * @param width the width of the content to draw
         * @param height the height of the content to draw
         */
        align_cell(line: number, width: number, height: number): [number, number];

        /**
         * Get the alignment mode.
         * 
         * The alignment mode describes the manner in which the
         * renderer is aligned (see {@link GutterRenderer.xalign} and
         * {@link GutterRenderer.yalign}).
         * @returns a {@link GtkSource.GutterRendererAlignmentMode}
         */
        get_alignment_mode(): GutterRendererAlignmentMode;

        /**
         * Gets the {@link Buffer} for which the gutter renderer is drawing.
         * @returns a {@link Gtk.TextBuffer} or `null`
         */
        get_buffer(): (Buffer | null);

        /**
         * Get the view associated to the gutter renderer
         * @returns a {@link GtkSource.View}
         */
        get_view(): View;

        /**
         * Gets the `xalign` property.
         * 
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         */
        get_xalign(): number;

        /**
         * Gets the `xpad` property.
         * 
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         */
        get_xpad(): number;

        /**
         * Gets the `yalign` property.
         * 
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         */
        get_yalign(): number;

        /**
         * Gets the `ypad` property.
         * 
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         */
        get_ypad(): number;

        /**
         * Get whether the renderer is activatable at the location provided. This is
         * called from {@link Gutter} to determine whether a renderer is activatable
         * using the mouse pointer.
         * @param iter a {@link Gtk.TextIter} at the start of the line to be activated
         * @param area a {@link Gdk.Rectangle} of the cell area to be activated
         * @returns `true` if the renderer can be activated, `false` otherwise
         */
        query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean;

        /**
         * Set the alignment mode. The alignment mode describes the manner in which the
         * renderer is aligned (see {@link GutterRenderer.xalign} and
         * {@link GutterRenderer.yalign}).
         * @param mode a {@link GtkSource.GutterRendererAlignmentMode}
         */
        set_alignment_mode(mode: GutterRendererAlignmentMode): void;

        /**
         * Adjusts the `xalign` property.
         * 
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         * @param xalign the Y padding for the drawing cell
         */
        set_xalign(xalign: number): void;

        /**
         * Adjusts the `xpad` property.
         * 
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         * @param xpad the Y padding for the drawing cell
         */
        set_xpad(xpad: number): void;

        /**
         * Adjusts the `yalign` property.
         * 
         * This may be used to adjust where within the cell rectangle the renderer will draw.
         * @param yalign the Y padding for the drawing cell
         */
        set_yalign(yalign: number): void;

        /**
         * Adjusts the `ypad` property.
         * 
         * This may be used to adjust the cell rectangle that the renderer will use to draw.
         * @param ypad the Y padding for the drawing cell
         */
        set_ypad(ypad: number): void;

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace GutterRendererPixbuf {
        // Signal signatures
        interface SignalSignatures extends GutterRenderer.SignalSignatures {
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::paintable": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::alignment-mode": (pspec: GObject.ParamSpec) => void;
            "notify::lines": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends GutterRenderer.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            paintable: (Gdk.Paintable | null);
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }

    /**
     * Renders a pixbuf in the gutter.
     * 
     * A {@link GtkSource.GutterRendererPixbuf} can be used to render an image in a cell of
     * {@link Gutter}.
     * @gir-type Class
     */
    class GutterRendererPixbuf extends GutterRenderer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<GutterRendererPixbuf>;

        // Properties
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);

        /**
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        get paintable(): (Gdk.Paintable | null);
        set paintable(val: (Gdk.Paintable | null));

        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererPixbuf.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GutterRendererPixbuf;

        // Signals
        /** @signal */
        connect<K extends keyof GutterRendererPixbuf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GutterRendererPixbuf.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererPixbuf.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GutterRendererPixbuf.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterRendererPixbuf.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the gicon of the renderer
         * @returns a {@link Gio.Icon}
         */
        get_gicon(): Gio.Icon;

        get_icon_name(): string;

        /**
         * Gets a {@link Gdk.Paintable} that was set with
         * {@link GutterRendererPixbuf.set_paintable}
         * @returns a {@link Gdk.Paintable} or `null`
         */
        get_paintable(): (Gdk.Paintable | null);

        /**
         * Get the pixbuf of the renderer.
         * @returns a {@link GdkPixbuf.Pixbuf}
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;

        /**
         * Allows overlaying a paintable on top of any other image that
         * has been set for the pixbuf. This will be applied when the
         * widget is next snapshot.
         * @param paintable a {@link Gdk.Paintable}
         */
        overlay_paintable(paintable: Gdk.Paintable): void;

        /**
         * @param icon the icon, or `null`.
         */
        set_gicon(icon: (Gio.Icon | null)): void;

        /**
         * @param icon_name the icon name, or `null`.
         */
        set_icon_name(icon_name: (string | null)): void;

        /**
         * @param paintable the paintable, or `null`.
         */
        set_paintable(paintable: (Gdk.Paintable | null)): void;

        /**
         * @param pixbuf the pixbuf, or `null`.
         */
        set_pixbuf(pixbuf: (GdkPixbuf.Pixbuf | null)): void;
    }


    namespace GutterRendererText {
        // Signal signatures
        interface SignalSignatures extends GutterRenderer.SignalSignatures {
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::alignment-mode": (pspec: GObject.ParamSpec) => void;
            "notify::lines": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends GutterRenderer.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            markup: string;
            text: string;
        }
    }

    /**
     * Renders text in the gutter.
     * 
     * A {@link GtkSource.GutterRendererText} can be used to render text in a cell of
     * {@link Gutter}.
     * @gir-type Class
     */
    class GutterRendererText extends GutterRenderer implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<GutterRendererText>;

        // Properties
        /**
         * @default null
         */
        get markup(): string;
        set markup(val: string);

        /**
         * @default null
         */
        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererText.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GutterRendererText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GutterRendererText;

        // Signals
        /** @signal */
        connect<K extends keyof GutterRendererText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GutterRendererText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GutterRendererText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GutterRendererText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GutterRendererText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Measures the text provided using the pango layout used by the
         * {@link GtkSource.GutterRendererText}.
         * @param text the text to measure.
         */
        measure(text: string): [number, number];

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.measure
        measure(...args: never[]): any;

        /**
         * Measures the pango markup provided using the pango layout used by the
         * {@link GtkSource.GutterRendererText}.
         * @param markup the pango markup to measure.
         */
        measure_markup(markup: string): [number, number];

        /**
         * @param markup 
         * @param length 
         */
        set_markup(markup: string, length: number): void;

        /**
         * @param text 
         * @param length 
         */
        set_text(text: string, length: number): void;
    }


    namespace Hover {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::hover-delay": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hover_delay: number;
            hoverDelay: number;
        }
    }

    /**
     * Interactive tooltips.
     * 
     * {@link GtkSource.Hover} allows a {@link View} to provide contextual information.
     * When enabled, if the user hovers over a word in the text editor, a series
     * of registered {@link HoverProvider} can populate a {@link HoverDisplay}
     * with useful information.
     * 
     * To enable call {@link View.get_hover} and add {@link HoverProvider}
     * using {@link Hover.add_provider}. To disable, remove all registered
     * providers with {@link Hover.remove_provider}.
     * 
     * You can change how long to wait to display the interactive tooltip by
     * setting the {@link Hover.hover_delay} property in milliseconds.
     * @gir-type Class
     */
    class Hover extends GObject.Object {
        static $gtype: GObject.GType<Hover>;

        // Properties
        /**
         * Contains the number of milliseconds to delay before showing the hover assistant.
         * @default 500
         */
        get hover_delay(): number;
        set hover_delay(val: number);

        /**
         * Contains the number of milliseconds to delay before showing the hover assistant.
         * @default 500
         */
        get hoverDelay(): number;
        set hoverDelay(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Hover.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Hover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Hover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hover.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Hover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Hover.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Hover.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Hover.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param provider 
         */
        add_provider(provider: HoverProvider): void;

        /**
         * @param provider 
         */
        remove_provider(provider: HoverProvider): void;
    }


    namespace HoverContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Context for populating {@link HoverDisplay} contents.
     * 
     * {@link GtkSource.HoverContext} contains information about the request to populate
     * contents for a {@link HoverDisplay}.
     * 
     * It can be used to retrieve the {@link View}, {@link Buffer}, and
     * {@link Gtk.TextIter} for the regions of text which are being displayed.
     * 
     * Use {@link HoverContext.get_bounds} to get the word that was
     * requested. {@link HoverContext.get_iter} will get you the location
     * of the pointer when the request was made.
     * @gir-type Class
     */
    class HoverContext extends GObject.Object {
        static $gtype: GObject.GType<HoverContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HoverContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HoverContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof HoverContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HoverContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HoverContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HoverContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HoverContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HoverContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the current word bounds of the hover.
         * 
         * If `begin` is non-`null`, it will be set to the start position of the
         * current word being hovered.
         * 
         * If `end` is non-`null`, it will be set to the end position for the
         * current word being hovered.
         * @returns `true` if the marks are still valid and `begin` or `end` was set.
         */
        get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];

        /**
         * A convenience function to get the buffer.
         * @returns The {@link GtkSource.Buffer} for the view
         */
        get_buffer(): Buffer;

        /**
         * Gets the location of the pointer where the request was made.
         * @returns `true` if the mark is still valid and `iter` was set.
         */
        get_iter(): [boolean, Gtk.TextIter];

        /**
         * @returns the {@link GtkSource.View} that owns the context
         */
        get_view(): View;
    }


    namespace HoverDisplay {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
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

        }
    }

    /**
     * Display for interactive tooltips.
     * 
     * {@link GtkSource.HoverDisplay} is a {@link Gtk.Widget} that may be populated with widgets
     * to be displayed to the user in interactive tooltips. The children widgets
     * are packed vertically using a {@link Gtk.Box}.
     * 
     * Implement the {@link HoverProvider} interface to be notified of when
     * to populate a {@link GtkSource.HoverDisplay} on behalf of the user.
     * @gir-type Class
     */
    class HoverDisplay extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<HoverDisplay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HoverDisplay.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HoverDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof HoverDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HoverDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HoverDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HoverDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HoverDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HoverDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param child 
         */
        append(child: Gtk.Widget): void;

        /**
         * @param child 
         * @param sibling 
         */
        insert_after(child: Gtk.Widget, sibling: Gtk.Widget): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.insert_after
        insert_after(...args: never[]): any;

        /**
         * @param child 
         */
        prepend(child: Gtk.Widget): void;

        /**
         * @param child 
         */
        remove(child: Gtk.Widget): void;

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Language {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::section": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hidden: boolean;
            id: string;
            name: string;
            section: string;
        }
    }

    /**
     * Represents a syntax highlighted language.
     * 
     * A {@link GtkSource.Language} represents a programming or markup language, affecting
     * syntax highlighting and [context classes](./class.Buffer.html#context-classes).
     * 
     * Use {@link LanguageManager} to obtain a {@link GtkSource.Language} instance, and
     * {@link Buffer.set_language} to apply it to a {@link Buffer}.
     * @gir-type Class
     */
    class Language extends GObject.Object {
        static $gtype: GObject.GType<Language>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get hidden(): boolean;

        /**
         * @read-only
         * @default null
         */
        get id(): string;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default null
         */
        get section(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Language.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Language.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Language.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Language.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Language.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Language.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the globs associated to this language.
         * 
         * This is just an utility wrapper around {@link Language.get_metadata} to
         * retrieve the "globs" metadata property and split it into an array.
         * @returns a newly-allocated `null` terminated array containing the globs or `null` if no globs are found. The returned array must be freed with `g_strfreev()`.
         */
        get_globs(): (string[] | null);

        /**
         * Returns whether the language should be hidden from the user.
         * @returns `true` if the language should be hidden, `false` otherwise.
         */
        get_hidden(): boolean;

        /**
         * Returns the ID of the language.
         * 
         * The ID is not locale-dependent.The returned string is owned by `language`
         * and should not be freed or modified.
         * @returns the ID of `language`.
         */
        get_id(): string;

        /**
         * @param name metadata property name.
         * @returns value of property `name` stored in the metadata of `language` or `null` if language does not contain the specified metadata property. The returned string is owned by `language` and should not be freed or modified.
         */
        get_metadata(name: string): (string | null);

        /**
         * Returns the mime types associated to this language.
         * 
         * This is just an utility wrapper around {@link Language.get_metadata} to
         * retrieve the "mimetypes" metadata property and split it into an
         * array.
         * @returns a newly-allocated `null` terminated array containing the mime types or `null` if no mime types are found. The returned array must be freed with `g_strfreev()`.
         */
        get_mime_types(): (string[] | null);

        /**
         * Returns the localized name of the language.
         * 
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the name of `language`.
         */
        get_name(): string;

        /**
         * Returns the localized section of the language.
         * 
         * Each language belong to a section (ex. HTML belongs to the
         * Markup section).
         * The returned string is owned by `language` and should not be freed
         * or modified.
         * @returns the section of `language`.
         */
        get_section(): string;

        /**
         * Returns the ID of the style to use if the specified `style_id`
         * is not present in the current style scheme.
         * @param style_id a style ID.
         * @returns the ID of the style to use if the specified `style_id` is not present in the current style scheme or `null` if the style has no fallback defined. The returned string is owned by the `language` and must not be modified.
         */
        get_style_fallback(style_id: string): (string | null);

        /**
         * Returns the ids of the styles defined by this `language`.
         * @returns a newly-allocated `null` terminated array containing ids of the styles defined by this `language` or `null` if no style is defined. The returned array must be freed with `g_strfreev()`.
         */
        get_style_ids(): (string[] | null);

        /**
         * Returns the name of the style with ID `style_id` defined by this `language`.
         * @param style_id a style ID.
         * @returns the name of the style with ID `style_id` defined by this `language` or `null` if the style has no name or there is no style with ID `style_id` defined by this `language`. The returned string is owned by the `language` and must not be modified.
         */
        get_style_name(style_id: string): (string | null);
    }


    namespace LanguageManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::language-ids": (pspec: GObject.ParamSpec) => void;
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language_ids: (string[] | null);
            languageIds: (string[] | null);
            search_path: string[];
            searchPath: string[];
        }
    }

    /**
     * Provides access to {@link Language}s.
     * 
     * {@link GtkSource.LanguageManager} is an object which processes language description
     * files and creates and stores {@link Language} objects, and provides API to
     * access them.
     * 
     * Use {@link LanguageManager.get_default} to retrieve the default
     * instance of {@link GtkSource.LanguageManager}, and
     * {@link LanguageManager.guess_language} to get a {@link Language} for
     * given file name and content type.
     * @gir-type Class
     */
    class LanguageManager extends GObject.Object {
        static $gtype: GObject.GType<LanguageManager>;

        // Properties
        /**
         * @read-only
         */
        get language_ids(): (string[] | null);

        /**
         * @read-only
         */
        get languageIds(): (string[] | null);

        get search_path(): string[];
        set search_path(val: string[]);

        get searchPath(): string[];
        set searchPath(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LanguageManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): LanguageManager;

        // Signals
        /** @signal */
        connect<K extends keyof LanguageManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LanguageManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LanguageManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the default {@link GtkSource.LanguageManager} instance.
         */
        static get_default(): LanguageManager;

        // Methods
        /**
         * Appends `path` to the list of directories where the `manager` looks for
         * language files.
         * 
         * See {@link LanguageManager.set_search_path} for details.
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;

        /**
         * Gets the {@link Language} identified by the given `id` in the language
         * manager.
         * @param id a language id.
         * @returns a {@link GtkSource.Language}, or `null` if there is no language identified by the given `id`. Return value is owned by `lm` and should not be freed.
         */
        get_language(id: string): (Language | null);

        /**
         * Returns the ids of the available languages.
         * @returns a `null`-terminated array of strings containing the ids of the available languages or `null` if no language is available. The array is sorted alphabetically according to the language name. The array is owned by `lm` and must not be modified.
         */
        get_language_ids(): (string[] | null);

        /**
         * Gets the list directories where `lm` looks for language files.
         * @returns `null`-terminated array containing a list of language files directories. The array is owned by `lm` and must not be modified.
         */
        get_search_path(): string[];

        /**
         * Picks a {@link Language} for given file name and content type,
         * according to the information in lang files.
         * 
         * Either `filename` or `content_type` may be `null`. This function can be used as follows:
         * 
         * ```c
         * GtkSourceLanguage *lang;
         * GtkSourceLanguageManager *manager;
         * lm = gtk_source_language_manager_get_default ();
         * lang = gtk_source_language_manager_guess_language (manager, filename, NULL);
         * gtk_source_buffer_set_language (buffer, lang);
         * ```
         * ```python
         * manager = GtkSource.LanguageManager.get_default()
         * language = manager.guess_language(filename=filename, content_type=None)
         * buffer.set_language(language=language)
         * ```
         * 
         * or
         * 
         * ```c
         * GtkSourceLanguage *lang = NULL;
         * GtkSourceLanguageManager *manager;
         * gboolean result_uncertain;
         * gchar *content_type;
         * 
         * content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
         * if (result_uncertain)
         *   {
         *     g_free (content_type);
         *     content_type = NULL;
         *   }
         * 
         * manager = gtk_source_language_manager_get_default ();
         * lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
         * gtk_source_buffer_set_language (buffer, lang);
         * 
         * g_free (content_type);
         * ```
         * ```python
         * content_type, uncertain = Gio.content_type_guess(filename=filename, data=None)
         * if uncertain:
         *     content_type = None
         * 
         * manager = GtkSource.LanguageManager.get_default()
         * language = manager.guess_language(filename=filename, content_type=content_type)
         * buffer.set_language(language=language)
         * ```
         * 
         * etc. Use {@link Language.get_mime_types} and {@link Language.get_globs}
         * if you need full control over file -> language mapping.
         * @param filename a filename in Glib filename encoding, or `null`.
         * @param content_type a content type (as in GIO API), or `null`.
         * @returns a {@link GtkSource.Language}, or `null` if there is no suitable language for given `filename` and/or `content_type`. Return value is owned by `lm` and should not be freed.
         */
        guess_language(filename: (string | null), content_type: (string | null)): (Language | null);

        /**
         * Prepends `path` to the list of directories where the `manager` looks
         * for language files.
         * 
         * See {@link LanguageManager.set_search_path} for details.
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;

        /**
         * Sets the list of directories where the `lm` looks for
         * language files.
         * 
         * If `dirs` is `null`, the search path is reset to default.
         * 
         * At the moment this function can be called only before the
         * language files are loaded for the first time. In practice
         * to set a custom search path for a {@link GtkSource.LanguageManager},
         * you have to call this function right after creating it.
         * 
         * Since GtkSourceView 5.4 this function will allow you to provide
         * paths in the form of "resource:///" URIs to embedded {@link Gio.Resource}s.
         * They must contain the path of a directory within the {@link Gio.Resource}.
         * @param dirs a `null`-terminated array of   strings or `null`.
         */
        set_search_path(dirs: (string[] | null)): void;
    }


    namespace Map {
        // Signal signatures
        interface SignalSignatures extends View.SignalSignatures {
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::view": (pspec: GObject.ParamSpec) => void;
            "notify::annotations": (pspec: GObject.ParamSpec) => void;
            "notify::auto-indent": (pspec: GObject.ParamSpec) => void;
            "notify::background-pattern": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::enable-snippets": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-current-line": (pspec: GObject.ParamSpec) => void;
            "notify::indent-on-tab": (pspec: GObject.ParamSpec) => void;
            "notify::indent-width": (pspec: GObject.ParamSpec) => void;
            "notify::indenter": (pspec: GObject.ParamSpec) => void;
            "notify::insert-spaces-instead-of-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-position": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-marks": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::show-right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::smart-backspace": (pspec: GObject.ParamSpec) => void;
            "notify::smart-home-end": (pspec: GObject.ParamSpec) => void;
            "notify::space-drawer": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::extra-menu": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends View.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.AccessibleText.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            view: (View | null);
        }
    }

    /**
     * Widget that displays a map for a specific {@link View}.
     * 
     * {@link GtkSource.Map} is a widget that maps the content of a {@link View} into
     * a smaller view so the user can have a quick overview of the whole document.
     * 
     * This works by connecting a {@link View} to to the {@link GtkSource.Map} using
     * the {@link Map.view} property or {@link Map.set_view}.
     * 
     * {@link GtkSource.Map} is a {@link View} object. This means that you can add a
     * {@link GutterRenderer} to a gutter in the same way you would for a
     * {@link View}. One example might be a {@link GutterRenderer} that shows
     * which lines have changed in the document.
     * 
     * Additionally, it is desirable to match the font of the {@link GtkSource.Map} and
     * the {@link View} used for editing. Therefore, {@link Map.font_desc}
     * should be used to set the target font. You will need to adjust this to the
     * desired font size for the map. A 1pt font generally seems to be an
     * appropriate font size. "Monospace 1" is the default. See
     * {@link Pango.FontDescription.set_size} for how to alter the size of an existing
     * {@link Pango.FontDescription}.
     * 
     * When FontConfig is available, {@link GtkSource.Map} will try to use a bundled
     * "block" font to make the map more legible.
     * @gir-type Class
     */
    class Map extends View implements Gtk.Accessible, Gtk.AccessibleText, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
        static $gtype: GObject.GType<Map>;

        // Properties
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);

        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);

        get view(): (View | null);
        set view(val: (View | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Map.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Map;

        // Signals
        /** @signal */
        connect<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Map.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Map.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Map.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Map.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the {@link Map.view} property, which is the view this widget is mapping.
         * @returns a {@link GtkSource.View} or `null`.
         */
        get_view(): (View | null);

        /**
         * Sets the view that `map` will be doing the mapping to.
         * @param view a {@link GtkSource.View}
         */
        set_view(view: View): void;
    }


    namespace Mark {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextMark.SignalSignatures {
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::left-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TextMark.ConstructorProps {
            category: string;
        }
    }

    /**
     * Mark object for {@link Buffer}.
     * 
     * A {@link GtkSource.Mark} marks a position in the text where you want to display
     * additional info. It is based on {@link Gtk.TextMark} and thus is still valid after
     * the text has changed though its position may change.
     * 
     * {@link GtkSource.Mark}s are organized in categories which you have to set
     * when you create the mark. Each category can have a priority, a pixbuf and
     * other associated attributes. See {@link View.set_mark_attributes}.
     * The pixbuf will be displayed in the margin at the line where the mark
     * residents if the {@link View.show_line_marks} property is set to `true`. If
     * there are multiple marks in the same line, the pixbufs will be drawn on top
     * of each other. The mark with the highest priority will be drawn on top.
     * @gir-type Class
     */
    class Mark extends Gtk.TextMark {
        static $gtype: GObject.GType<Mark>;

        // Properties
        /**
         * The category of the {@link GtkSource.Mark}, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         * @construct-only
         * @default null
         */
        get category(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mark.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Mark.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: (string | null), category: string): Mark;

        // Conflicted with Gtk.TextMark.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Mark.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Mark.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Mark.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Mark.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Mark.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the mark category.
         * @returns the category of the {@link GtkSource.Mark}.
         */
        get_category(): string;

        /**
         * Returns the next {@link GtkSource.Mark} in the buffer or `null` if the mark
         * was not added to a buffer.
         * 
         *  If there is no next mark, `null` will be returned.
         * 
         * If `category` is `null`, looks for marks of any category.
         * @param category a string specifying the mark category, or `null`.
         * @returns the next {@link GtkSource.Mark}, or `null`.
         */
        next(category: (string | null)): (Mark | null);

        /**
         * Returns the previous {@link GtkSource.Mark} in the buffer or `null` if the mark
         * was not added to a buffer.
         * 
         * If there is no previous mark, `null` is returned.
         * 
         * If `category` is `null`, looks for marks of any category
         * @param category a string specifying the mark category, or `null`.
         * @returns the previous {@link GtkSource.Mark}, or `null`.
         */
        prev(category: (string | null)): (Mark | null);
    }


    namespace MarkAttributes {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The code should connect to this signal to provide a tooltip for given
             * `mark`. The tooltip can contain a markup.
             * @signal
             * @run-last
             */
            "query-tooltip-markup": (arg0: Mark) => string;
            /**
             * The code should connect to this signal to provide a tooltip for given
             * `mark`. The tooltip should be just a plain text.
             * @signal
             * @run-last
             */
            "query-tooltip-text": (arg0: Mark) => string;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: Gdk.RGBA;
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }

    /**
     * The source mark attributes object.
     * 
     * {@link GtkSource.MarkAttributes} is an object specifying attributes used by
     * a {@link View} to visually show lines marked with {@link Mark}s
     * of a specific category. It allows you to define a background color of a line,
     * an icon shown in gutter and tooltips.
     * 
     * The background color is used as a background of a line where a mark is placed
     * and it can be set with {@link MarkAttributes.set_background}. To check
     * if any custom background color was defined and what color it is, use
     * {@link MarkAttributes.get_background}.
     * 
     * An icon is a graphic element which is shown in the gutter of a view. An
     * example use is showing a red filled circle in a debugger to show that a
     * breakpoint was set in certain line. To get an icon that will be placed in
     * a gutter, first a base for it must be specified and then
     * {@link MarkAttributes.render_icon} must be called.
     * There are several ways to specify a base for an icon:
     * 
     * - {@link MarkAttributes.set_icon_name}
     * - {@link MarkAttributes.set_gicon}
     * - {@link MarkAttributes.set_pixbuf}
     * 
     * Using any of the above functions overrides the one used earlier. But note
     * that a getter counterpart of earlier used function can still return some
     * value, but it is just not used when rendering the proper icon.
     * 
     * To provide meaningful tooltips for a given mark of a category, you should
     * connect to `GtkSource.MarkAttributes::query-tooltip-text` or
     * `GtkSource.MarkAttributes::query-tooltip-markup` where the latter
     * takes precedence.
     * @gir-type Class
     */
    class MarkAttributes extends GObject.Object {
        static $gtype: GObject.GType<MarkAttributes>;

        // Properties
        /**
         * A color used for background of a line.
         */
        get background(): Gdk.RGBA;
        set background(val: Gdk.RGBA);

        /**
         * A {@link Gio.Icon} that may be a base of a rendered icon.
         */
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);

        /**
         * An icon name that may be a base of a rendered icon.
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * An icon name that may be a base of a rendered icon.
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * A {@link GdkPixbuf.Pixbuf} that may be a base of a rendered icon.
         */
        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MarkAttributes.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MarkAttributes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MarkAttributes;

        // Signals
        /** @signal */
        connect<K extends keyof MarkAttributes.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MarkAttributes.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MarkAttributes.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MarkAttributes.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MarkAttributes.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Stores background color in `background`.
         * @returns whether background color for `attributes` was set.
         */
        get_background(): [boolean, Gdk.RGBA];

        /**
         * Gets a {@link Gio.Icon} to be used as a base for rendered icon.
         * 
         * Note that the icon can be `null` if it wasn't set earlier.
         * @returns An icon. The icon belongs to `attributes` and should not be unreffed.
         */
        get_gicon(): Gio.Icon;

        /**
         * Gets a name of an icon to be used as a base for rendered icon.
         * 
         * Note that the icon name can be `null` if it wasn't set earlier.
         * @returns An icon name. The string belongs to `attributes` and should not be freed.
         */
        get_icon_name(): string;

        /**
         * Gets a {@link GdkPixbuf.Pixbuf} to be used as a base for rendered icon.
         * 
         * Note that the pixbuf can be `null` if it wasn't set earlier.
         * @returns A pixbuf. The pixbuf belongs to `attributes` and should not be unreffed.
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;

        /**
         * Queries for a tooltip by emitting a `GtkSource.MarkAttributes::query-tooltip-markup` signal.
         * 
         * The tooltip may contain a markup.
         * @param mark a {@link GtkSource.Mark}.
         * @returns A tooltip. The returned string should be freed by using `g_free()` when done with it.
         */
        get_tooltip_markup(mark: Mark): string;

        /**
         * Queries for a tooltip by emitting a `GtkSource.MarkAttributes::query-tooltip-text` signal.
         * 
         * The tooltip is a plain text.
         * @param mark a {@link GtkSource.Mark}.
         * @returns A tooltip. The returned string should be freed by using `g_free()` when done with it.
         */
        get_tooltip_text(mark: Mark): string;

        /**
         * Renders an icon of given size.
         * 
         * The base of the icon is set by the last call to one of:
         * 
         * - {@link MarkAttributes.set_pixbuf}
         * - {@link MarkAttributes.set_gicon}
         * - {@link MarkAttributes.set_icon_name}
         * 
         * `size` cannot be lower than 1.
         * @param widget widget of which style settings may be used.
         * @param size size of the rendered icon.
         * @returns A {@link Gdk.Paintable}. The paintable belongs to `attributes` and should not be unreffed.
         */
        render_icon(widget: Gtk.Widget, size: number): Gdk.Paintable;

        /**
         * Sets background color to the one given in `background`.
         * @param background a {@link Gdk.RGBA}.
         */
        set_background(background: Gdk.RGBA): void;

        /**
         * Sets an icon to be used as a base for rendered icon.
         * @param gicon a {@link Gio.Icon} to be used.
         */
        set_gicon(gicon: Gio.Icon): void;

        /**
         * Sets a name of an icon to be used as a base for rendered icon.
         * @param icon_name name of an icon to be used.
         */
        set_icon_name(icon_name: string): void;

        /**
         * Sets a pixbuf to be used as a base for rendered icon.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf} to be used.
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    }


    namespace PrintCompositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::body-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::footer-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::header-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::line-numbers-font-name": (pspec: GObject.ParamSpec) => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::print-footer": (pspec: GObject.ParamSpec) => void;
            "notify::print-header": (pspec: GObject.ParamSpec) => void;
            "notify::print-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            body_font_name: string;
            bodyFontName: string;
            buffer: Buffer;
            footer_font_name: string;
            footerFontName: string;
            header_font_name: string;
            headerFontName: string;
            highlight_syntax: boolean;
            highlightSyntax: boolean;
            line_numbers_font_name: string;
            lineNumbersFontName: string;
            n_pages: number;
            nPages: number;
            print_footer: boolean;
            printFooter: boolean;
            print_header: boolean;
            printHeader: boolean;
            print_line_numbers: number;
            printLineNumbers: number;
            tab_width: number;
            tabWidth: number;
            wrap_mode: Gtk.WrapMode;
            wrapMode: Gtk.WrapMode;
        }
    }

    /**
     * Compose a {@link Buffer} for printing.
     * 
     * The {@link GtkSource.PrintCompositor} object is used to compose a {@link Buffer}
     * for printing. You can set various configuration options to customize the
     * printed output. {@link GtkSource.PrintCompositor} is designed to be used with the
     * high-level printing API of gtk+, i.e. {@link Gtk.PrintOperation}.
     * 
     * The margins specified in this object are the layout margins: they define the
     * blank space bordering the printed area of the pages. They must not be
     * confused with the "print margins", i.e. the parts of the page that the
     * printer cannot print on, defined in the {@link Gtk.PageSetup} objects. If the
     * specified layout margins are smaller than the "print margins", the latter
     * ones are used as a fallback by the {@link GtkSource.PrintCompositor} object, so that
     * the printed area is not clipped.
     * @gir-type Class
     */
    class PrintCompositor extends GObject.Object {
        static $gtype: GObject.GType<PrintCompositor>;

        // Properties
        /**
         * Name of the font used for the text body.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get body_font_name(): string;
        set body_font_name(val: string);

        /**
         * Name of the font used for the text body.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get bodyFontName(): string;
        set bodyFontName(val: string);

        /**
         * The {@link Buffer} object to print.
         * @construct-only
         */
        get buffer(): Buffer;

        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get footer_font_name(): string;
        set footer_font_name(val: string);

        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get footerFontName(): string;
        set footerFontName(val: string);

        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get header_font_name(): string;
        set header_font_name(val: string);

        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get headerFontName(): string;
        set headerFontName(val: string);

        /**
         * Whether to print the document with highlighted syntax.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default true
         */
        get highlight_syntax(): boolean;
        set highlight_syntax(val: boolean);

        /**
         * Whether to print the document with highlighted syntax.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default true
         */
        get highlightSyntax(): boolean;
        set highlightSyntax(val: boolean);

        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get line_numbers_font_name(): string;
        set line_numbers_font_name(val: string);

        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default null
         */
        get lineNumbersFontName(): string;
        set lineNumbersFontName(val: string);

        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @read-only
         * @default -1
         */
        get n_pages(): number;

        /**
         * The number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @read-only
         * @default -1
         */
        get nPages(): number;

        /**
         * Whether to print a footer in each page.
         * 
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default false
         */
        get print_footer(): boolean;
        set print_footer(val: boolean);

        /**
         * Whether to print a footer in each page.
         * 
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default false
         */
        get printFooter(): boolean;
        set printFooter(val: boolean);

        /**
         * Whether to print a header in each page.
         * 
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default false
         */
        get print_header(): boolean;
        set print_header(val: boolean);

        /**
         * Whether to print a header in each page.
         * 
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default false
         */
        get printHeader(): boolean;
        set printHeader(val: boolean);

        /**
         * Interval of printed line numbers.
         * 
         * If this property is set to 0 no numbers will be printed.
         * If greater than 0, a number will be printed every "print-line-numbers"
         * lines (i.e. 1 will print all line numbers).
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default 1
         */
        get print_line_numbers(): number;
        set print_line_numbers(val: number);

        /**
         * Interval of printed line numbers.
         * 
         * If this property is set to 0 no numbers will be printed.
         * If greater than 0, a number will be printed every "print-line-numbers"
         * lines (i.e. 1 will print all line numbers).
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default 1
         */
        get printLineNumbers(): number;
        set printLineNumbers(val: number);

        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default 8
         */
        get tab_width(): number;
        set tab_width(val: number);

        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default 8
         */
        get tabWidth(): number;
        set tabWidth(val: number);

        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default Gtk.WrapMode.NONE
         */
        get wrap_mode(): Gtk.WrapMode;
        set wrap_mode(val: Gtk.WrapMode);

        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the {@link PrintCompositor.paginate} function.
         * @default Gtk.WrapMode.NONE
         */
        get wrapMode(): Gtk.WrapMode;
        set wrapMode(val: Gtk.WrapMode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PrintCompositor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PrintCompositor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](buffer: Buffer): PrintCompositor;

        static new_from_view(view: View): PrintCompositor;

        // Signals
        /** @signal */
        connect<K extends keyof PrintCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PrintCompositor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PrintCompositor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PrintCompositor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PrintCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
         * 
         * This method has been designed to be called in the handler of the `Gtk.PrintOperation::draw_page` signal
         * as shown in the following example:
         * 
         * ```c
         * // Signal handler for the GtkPrintOperation::draw_page signal
         * 
         * static void
         * draw_page (GtkPrintOperation *operation,
         *            GtkPrintContext   *context,
         *            gint               page_nr,
         *            gpointer           user_data)
         * {
         *     GtkSourcePrintCompositor *compositor;
         * 
         *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
         * 
         *     gtk_source_print_compositor_draw_page (compositor,
         *                                            context,
         *                                            page_nr);
         * }
         * ```
         * ```python
         * def on_draw_page(
         *     operation: Gtk.PrintOperation,
         *     context: Gtk.PrintContext,
         *     page_nr: int,
         *     compositor: GtkSource.PrintCompositor,
         * ) -> None:
         *     """Signal handler for draw-page that renders a single page."""
         *     compositor.draw_page(context=context, page_nr=page_nr)
         * ```
         * @param context the {@link Gtk.PrintContext} encapsulating the context information that is required when           drawing the page for printing.
         * @param page_nr the number of the page to print.
         */
        draw_page(context: Gtk.PrintContext, page_nr: number): void;

        /**
         * Returns the name of the font used to print the text body.
         * 
         * The returned string must be freed with `g_free()`.
         * @returns a new string containing the name of the font used to print the text body.
         */
        get_body_font_name(): string;

        /**
         * Gets the bottom margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the bottom margin.
         */
        get_bottom_margin(unit: Gtk.Unit): number;

        /**
         * Gets the {@link Buffer} associated with the compositor.
         * 
         * The returned object reference is owned by the compositor object and
         * should not be unreferenced.
         * @returns the {@link GtkSource.Buffer} associated with the compositor.
         */
        get_buffer(): Buffer;

        /**
         * Returns the name of the font used to print the page footer.
         * 
         * The returned string must be freed with `g_free()`.
         * @returns a new string containing the name of the font used to print the page footer.
         */
        get_footer_font_name(): string;

        /**
         * Returns the name of the font used to print the page header.
         * 
         * The returned string must be freed with `g_free()`.
         * @returns a new string containing the name of the font used to print the page header.
         */
        get_header_font_name(): string;

        /**
         * Determines whether the printed text will be highlighted according to the
         * buffer rules.
         * 
         * Note that highlighting will happen only if the buffer to print has highlighting activated.
         * @returns `true` if the printed output will be highlighted.
         */
        get_highlight_syntax(): boolean;

        /**
         * Gets the left margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the left margin
         */
        get_left_margin(unit: Gtk.Unit): number;

        /**
         * Returns the name of the font used to print line numbers on the left margin.
         * 
         * The returned string must be freed with `g_free()`.
         * @returns a new string containing the name of the font used to print line numbers on the left margin.
         */
        get_line_numbers_font_name(): string;

        /**
         * Returns the number of pages in the document or <code>-1</code> if the
         * document has not been completely paginated.
         * @returns the number of pages in the document or <code>-1</code> if the document has not been completely paginated.
         */
        get_n_pages(): number;

        /**
         * Returns the current fraction of the document pagination that has been completed.
         * @returns a fraction from 0.0 to 1.0 inclusive.
         */
        get_pagination_progress(): number;

        /**
         * Determines if a footer is set to be printed for each page.
         * 
         * A footer will be printed if this function returns `true`
         * **and** some format strings have been specified
         * with {@link PrintCompositor.set_footer_format}.
         * @returns `true` if the footer is set to be printed.
         */
        get_print_footer(): boolean;

        /**
         * Determines if a header is set to be printed for each page.
         * 
         * A header will be printed if this function returns `true`
         * **and** some format strings have been specified
         * with {@link PrintCompositor.set_header_format}.
         * @returns `true` if the header is set to be printed.
         */
        get_print_header(): boolean;

        /**
         * Returns the interval used for line number printing.
         * 
         * If the value is 0, no line numbers will be printed. The default value is
         * 1 (i.e. numbers printed in all lines).
         * @returns the interval of printed line numbers.
         */
        get_print_line_numbers(): number;

        /**
         * Gets the right margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the right margin.
         */
        get_right_margin(unit: Gtk.Unit): number;

        /**
         * Returns the width of tabulation in characters for printed text.
         * @returns width of tab.
         */
        get_tab_width(): number;

        /**
         * Gets the top margin in units of `unit`.
         * @param unit the unit for the return value.
         * @returns the top margin.
         */
        get_top_margin(unit: Gtk.Unit): number;

        /**
         * Gets the line wrapping mode for the printed text.
         * @returns the line wrap mode.
         */
        get_wrap_mode(): Gtk.WrapMode;

        /**
         * Specifies a tag whose style should be ignored when compositing the
         * document to the printable page.
         * @param tag a {@link Gtk.TextTag}
         */
        ignore_tag(tag: Gtk.TextTag): void;

        /**
         * Paginate the document associated with the `compositor`.
         * 
         * In order to support non-blocking pagination, document is paginated in small chunks.
         * Each time {@link PrintCompositor.paginate} is invoked, a chunk of the document
         * is paginated. To paginate the entire document, {@link PrintCompositor.paginate}
         * must be invoked multiple times.
         * It returns `true` if the document has been completely paginated, otherwise it returns `false`.
         * 
         * This method has been designed to be invoked in the handler of the `Gtk.PrintOperation::paginate` signal,
         * as shown in the following example:
         * 
         * ```c
         * // Signal handler for the GtkPrintOperation::paginate signal
         * 
         * static gboolean
         * paginate (GtkPrintOperation *operation,
         *           GtkPrintContext   *context,
         *           gpointer           user_data)
         * {
         *     GtkSourcePrintCompositor *compositor;
         * 
         *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
         * 
         *     if (gtk_source_print_compositor_paginate (compositor, context))
         *     {
         *         gint n_pages;
         * 
         *         n_pages = gtk_source_print_compositor_get_n_pages (compositor);
         *         gtk_print_operation_set_n_pages (operation, n_pages);
         * 
         *         return TRUE;
         *     }
         * 
         *     return FALSE;
         * }
         * ```
         * ```python
         * def on_paginate(
         *     operation: Gtk.PrintOperation,
         *     context: Gtk.PrintContext,
         *     compositor: GtkSource.PrintCompositor,
         * ) -> bool:
         *     if compositor.paginate(context=context):
         *         n_pages = compositor.get_n_pages()
         *         operation.set_n_pages(n_pages=n_pages)
         *         return True
         *     return False
         * ```
         * 
         * If you don't need to do pagination in chunks, you can simply do it all in the
         * `Gtk.PrintOperation::begin-print` handler, and set the number of pages from there, like
         * in the following example:
         * 
         * ```c
         * // Signal handler for the GtkPrintOperation::begin-print signal
         * 
         * static void
         * begin_print (GtkPrintOperation *operation,
         *              GtkPrintContext   *context,
         *              gpointer           user_data)
         * {
         *     GtkSourcePrintCompositor *compositor;
         *     gint n_pages;
         * 
         *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
         * 
         *     while (!gtk_source_print_compositor_paginate (compositor, context));
         * 
         *     n_pages = gtk_source_print_compositor_get_n_pages (compositor);
         *     gtk_print_operation_set_n_pages (operation, n_pages);
         * }
         * ```
         * ```python
         * def on_begin_print(
         *     operation: Gtk.PrintOperation,
         *     context: Gtk.PrintContext,
         *     compositor: GtkSource.PrintCompositor,
         * ) -> None:
         *     # Paginate until complete
         *     while not compositor.paginate(context=context):
         *         pass
         * 
         *     n_pages = compositor.get_n_pages()
         *     operation.set_n_pages(n_pages=n_pages)
         * ```
         * @param context the {@link Gtk.PrintContext} whose parameters (e.g. paper size, print margins, etc.) are used by the the `compositor` to paginate the document.
         * @returns `true` if the document has been completely paginated, `false` otherwise.
         */
        paginate(context: Gtk.PrintContext): boolean;

        /**
         * Sets the default font for the printed text.
         * 
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param font_name the name of the default font for the body text.
         */
        set_body_font_name(font_name: string): void;

        /**
         * Sets the bottom margin used by `compositor`.
         * @param margin the new bottom margin in units of `unit`.
         * @param unit the units for `margin`.
         */
        set_bottom_margin(margin: number, unit: Gtk.Unit): void;

        /**
         * Sets the font for printing the page footer.
         * 
         * If `null` is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         * 
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param font_name the name of the font for the footer text, or `null`.
         */
        set_footer_font_name(font_name: (string | null)): void;

        /**
         * See {@link PrintCompositor.set_header_format} for more information
         * about the parameters.
         * @param separator `true` if you want a separator line to be printed.
         * @param left a format string to print on the left of the footer.
         * @param center a format string to print on the center of the footer.
         * @param right a format string to print on the right of the footer.
         */
        set_footer_format(separator: boolean, left: (string | null), center: (string | null), right: (string | null)): void;

        /**
         * Sets the font for printing the page header.
         * 
         * If `null` is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         * 
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param font_name the name of the font for header text, or `null`.
         */
        set_header_font_name(font_name: (string | null)): void;

        /**
         * Sets strftime like header format strings, to be printed on the
         * left, center and right of the top of each page.
         * 
         * The strings may include strftime(3) codes which will be expanded at print time.
         * A subset of `strftime()` codes are accepted, see {@link GLib.DateTime.format}
         * for more details on the accepted format specifiers.
         * Additionally the following format specifiers are accepted:
         * 
         * - #N: the page number
         * - #Q: the page count.
         * 
         * `separator` specifies if a solid line should be drawn to separate
         * the header from the document text.
         * 
         * If `null` is given for any of the three arguments, that particular
         * string will not be printed.
         * 
         * For the header to be printed, in
         * addition to specifying format strings, you need to enable header
         * printing with {@link PrintCompositor.set_print_header}.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param separator `true` if you want a separator line to be printed.
         * @param left a format string to print on the left of the header.
         * @param center a format string to print on the center of the header.
         * @param right a format string to print on the right of the header.
         */
        set_header_format(separator: boolean, left: (string | null), center: (string | null), right: (string | null)): void;

        /**
         * Sets whether the printed text will be highlighted according to the
         * buffer rules.  Both color and font style are applied.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param highlight whether syntax should be highlighted.
         */
        set_highlight_syntax(highlight: boolean): void;

        /**
         * Sets the left margin used by `compositor`.
         * @param margin the new left margin in units of `unit`.
         * @param unit the units for `margin`.
         */
        set_left_margin(margin: number, unit: Gtk.Unit): void;

        /**
         * Sets the font for printing line numbers on the left margin.
         * 
         * If `null` is supplied, the default font (i.e. the one being used for the
         * text) will be used instead.
         * 
         * `font_name` should be a
         * string representation of a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See {@link Pango.FontDescription.from_string}
         * for a description of the format of the string representation.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param font_name the name of the font for line numbers, or `null`.
         */
        set_line_numbers_font_name(font_name: (string | null)): void;

        /**
         * Sets whether you want to print a footer in each page.
         * 
         * The footer consists of three pieces of text and an optional line
         * separator, configurable with
         * {@link PrintCompositor.set_footer_format}.
         * 
         * Note that by default the footer format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param print `true` if you want the footer to be printed.
         */
        set_print_footer(print: boolean): void;

        /**
         * Sets whether you want to print a header in each page.
         * 
         * The header consists of three pieces of text and an optional line
         * separator, configurable with {@link PrintCompositor.set_header_format}.
         * 
         * Note that by default the header format is unspecified, and if it's
         * empty it will not be printed, regardless of this setting.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param print `true` if you want the header to be printed.
         */
        set_print_header(print: boolean): void;

        /**
         * Sets the interval for printed line numbers.
         * 
         * If `interval` is 0 no numbers will be printed. If greater than 0, a number will be
         * printed every `interval` lines (i.e. 1 will print all line numbers).
         * 
         * Maximum accepted value for `interval` is 100.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param interval interval for printed line numbers.
         */
        set_print_line_numbers(interval: number): void;

        /**
         * Sets the right margin used by `compositor`.
         * @param margin the new right margin in units of `unit`.
         * @param unit the units for `margin`.
         */
        set_right_margin(margin: number, unit: Gtk.Unit): void;

        /**
         * Sets the width of tabulation in characters for printed text.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param width width of tab in characters.
         */
        set_tab_width(width: number): void;

        /**
         * Sets the top margin used by `compositor`.
         * @param margin the new top margin in units of `unit`
         * @param unit the units for `margin`
         */
        set_top_margin(margin: number, unit: Gtk.Unit): void;

        /**
         * Sets the line wrapping mode for the printed text.
         * 
         * This function cannot be called anymore after the first call to the
         * {@link PrintCompositor.paginate} function.
         * @param wrap_mode a {@link Gtk.WrapMode}.
         */
        set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
    }


    namespace Region {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: (Gtk.TextBuffer | null);
        }
    }

    /**
     * Region utility.
     * 
     * A {@link GtkSource.Region} permits to store a group of subregions of a
     * {@link Gtk.TextBuffer}. {@link GtkSource.Region} stores the subregions with pairs of
     * {@link Gtk.TextMark}'s, so the region is still valid after insertions and deletions
     * in the {@link Gtk.TextBuffer}.
     * 
     * The {@link Gtk.TextMark} for the start of a subregion has a left gravity, while the
     * {@link Gtk.TextMark} for the end of a subregion has a right gravity.
     * 
     * The typical use-case of {@link GtkSource.Region} is to scan a {@link Gtk.TextBuffer} chunk by
     * chunk, not the whole buffer at once to not block the user interface. The
     * {@link GtkSource.Region} represents in that case the remaining region to scan. You
     * can listen to the `Gtk.TextBuffer::insert-text` and
     * `Gtk.TextBuffer::delete-range` signals to update the {@link GtkSource.Region}
     * accordingly.
     * 
     * To iterate through the subregions, you need to use a {@link RegionIter},
     * for example:
     * ```c
     * GtkSourceRegion *region;
     * GtkSourceRegionIter region_iter;
     * 
     * gtk_source_region_get_start_region_iter (region, &region_iter);
     * 
     * while (!gtk_source_region_iter_is_end (&region_iter))
     * {
     *         GtkTextIter subregion_start;
     *         GtkTextIter subregion_end;
     * 
     *         if (!gtk_source_region_iter_get_subregion (&region_iter,
     *                                                    &subregion_start,
     *                                                    &subregion_end))
     *         {
     *                 break;
     *         }
     * 
     *         // Do something useful with the subregion.
     * 
     *         gtk_source_region_iter_next (&region_iter);
     * }
     * ```
     * ```python
     * buffer: GtkSource.Buffer = GtkSource.Buffer()
     * region: GtkSource.Region = GtkSource.Region(buffer=buffer)
     * region_iter = region.get_start_region_iter()
     * 
     * while not region_iter.is_end():
     *     success, start, end = region_iter.get_subregion()
     *     if not success:
     *         break
     * 
     *     # Do something useful with the subregion
     * 
     *     region_iter.next()
     * ```
     * @gir-type Class
     */
    class Region extends GObject.Object {
        static $gtype: GObject.GType<Region>;

        // Properties
        /**
         * The {@link Gtk.TextBuffer}. The {@link GtkSource.Region} has a weak reference to the
         * buffer.
         * @construct-only
         */
        get buffer(): (Gtk.TextBuffer | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Region.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](buffer: Gtk.TextBuffer): Region;

        // Signals
        /** @signal */
        connect<K extends keyof Region.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Region.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Region.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Region.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds `region_to_add` to `region`.
         * 
         * `region_to_add` is not modified.
         * @param region_to_add the {@link GtkSource.Region} to add to `region`, or `null`.
         */
        add_region(region_to_add: (Region | null)): void;

        /**
         * Adds the subregion delimited by `_start` and `_end` to `region`.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         */
        add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;

        /**
         * Gets the `start` and `end` bounds of the `region`.
         * @returns `true` if `start` and `end` have been set successfully (if non-`null`),   or `false` if the `region` is empty.
         */
        get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];

        /**
         * @returns the {@link Gtk.TextBuffer}.
         */
        get_buffer(): (Gtk.TextBuffer | null);

        /**
         * Initializes a {@link RegionIter} to the first subregion of `region`.
         * 
         * If `region` is empty, `iter` will be initialized to the end iterator.
         */
        get_start_region_iter(): RegionIter;

        /**
         * Returns the intersection between `region1` and `region2`.
         * 
         * `region1` and `region2` are not modified.
         * @param region2 a {@link GtkSource.Region}, or `null`.
         * @returns the intersection as a {@link GtkSource.Region}   object.
         */
        intersect_region(region2: (Region | null)): (Region | null);

        /**
         * Returns the intersection between `region` and the subregion delimited by
         * `_start` and `_end`.
         * 
         * `region` is not modified.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         * @returns the intersection as a new   {@link GtkSource.Region}.
         */
        intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): (Region | null);

        /**
         * Returns whether the `region` is empty.
         * 
         * A `null` `region` is considered empty.
         * @returns whether the `region` is empty.
         */
        is_empty(): boolean;

        /**
         * Subtracts `region_to_subtract` from `region`.
         * 
         * `region_to_subtract` is not modified.
         * @param region_to_subtract the {@link GtkSource.Region} to subtract from   `region`, or `null`.
         */
        subtract_region(region_to_subtract: (Region | null)): void;

        /**
         * Subtracts the subregion delimited by `_start` and `_end` from `region`.
         * @param _start the start of the subregion.
         * @param _end the end of the subregion.
         */
        subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;

        /**
         * Gets a string represention of `region`, for debugging purposes.
         * 
         * The returned string contains the character offsets of the subregions. It
         * doesn't include a newline character at the end of the string.
         * @returns a string represention of `region`. Free   with `g_free()` when no longer needed.
         */
        to_string(): (string | null);
    }


    namespace SearchContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::highlight": (pspec: GObject.ParamSpec) => void;
            "notify::match-style": (pspec: GObject.ParamSpec) => void;
            "notify::occurrences-count": (pspec: GObject.ParamSpec) => void;
            "notify::regex-error": (pspec: GObject.ParamSpec) => void;
            "notify::settings": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            highlight: boolean;
            match_style: (Style | null);
            matchStyle: (Style | null);
            occurrences_count: number;
            occurrencesCount: number;
            regex_error: (GLib.Error | null);
            regexError: (GLib.Error | null);
            settings: SearchSettings;
        }
    }

    /**
     * Search context.
     * 
     * A {@link GtkSource.SearchContext} is used for the search and replace in a
     * {@link Buffer}. The search settings are represented by a
     * {@link SearchSettings} object. There can be a many-to-many relationship
     * between buffers and search settings, with the search contexts in-between: a
     * search settings object can be shared between several search contexts; and a
     * buffer can contain several search contexts at the same time.
     * 
     * The total number of search occurrences can be retrieved with
     * {@link SearchContext.get_occurrences_count}. To know the position of a
     * certain match, use {@link SearchContext.get_occurrence_position}.
     * 
     * The buffer is scanned asynchronously, so it doesn't block the user interface.
     * For each search, the buffer is scanned at most once. After that, navigating
     * through the occurrences doesn't require to re-scan the buffer entirely.
     * 
     * To search forward, use {@link SearchContext.forward} or
     * {@link SearchContext.forward_async} for the asynchronous version.
     * The backward search is done similarly. To replace a search match, or all
     * matches, use {@link SearchContext.replace} and
     * {@link SearchContext.replace_all}.
     * 
     * The search occurrences are highlighted by default. To disable it, use
     * {@link SearchContext.set_highlight}. You can enable the search
     * highlighting for several {@link GtkSource.SearchContext}s attached to the
     * same buffer. Moreover, each of those {@link GtkSource.SearchContext}s can
     * have a different text style associated. Use
     * {@link SearchContext.set_match_style} to specify the {@link Style}
     * to apply on search matches.
     * 
     * Note that the {@link SearchContext.highlight} and
     * {@link SearchContext.match_style} properties are in the
     * {@link GtkSource.SearchContext} class, not {@link SearchSettings}. Appearance
     * settings should be tied to one, and only one buffer, as different buffers can
     * have different style scheme associated (a {@link SearchSettings} object
     * can be bound indirectly to several buffers).
     * 
     * The concept of "current match" doesn't exist yet. A way to highlight
     * differently the current match is to select it.
     * 
     * A search occurrence's position doesn't depend on the cursor position or other
     * parameters. Take for instance the buffer "aaaa" with the search text "aa".
     * The two occurrences are at positions [0:2] and [2:4]. If you begin to search
     * at position 1, you will get the occurrence [2:4], not [1:3]. This is a
     * prerequisite for regular expression searches. The pattern ".*" matches the
     * entire line. If the cursor is at the middle of the line, you don't want the
     * rest of the line as the occurrence, you want an entire line. (As a side note,
     * regular expression searches can also match multiple lines.)
     * 
     * In the GtkSourceView source code, there is an example of how to use the
     * search and replace API: see the tests/test-search.c file. It is a mini
     * application for the search and replace, with a basic user interface.
     * @gir-type Class
     */
    class SearchContext extends GObject.Object {
        static $gtype: GObject.GType<SearchContext>;

        // Properties
        /**
         * The {@link Buffer} associated to the search context.
         * @construct-only
         */
        get buffer(): Buffer;

        /**
         * Highlight the search occurrences.
         * @default true
         */
        get highlight(): boolean;
        set highlight(val: boolean);

        /**
         * A {@link Style}, or `null` for theme's scheme default style.
         */
        get match_style(): (Style | null);
        set match_style(val: (Style | null));

        /**
         * A {@link Style}, or `null` for theme's scheme default style.
         */
        get matchStyle(): (Style | null);
        set matchStyle(val: (Style | null));

        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         * @read-only
         * @default 0
         */
        get occurrences_count(): number;

        /**
         * The total number of search occurrences. If the search is disabled,
         * the value is 0. If the buffer is not already fully scanned, the value
         * is -1.
         * @read-only
         * @default 0
         */
        get occurrencesCount(): number;

        /**
         * If the regex search pattern doesn't follow all the rules, this
         * {@link GLib.Error} property will be set. If the pattern is valid, the value is
         * `null`.
         * 
         * Free with {@link GLib.Error.free}.
         * @read-only
         */
        get regex_error(): (GLib.Error | null);

        /**
         * If the regex search pattern doesn't follow all the rules, this
         * {@link GLib.Error} property will be set. If the pattern is valid, the value is
         * `null`.
         * 
         * Free with {@link GLib.Error.free}.
         * @read-only
         */
        get regexError(): (GLib.Error | null);

        /**
         * The {@link SearchSettings} associated to the search context.
         * 
         * This property is construct-only since version 4.0.
         * @construct-only
         */
        get settings(): SearchSettings;

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

        static ["new"](buffer: Buffer, settings: (SearchSettings | null)): SearchContext;

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
        /**
         * Synchronous backward search.
         * 
         * It is recommended to use the asynchronous functions instead, to not block the user interface.
         * However, if you are sure that the `buffer` is small, this function is more convenient to use.
         * 
         * If the {@link SearchSettings.wrap_around} property is `false`, this function
         * doesn't try to wrap around.
         * 
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns `false`, `has_wrapped_around` will have
         * the same value as the {@link SearchSettings.wrap_around} property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

        /**
         * The asynchronous version of {@link SearchContext.backward}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * 
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. The method takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         */
        backward_async(iter: Gtk.TextIter, cancellable: (Gio.Cancellable | null)): globalThis.Promise<[(Gtk.TextIter | null), (Gtk.TextIter | null), boolean]>;

        /**
         * The asynchronous version of {@link SearchContext.backward}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * 
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. The method takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        backward_async(iter: Gtk.TextIter, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * The asynchronous version of {@link SearchContext.backward}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * 
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. The method takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        backward_async(iter: Gtk.TextIter, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<[(Gtk.TextIter | null), (Gtk.TextIter | null), boolean]> | void);

        /**
         * Finishes a backward search started with
         * {@link SearchContext.backward_async}.
         * 
         * See the documentation of {@link SearchContext.backward} for more
         * details.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether a match was found.
         */
        backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

        /**
         * Synchronous forward search.
         * 
         * It is recommended to use the asynchronous functions instead, to not block the user interface.
         * However, if you are sure that the `buffer` is small, this function is more convenient to use.
         * 
         * If the {@link SearchSettings.wrap_around} property is `false`, this function
         * doesn't try to wrap around.
         * 
         * The `has_wrapped_around` out parameter is set independently of whether a match
         * is found. So if this function returns `false`, `has_wrapped_around` will have
         * the same value as the  {@link SearchSettings.wrap_around} property.
         * @param iter start of search.
         * @returns whether a match was found.
         */
        forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

        /**
         * The asynchronous version of {@link SearchContext.forward}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * 
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. The method takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         */
        forward_async(iter: Gtk.TextIter, cancellable: (Gio.Cancellable | null)): globalThis.Promise<[(Gtk.TextIter | null), (Gtk.TextIter | null), boolean]>;

        /**
         * The asynchronous version of {@link SearchContext.forward}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * 
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. The method takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        forward_async(iter: Gtk.TextIter, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * The asynchronous version of {@link SearchContext.forward}.
         * 
         * See the {@link Gio.AsyncResult} documentation to know how to use this function.
         * 
         * If the operation is cancelled, the `callback` will only be called if
         * `cancellable` was not `null`. The method takes
         * ownership of `cancellable`, so you can unref it after calling this function.
         * @param iter start of search.
         * @param cancellable a {@link Gio.Cancellable}, or `null`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation is finished.
         */
        forward_async(iter: Gtk.TextIter, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<[(Gtk.TextIter | null), (Gtk.TextIter | null), boolean]> | void);

        /**
         * Finishes a forward search started with {@link SearchContext.forward_async}.
         * 
         * See the documentation of {@link SearchContext.forward} for more
         * details.
         * @param result a {@link Gio.AsyncResult}.
         * @returns whether a match was found.
         */
        forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];

        /**
         * @returns the associated buffer.
         */
        get_buffer(): Buffer;

        /**
         * @returns whether to highlight the search occurrences.
         */
        get_highlight(): boolean;

        /**
         * @returns the {@link GtkSource.Style} to apply on search matches.
         */
        get_match_style(): (Style | null);

        /**
         * Gets the position of a search occurrence.
         * 
         * If the buffer is not already fully scanned, the position may be unknown,
         * and -1 is returned. If 0 is returned, it means that this part of the buffer
         * has already been scanned, and that `match_start` and `match_end` don't delimit an occurrence.
         * @param match_start the start of the occurrence.
         * @param match_end the end of the occurrence.
         * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if `match_start` and `match_end` don't delimit an occurrence. Returns -1 if the position is not yet known.
         */
        get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;

        /**
         * Gets the total number of search occurrences.
         * 
         * If the buffer is not already fully scanned, the total number of occurrences is
         * unknown, and -1 is returned.
         * @returns the total number of search occurrences, or -1 if unknown.
         */
        get_occurrences_count(): number;

        /**
         * Regular expression patterns must follow certain rules. If
         * {@link SearchSettings.search_text} breaks a rule, the error can be
         * retrieved with this function.
         * 
         * The error domain is {@link GLib.RegexError}.
         * 
         * Free the return value with {@link GLib.Error.free}.
         * @returns the {@link GLib.Error}, or `null` if the   pattern is valid.
         */
        get_regex_error(): (GLib.Error | null);

        /**
         * @returns the search settings.
         */
        get_settings(): SearchSettings;

        /**
         * Replaces a search match by another text. If `match_start` and `match_end`
         * doesn't correspond to a search match, `false` is returned.
         * 
         * `match_start` and `match_end` iters are revalidated to point to the replacement
         * text boundaries.
         * 
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling {@link GLib.Regex.check_replacement}. The `replace` text can contain
         * backreferences.
         * @param match_start the start of the match to replace.
         * @param match_end the end of the match to replace.
         * @param replace the replacement text.
         * @param replace_length the length of `replace` in bytes, or -1.
         * @returns whether the match has been replaced.
         */
        replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;

        /**
         * Replaces all search matches by another text.
         * 
         * It is a synchronous function, so it can block the user interface.
         * 
         * For a regular expression replacement, you can check if `replace` is valid by
         * calling {@link GLib.Regex.check_replacement}. The `replace` text can contain
         * backreferences.
         * @param replace the replacement text.
         * @param replace_length the length of `replace` in bytes, or -1.
         * @returns the number of replaced matches.
         */
        replace_all(replace: string, replace_length: number): number;

        /**
         * Enables or disables the search occurrences highlighting.
         * @param highlight the setting.
         */
        set_highlight(highlight: boolean): void;

        /**
         * Set the style to apply on search matches.
         * 
         * If `match_style` is `null`, default theme's scheme 'match-style' will be used.
         * To enable or disable the search highlighting, use {@link SearchContext.set_highlight}.
         * @param match_style a {@link GtkSource.Style}, or `null`.
         */
        set_match_style(match_style: (Style | null)): void;
    }


    namespace SearchSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::at-word-boundaries": (pspec: GObject.ParamSpec) => void;
            "notify::case-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::regex-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::search-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible-only": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-around": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            at_word_boundaries: boolean;
            atWordBoundaries: boolean;
            case_sensitive: boolean;
            caseSensitive: boolean;
            regex_enabled: boolean;
            regexEnabled: boolean;
            search_text: (string | null);
            searchText: (string | null);
            visible_only: boolean;
            visibleOnly: boolean;
            wrap_around: boolean;
            wrapAround: boolean;
        }
    }

    /**
     * Search settings.
     * 
     * A {@link GtkSource.SearchSettings} object represents the settings of a search. The
     * search settings can be associated with one or several
     * {@link SearchContext}s.
     * @gir-type Class
     */
    class SearchSettings extends GObject.Object {
        static $gtype: GObject.GType<SearchSettings>;

        // Properties
        /**
         * If `true`, a search match must start and end a word. The match can
         * span multiple words.
         * @default false
         */
        get at_word_boundaries(): boolean;
        set at_word_boundaries(val: boolean);

        /**
         * If `true`, a search match must start and end a word. The match can
         * span multiple words.
         * @default false
         */
        get atWordBoundaries(): boolean;
        set atWordBoundaries(val: boolean);

        /**
         * Whether the search is case sensitive.
         * @default false
         */
        get case_sensitive(): boolean;
        set case_sensitive(val: boolean);

        /**
         * Whether the search is case sensitive.
         * @default false
         */
        get caseSensitive(): boolean;
        set caseSensitive(val: boolean);

        /**
         * Search by regular expressions with
         * {@link SearchSettings.search_text} as the pattern.
         * @default false
         */
        get regex_enabled(): boolean;
        set regex_enabled(val: boolean);

        /**
         * Search by regular expressions with
         * {@link SearchSettings.search_text} as the pattern.
         * @default false
         */
        get regexEnabled(): boolean;
        set regexEnabled(val: boolean);

        /**
         * A search string, or `null` if the search is disabled.
         * 
         * If the regular expression search is enabled, {@link SearchSettings.search_text} is
         * the pattern.
         * @default null
         */
        get search_text(): (string | null);
        set search_text(val: (string | null));

        /**
         * A search string, or `null` if the search is disabled.
         * 
         * If the regular expression search is enabled, {@link SearchSettings.search_text} is
         * the pattern.
         * @default null
         */
        get searchText(): (string | null);
        set searchText(val: (string | null));

        /**
         * Exclude invisible text from the search.
         * A search match may have invisible text interspersed.
         * @since 5.12
         * @default true
         */
        get visible_only(): boolean;
        set visible_only(val: boolean);

        /**
         * Exclude invisible text from the search.
         * A search match may have invisible text interspersed.
         * @since 5.12
         * @default true
         */
        get visibleOnly(): boolean;
        set visibleOnly(val: boolean);

        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         * @default false
         */
        get wrap_around(): boolean;
        set wrap_around(val: boolean);

        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         * @default false
         */
        get wrapAround(): boolean;
        set wrapAround(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchSettings.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SearchSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SearchSettings;

        // Signals
        /** @signal */
        connect<K extends keyof SearchSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchSettings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchSettings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchSettings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns whether to search at word boundaries.
         */
        get_at_word_boundaries(): boolean;

        /**
         * @returns whether the search is case sensitive.
         */
        get_case_sensitive(): boolean;

        /**
         * @returns whether to search by regular expressions.
         */
        get_regex_enabled(): boolean;

        /**
         * Gets the text to search.
         * 
         * The return value must not be freed.
         * 
         * You may be interested to call {@link utils_escape_search_text} after
         * this function.
         * @returns the text to search, or `null` if the search is disabled.
         */
        get_search_text(): (string | null);

        /**
         * @returns whether to exclude invisible text from the search.
         */
        get_visible_only(): boolean;

        /**
         * @returns whether to wrap around the search.
         */
        get_wrap_around(): boolean;

        /**
         * Change whether the search is done at word boundaries.
         * 
         * If `at_word_boundaries` is `true`, a search match must start and end a word.
         * The match can span multiple words. See also {@link Gtk.TextIter.starts_word} and
         * {@link Gtk.TextIter.ends_word}.
         * @param at_word_boundaries the setting.
         */
        set_at_word_boundaries(at_word_boundaries: boolean): void;

        /**
         * Enables or disables the case sensitivity for the search.
         * @param case_sensitive the setting.
         */
        set_case_sensitive(case_sensitive: boolean): void;

        /**
         * Enables or disables whether to search by regular expressions.
         * 
         * If enabled, the {@link SearchSettings.search_text} property contains the
         * pattern of the regular expression.
         * 
         * {@link SearchContext} uses {@link GLib.Regex} when regex search is enabled. See the
         * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
         * page in the GLib reference manual.
         * @param regex_enabled the setting.
         */
        set_regex_enabled(regex_enabled: boolean): void;

        /**
         * Sets the text to search.
         * 
         * If `search_text` is `null` or is empty, the search will be disabled. A copy of `search_text`
         * will be made, so you can safely free `search_text` after a call to this function.
         * 
         * You may be interested to call {@link utils_unescape_search_text} before
         * this function.
         * @param search_text the nul-terminated text to search, or `null` to disable the search.
         */
        set_search_text(search_text: (string | null)): void;

        /**
         * Enables or disables whether to exclude invisible text from the search.
         * 
         * If enabled, only visible text will be searched.
         * A search match may have invisible text interspersed.
         * @param visible_only the setting.
         */
        set_visible_only(visible_only: boolean): void;

        /**
         * Enables or disables the wrap around search.
         * 
         * If `wrap_around` is `true`, the forward search continues at the beginning of the buffer
         * if no search occurrences are found. Similarly, the backward search continues to search at
         * the end of the buffer.
         * @param wrap_around the setting.
         */
        set_wrap_around(wrap_around: boolean): void;
    }


    namespace Snippet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::focus-position": (pspec: GObject.ParamSpec) => void;
            "notify::language-id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::trigger": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            description: string;
            focus_position: number;
            focusPosition: number;
            language_id: string;
            languageId: string;
            name: string;
            trigger: (string | null);
        }
    }

    /**
     * Quick insertion code snippets.
     * 
     * The {@link GtkSource.Snippet} represents a series of chunks that can quickly be
     * inserted into the {@link View}.
     * 
     * Snippets are defined in XML files which are loaded by the
     * {@link SnippetManager}. Alternatively, applications can create snippets
     * on demand and insert them into the {@link View} using
     * {@link View.push_snippet}.
     * 
     * Snippet chunks can reference other snippet chunks as well as post-process
     * the values from other chunks such as capitalization.
     * @gir-type Class
     */
    class Snippet extends GObject.Object {
        static $gtype: GObject.GType<Snippet>;

        // Properties
        /**
         * @read-only
         */
        get buffer(): Gtk.TextBuffer;

        /**
         * @default null
         */
        get description(): string;
        set description(val: string);

        /**
         * @read-only
         * @default -1
         */
        get focus_position(): number;

        /**
         * @read-only
         * @default -1
         */
        get focusPosition(): number;

        /**
         * @default null
         */
        get language_id(): string;
        set language_id(val: string);

        /**
         * @default null
         */
        get languageId(): string;
        set languageId(val: string);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * @default null
         */
        get trigger(): (string | null);
        set trigger(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Snippet.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Snippet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](trigger: (string | null), language_id: (string | null)): Snippet;

        static new_parsed(text: string): Snippet;

        // Signals
        /** @signal */
        connect<K extends keyof Snippet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Snippet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Snippet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Snippet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Snippet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Snippet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Appends `chunk` to the `snippet`.
         * 
         * This may only be called before the snippet has been expanded.
         * @param chunk a {@link GtkSource.SnippetChunk}
         */
        add_chunk(chunk: SnippetChunk): void;

        /**
         * Does a deep copy of the snippet.
         * @returns A new {@link GtkSource.Snippet}
         */
        copy(): Snippet;

        /**
         * Gets the context used for expanding the snippet.
         * @returns an {@link GtkSource.SnippetContext}
         */
        get_context(): (SnippetContext | null);

        /**
         * Gets the description for the snippet.
         */
        get_description(): string;

        /**
         * Gets the current focus for the snippet.
         * 
         * This is changed as the user tabs through focus locations.
         * @returns The focus position, or -1 if unset.
         */
        get_focus_position(): number;

        /**
         * Gets the language-id used for the source snippet.
         * 
         * The language identifier should be one that matches a
         * source language {@link Language.id} property.
         * @returns the language identifier
         */
        get_language_id(): string;

        /**
         * Gets the number of chunks in the snippet.
         * 
         * Note that not all chunks are editable.
         * @returns The number of chunks.
         */
        get_n_chunks(): number;

        /**
         * Gets the name for the snippet.
         */
        get_name(): string;

        /**
         * Gets the chunk at `nth`.
         * @param nth the nth chunk to get
         * @returns an {@link GtkSource.SnippetChunk}
         */
        get_nth_chunk(nth: number): SnippetChunk;

        /**
         * Gets the trigger for the source snippet.
         * 
         * A trigger is a word that can be expanded into the full snippet when
         * the user presses Tab.
         * @returns A string or `null`
         */
        get_trigger(): (string | null);

        /**
         * Sets the description for the snippet.
         * @param description the snippet description
         */
        set_description(description: string): void;

        /**
         * Sets the language identifier for the snippet.
         * 
         * This should match the {@link Language.id} identifier.
         * @param language_id the language identifier for the snippet
         */
        set_language_id(language_id: string): void;

        /**
         * Sets the name for the snippet.
         * @param name the snippet name
         */
        set_name(name: string): void;

        /**
         * Sets the trigger for the snippet.
         * @param trigger the trigger word
         */
        set_trigger(trigger: string): void;
    }


    namespace SnippetChunk {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::focus-position": (pspec: GObject.ParamSpec) => void;
            "notify::spec": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-set": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            context: SnippetContext;
            focus_position: number;
            focusPosition: number;
            spec: (string | null);
            text: string;
            text_set: boolean;
            textSet: boolean;
            tooltip_text: string;
            tooltipText: string;
        }
    }

    /**
     * A chunk of text within the source snippet.
     * 
     * The {@link GtkSource.SnippetChunk} represents a single chunk of text that
     * may or may not be an edit point within the snippet. Chunks that are
     * an edit point (also called a tab stop) have the
     * {@link SnippetChunk.focus_position} property set.
     * @gir-type Class
     */
    class SnippetChunk extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<SnippetChunk>;

        // Properties
        get context(): SnippetContext;
        set context(val: SnippetContext);

        /**
         * @default -1
         */
        get focus_position(): number;
        set focus_position(val: number);

        /**
         * @default -1
         */
        get focusPosition(): number;
        set focusPosition(val: number);

        /**
         * @default null
         */
        get spec(): (string | null);
        set spec(val: (string | null));

        /**
         * @default null
         */
        get text(): string;
        set text(val: string);

        /**
         * @default false
         */
        get text_set(): boolean;
        set text_set(val: boolean);

        /**
         * @default false
         */
        get textSet(): boolean;
        set textSet(val: boolean);

        /**
         * @default null
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);

        /**
         * @default null
         */
        get tooltipText(): string;
        set tooltipText(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SnippetChunk.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SnippetChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SnippetChunk;

        // Signals
        /** @signal */
        connect<K extends keyof SnippetChunk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnippetChunk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SnippetChunk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnippetChunk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SnippetChunk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SnippetChunk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Copies the source snippet.
         * @returns A {@link GtkSource.SnippetChunk}
         */
        copy(): SnippetChunk;

        /**
         * Gets the context for the snippet insertion.
         * @returns A {@link GtkSource.SnippetContext}
         */
        get_context(): SnippetContext;

        /**
         * Gets the {@link SnippetChunk.focus_position}.
         * 
         * The focus-position is used to determine how many tabs it takes for the
         * snippet to advanced to this chunk.
         * 
         * A focus-position of zero will be the last focus position of the snippet
         * and snippet editing ends when it has been reached.
         * 
         * A focus-position of -1 means the chunk cannot be focused by the user.
         * @returns the focus-position
         */
        get_focus_position(): number;

        /**
         * Gets the specification for the chunk.
         * 
         * The specification is evaluated for variables when other chunks are edited
         * within the snippet context. If the user has changed the text, the
         * {@link SnippetChunk.text} and {@link SnippetChunk.text_set} properties
         * are updated.
         * @returns the specification, if any
         */
        get_spec(): (string | null);

        /**
         * Gets the {@link SnippetChunk.text} property.
         * 
         * The text property is updated when the user edits the text of the chunk.
         * If it has not been edited, the {@link SnippetChunk.spec} property is
         * returned.
         * @returns the text of the chunk
         */
        get_text(): string;

        /**
         * Gets the {@link SnippetChunk.text_set} property.
         * 
         * This is typically set when the user has edited a snippet chunk.
         */
        get_text_set(): boolean;

        get_tooltip_text(): string;

        /**
         * @param context 
         */
        set_context(context: SnippetContext): void;

        /**
         * Sets the {@link SnippetChunk.focus_position} property.
         * 
         * The focus-position is used to determine how many tabs it takes for the
         * snippet to advanced to this chunk.
         * 
         * A focus-position of zero will be the last focus position of the snippet
         * and snippet editing ends when it has been reached.
         * 
         * A focus-position of -1 means the chunk cannot be focused by the user.
         * @param focus_position the focus-position
         */
        set_focus_position(focus_position: number): void;

        /**
         * Sets the specification for the chunk.
         * 
         * The specification is evaluated for variables when other chunks are edited
         * within the snippet context. If the user has changed the text, the
         * [property@SnippetChunk:text and] {@link SnippetChunk.text_set} properties
         * are updated.
         * @param spec the new specification for the chunk
         */
        set_spec(spec: string): void;

        /**
         * Sets the text for the snippet chunk.
         * 
         * This is usually used by the snippet engine to update the text, but may
         * be useful when creating custom snippets to avoid expansion of any
         * specification.
         * @param text the text of the property
         */
        set_text(text: string): void;

        /**
         * Sets the {@link SnippetChunk.text_set} property.
         * 
         * This is typically set when the user has edited a snippet chunk by the
         * snippet engine.
         * @param text_set the property value
         */
        set_text_set(text_set: boolean): void;

        /**
         * @param tooltip_text 
         */
        set_tooltip_text(tooltip_text: string): void;
    }


    namespace SnippetContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The signal is emitted when a change has been
             * discovered in one of the chunks of the snippet which has
             * caused a variable or other dynamic data within the context
             * to have changed.
             * @signal
             * @run-first
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Context for expanding {@link SnippetChunk}.
     * 
     * This class is currently used primary as a hashtable. However, the longer
     * term goal is to have it hold onto a `GjsContext` as well as other languages
     * so that {@link SnippetChunk} can expand themselves by executing
     * script within the context.
     * 
     * The {@link Snippet} will build the context and then expand each of the
     * chunks during the insertion/edit phase.
     * @gir-type Class
     */
    class SnippetContext extends GObject.Object {
        static $gtype: GObject.GType<SnippetContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SnippetContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SnippetContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SnippetContext;

        // Signals
        /** @signal */
        connect<K extends keyof SnippetContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnippetContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SnippetContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnippetContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SnippetContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SnippetContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Removes all variables from the context.
         */
        clear_variables(): void;

        /**
         * @param input 
         */
        expand(input: string): string;

        /**
         * Gets the current value for a variable named `key`.
         * @param key the name of the variable
         * @returns the value for the variable, or `null`
         */
        get_variable(key: string): (string | null);

        /**
         * Sets a constatnt within the context.
         * 
         * This is similar to a variable set with {@link SnippetContext.set_variable}
         * but is expected to not change during use of the snippet.
         * 
         * Examples would be the date or users name.
         * @param key the constant name
         * @param value the value of the constant
         */
        set_constant(key: string, value: string): void;

        /**
         * @param line_prefix 
         */
        set_line_prefix(line_prefix: string): void;

        /**
         * @param tab_width 
         */
        set_tab_width(tab_width: number): void;

        /**
         * @param use_spaces 
         */
        set_use_spaces(use_spaces: boolean): void;

        /**
         * Sets a variable within the context.
         * 
         * This variable may be overridden by future updates to the
         * context.
         * @param key the variable name
         * @param value the value for the variable
         */
        set_variable(key: string, value: string): void;
    }


    namespace SnippetManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            search_path: string[];
            searchPath: string[];
        }
    }

    /**
     * Provides access to {@link Snippet}.
     * 
     * {@link GtkSource.SnippetManager} is an object which processes snippet description
     * files and creates {@link Snippet} objects.
     * 
     * Use {@link SnippetManager.get_default} to retrieve the default
     * instance of {@link GtkSource.SnippetManager}.
     * 
     * Use {@link SnippetManager.get_snippet} to retrieve snippets for
     * a given snippets.
     * @gir-type Class
     */
    class SnippetManager extends GObject.Object {
        static $gtype: GObject.GType<SnippetManager>;

        // Properties
        /**
         * Contains a list of directories to search for files containing snippets (*.snippets).
         */
        get search_path(): string[];
        set search_path(val: string[]);

        /**
         * Contains a list of directories to search for files containing snippets (*.snippets).
         */
        get searchPath(): string[];
        set searchPath(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SnippetManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SnippetManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SnippetManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnippetManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SnippetManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnippetManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SnippetManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SnippetManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the default {@link GtkSource.SnippetManager} instance.
         */
        static get_default(): SnippetManager;

        // Methods
        /**
         * Gets the list directories where `self` looks for snippet files.
         * @returns `null`-terminated array   containing a list of snippet files directories.   The array is owned by `lm` and must not be modified.
         */
        get_search_path(): string[];

        /**
         * Queries the known snippets for the first matching `group`, `language_id`,
         * and/or `trigger`.
         * 
         * If `group` or `language_id` are `null`, they will be ignored.
         * @param group a group name or `null`
         * @param language_id a {@link GtkSource.Language.id} or `null`
         * @param trigger the trigger for the snippet
         * @returns a {@link GtkSource.Snippet} or `null` if no   matching snippet was found.
         */
        get_snippet(group: (string | null), language_id: (string | null), trigger: string): (Snippet | null);

        /**
         * Gets a {@link Gio.ListModel} of all snippets.
         * 
         * This can be used to get an unfiltered list of all of the snippets
         * known to the snippet manager.
         * @returns a {@link Gio.ListModel} of {@link GtkSource.Snippet}
         */
        list_all(): Gio.ListModel;

        /**
         * List all the known groups within the snippet manager.
         * 
         * The result should be freed with `g_free()`, and the individual strings are
         * owned by `self` and should never be freed by the caller.
         * @returns An array of strings which should be freed with `g_free()`.
         */
        list_groups(): string[];

        /**
         * Queries the known snippets for those matching `group`, `language_id`, and/or
         * `trigger_prefix`.
         * 
         * If any of these are `null`, they will be ignored when filtering the available snippets.
         * 
         * The {@link Gio.ListModel} only contains information about the available snippets until
         * {@link Gio.ListModel.get_item} is called for a specific snippet. This helps reduce
         * the number of {@link GObject.Object}'s that are created at runtime to those needed by
         * the calling application.
         * @param group a group name or `null`
         * @param language_id a {@link GtkSource.Language.id} or `null`
         * @param trigger_prefix a prefix for a trigger to activate
         * @returns a {@link Gio.ListModel} of {@link GtkSource.Snippet}.
         */
        list_matching(group: (string | null), language_id: (string | null), trigger_prefix: (string | null)): Gio.ListModel;

        /**
         * Sets the list of directories in which the {@link GtkSource.SnippetManager} looks for
         * snippet files.
         * 
         * If `dirs` is `null`, the search path is reset to default.
         * 
         * At the moment this function can be called only before the
         * snippet files are loaded for the first time. In practice
         * to set a custom search path for a {@link GtkSource.SnippetManager},
         * you have to call this function right after creating it.
         * @param dirs a `null`-terminated array of   strings or `null`.
         */
        set_search_path(dirs: (string[] | null)): void;
    }


    namespace SpaceDrawer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::enable-matrix": (pspec: GObject.ParamSpec) => void;
            "notify::matrix": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_matrix: boolean;
            enableMatrix: boolean;
            matrix: GLib.Variant;
        }
    }

    /**
     * Represent white space characters with symbols.
     * 
     * {@link GtkSource.SpaceDrawer} provides a way to visualize white spaces, by drawing
     * symbols.
     * 
     * Call {@link View.get_space_drawer} to get the {@link GtkSource.SpaceDrawer}
     * instance of a certain {@link View}.
     * 
     * By default, no white spaces are drawn because the
     * {@link SpaceDrawer.enable_matrix} is `false`.
     * 
     * To draw white spaces, {@link SpaceDrawer.set_types_for_locations} can
     * be called to set the {@link SpaceDrawer.matrix} property (by default all
     * space types are enabled at all locations). Then call
     * {@link SpaceDrawer.set_enable_matrix}.
     * 
     * For a finer-grained method, there is also the {@link Tag}'s
     * {@link Tag.draw_spaces} property.
     * 
     * # Example
     * 
     * To draw non-breaking spaces everywhere and draw all types of trailing spaces
     * except newlines:
     * ```c
     * gtk_source_space_drawer_set_types_for_locations (space_drawer,
     *                                                  GTK_SOURCE_SPACE_LOCATION_ALL,
     *                                                  GTK_SOURCE_SPACE_TYPE_NBSP);
     * 
     * gtk_source_space_drawer_set_types_for_locations (space_drawer,
     *                                                  GTK_SOURCE_SPACE_LOCATION_TRAILING,
     *                                                  GTK_SOURCE_SPACE_TYPE_ALL &
     *                                                  ~GTK_SOURCE_SPACE_TYPE_NEWLINE);
     * 
     * gtk_source_space_drawer_set_enable_matrix (space_drawer, TRUE);
     * ```
     * ```python
     * space_drawer.set_types_for_locations(
     *     locations=GtkSource.SpaceLocationFlags.ALL,
     *     types=GtkSource.SpaceTypeFlags.NBSP,
     * )
     * 
     * all_types_except_newline = GtkSource.SpaceTypeFlags(
     *     int(GtkSource.SpaceTypeFlags.ALL) & ~int(GtkSource.SpaceTypeFlags.NEWLINE)
     * )
     * space_drawer.set_types_for_locations(
     *     locations=GtkSource.SpaceLocationFlags.TRAILING,
     *     types=all_types_except_newline,
     * )
     * 
     * space_drawer.set_enable_matrix(True)
     * ```
     * 
     * # Use-case: draw unwanted white spaces
     * 
     * A possible use-case is to draw only unwanted white spaces. Examples:
     * 
     * - Draw all trailing spaces.
     * - If the indentation and alignment must be done with spaces, draw tabs.
     * 
     * And non-breaking spaces can always be drawn, everywhere, to distinguish them
     * from normal spaces.
     * @gir-type Class
     */
    class SpaceDrawer extends GObject.Object {
        static $gtype: GObject.GType<SpaceDrawer>;

        // Properties
        /**
         * Whether the {@link SpaceDrawer.matrix} property is enabled.
         * @default false
         */
        get enable_matrix(): boolean;
        set enable_matrix(val: boolean);

        /**
         * Whether the {@link SpaceDrawer.matrix} property is enabled.
         * @default false
         */
        get enableMatrix(): boolean;
        set enableMatrix(val: boolean);

        /**
         * The property is a {@link GLib.Variant} property to specify where and
         * what kind of white spaces to draw.
         * 
         * The {@link GLib.Variant} is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of {@link SpaceTypeFlags}. There is one
         * integer for each {@link SpaceLocationFlags}, in the same order as
         * they are defined in the enum ({@link GtkSource.SpaceLocationFlags.NONE} and
         * {@link GtkSource.SpaceLocationFlags.ALL} are not taken into account).
         * 
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be {@link GtkSource.SpaceTypeFlags.NONE}.
         * 
         * By default, {@link GtkSource.SpaceTypeFlags.ALL} is set for all locations.4
         */
        get matrix(): GLib.Variant;
        set matrix(val: GLib.Variant);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpaceDrawer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpaceDrawer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SpaceDrawer;

        // Signals
        /** @signal */
        connect<K extends keyof SpaceDrawer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpaceDrawer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpaceDrawer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpaceDrawer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpaceDrawer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Binds the {@link SpaceDrawer.matrix} property to a {@link Gio.Settings} key.
         * 
         * The {@link Gio.Settings} key must be of the same type as the
         * {@link SpaceDrawer.matrix} property, that is, `"au"`.
         * 
         * The {@link Gio.Settings.bind} function cannot be used, because the default GIO
         * mapping functions don't support {@link GLib.Variant} properties (maybe it will be
         * supported by a future GIO version, in which case this function can be
         * deprecated).
         * @param settings a {@link Gio.Settings} object.
         * @param key the `settings` key to bind.
         * @param flags flags for the binding.
         */
        bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;

        /**
         * @returns whether the {@link GtkSource.SpaceDrawer.matrix} property is enabled.
         */
        get_enable_matrix(): boolean;

        /**
         * Gets the value of the {@link SpaceDrawer.matrix} property, as a {@link GLib.Variant}.
         * 
         * An empty array can be returned in case the matrix is a zero matrix.
         * 
         * The {@link SpaceDrawer.get_types_for_locations} function may be more
         * convenient to use.
         * @returns the {@link GtkSource.SpaceDrawer.matrix} value as a new floating {@link GLib.Variant}   instance.
         */
        get_matrix(): GLib.Variant;

        /**
         * If only one location is specified, this function returns what kind of
         * white spaces are drawn at that location.
         * 
         * The value is retrieved from the {@link SpaceDrawer.matrix} property.
         * 
         * If several locations are specified, this function returns the logical AND for
         * those locations. Which means that if a certain kind of white space is present
         * in the return value, then that kind of white space is drawn at all the
         * specified `locations`.
         * @param locations one or several {@link GtkSource.SpaceLocationFlags}.
         * @returns a combination of {@link GtkSource.SpaceTypeFlags}.
         */
        get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;

        /**
         * Sets whether the {@link SpaceDrawer.matrix} property is enabled.
         * @param enable_matrix the new value.
         */
        set_enable_matrix(enable_matrix: boolean): void;

        /**
         * Sets a new value to the {@link SpaceDrawer.matrix} property, as a {@link GLib.Variant}.
         * 
         * If `matrix` is `null`, then an empty array is set.
         * 
         * If `matrix` is floating, it is consumed.
         * 
         * The {@link SpaceDrawer.set_types_for_locations} function may be more
         * convenient to use.
         * @param matrix the new matrix value, or `null`.
         */
        set_matrix(matrix: (GLib.Variant | null)): void;

        /**
         * Modifies the {@link SpaceDrawer.matrix} property at the specified
         * `locations`.
         * @param locations one or several {@link GtkSource.SpaceLocationFlags}.
         * @param types a combination of {@link GtkSource.SpaceTypeFlags}.
         */
        set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
    }


    namespace Style {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::bold": (pspec: GObject.ParamSpec) => void;
            "notify::bold-set": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::italic": (pspec: GObject.ParamSpec) => void;
            "notify::italic-set": (pspec: GObject.ParamSpec) => void;
            "notify::line-background": (pspec: GObject.ParamSpec) => void;
            "notify::line-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::pango-underline": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline-color": (pspec: GObject.ParamSpec) => void;
            "notify::underline-color-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            background: string;
            background_set: boolean;
            backgroundSet: boolean;
            bold: boolean;
            bold_set: boolean;
            boldSet: boolean;
            foreground: string;
            foreground_set: boolean;
            foregroundSet: boolean;
            italic: boolean;
            italic_set: boolean;
            italicSet: boolean;
            line_background: string;
            lineBackground: string;
            line_background_set: boolean;
            lineBackgroundSet: boolean;
            pango_underline: Pango.Underline;
            pangoUnderline: Pango.Underline;
            scale: string;
            scale_set: boolean;
            scaleSet: boolean;
            strikethrough: boolean;
            strikethrough_set: boolean;
            strikethroughSet: boolean;
            underline_color: string;
            underlineColor: string;
            underline_color_set: boolean;
            underlineColorSet: boolean;
            underline_set: boolean;
            underlineSet: boolean;
            weight: Pango.Weight;
            weight_set: boolean;
            weightSet: boolean;
        }
    }

    /**
     * Represents a style.
     * 
     * The {@link GtkSource.Style} structure is used to describe text attributes
     * which are set when given style is used.
     * @gir-type Class
     */
    class Style extends GObject.Object {
        static $gtype: GObject.GType<Style>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get background(): string;

        /**
         * @construct-only
         * @default false
         */
        get background_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get backgroundSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get bold(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get bold_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get boldSet(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get foreground(): string;

        /**
         * @construct-only
         * @default false
         */
        get foreground_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get foregroundSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get italic(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get italic_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get italicSet(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get line_background(): string;

        /**
         * @construct-only
         * @default null
         */
        get lineBackground(): string;

        /**
         * @construct-only
         * @default false
         */
        get line_background_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get lineBackgroundSet(): boolean;

        /**
         * @construct-only
         * @default Pango.Underline.NONE
         */
        get pango_underline(): Pango.Underline;

        /**
         * @construct-only
         * @default Pango.Underline.NONE
         */
        get pangoUnderline(): Pango.Underline;

        /**
         * @construct-only
         * @default null
         */
        get scale(): string;

        /**
         * @construct-only
         * @default false
         */
        get scale_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get scaleSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get strikethrough(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get strikethrough_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get strikethroughSet(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get underline_color(): string;

        /**
         * @construct-only
         * @default null
         */
        get underlineColor(): string;

        /**
         * @construct-only
         * @default false
         */
        get underline_color_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get underlineColorSet(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get underline_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get underlineSet(): boolean;

        /**
         * @construct-only
         * @default Pango.Weight.NORMAL
         */
        get weight(): Pango.Weight;

        /**
         * @construct-only
         * @default false
         */
        get weight_set(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get weightSet(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Style.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Style.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Style.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Style.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Style.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Style.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Style.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This function modifies the {@link Gtk.TextTag} properties that are related to the
         * {@link GtkSource.Style} properties. Other {@link Gtk.TextTag} properties are left untouched.
         * 
         * If `style` is non-`null`, applies `style` to `tag`.
         * 
         * If `style` is `null`, the related *-set properties of {@link Gtk.TextTag} are set to
         * `false`.
         * @param tag a {@link Gtk.TextTag} to apply styles to.
         */
        apply(tag: Gtk.TextTag): void;

        /**
         * Creates a copy of `style`, that is a new {@link GtkSource.Style} instance which
         * has the same attributes set.
         * @returns copy of `style`, call `g_object_unref()` when you are done with it.
         */
        copy(): Style;
    }


    namespace StyleScheme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: (string | null);
            filename: (string | null);
            id: string;
            name: string;
        }
    }

    /**
     * Controls the appearance of {@link View}.
     * 
     * {@link GtkSource.StyleScheme} contains all the text styles to be used in
     * {@link View} and {@link Buffer}. For instance, it contains text styles
     * for syntax highlighting, it may contain foreground and background color for
     * non-highlighted text, color for the line numbers, current line highlighting,
     * bracket matching, etc.
     * 
     * Style schemes are stored in XML files. The format of a scheme file is
     * documented in the [style scheme reference](./style-reference.html).
     * 
     * The two style schemes with IDs "classic" and "tango" follow more closely the
     * GTK theme (for example for the background color).
     * @gir-type Class
     */
    class StyleScheme extends GObject.Object {
        static $gtype: GObject.GType<StyleScheme>;

        // Properties
        /**
         * Style scheme description, a translatable string to present to the user.
         * @read-only
         * @default null
         */
        get description(): (string | null);

        /**
         * Style scheme filename or `null`.
         * @read-only
         * @default null
         */
        get filename(): (string | null);

        /**
         * Style scheme id, a unique string used to identify the style scheme
         * in {@link StyleSchemeManager}.
         * @construct-only
         * @default null
         */
        get id(): string;

        /**
         * Style scheme name, a translatable string to present to the user.
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleScheme.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleScheme.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof StyleScheme.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleScheme.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleScheme.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleScheme.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleScheme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns a `null`-terminated array containing the `scheme` authors or `null` if no author is specified by the style scheme.
         */
        get_authors(): (string[] | null);

        /**
         * @returns `scheme` description (if defined), or `null`.
         */
        get_description(): (string | null);

        /**
         * @returns `scheme` file name if the scheme was created parsing a style scheme file or `null` in the other cases.
         */
        get_filename(): (string | null);

        /**
         * @returns `scheme` id.
         */
        get_id(): string;

        /**
         * Gets a metadata property from the style scheme.
         * @param name metadata property name.
         * @returns value of property `name` stored in   the metadata of `scheme` or `null` if `scheme` does not contain the   specified metadata property.
         */
        get_metadata(name: string): (string | null);

        /**
         * @returns `scheme` name.
         */
        get_name(): string;

        /**
         * @param style_id id of the style to retrieve.
         * @returns style which corresponds to `style_id` in the `scheme`, or `null` when no style with this name found.  It is owned by `scheme` and may not be unref'ed.
         */
        get_style(style_id: string): (Style | null);
    }


    namespace StyleSchemeChooserButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::can-shrink": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
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
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, StyleSchemeChooser.ConstructorProps {

        }
    }

    /**
     * A button to launch a style scheme selection dialog.
     * 
     * The {@link GtkSource.StyleSchemeChooserButton} is a button which displays
     * the currently selected style scheme and allows to open a style scheme
     * selection dialog to change the style scheme.
     * It is suitable widget for selecting a style scheme in a preference dialog.
     * 
     * In {@link GtkSource.StyleSchemeChooserButton}, a {@link StyleSchemeChooserWidget}
     * is used to provide a dialog for selecting style schemes.
     * @gir-type Class
     */
    class StyleSchemeChooserButton extends Gtk.Button implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser {
        static $gtype: GObject.GType<StyleSchemeChooserButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemeChooserButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleSchemeChooserButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StyleSchemeChooserButton;

        // Signals
        /** @signal */
        connect<K extends keyof StyleSchemeChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleSchemeChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleSchemeChooserButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeChooserButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The name of the action with which this widget should be associated.
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * The name of the action with which this widget should be associated.
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /**
         * The target value of the actionable widget's action.
          * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /**
         * The target value of the actionable widget's action.
          * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
          * @category Inherited from GtkSource.StyleSchemeChooser
         */
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);

        /**
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
          * @category Inherited from GtkSource.StyleSchemeChooser
         */
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);

        /**
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): (GLib.Variant | null);

        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         * 
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): (GLib.Variant | null);

        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         * 
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Gets the currently-selected scheme.
         * @returns the currently-selected scheme.
         */
        get_style_scheme(): StyleScheme;

        /**
         * Sets the scheme.
         * @param scheme a {@link GtkSource.StyleScheme}
         */
        set_style_scheme(scheme: StyleScheme): void;

        /**
         * Gets the currently-selected scheme.
         * @virtual
         */
        vfunc_get_style_scheme(): StyleScheme;

        /**
         * Sets the scheme.
         * @param scheme a {@link GtkSource.StyleScheme}
         * @virtual
         */
        vfunc_set_style_scheme(scheme: StyleScheme): void;
    }


    namespace StyleSchemeChooserWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
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
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, StyleSchemeChooser.ConstructorProps {

        }
    }

    /**
     * A widget for choosing style schemes.
     * 
     * The {@link GtkSource.StyleSchemeChooserWidget} widget lets the user select a
     * style scheme. By default, the chooser presents a predefined list
     * of style schemes.
     * 
     * To change the initially selected style scheme,
     * use {@link StyleSchemeChooser.set_style_scheme}.
     * To get the selected style scheme
     * use {@link StyleSchemeChooser.get_style_scheme}.
     * @gir-type Class
     */
    class StyleSchemeChooserWidget extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser {
        static $gtype: GObject.GType<StyleSchemeChooserWidget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemeChooserWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StyleSchemeChooserWidget;

        // Signals
        /** @signal */
        connect<K extends keyof StyleSchemeChooserWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleSchemeChooserWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeChooserWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleSchemeChooserWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeChooserWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

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
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
          * @category Inherited from GtkSource.StyleSchemeChooser
         */
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);

        /**
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
          * @category Inherited from GtkSource.StyleSchemeChooser
         */
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Gets the currently-selected scheme.
         * @returns the currently-selected scheme.
         */
        get_style_scheme(): StyleScheme;

        /**
         * Sets the scheme.
         * @param scheme a {@link GtkSource.StyleScheme}
         */
        set_style_scheme(scheme: StyleScheme): void;

        /**
         * Gets the currently-selected scheme.
         * @virtual
         */
        vfunc_get_style_scheme(): StyleScheme;

        /**
         * Sets the scheme.
         * @param scheme a {@link GtkSource.StyleScheme}
         * @virtual
         */
        vfunc_set_style_scheme(scheme: StyleScheme): void;
    }


    namespace StyleSchemeManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scheme-ids": (pspec: GObject.ParamSpec) => void;
            "notify::search-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scheme_ids: (string[] | null);
            schemeIds: (string[] | null);
            search_path: string[];
            searchPath: string[];
        }
    }

    /**
     * Provides access to {@link StyleScheme}s.
     * @gir-type Class
     */
    class StyleSchemeManager extends GObject.Object {
        static $gtype: GObject.GType<StyleSchemeManager>;

        // Properties
        /**
         * @read-only
         */
        get scheme_ids(): (string[] | null);

        /**
         * @read-only
         */
        get schemeIds(): (string[] | null);

        get search_path(): string[];
        set search_path(val: string[]);

        get searchPath(): string[];
        set searchPath(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemeManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleSchemeManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StyleSchemeManager;

        // Signals
        /** @signal */
        connect<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemeManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleSchemeManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the default {@link GtkSource.StyleSchemeManager} instance.
         */
        static get_default(): StyleSchemeManager;

        // Methods
        /**
         * Appends `path` to the list of directories where the `manager` looks for
         * style scheme files.
         * 
         * See {@link StyleSchemeManager.set_search_path} for details.
         * @param path a directory or a filename.
         */
        append_search_path(path: string): void;

        /**
         * Mark any currently cached information about the available style schems
         * as invalid.
         * 
         * All the available style schemes will be reloaded next time the `manager` is accessed.
         */
        force_rescan(): void;

        /**
         * Looks up style scheme by id.
         * @param scheme_id style scheme id to find.
         * @returns a {@link GtkSource.StyleScheme} object.   The returned value is owned by `manager` and must not be unref'ed.
         */
        get_scheme(scheme_id: string): (StyleScheme | null);

        /**
         * Returns the ids of the available style schemes.
         * @returns a `null`-terminated array of strings containing the ids of the available style schemes or `null` if no style scheme is available. The array is sorted alphabetically according to the scheme name. The array is owned by the `manager` and must not be modified.
         */
        get_scheme_ids(): (string[] | null);

        /**
         * Returns the current search path for the `manager`.
         * 
         * See {@link StyleSchemeManager.set_search_path} for details.
         * @returns a `null`-terminated array of string containing the search path. The array is owned by the `manager` and must not be modified.
         */
        get_search_path(): string[];

        /**
         * Prepends `path` to the list of directories where the `manager` looks
         * for style scheme files.
         * 
         * See {@link StyleSchemeManager.set_search_path} for details.
         * @param path a directory or a filename.
         */
        prepend_search_path(path: string): void;

        /**
         * Sets the list of directories where the `manager` looks for
         * style scheme files.
         * 
         * If `path` is `null`, the search path is reset to default.
         * 
         * Since GtkSourceView 5.16 this function will allow you to provide
         * paths in the form of "resource:///" URIs to embedded {@link Gio.Resource}s.
         * They must contain the path of a directory within the {@link Gio.Resource}.
         * @param path a `null`-terminated array of   strings or `null`.
         */
        set_search_path(path: (string[] | null)): void;
    }


    namespace StyleSchemePreview {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            activate: () => void;
            "notify::scheme": (pspec: GObject.ParamSpec) => void;
            "notify::selected": (pspec: GObject.ParamSpec) => void;
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
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            scheme: StyleScheme;
            selected: boolean;
        }
    }

    /**
     * A preview widget for {@link StyleScheme}.
     * 
     * This widget provides a convenient {@link Gtk.Widget} to preview a {@link StyleScheme}.
     * 
     * The {@link StyleSchemePreview.selected} property can be used to manage
     * the selection state of a single preview widget.
     * @gir-type Class
     * @since 5.4
     */
    class StyleSchemePreview extends Gtk.Widget implements Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<StyleSchemePreview>;

        // Properties
        /**
         * @construct-only
         */
        get scheme(): StyleScheme;

        /**
         * @default false
         */
        get selected(): boolean;
        set selected(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleSchemePreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StyleSchemePreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](scheme: StyleScheme): StyleSchemePreview;

        // Signals
        /** @signal */
        connect<K extends keyof StyleSchemePreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemePreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleSchemePreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleSchemePreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleSchemePreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleSchemePreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the {@link GtkSource.StyleScheme} previewed by the widget.
         * @returns a {@link GtkSource.StyleScheme}
         */
        get_scheme(): StyleScheme;

        get_selected(): boolean;

        /**
         * @param selected 
         */
        set_selected(selected: boolean): void;

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
         * The name of the action with which this widget should be associated.
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * The name of the action with which this widget should be associated.
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /**
         * The target value of the actionable widget's action.
          * @category Inherited from Gtk.Actionable
         */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /**
         * The target value of the actionable widget's action.
          * @category Inherited from Gtk.Actionable
         */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

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
        get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): (Gtk.Accessible | null);

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
        get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): (Gtk.Accessible | null);

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
        set_accessible_parent(parent: (Gtk.Accessible | null), next_sibling: (Gtk.Accessible | null)): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: (Gtk.Accessible | null)): void;

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
        vfunc_get_accessible_id(): (string | null);

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): (Gtk.Accessible | null);

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): (Gtk.ATContext | null);

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
        vfunc_get_first_accessible_child(): (Gtk.Accessible | null);

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): (Gtk.Accessible | null);

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
         * Gets the action name for `actionable`.
         * @returns the action name
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * @returns the current target value
         */
        get_action_target_value(): (GLib.Variant | null);

        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         * 
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * {@link Gio.Action.parse_detailed_name}.
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * @virtual
         */
        vfunc_get_action_target_value(): (GLib.Variant | null);

        /**
         * Specifies the name of the action with which this widget should be
         * associated.
         * 
         * If `action_name` is `null` then the widget will be unassociated from
         * any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form &#x201C;win.save&#x201D; or &#x201C;app.quit&#x201D; for actions on the
         * containing {@link ApplicationWindow} or its associated {@link Application},
         * respectively. This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes. First, it is used as the parameter
         * to activation of the action associated with the {@link Gtk.Actionable} widget.
         * Second, it is used to determine if the widget should be rendered as
         * &#x201C;active&#x201D; &#x2014; the widget is active if the state is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical &#x201C;radio button&#x201D; situation. Each button
         * will be associated with the same action, but with a different target
         * value for that action. Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action&#x2019;s state to change to that value. Since the action&#x2019;s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): (string | null);

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
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, Gtk.BuildableParser, never];

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
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Tag {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextTag.SignalSignatures {
            "notify::draw-spaces": (pspec: GObject.ParamSpec) => void;
            "notify::draw-spaces-set": (pspec: GObject.ParamSpec) => void;
            "notify::accumulative-margin": (pspec: GObject.ParamSpec) => void;
            "notify::allow-breaks": (pspec: GObject.ParamSpec) => void;
            "notify::allow-breaks-set": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-full-height": (pspec: GObject.ParamSpec) => void;
            "notify::background-full-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::editable-set": (pspec: GObject.ParamSpec) => void;
            "notify::fallback": (pspec: GObject.ParamSpec) => void;
            "notify::fallback-set": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::family-set": (pspec: GObject.ParamSpec) => void;
            "notify::font": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::font-features": (pspec: GObject.ParamSpec) => void;
            "notify::font-features-set": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::indent-set": (pspec: GObject.ParamSpec) => void;
            "notify::insert-hyphens": (pspec: GObject.ParamSpec) => void;
            "notify::insert-hyphens-set": (pspec: GObject.ParamSpec) => void;
            "notify::invisible": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-set": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::justification-set": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-set": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin-set": (pspec: GObject.ParamSpec) => void;
            "notify::letter-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::letter-spacing-set": (pspec: GObject.ParamSpec) => void;
            "notify::line-height": (pspec: GObject.ParamSpec) => void;
            "notify::line-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::overline": (pspec: GObject.ParamSpec) => void;
            "notify::overline-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::overline-rgba-set": (pspec: GObject.ParamSpec) => void;
            "notify::overline-set": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::paragraph-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines-set": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines-set": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap-set": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-set": (pspec: GObject.ParamSpec) => void;
            "notify::rise": (pspec: GObject.ParamSpec) => void;
            "notify::rise-set": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::sentence": (pspec: GObject.ParamSpec) => void;
            "notify::sentence-set": (pspec: GObject.ParamSpec) => void;
            "notify::show-spaces": (pspec: GObject.ParamSpec) => void;
            "notify::show-spaces-set": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-points": (pspec: GObject.ParamSpec) => void;
            "notify::size-set": (pspec: GObject.ParamSpec) => void;
            "notify::stretch": (pspec: GObject.ParamSpec) => void;
            "notify::stretch-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-rgba-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::style-set": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::tabs-set": (pspec: GObject.ParamSpec) => void;
            "notify::text-transform": (pspec: GObject.ParamSpec) => void;
            "notify::text-transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::underline-rgba-set": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::variant": (pspec: GObject.ParamSpec) => void;
            "notify::variant-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
            "notify::word": (pspec: GObject.ParamSpec) => void;
            "notify::word-set": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode-set": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TextTag.ConstructorProps {
            draw_spaces: boolean;
            drawSpaces: boolean;
            draw_spaces_set: boolean;
            drawSpacesSet: boolean;
        }
    }

    /**
     * A tag that can be applied to text in a {@link Buffer}.
     * 
     * {@link GtkSource.Tag} is a subclass of {@link Gtk.TextTag} that adds properties useful for
     * the GtkSourceView library.
     * 
     * If, for a certain tag, {@link Gtk.TextTag} is sufficient, it's better that you create
     * a {@link Gtk.TextTag}, not a {@link Tag}.
     * @gir-type Class
     */
    class Tag extends Gtk.TextTag {
        static $gtype: GObject.GType<Tag>;

        // Properties
        /**
         * Whether to draw white spaces.
         * 
         * This property takes precedence over the value defined by the {@link SpaceDrawer}'s
         * {@link SpaceDrawer.matrix} property (only where the tag is applied).
         * 
         * Setting this property also changes {@link Tag.draw_spaces_set} to
         * `true`.
         * @default false
         */
        get draw_spaces(): boolean;
        set draw_spaces(val: boolean);

        /**
         * Whether to draw white spaces.
         * 
         * This property takes precedence over the value defined by the {@link SpaceDrawer}'s
         * {@link SpaceDrawer.matrix} property (only where the tag is applied).
         * 
         * Setting this property also changes {@link Tag.draw_spaces_set} to
         * `true`.
         * @default false
         */
        get drawSpaces(): boolean;
        set drawSpaces(val: boolean);

        /**
         * Whether the {@link Tag.draw_spaces} property is set and must be
         * taken into account.
         * @default false
         */
        get draw_spaces_set(): boolean;
        set draw_spaces_set(val: boolean);

        /**
         * Whether the {@link Tag.draw_spaces} property is set and must be
         * taken into account.
         * @default false
         */
        get drawSpacesSet(): boolean;
        set drawSpacesSet(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tag.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Tag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: (string | null)): Tag;

        // Signals
        /** @signal */
        connect<K extends keyof Tag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Tag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Tag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace View {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            /**
             * Keybinding signal to change case of the text at the current cursor position.
             * @signal
             * @action
             * @run-last
             */
            "change-case": (arg0: ChangeCaseType) => void;
            /**
             * Keybinding signal to edit a number at the current cursor position.
             * @signal
             * @action
             * @run-last
             */
            "change-number": (arg0: number) => void;
            /**
             * Keybinding signal to join the lines currently selected.
             * @signal
             * @action
             * @run-last
             */
            "join-lines": () => void;
            /**
             * Emitted when a line mark has been activated (for instance when there
             * was a button press in the line marks gutter).
             * 
             * You can use `iter` to determine on which line the activation took place.
             * @signal
             * @run-last
             */
            "line-mark-activated": (arg0: Gtk.TextIter, arg1: number, arg2: Gdk.ModifierType, arg3: number) => void;
            /**
             * The signal is a keybinding which gets emitted when the user initiates moving a line.
             * 
             * The default binding key is Alt+Up/Down arrow. And moves the currently selected lines,
             * or the current line up or down by one line.
             * @signal
             * @action
             * @run-last
             */
            "move-lines": (arg0: boolean) => void;
            /**
             * Keybinding signal to move the cursor to the matching bracket.
             * @signal
             * @action
             * @run-last
             */
            "move-to-matching-bracket": (arg0: boolean) => void;
            /**
             * The signal is a keybinding which gets emitted when the user initiates moving a word.
             * 
             * The default binding key is Alt+Left/Right Arrow and moves the current selection, or the current
             * word by one word.
             * @signal
             * @action
             * @run-last
             */
            "move-words": (arg0: number) => void;
            /**
             * The signal is emitted to insert a new snippet into the view.
             * 
             * If another snippet was active, it will be paused until all focus positions of `snippet` have been exhausted.
             * 
             * `location` will be updated to point at the end of the snippet.
             * @signal
             * @run-last
             */
            "push-snippet": (arg0: Snippet, arg1: Gtk.TextIter) => void;
            /**
             * The signal is a key binding signal which gets
             * emitted when the user requests a completion, by pressing
             * <keycombo><keycap>Control</keycap><keycap>space</keycap></keycombo>.
             * 
             * This will create a {@link CompletionContext} with the activation
             * type as {@link GtkSource.CompletionActivation.USER_REQUESTED}.
             * 
             * Applications should not connect to it, but may emit it with
             * {@link GObject.signal_emit_by_name} if they need to activate the completion by
             * another means, for example with another key binding or a menu entry.
             * @signal
             * @action
             * @run-last
             */
            "show-completion": () => void;
            /**
             * Emitted when a the cursor was moved according to the smart home end setting.
             * 
             * The signal is emitted after the cursor is moved, but
             * during the `Gtk.TextView::move-cursor` action. This can be used to find
             * out whether the cursor was moved by a normal home/end or by a smart
             * home/end.
             * @signal
             * @run-last
             */
            "smart-home-end": (arg0: Gtk.TextIter, arg1: number) => void;
            "notify::annotations": (pspec: GObject.ParamSpec) => void;
            "notify::auto-indent": (pspec: GObject.ParamSpec) => void;
            "notify::background-pattern": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::enable-snippets": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-current-line": (pspec: GObject.ParamSpec) => void;
            "notify::indent-on-tab": (pspec: GObject.ParamSpec) => void;
            "notify::indent-width": (pspec: GObject.ParamSpec) => void;
            "notify::indenter": (pspec: GObject.ParamSpec) => void;
            "notify::insert-spaces-instead-of-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-position": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-marks": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::show-right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::smart-backspace": (pspec: GObject.ParamSpec) => void;
            "notify::smart-home-end": (pspec: GObject.ParamSpec) => void;
            "notify::space-drawer": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::extra-menu": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TextView.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.AccessibleText.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            annotations: Annotations;
            auto_indent: boolean;
            autoIndent: boolean;
            background_pattern: BackgroundPatternType;
            backgroundPattern: BackgroundPatternType;
            completion: Completion;
            enable_snippets: boolean;
            enableSnippets: boolean;
            highlight_current_line: boolean;
            highlightCurrentLine: boolean;
            indent_on_tab: boolean;
            indentOnTab: boolean;
            indent_width: number;
            indentWidth: number;
            indenter: (Indenter | null);
            insert_spaces_instead_of_tabs: boolean;
            insertSpacesInsteadOfTabs: boolean;
            right_margin_position: number;
            rightMarginPosition: number;
            show_line_marks: boolean;
            showLineMarks: boolean;
            show_line_numbers: boolean;
            showLineNumbers: boolean;
            show_right_margin: boolean;
            showRightMargin: boolean;
            smart_backspace: boolean;
            smartBackspace: boolean;
            smart_home_end: SmartHomeEndType;
            smartHomeEnd: SmartHomeEndType;
            space_drawer: SpaceDrawer;
            spaceDrawer: SpaceDrawer;
            tab_width: number;
            tabWidth: number;
        }
    }

    /**
     * Subclass of {@link Gtk.TextView}.
     * 
     * {@link GtkSource.View} is the main class of the GtkSourceView library.
     * Use a {@link Buffer} to display text with a {@link GtkSource.View}.
     * 
     * This class provides:
     * 
     *  - Show the line numbers;
     *  - Show a right margin;
     *  - Highlight the current line;
     *  - Indentation settings;
     *  - Configuration for the Home and End keyboard keys;
     *  - Configure and show line marks;
     *  - And a few other things.
     * 
     * An easy way to test all these features is to use the test-widget mini-program
     * provided in the GtkSourceView repository, in the tests/ directory.
     * 
     * # GtkSourceView as GtkBuildable
     * 
     * The GtkSourceView implementation of the {@link Gtk.Buildable} interface exposes the
     * {@link View.completion} object with the internal-child "completion".
     * 
     * An example of a UI definition fragment with GtkSourceView:
     * ```xml
     * <object class="GtkSourceView" id="source_view">
     *   <property name="tab-width">4</property>
     *   <property name="auto-indent">True</property>
     *   <child internal-child="completion">
     *     <object class="GtkSourceCompletion">
     *       <property name="select-on-show">False</property>
     *     </object>
     *   </child>
     * </object>
     * ```
     * 
     * # Changing the Font
     * 
     * Gtk CSS provides the best way to change the font for a {@link GtkSource.View} in a
     * manner that allows for components like {@link Map} to scale the desired
     * font.
     * 
     * ```c
     * GtkCssProvider *provider = gtk_css_provider_new ();
     * gtk_css_provider_load_from_string (provider,
     *                                   "textview { font-family: Monospace; font-size: 8pt; }");
     * gtk_style_context_add_provider (gtk_widget_get_style_context (view),
     *                                 GTK_STYLE_PROVIDER (provider),
     *                                 GTK_STYLE_PROVIDER_PRIORITY_APPLICATION);
     * g_object_unref (provider);
     * ```
     * ```python
     * provider = Gtk.CssProvider()
     * provider.load_from_string("textview { font-family: Monospace; font-size: 8pt; }")
     * style_context = view.get_style_context()
     * style_context.add_provider(provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION)
     * ```
     * 
     * If you need to adjust the font or size of font within a portion of the
     * document only, you should use a {@link Gtk.TextTag} with the {@link Gtk.TextTag.family} or
     * {@link Gtk.TextTag.scale} set so that the font size may be scaled relative to
     * the default font set in CSS.
     * @gir-type Class
     */
    class View extends Gtk.TextView implements Gtk.Accessible, Gtk.AccessibleText, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        // Properties
        /**
         * The {@link Annotations} object associated with the view.
         * @since 5.18
         * @read-only
         */
        get annotations(): Annotations;

        /**
         * @default false
         */
        get auto_indent(): boolean;
        set auto_indent(val: boolean);

        /**
         * @default false
         */
        get autoIndent(): boolean;
        set autoIndent(val: boolean);

        /**
         * Draw a specific background pattern on the view.
         * @default GtkSource.BackgroundPatternType.NONE
         */
        get background_pattern(): BackgroundPatternType;
        set background_pattern(val: BackgroundPatternType);

        /**
         * Draw a specific background pattern on the view.
         * @default GtkSource.BackgroundPatternType.NONE
         */
        get backgroundPattern(): BackgroundPatternType;
        set backgroundPattern(val: BackgroundPatternType);

        /**
         * The completion object associated with the view
         * @read-only
         */
        get completion(): Completion;

        /**
         * The property denotes if snippets should be
         * expanded when the user presses Tab after having typed a word
         * matching the snippets found in {@link SnippetManager}.
         * 
         * The user may tab through focus-positions of the snippet if any
         * are available by pressing Tab repeatedly until the desired focus
         * position is selected.
         * @default false
         */
        get enable_snippets(): boolean;
        set enable_snippets(val: boolean);

        /**
         * The property denotes if snippets should be
         * expanded when the user presses Tab after having typed a word
         * matching the snippets found in {@link SnippetManager}.
         * 
         * The user may tab through focus-positions of the snippet if any
         * are available by pressing Tab repeatedly until the desired focus
         * position is selected.
         * @default false
         */
        get enableSnippets(): boolean;
        set enableSnippets(val: boolean);

        /**
         * @default false
         */
        get highlight_current_line(): boolean;
        set highlight_current_line(val: boolean);

        /**
         * @default false
         */
        get highlightCurrentLine(): boolean;
        set highlightCurrentLine(val: boolean);

        /**
         * @default true
         */
        get indent_on_tab(): boolean;
        set indent_on_tab(val: boolean);

        /**
         * @default true
         */
        get indentOnTab(): boolean;
        set indentOnTab(val: boolean);

        /**
         * Width of an indentation step expressed in number of spaces.
         * @default -1
         */
        get indent_width(): number;
        set indent_width(val: number);

        /**
         * Width of an indentation step expressed in number of spaces.
         * @default -1
         */
        get indentWidth(): number;
        set indentWidth(val: number);

        /**
         * The property is a {@link Indenter} to use to indent
         * as the user types into the {@link View}.
         */
        get indenter(): (Indenter | null);
        set indenter(val: (Indenter | null));

        /**
         * @default false
         */
        get insert_spaces_instead_of_tabs(): boolean;
        set insert_spaces_instead_of_tabs(val: boolean);

        /**
         * @default false
         */
        get insertSpacesInsteadOfTabs(): boolean;
        set insertSpacesInsteadOfTabs(val: boolean);

        /**
         * Position of the right margin.
         * @default 80
         */
        get right_margin_position(): number;
        set right_margin_position(val: number);

        /**
         * Position of the right margin.
         * @default 80
         */
        get rightMarginPosition(): number;
        set rightMarginPosition(val: number);

        /**
         * Whether to display line mark pixbufs
         * @default false
         */
        get show_line_marks(): boolean;
        set show_line_marks(val: boolean);

        /**
         * Whether to display line mark pixbufs
         * @default false
         */
        get showLineMarks(): boolean;
        set showLineMarks(val: boolean);

        /**
         * Whether to display line numbers
         * @default false
         */
        get show_line_numbers(): boolean;
        set show_line_numbers(val: boolean);

        /**
         * Whether to display line numbers
         * @default false
         */
        get showLineNumbers(): boolean;
        set showLineNumbers(val: boolean);

        /**
         * Whether to display the right margin.
         * @default false
         */
        get show_right_margin(): boolean;
        set show_right_margin(val: boolean);

        /**
         * Whether to display the right margin.
         * @default false
         */
        get showRightMargin(): boolean;
        set showRightMargin(val: boolean);

        /**
         * Whether smart Backspace should be used.
         * @default false
         */
        get smart_backspace(): boolean;
        set smart_backspace(val: boolean);

        /**
         * Whether smart Backspace should be used.
         * @default false
         */
        get smartBackspace(): boolean;
        set smartBackspace(val: boolean);

        /**
         * Set the behavior of the HOME and END keys.
         * @default GtkSource.SmartHomeEndType.DISABLED
         */
        get smart_home_end(): SmartHomeEndType;
        set smart_home_end(val: SmartHomeEndType);

        /**
         * Set the behavior of the HOME and END keys.
         * @default GtkSource.SmartHomeEndType.DISABLED
         */
        get smartHomeEnd(): SmartHomeEndType;
        set smartHomeEnd(val: SmartHomeEndType);

        /**
         * The {@link SpaceDrawer} object associated with the view.
         * @read-only
         */
        get space_drawer(): SpaceDrawer;

        /**
         * The {@link SpaceDrawer} object associated with the view.
         * @read-only
         */
        get spaceDrawer(): SpaceDrawer;

        /**
         * Width of a tab character expressed in number of spaces.
         * @default 8
         */
        get tab_width(): number;
        set tab_width(val: number);

        /**
         * Width of a tab character expressed in number of spaces.
         * @default 8
         */
        get tabWidth(): number;
        set tabWidth(val: number);

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

        static new_with_buffer(buffer: Buffer): View;

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

        // Virtual methods
        /**
         * @param iter 
         * @param button 
         * @param state 
         * @param n_presses 
         * @virtual
         */
        vfunc_line_mark_activated(iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, n_presses: number): void;

        /**
         * @param down 
         * @virtual
         */
        vfunc_move_lines(down: boolean): void;

        /**
         * @param step 
         * @virtual
         */
        vfunc_move_words(step: number): void;

        /**
         * Inserts a new snippet at `location`
         * 
         * If another snippet was already active, it will be paused and the new
         * snippet will become active. Once the focus positions of `snippet` have
         * been exhausted, editing will return to the previous snippet.
         * @param snippet a {@link GtkSource.Snippet}
         * @param location a {@link Gtk.TextIter} or `null` for the cursor position
         * @virtual
         */
        vfunc_push_snippet(snippet: Snippet, location: (Gtk.TextIter | null)): void;

        /**
         * @virtual
         */
        vfunc_show_completion(): void;

        // Methods
        /**
         * Gets the {@link Annotations} associated with `view`.
         * 
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each {@link View} object has a different {@link Annotations}.
         * @returns the {@link GtkSource.Annotations} associated with `view`.
         */
        get_annotations(): Annotations;

        /**
         * Returns whether auto-indentation of text is enabled.
         * @returns `true` if auto indentation is enabled.
         */
        get_auto_indent(): boolean;

        /**
         * Returns the {@link GtkSource.BackgroundPatternType} specifying if and how
         * the background pattern should be displayed for this `view`.
         * @returns the {@link GtkSource.BackgroundPatternType}.
         */
        get_background_pattern(): BackgroundPatternType;

        /**
         * Gets the {@link Completion} associated with `view`.
         * 
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each {@link GtkSource.View} object has a different {@link Completion}.
         * @returns the {@link GtkSource.Completion} associated with `view`.
         */
        get_completion(): Completion;

        /**
         * Gets the {@link View.enable_snippets} property.
         * 
         * If `true`, matching snippets found in the {@link SnippetManager}
         * may be expanded when the user presses Tab after a word in the {@link View}.
         * @returns `true` if enabled
         */
        get_enable_snippets(): boolean;

        /**
         * Returns the {@link Gutter} object associated with `window_type` for `view`.
         * 
         * Only {@link Gtk.TextWindowType.LEFT} and {@link Gtk.TextWindowType.RIGHT} are supported,
         * respectively corresponding to the left and right gutter. The line numbers
         * and mark category icons are rendered in the left gutter.
         * @param window_type the gutter window type.
         * @returns the {@link GtkSource.Gutter}.
         */
        get_gutter(window_type: Gtk.TextWindowType): Gutter;

        /**
         * Returns whether the current line is highlighted.
         * @returns `true` if the current line is highlighted.
         */
        get_highlight_current_line(): boolean;

        /**
         * Gets the {@link Hover} associated with `view`.
         * 
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each {@link View} object has a different {@link Hover}.
         * @returns a {@link GtkSource.Hover} associated with `view`.
         */
        get_hover(): Hover;

        /**
         * Returns whether when the tab key is pressed the current selection
         * should get indented instead of replaced with the `\t` character.
         * @returns `true` if the selection is indented when tab is pressed.
         */
        get_indent_on_tab(): boolean;

        /**
         * Returns the number of spaces to use for each step of indent.
         * 
         * See {@link View.set_indent_width} for details.
         * @returns indent width.
         */
        get_indent_width(): number;

        /**
         * Gets the {@link View.indenter} property.
         * @returns a {@link GtkSource.Indenter} or `null`
         */
        get_indenter(): (Indenter | null);

        /**
         * Returns whether when inserting a tabulator character it should
         * be replaced by a group of space characters.
         * @returns `true` if spaces are inserted instead of tabs.
         */
        get_insert_spaces_instead_of_tabs(): boolean;

        /**
         * Gets attributes and priority for the `category`.
         * @param category the category.
         * @param priority place where priority of the category will be stored.
         * @returns {@link GtkSource.MarkAttributes} for the `category`. The object belongs to `view`, so it must not be unreffed.
         */
        get_mark_attributes(category: string, priority: number): MarkAttributes;

        /**
         * Gets the position of the right margin in the given `view`.
         * @returns the position of the right margin.
         */
        get_right_margin_position(): number;

        /**
         * Returns whether line marks are displayed beside the text.
         * @returns `true` if the line marks are displayed.
         */
        get_show_line_marks(): boolean;

        /**
         * Returns whether line numbers are displayed beside the text.
         * @returns `true` if the line numbers are displayed.
         */
        get_show_line_numbers(): boolean;

        /**
         * Returns whether a right margin is displayed.
         * @returns `true` if the right margin is shown.
         */
        get_show_right_margin(): boolean;

        /**
         * Returns `true` if pressing the Backspace key will try to delete spaces
         * up to the previous tab stop.
         * @returns `true` if smart Backspace handling is enabled.
         */
        get_smart_backspace(): boolean;

        /**
         * Returns a {@link SmartHomeEndType} end value specifying
         * how the cursor will move when HOME and END keys are pressed.
         * @returns a {@link GtkSource.SmartHomeEndType} value.
         */
        get_smart_home_end(): SmartHomeEndType;

        /**
         * Gets the {@link SpaceDrawer} associated with `view`.
         * 
         * The returned object is guaranteed to be the same for the lifetime of `view`.
         * Each {@link View} object has a different {@link SpaceDrawer}.
         * @returns the {@link GtkSource.SpaceDrawer} associated with `view`.
         */
        get_space_drawer(): SpaceDrawer;

        /**
         * Returns the width of tabulation in characters.
         * @returns width of tab.
         */
        get_tab_width(): number;

        /**
         * Determines the visual column at `iter` taking into consideration the
         * {@link View.tab_width} of `view`.
         * @param iter a position in `view`.
         * @returns the visual column at `iter`.
         */
        get_visual_column(iter: Gtk.TextIter): number;

        /**
         * Inserts one indentation level at the beginning of the specified lines. The
         * empty lines are not indented.
         * @param start {@link Gtk.TextIter} of the first line to indent
         * @param end {@link Gtk.TextIter} of the last line to indent
         */
        indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

        /**
         * Inserts a new snippet at `location`
         * 
         * If another snippet was already active, it will be paused and the new
         * snippet will become active. Once the focus positions of `snippet` have
         * been exhausted, editing will return to the previous snippet.
         * @param snippet a {@link GtkSource.Snippet}
         * @param location a {@link Gtk.TextIter} or `null` for the cursor position
         */
        push_snippet(snippet: Snippet, location: (Gtk.TextIter | null)): void;

        /**
         * If `true` auto-indentation of text is enabled.
         * 
         * When Enter is pressed to create a new line, the auto-indentation inserts the
         * same indentation as the previous line. This is **not** a
         * "smart indentation" where an indentation level is added or removed depending
         * on the context.
         * @param enable whether to enable auto indentation.
         */
        set_auto_indent(enable: boolean): void;

        /**
         * Set if and how the background pattern should be displayed.
         * @param background_pattern the {@link GtkSource.BackgroundPatternType}.
         */
        set_background_pattern(background_pattern: BackgroundPatternType): void;

        /**
         * Sets the {@link View.enable_snippets} property.
         * 
         * If `enable_snippets` is `true`, matching snippets found in the
         * {@link SnippetManager} may be expanded when the user presses
         * Tab after a word in the {@link View}.
         * @param enable_snippets if snippets should be enabled
         */
        set_enable_snippets(enable_snippets: boolean): void;

        /**
         * If `highlight` is `true` the current line will be highlighted.
         * @param highlight whether to highlight the current line.
         */
        set_highlight_current_line(highlight: boolean): void;

        /**
         * If `true`, when the tab key is pressed when several lines are selected, the
         * selected lines are indented of one level instead of being replaced with a `\t`
         * character. Shift+Tab unindents the selection.
         * 
         * If the first or last line is not selected completely, it is also indented or
         * unindented.
         * 
         * When the selection doesn't span several lines, the tab key always replaces
         * the selection with a normal `\t` character.
         * @param enable whether to indent a block when tab is pressed.
         */
        set_indent_on_tab(enable: boolean): void;

        /**
         * Sets the number of spaces to use for each step of indent when the tab key is
         * pressed.
         * 
         * If `width` is -1, the value of the {@link View.tab_width} property
         * will be used.
         * 
         * The {@link View.indent_width} interacts with the
         * {@link View.insert_spaces_instead_of_tabs} property and
         * {@link View.tab_width}. An example will be clearer:
         * 
         * If the {@link View.indent_width} is 4 and {@link View.tab_width} is 8 and
         * {@link View.insert_spaces_instead_of_tabs} is `false`, then pressing the tab
         * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
         * the tab key a second time will remove the 4 spaces and insert a `\t` character
         * instead (since {@link View.tab_width} is 8). On the other hand, if
         * {@link View.insert_spaces_instead_of_tabs} is `true`, the second tab key
         * pressed will insert 4 more spaces for a total of 8 spaces in the
         * {@link Gtk.TextBuffer}.
         * 
         * The test-widget program (available in the GtkSourceView repository) may be
         * useful to better understand the indentation settings (enable the space
         * drawing!).
         * @param width indent width in characters.
         */
        set_indent_width(width: number): void;

        /**
         * Sets the indenter for `view` to `indenter`.
         * 
         * Note that the indenter will not be used unless {@link GtkSource.View.auto_indent}
         * has been set to `true`.
         * @param indenter a {@link GtkSource.Indenter} or `null`
         */
        set_indenter(indenter: (Indenter | null)): void;

        /**
         * If `true` a tab key pressed is replaced by a group of space characters.
         * 
         * Of course it is still possible to insert a real `\t` programmatically with the
         * {@link Gtk.TextBuffer} API.
         * @param enable whether to insert spaces instead of tabs.
         */
        set_insert_spaces_instead_of_tabs(enable: boolean): void;

        /**
         * Sets attributes and priority for the `category`.
         * @param category the category.
         * @param attributes mark attributes.
         * @param priority priority of the category.
         */
        set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;

        /**
         * Sets the position of the right margin in the given `view`.
         * @param pos the width in characters where to position the right margin.
         */
        set_right_margin_position(pos: number): void;

        /**
         * If `true` line marks will be displayed beside the text.
         * @param show whether line marks should be displayed.
         */
        set_show_line_marks(show: boolean): void;

        /**
         * If `true` line numbers will be displayed beside the text.
         * @param show whether line numbers should be displayed.
         */
        set_show_line_numbers(show: boolean): void;

        /**
         * If `true` a right margin is displayed.
         * @param show whether to show a right margin.
         */
        set_show_right_margin(show: boolean): void;

        /**
         * When set to `true`, pressing the Backspace key will try to delete spaces
         * up to the previous tab stop.
         * @param smart_backspace whether to enable smart Backspace handling.
         */
        set_smart_backspace(smart_backspace: boolean): void;

        /**
         * Set the desired movement of the cursor when HOME and END keys
         * are pressed.
         * @param smart_home_end the desired behavior among {@link GtkSource.SmartHomeEndType}.
         */
        set_smart_home_end(smart_home_end: SmartHomeEndType): void;

        /**
         * Sets the width of tabulation in characters.
         * 
         * The {@link Gtk.TextBuffer} still contains `\t` characters,
         * but they can take a different visual width in a {@link View} widget.
         * @param width width of tab in characters.
         */
        set_tab_width(width: number): void;

        /**
         * Removes one indentation level at the beginning of the
         * specified lines.
         * @param start {@link Gtk.TextIter} of the first line to indent
         * @param end {@link Gtk.TextIter} of the last line to indent
         */
        unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget.
         * 
         * This adjustment is shared between the scrollable widget and its parent.
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): (Gtk.Adjustment | null);
        set hadjustment(val: (Gtk.Adjustment | null));

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
        get vadjustment(): (Gtk.Adjustment | null);
        set vadjustment(val: (Gtk.Adjustment | null));

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
         * Updates the position of the caret.
         * 
         * Implementations of the {@link Gtk.AccessibleText} interface should call this
         * function every time the caret has moved, in order to notify assistive
         * technologies.
         */
        update_caret_position(): void;

        /**
         * Notifies assistive technologies of a change in contents.
         * 
         * Implementations of the {@link Gtk.AccessibleText} interface should call this
         * function every time their contents change as the result of an operation,
         * like an insertion or a removal.
         * 
         * Note: If the change is a deletion, this function must be called *before*
         * removing the contents, if it is an insertion, it must be called *after*
         * inserting the new contents.
         * @param change the type of change in the contents
         * @param start the starting offset of the change, in characters
         * @param end the end offset of the change, in characters
         */
        update_contents(change: Gtk.AccessibleTextContentChange, start: number, end: number): void;

        /**
         * Updates the boundary of the selection.
         * 
         * Implementations of the {@link Gtk.AccessibleText} interface should call this
         * function every time the selection has moved, in order to notify assistive
         * technologies.
         */
        update_selection_bound(): void;

        /**
         * Retrieves the text attributes inside the accessible object.
         * 
         * Each attribute is composed by:
         * 
         * - a range
         * - a name
         * - a value
         * 
         * It is left to the implementation to determine the serialization format
         * of the value to a string.
         * 
         * GTK provides support for various text attribute names and values, but
         * implementations of this interface are free to add their own attributes.
         * 
         * If this function returns true, `n_ranges` will be set to a value
         * greater than or equal to one, `ranges` will be set to a newly
         * allocated array of [struct#Gtk.AccessibleTextRange].
         * @param offset the offset, in characters
         * @virtual
         */
        vfunc_get_attributes(offset: number): [boolean, Gtk.AccessibleTextRange[] | null, string[] | null, string[] | null];

        /**
         * Retrieves the position of the caret inside the accessible object.
         * @virtual
         */
        vfunc_get_caret_position(): number;

        /**
         * Retrieve the current contents of the accessible object within
         * the given range.
         * 
         * If `end` is `G_MAXUINT`, the end of the range is the full content
         * of the accessible object.
         * @param start the beginning of the range, in characters
         * @param end the end of the range, in characters
         * @virtual
         */
        vfunc_get_contents(start: number, end: number): (GLib.Bytes | Uint8Array);

        /**
         * Retrieve the current contents of the accessible object starting
         * from the given offset, and using the given granularity.
         * 
         * The `start` and `end` values contain the boundaries of the text.
         * @param offset the offset, in characters
         * @param granularity the granularity of the query
         * @virtual
         */
        vfunc_get_contents_at(offset: number, granularity: Gtk.AccessibleTextGranularity): [(GLib.Bytes | Uint8Array), number, number];

        /**
         * Retrieves the default text attributes inside the accessible object.
         * 
         * Each attribute is composed by:
         * 
         * - a name
         * - a value
         * 
         * It is left to the implementation to determine the serialization format
         * of the value to a string.
         * 
         * GTK provides support for various text attribute names and values, but
         * implementations of this interface are free to add their own attributes.
         * @virtual
         */
        vfunc_get_default_attributes(): [string[] | null, string[] | null];

        /**
         * Obtains the extents of a range of text, in widget coordinates.
         * @param start the start offset, in characters
         * @param end the end offset, in characters, `extents` (out caller-allocates): return location for the extents
         * @param extents 
         * @virtual
         */
        vfunc_get_extents(start: number, end: number, extents: Graphene.Rect): boolean;

        /**
         * Gets the text offset at a given point.
         * @param point a point in widget coordinates of `self`
         * @virtual
         */
        vfunc_get_offset(point: Graphene.Point): [boolean, number];

        /**
         * Retrieves the selection ranges in the accessible object.
         * 
         * If this function returns true, `n_ranges` will be set to a value
         * greater than or equal to one, and `ranges` will be set to a newly
         * allocated array of [struct#Gtk.AccessibleTextRange].
         * @virtual
         */
        vfunc_get_selection(): [boolean, Gtk.AccessibleTextRange[] | null];

        /**
         * Sets the caret position.
         * @param offset the text offset in characters
         * @virtual
         */
        vfunc_set_caret_position(offset: number): boolean;

        /**
         * Sets the caret position.
         * @param i the selection to set
         * @param range the range to set the selection to
         * @virtual
         */
        vfunc_set_selection(i: number, range: Gtk.AccessibleTextRange): boolean;

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
        get_hadjustment(): (Gtk.Adjustment | null);

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): (Gtk.Adjustment | null);

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
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

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


    namespace VimIMContext {
        // Signal signatures
        interface SignalSignatures extends Gtk.IMContext.SignalSignatures {
            /**
             * Requests the application open the file found at `path`.
             * 
             * If `path` is `null`, then the current file should be reloaded from storage.
             * 
             * This may be executed in relation to the user running the
             * `:edit` or `:e` commands.
             * @signal
             * @since 5.4
             * @run-last
             */
            edit: (arg0: View, arg1: (string | null)) => void;
            /**
             * The signal is emitted when a command should be
             * executed. This might be something like `:wq` or `:e <path>`.
             * 
             * If the application chooses to implement this, it should return
             * `true` from this signal to indicate the command has been handled.
             * @signal
             * @since 5.4
             * @run-last
             */
            "execute-command": (arg0: string) => (boolean | void);
            /**
             * Requests that the application format the text between
             * `begin` and `end`.
             * @signal
             * @since 5.4
             * @run-last
             */
            "format-text": (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            /**
             * Requests the application save the file.
             * 
             * If a filename was provided, it will be available to the signal handler as `path`.
             * This may be executed in relation to the user running the `:write` or `:w` commands.
             * @signal
             * @since 5.4
             * @run-last
             */
            write: (arg0: View, arg1: (string | null)) => void;
            "notify::command-bar-text": (pspec: GObject.ParamSpec) => void;
            "notify::command-text": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.IMContext.ConstructorProps {
            command_bar_text: string;
            commandBarText: string;
            command_text: string;
            commandText: string;
        }
    }

    /**
     * Vim emulation.
     * 
     * The {@link GtkSource.VimIMContext} is a {@link Gtk.IMContext} implementation that can
     * be used to provide Vim-like editing controls within a {@link View}.
     * 
     * The `GtkSourceViMIMContext` will process incoming {@link Gdk.KeyEvent} as the
     * user types. It should be used in conjunction with a {@link Gtk.EventControllerKey}.
     * 
     * Various features supported by {@link GtkSource.VimIMContext} include:
     * 
     *  - Normal, Insert, Replace, Visual, and Visual Line modes
     *  - Support for an integrated command bar and current command preview
     *  - Search and replace
     *  - Motions and Text Objects
     *  - History replay
     *  - Jumplists within the current file
     *  - Registers including the system and primary clipboards
     *  - Creation and motion to marks
     *  - Some commonly used Vim commands
     * 
     * It is recommended that applications display the contents of
     * {@link VimIMContext.command_bar_text} and
     * {@link VimIMContext.command_text} to the user as they represent the
     * command-bar and current command preview found in Vim.
     * 
     * {@link GtkSource.VimIMContext} attempts to work with additional {@link Gtk.IMContext}
     * implementations such as IBus by querying the {@link Gtk.TextView} before processing
     * the command in states which support it (notably Insert and Replace modes).
     * 
     * ```c
     * GtkEventController *key;
     * GtkIMContext *im_context;
     * GtkWidget *view;
     * 
     * view = gtk_source_view_new ();
     * im_context = gtk_source_vim_im_context_new ();
     * key = gtk_event_controller_key_new ();
     * 
     * gtk_event_controller_key_set_im_context (GTK_EVENT_CONTROLLER_KEY (key), im_context);
     * gtk_event_controller_set_propagation_phase (key, GTK_PHASE_CAPTURE);
     * gtk_widget_add_controller (view, key);
     * gtk_im_context_set_client_widget (im_context, view);
     * 
     * g_object_bind_property (im_context, "command-bar-text", command_bar_label, "label", 0);
     * g_object_bind_property (im_context, "command-text", command_label, "label", 0);
     * ```
     * ```python
     * key = Gtk.EventControllerKey.new()
     * im_context = GtkSource.VimIMContext.new()
     * buffer = GtkSource.Buffer()
     * view = GtkSource.View.new_with_buffer(buffer)
     * 
     * key.set_im_context(im_context)
     * key.set_propagation_phase(Gtk.PropagationPhase.CAPTURE)
     * view.add_controller(key)
     * im_context.set_client_widget(view)
     * 
     * im_context.bind_property(
     *     source_property="command-text",
     *     target=command_label,
     *     target_property="label",
     *     flags=GObject.BindingFlags.DEFAULT,
     * )
     * 
     * im_context.bind_property(
     *     source_property="command-bar-text",
     *     target=command_bar_label,
     *     target_property="label",
     *     flags=GObject.BindingFlags.DEFAULT,
     * )
     * ```
     * @gir-type Class
     * @since 5.4
     */
    class VimIMContext extends Gtk.IMContext {
        static $gtype: GObject.GType<VimIMContext>;

        // Properties
        /**
         * @read-only
         * @default null
         */
        get command_bar_text(): string;

        /**
         * @read-only
         * @default null
         */
        get commandBarText(): string;

        /**
         * @read-only
         * @default null
         */
        get command_text(): string;

        /**
         * @read-only
         * @default null
         */
        get commandText(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VimIMContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VimIMContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): VimIMContext;

        // Signals
        /** @signal */
        connect<K extends keyof VimIMContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VimIMContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VimIMContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VimIMContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VimIMContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VimIMContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Executes `command` as if it was typed into the command bar by the
         * user except that this does not emit the
         * `GtkSource.VimIMContext::execute-command` signal.
         * @param command the command text
         */
        execute_command(command: string): void;

        /**
         * Gets the current command-bar text as it is entered by the user.
         * @returns A string containing the command-bar text
         */
        get_command_bar_text(): string;

        /**
         * Gets the current command text as it is entered by the user.
         * @returns A string containing the command text
         */
        get_command_text(): string;
    }


    /**
     * @gir-type Alias
     */
    type AnnotationClass = typeof Annotation;

    /**
     * @gir-type Alias
     */
    type AnnotationProviderClass = typeof AnnotationProvider;

    /**
     * @gir-type Alias
     */
    type AnnotationsClass = typeof Annotations;

    /**
     * @gir-type Alias
     */
    type BufferClass = typeof Buffer;

    /**
     * @gir-type Alias
     */
    type CompletionCellClass = typeof CompletionCell;

    /**
     * @gir-type Alias
     */
    type CompletionClass = typeof Completion;

    /**
     * @gir-type Alias
     */
    type CompletionContextClass = typeof CompletionContext;

    /**
     * @gir-type Alias
     */
    type CompletionProposalInterface = typeof CompletionProposal;

    /**
     * @gir-type Alias
     */
    type CompletionProviderInterface = typeof CompletionProvider;

    /**
     * @gir-type Alias
     */
    type CompletionSnippetsClass = typeof CompletionSnippets;

    /**
     * @gir-type Alias
     */
    type CompletionWordsClass = typeof CompletionWords;

    /**
     * Character encoding.
     * 
     * The {@link GtkSource.Encoding} boxed type represents a character encoding. It is used
     * for example by {@link GtkSource.File}. Note that the text in GTK widgets is always
     * encoded in UTF-8.
     * @gir-type Struct
     */
    abstract class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Static methods
        /**
         * Gets all encodings.
         */
        static get_all(): Encoding[];

        /**
         * Gets the {@link GtkSource.Encoding} for the current locale.
         * 
         * See also {@link GLib.get_charset}.
         */
        static get_current(): Encoding;

        /**
         * Gets the list of default candidate encodings to try when loading a file.
         * 
         * See {@link FileLoader.set_candidate_encodings}.
         * 
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         */
        static get_default_candidates(): Encoding[];

        /**
         * Gets a {@link GtkSource.Encoding} from a character set such as "UTF-8" or
         * "ISO-8859-1".
         * @param charset a character set.
         */
        static get_from_charset(charset: string): (Encoding | null);

        static get_utf8(): Encoding;

        // Methods
        /**
         * Used by language bindings.
         * @returns a copy of `enc`.
         */
        copy(): Encoding;

        /**
         * Used by language bindings.
         */
        free(): void;

        /**
         * Gets the character set of the {@link GtkSource.Encoding}, such as "UTF-8" or
         * "ISO-8859-1".
         * @returns the character set of the {@link GtkSource.Encoding}.
         */
        get_charset(): string;

        /**
         * Gets the name of the {@link GtkSource.Encoding} such as "Unicode" or "Western".
         * @returns the name of the {@link GtkSource.Encoding}.
         */
        get_name(): string;

        /**
         * @returns a string representation. Free with `g_free()` when no longer needed.
         */
        to_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type FileClass = typeof File;

    /**
     * @gir-type Alias
     */
    type FileLoaderClass = typeof FileLoader;

    /**
     * @gir-type Alias
     */
    type FileSaverClass = typeof FileSaver;

    /**
     * @gir-type Alias
     */
    type GutterClass = typeof Gutter;

    /**
     * @gir-type Alias
     */
    type GutterLinesClass = typeof GutterLines;

    /**
     * @gir-type Alias
     */
    type GutterRendererClass = typeof GutterRenderer;

    /**
     * @gir-type Alias
     */
    type GutterRendererPixbufClass = typeof GutterRendererPixbuf;

    /**
     * @gir-type Alias
     */
    type GutterRendererTextClass = typeof GutterRendererText;

    /**
     * @gir-type Alias
     */
    type HoverClass = typeof Hover;

    /**
     * @gir-type Alias
     */
    type HoverContextClass = typeof HoverContext;

    /**
     * @gir-type Alias
     */
    type HoverDisplayClass = typeof HoverDisplay;

    /**
     * @gir-type Alias
     */
    type HoverProviderInterface = typeof HoverProvider;

    /**
     * @gir-type Alias
     */
    type IndenterInterface = typeof Indenter;

    /**
     * @gir-type Alias
     */
    type LanguageClass = typeof Language;

    /**
     * @gir-type Alias
     */
    type LanguageManagerClass = typeof LanguageManager;

    /**
     * @gir-type Alias
     */
    type MapClass = typeof Map;

    /**
     * @gir-type Alias
     */
    type MarkAttributesClass = typeof MarkAttributes;

    /**
     * @gir-type Alias
     */
    type MarkClass = typeof Mark;

    /**
     * @gir-type Alias
     */
    type PrintCompositorClass = typeof PrintCompositor;

    /**
     * @gir-type Alias
     */
    type RegionClass = typeof Region;

    /**
     * An opaque datatype.
     * 
     * Ignore all its fields and initialize the iter with {@link Region.get_start_region_iter}.
     * @gir-type Struct
     */
    class RegionIter {
        static $gtype: GObject.GType<RegionIter>;

        // Constructors

        constructor(properties?: Partial<{

        }>);

        // Methods
        /**
         * Gets the subregion at this iterator.
         * @returns `true` if `start` and `end` have been set successfully (if non-`null`),   or `false` if `iter` is the end iterator or if the region is empty.
         */
        get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];

        /**
         * @returns whether `iter` is the end iterator.
         */
        is_end(): boolean;

        /**
         * Moves `iter` to the next subregion.
         * @returns `true` if `iter` moved and is dereferenceable, or `false` if `iter` has   been set to the end iterator.
         */
        next(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type SearchContextClass = typeof SearchContext;

    /**
     * @gir-type Alias
     */
    type SearchSettingsClass = typeof SearchSettings;

    /**
     * @gir-type Alias
     */
    type SnippetChunkClass = typeof SnippetChunk;

    /**
     * @gir-type Alias
     */
    type SnippetClass = typeof Snippet;

    /**
     * @gir-type Alias
     */
    type SnippetContextClass = typeof SnippetContext;

    /**
     * @gir-type Alias
     */
    type SnippetManagerClass = typeof SnippetManager;

    /**
     * @gir-type Alias
     */
    type SpaceDrawerClass = typeof SpaceDrawer;

    /**
     * @gir-type Alias
     */
    type StyleClass = typeof Style;

    /**
     * @gir-type Alias
     */
    type StyleSchemeChooserButtonClass = typeof StyleSchemeChooserButton;

    /**
     * @gir-type Alias
     */
    type StyleSchemeChooserInterface = typeof StyleSchemeChooser;

    /**
     * @gir-type Alias
     */
    type StyleSchemeChooserWidgetClass = typeof StyleSchemeChooserWidget;

    /**
     * @gir-type Alias
     */
    type StyleSchemeClass = typeof StyleScheme;

    /**
     * @gir-type Alias
     */
    type StyleSchemeManagerClass = typeof StyleSchemeManager;

    /**
     * @gir-type Alias
     */
    type StyleSchemePreviewClass = typeof StyleSchemePreview;

    /**
     * @gir-type Alias
     */
    type TagClass = typeof Tag;

    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;

    /**
     * @gir-type Alias
     */
    type VimIMContextClass = typeof VimIMContext;

    namespace CompletionProposal {
        /**
         * Interface for implementing CompletionProposal.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets the typed-text for the proposal, if supported by the implementation.
             * 
             * Implementing this virtual-function is optional, but can be useful to allow
             * external tooling to compare results.
             * @virtual
             */
            vfunc_get_typed_text(): (string | null);
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface CompletionProposalNamespace {
        $gtype: GObject.GType<CompletionProposal>;
        prototype: CompletionProposal;
    }
    /**
     * Interface for completion proposals.
     * 
     * This interface is used to denote that an object is capable of being
     * a completion proposal for {@link Completion}.
     * 
     * Currently, no method or functions are required but additional methods
     * may be added in the future. Proposals created by
     * {@link GtkSource.CompletionProvider} can use {@link GObject.IMPLEMENT_INTERFACE} to
     * implement this with `null` for the interface init function.
     * @gir-type Interface
     */
    interface CompletionProposal extends GObject.Object, CompletionProposal.Interface {

        // Methods
        /**
         * Gets the typed-text for the proposal, if supported by the implementation.
         * 
         * Implementing this virtual-function is optional, but can be useful to allow
         * external tooling to compare results.
         * @returns a newly allocated string, or `null`
         */
        get_typed_text(): (string | null);
    }


    export const CompletionProposal: CompletionProposalNamespace & {
        new (): CompletionProposal; // This allows `obj instanceof CompletionProposal`
    };

    namespace CompletionProvider {
        /**
         * Interface for implementing CompletionProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * This function requests `proposal` to be activated by the
             * {@link GtkSource.CompletionProvider}.
             * 
             * What the provider does to activate the proposal is specific to that
             * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
             * edit points the user may cycle through.
             * 
             * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
             * @param context a {@link GtkSource.CompletionContext}
             * @param proposal a {@link GtkSource.CompletionProposal}
             * @virtual
             */
            vfunc_activate(context: CompletionContext, proposal: CompletionProposal): void;

            /**
             * This function requests that the {@link GtkSource.CompletionProvider} prepares
             * `cell` to display the contents of `proposal`.
             * 
             * Based on `cells` column type, you may want to display different information.
             * 
             * This allows for columns of information among completion proposals
             * resulting in better alignment of similar content (icons, return types,
             * method names, and parameter lists).
             * @param context a {@link GtkSource.CompletionContext}
             * @param proposal a {@link GtkSource.CompletionProposal}
             * @param cell a {@link GtkSource.CompletionCell}
             * @virtual
             */
            vfunc_display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;

            /**
             * This function should return the priority of `self` in `context`.
             * 
             * The priority is used to sort groups of completion proposals by
             * provider so that higher priority providers results are shown
             * above lower priority providers.
             * 
             * Higher value indicates higher priority.
             * @param context a {@link GtkSource.CompletionContext}
             * @virtual
             */
            vfunc_get_priority(context: CompletionContext): number;

            /**
             * Gets the title of the completion provider, if any.
             * 
             * Currently, titles are not displayed in the completion results, but may be
             * at some point in the future when non-`null`.
             * @virtual
             */
            vfunc_get_title(): (string | null);

            /**
             * This function is used to determine if a character inserted into the text
             * editor should cause a new completion request to be triggered.
             * 
             * An example would be period '.' which might indicate that the user wants
             * to complete method or field names of an object.
             * 
             * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
             * while the completion list is visible and a proposal is selected. Incremental
             * key-presses (like shift, control, or alt) are not triggerable.
             * @param iter a {@link Gtk.TextIter}
             * @param ch a #gunichar of the character inserted
             * @virtual
             */
            vfunc_is_trigger(iter: Gtk.TextIter, ch: string): boolean;

            /**
             * This function is used to determine if a key typed by the user should
             * activate `proposal` (resulting in committing the text to the editor).
             * 
             * This is useful when using languages where convention may lead to less
             * typing by the user. One example may be the use of "." or "-" to expand
             * a field access in the C programming language.
             * @param context a {@link GtkSource.CompletionContext}
             * @param proposal a {@link GtkSource.CompletionProposal}
             * @param keyval a keyval such as {@link Gdk.KEY_period}
             * @param state a {@link Gdk.ModifierType} or 0
             * @virtual
             */
            vfunc_key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

            /**
             * Providers should return a list of alternates to `proposal` or `null` if
             * there are no alternates available.
             * 
             * This can be used by the completion view to allow the user to move laterally
             * through similar proposals, such as overrides of methods by the same name.
             * @param context a {@link GtkSource.CompletionContext}
             * @param proposal a {@link GtkSource.CompletionProposal}
             * @virtual
             */
            vfunc_list_alternates(context: CompletionContext, proposal: CompletionProposal): (CompletionProposal[] | null);

            /**
             * Asynchronously requests that the provider populates the completion
             * results for `context`.
             * 
             * For providers that would like to populate a {@link Gio.ListModel} while those
             * results are displayed to the user,
             * {@link CompletionContext.set_proposals_for_provider} may be used
             * to reduce latency until the user sees results.
             * @param context a {@link GtkSource.CompletionContext}
             * @param cancellable a {@link Gio.Cancellable} or `null`
             * @param callback a callback to execute upon completion
             * @virtual
             */
            vfunc_populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Completes an asynchronous operation to populate a completion provider.
             * @param result a {@link Gio.AsyncResult} provided to callback
             * @virtual
             */
            vfunc_populate_finish(result: Gio.AsyncResult): Gio.ListModel;

            /**
             * This function can be used to filter results previously provided to
             * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
             * 
             * This can happen as the user types additional text onto the word so
             * that previously matched items may be removed from the list instead of
             * generating new {@link Gio.ListModel} of results.
             * @param context a {@link GtkSource.CompletionContext}
             * @param model a {@link Gio.ListModel}
             * @virtual
             */
            vfunc_refilter(context: CompletionContext, model: Gio.ListModel): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface CompletionProviderNamespace {
        $gtype: GObject.GType<CompletionProvider>;
        prototype: CompletionProvider;
    }
    /**
     * Completion provider interface.
     * 
     * You must implement this interface to provide proposals to {@link Completion}.
     * 
     * In most cases, implementations of this interface will want to use
     * {@link CompletionProvider.populate_async} to asynchronously populate the results
     * to avoid blocking the main loop.
     * @gir-type Interface
     */
    interface CompletionProvider extends GObject.Object, CompletionProvider.Interface {

        // Methods
        /**
         * This function requests `proposal` to be activated by the
         * {@link GtkSource.CompletionProvider}.
         * 
         * What the provider does to activate the proposal is specific to that
         * provider. Many providers may choose to insert a {@link GtkSource.Snippet} with
         * edit points the user may cycle through.
         * 
         * See also: {@link Snippet}, {@link SnippetChunk}, {@link View.push_snippet}
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         */
        activate(context: CompletionContext, proposal: CompletionProposal): void;

        /**
         * This function requests that the {@link GtkSource.CompletionProvider} prepares
         * `cell` to display the contents of `proposal`.
         * 
         * Based on `cells` column type, you may want to display different information.
         * 
         * This allows for columns of information among completion proposals
         * resulting in better alignment of similar content (icons, return types,
         * method names, and parameter lists).
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param cell a {@link GtkSource.CompletionCell}
         */
        display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void;

        /**
         * This function should return the priority of `self` in `context`.
         * 
         * The priority is used to sort groups of completion proposals by
         * provider so that higher priority providers results are shown
         * above lower priority providers.
         * 
         * Higher value indicates higher priority.
         * @param context a {@link GtkSource.CompletionContext}
         */
        get_priority(context: CompletionContext): number;

        /**
         * Gets the title of the completion provider, if any.
         * 
         * Currently, titles are not displayed in the completion results, but may be
         * at some point in the future when non-`null`.
         * @returns a title for the provider or `null`
         */
        get_title(): (string | null);

        /**
         * This function is used to determine if a character inserted into the text
         * editor should cause a new completion request to be triggered.
         * 
         * An example would be period '.' which might indicate that the user wants
         * to complete method or field names of an object.
         * 
         * This method will only trigger when text is inserted into the {@link Gtk.TextBuffer}
         * while the completion list is visible and a proposal is selected. Incremental
         * key-presses (like shift, control, or alt) are not triggerable.
         * @param iter a {@link Gtk.TextIter}
         * @param ch a #gunichar of the character inserted
         */
        is_trigger(iter: Gtk.TextIter, ch: string): boolean;

        /**
         * This function is used to determine if a key typed by the user should
         * activate `proposal` (resulting in committing the text to the editor).
         * 
         * This is useful when using languages where convention may lead to less
         * typing by the user. One example may be the use of "." or "-" to expand
         * a field access in the C programming language.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @param keyval a keyval such as {@link Gdk.KEY_period}
         * @param state a {@link Gdk.ModifierType} or 0
         */
        key_activates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean;

        /**
         * Providers should return a list of alternates to `proposal` or `null` if
         * there are no alternates available.
         * 
         * This can be used by the completion view to allow the user to move laterally
         * through similar proposals, such as overrides of methods by the same name.
         * @param context a {@link GtkSource.CompletionContext}
         * @param proposal a {@link GtkSource.CompletionProposal}
         * @returns a {@link GLib.PtrArray} of {@link GtkSource.CompletionProposal} or `null`.
         */
        list_alternates(context: CompletionContext, proposal: CompletionProposal): (CompletionProposal[] | null);

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.ListModel>;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously requests that the provider populates the completion
         * results for `context`.
         * 
         * For providers that would like to populate a {@link Gio.ListModel} while those
         * results are displayed to the user,
         * {@link CompletionContext.set_proposals_for_provider} may be used
         * to reduce latency until the user sees results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        populate_async(context: CompletionContext, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.ListModel> | void);

        /**
         * Completes an asynchronous operation to populate a completion provider.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns a {@link Gio.ListModel} of {@link GtkSource.CompletionProposal}
         */
        populate_finish(result: Gio.AsyncResult): Gio.ListModel;

        /**
         * This function can be used to filter results previously provided to
         * the {@link CompletionContext} by the {@link GtkSource.CompletionProvider}.
         * 
         * This can happen as the user types additional text onto the word so
         * that previously matched items may be removed from the list instead of
         * generating new {@link Gio.ListModel} of results.
         * @param context a {@link GtkSource.CompletionContext}
         * @param model a {@link Gio.ListModel}
         */
        refilter(context: CompletionContext, model: Gio.ListModel): void;
    }


    export const CompletionProvider: CompletionProviderNamespace & {
        new (): CompletionProvider; // This allows `obj instanceof CompletionProvider`
    };

    namespace HoverProvider {
        /**
         * Interface for implementing HoverProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param context 
             * @param display 
             * @virtual
             */
            vfunc_populate(context: HoverContext, display: HoverDisplay): boolean;

            /**
             * @param context 
             * @param display 
             * @param cancellable 
             * @param callback 
             * @virtual
             */
            vfunc_populate_async(context: HoverContext, display: HoverDisplay, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * @param result 
             * @virtual
             */
            vfunc_populate_finish(result: Gio.AsyncResult): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface HoverProviderNamespace {
        $gtype: GObject.GType<HoverProvider>;
        prototype: HoverProvider;
    }
    /**
     * Interface to populate interactive tooltips.
     * 
     * {@link GtkSource.HoverProvider} is an interface that should be implemented to extend
     * the contents of a {@link HoverDisplay}. This is typical in editors that
     * interact external tooling such as those utilizing Language Server Protocol.
     * 
     * If you can populate the {@link HoverDisplay} synchronously, use
     * {@link HoverProvider.populate}. Otherwise, interface implementations that
     * may take additional time should use {@link HoverProvider.populate_async}
     * to avoid blocking the main loop.
     * @gir-type Interface
     */
    interface HoverProvider extends GObject.Object, HoverProvider.Interface {

        // Methods
        /**
         * @param context 
         * @param display 
         * @param cancellable 
         */
        populate_async(context: HoverContext, display: HoverDisplay, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param context 
         * @param display 
         * @param cancellable 
         * @param callback 
         */
        populate_async(context: HoverContext, display: HoverDisplay, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param context 
         * @param display 
         * @param cancellable 
         * @param callback 
         */
        populate_async(context: HoverContext, display: HoverDisplay, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        populate_finish(result: Gio.AsyncResult): boolean;
    }


    export const HoverProvider: HoverProviderNamespace & {
        new (): HoverProvider; // This allows `obj instanceof HoverProvider`
    };

    namespace Indenter {
        /**
         * Interface for implementing Indenter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * This function should be implemented to alter the indentation of text
             * within the view.
             * 
             * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
             * 
             * `iter` is the location where the indentation was requested. This typically
             * is after having just inserted a newline (\n) character but can be other
             * situations such as a manually requested indentation or reformatting.
             * 
             * See {@link GtkSource.Indenter.is_trigger} for how to trigger indentation on
             * various characters inserted into the buffer.
             * 
             * The implementor of this function is expected to keep `iter` valid across
             * calls to the function and should contain the location of the insert mark
             * after calling this function.
             * 
             * The default implementation for this virtual function will copy the
             * indentation of the previous line.
             * @param view a {@link GtkSource.View}
             * @param iter the location of the indentation request
             * @virtual
             */
            vfunc_indent(view: View, iter: Gtk.TextIter): Gtk.TextIter;

            /**
             * This function is used to determine if a key pressed should cause the
             * indenter to automatically indent.
             * 
             * The default implementation of this virtual method will check to see
             * if `keyval` is {@link Gdk.KEY_Return} or {@link Gdk.KEY_KP_Enter} and `state` does
             * not have {@link Gdk.ModifierType.SHIFT_MASK} set. This is to allow the user to avoid
             * indentation when Shift+Return is pressed. Other indenters may want
             * to copy this behavior to provide a consistent experience to users.
             * @param view a {@link GtkSource.View}
             * @param location the location where `ch` is to be inserted
             * @param state modifier state for the insertion
             * @param keyval the keyval pressed such as {@link Gdk.KEY_Return}
             * @virtual
             */
            vfunc_is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface IndenterNamespace {
        $gtype: GObject.GType<Indenter>;
        prototype: Indenter;
    }
    /**
     * Auto-indentation interface.
     * 
     * By default, {@link View} can auto-indent as you type when
     * {@link View.auto_indent} is enabled. The indentation simply copies the
     * previous lines indentation.
     * 
     * This can be changed by implementing {@link GtkSource.Indenter} and setting the
     * {@link View.indenter} property.
     * 
     * Implementors of this interface should implement both
     * {@link GtkSource.Indenter.is_trigger} and {@link GtkSource.Indenter.indent}.
     * 
     * {@link GtkSource.Indenter.is_trigger} is called upon key-press to
     * determine of the key press should trigger an indentation.  The default
     * implementation of the interface checks to see if the key was
     * {@link Gdk.KEY_Return} or {@link Gdk.KEY_KP_Enter} without {@link Gdk.ModifierType.SHIFT_MASK} set.
     * 
     * {@link GtkSource.Indenter.indent} is called after text has been
     * inserted into {@link Buffer} when
     * {@link GtkSource.Indenter.is_trigger} returned `true`. The {@link Gtk.TextIter}
     * is placed directly after the inserted character or characters.
     * 
     * It may be beneficial to move the insertion mark using
     * {@link Gtk.TextBuffer.select_range} depending on how the indenter changes
     * the indentation.
     * 
     * All changes are encapsulated within a single user action so that the
     * user may undo them using standard undo/redo accelerators.
     * @gir-type Interface
     */
    interface Indenter extends GObject.Object, Indenter.Interface {

        // Methods
        /**
         * This function should be implemented to alter the indentation of text
         * within the view.
         * 
         * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
         * 
         * `iter` is the location where the indentation was requested. This typically
         * is after having just inserted a newline (\n) character but can be other
         * situations such as a manually requested indentation or reformatting.
         * 
         * See {@link GtkSource.Indenter.is_trigger} for how to trigger indentation on
         * various characters inserted into the buffer.
         * 
         * The implementor of this function is expected to keep `iter` valid across
         * calls to the function and should contain the location of the insert mark
         * after calling this function.
         * 
         * The default implementation for this virtual function will copy the
         * indentation of the previous line.
         * @param view a {@link GtkSource.View}
         * @param iter the location of the indentation request
         */
        indent(view: View, iter: Gtk.TextIter): Gtk.TextIter;

        /**
         * This function is used to determine if a key pressed should cause the
         * indenter to automatically indent.
         * 
         * The default implementation of this virtual method will check to see
         * if `keyval` is {@link Gdk.KEY_Return} or {@link Gdk.KEY_KP_Enter} and `state` does
         * not have {@link Gdk.ModifierType.SHIFT_MASK} set. This is to allow the user to avoid
         * indentation when Shift+Return is pressed. Other indenters may want
         * to copy this behavior to provide a consistent experience to users.
         * @param view a {@link GtkSource.View}
         * @param location the location where `ch` is to be inserted
         * @param state modifier state for the insertion
         * @param keyval the keyval pressed such as {@link Gdk.KEY_Return}
         * @returns `true` if indentation should be automatically triggered;   otherwise `false` and no indentation will be performed.
         */
        is_trigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean;
    }


    export const Indenter: IndenterNamespace & {
        new (): Indenter; // This allows `obj instanceof Indenter`
    };

    namespace StyleSchemeChooser {
        /**
         * Interface for implementing StyleSchemeChooser.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets the currently-selected scheme.
             * @virtual
             */
            vfunc_get_style_scheme(): StyleScheme;

            /**
             * Sets the scheme.
             * @param scheme a {@link GtkSource.StyleScheme}
             * @virtual
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            style_scheme: StyleScheme;
            styleScheme: StyleScheme;
        }
    }

    export interface StyleSchemeChooserNamespace {
        $gtype: GObject.GType<StyleSchemeChooser>;
        prototype: StyleSchemeChooser;
    }
    /**
     * Interface implemented by widgets for choosing style schemes.
     * 
     * {@link GtkSource.StyleSchemeChooser} is an interface that is implemented by widgets
     * for choosing style schemes.
     * 
     * In GtkSourceView, the main widgets that implement this interface are
     * {@link StyleSchemeChooserWidget} and {@link StyleSchemeChooserButton}.
     * @gir-type Interface
     */
    interface StyleSchemeChooser extends GObject.Object, StyleSchemeChooser.Interface {

        // Properties
        /**
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
         */
        get style_scheme(): StyleScheme;
        set style_scheme(val: StyleScheme);

        /**
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
         */
        get styleScheme(): StyleScheme;
        set styleScheme(val: StyleScheme);

        // Methods
        /**
         * Gets the currently-selected scheme.
         * @returns the currently-selected scheme.
         */
        get_style_scheme(): StyleScheme;

        /**
         * Sets the scheme.
         * @param scheme a {@link GtkSource.StyleScheme}
         */
        set_style_scheme(scheme: StyleScheme): void;
    }


    export const StyleSchemeChooser: StyleSchemeChooserNamespace & {
        new (): StyleSchemeChooser; // This allows `obj instanceof StyleSchemeChooser`
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

export default GtkSource;

// END
