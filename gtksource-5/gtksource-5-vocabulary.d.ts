/**
 * The GIR-derived widget VOCABULARY for GtkSource-5.
 *
 * GENERATED — do not edit. Provenance: GtkSource-5 — library 5.21.0 — dropped empty base(s): GObject.Object GObject.InitiallyUnowned Gio.ListModel
 *
 * 42 instantiable GTypes (of which 10 concrete widgets), 45 declarations, 13 enum nick unions, 2 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type GtkSource from './gtksource-5.js';
import type Pango from '@girs/pango-1.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkAccessibleTextConstructOnly, GtkAccessibleTextProps, GtkActionableConstructOnly, GtkActionableProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkIMContextConstructOnly, GtkIMContextProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkTextBufferConstructOnly, GtkTextBufferProps, GtkTextMarkConstructOnly, GtkTextMarkProps, GtkTextTagConstructOnly, GtkTextTagProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkTextWindowTypeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWrapModeNick } from '@girs/gtk-4.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GtkSourceAnnotationStyleNick = 'none' | 'warning' | 'error' | 'accent';
export type GtkSourceBackgroundPatternTypeNick = 'none' | 'grid';
export type GtkSourceBracketMatchTypeNick = 'none' | 'out-of-range' | 'not-found' | 'found';
export type GtkSourceChangeCaseTypeNick = 'lower' | 'upper' | 'toggle' | 'title';
export type GtkSourceCompletionActivationNick = 'none' | 'interactive' | 'user-requested';
export type GtkSourceCompletionColumnNick = 'icon' | 'before' | 'typed-text' | 'after' | 'comment' | 'details';
export type GtkSourceCompressionTypeNick = 'none' | 'gzip';
export type GtkSourceGutterRendererAlignmentModeNick = 'cell' | 'first' | 'last';
export type GtkSourceNewlineTypeNick = 'lf' | 'cr' | 'cr-lf';
export type GtkSourceSmartHomeEndTypeNick = 'disabled' | 'before' | 'after' | 'always';
export type GtkSourceViewGutterPositionNick = 'lines' | 'marks';
export type PangoUnderlineNick = 'none' | 'single' | 'double' | 'low' | 'error' | 'single-line' | 'double-line' | 'error-line';
export type PangoWeightNick = 'thin' | 'ultralight' | 'light' | 'semilight' | 'book' | 'normal' | 'medium' | 'semibold' | 'bold' | 'ultrabold' | 'heavy' | 'ultraheavy';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Represents an annotation added to [class@View], it has a [property@Annotation:line] property, [property@Annotation:description], icon and a style. */
export interface GtkSourceAnnotationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceAnnotationConstructOnly = never;

/** It is used to provide annotations and display them on [class@View] and also populate [class@HoverDisplay] when the user hovers over an annotation. */
export interface GtkSourceAnnotationProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceAnnotationProviderConstructOnly = never;

/** Use this object to manage [class@Annotation]s. */
export interface GtkSourceAnnotationsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceAnnotationsConstructOnly = never;

/** Subclass of [class@Gtk.TextBuffer]. */
export interface GtkSourceBufferProps extends GtkTextBufferProps {
    /**
     * Whether to highlight matching brackets in the buffer.
     * @default TRUE
     */
    'highlight-matching-brackets'?: boolean;
    /**
     * Whether to highlight syntax in the buffer.
     * @default TRUE
     */
    'highlight-syntax'?: boolean;
    /**
     * Whether the buffer has an implicit trailing newline.
     * @default TRUE
     */
    'implicit-trailing-newline'?: boolean;
    language?: GtkSource.Language | null;
    /** Style scheme. */
    'style-scheme'?: GtkSource.StyleScheme | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceBufferConstructOnly = GtkTextBufferConstructOnly;

/** Main Completion Object. */
export interface GtkSourceCompletionProps {
    /**
     * The number of rows to display to the user before scrolling.
     * @default 5
     */
    'page-size'?: number;
    /**
     * Determines whether the visibility of the info window should be saved when the completion is hidden, and restored when the completion is shown again.
     * @default FALSE
     */
    'remember-info-visibility'?: boolean;
    /**
     * Determines whether the first proposal should be selected when the completion is first shown.
     * @default FALSE
     */
    'select-on-show'?: boolean;
    /**
     * The "show-icons" property denotes if icons should be displayed within the list of completions presented to the user.
     * @default TRUE
     */
    'show-icons'?: boolean;
    /** The "view" property is the #GtkTextView for which this #GtkSourceCompletion is providing completion features. */
    view?: GtkSource.View;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionConstructOnly = 'view';

/** Widget for single cell of completion proposal. */
export interface GtkSourceCompletionCellProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default GTK_SOURCE_COMPLETION_COLUMN_TYPED_TEXT */
    column?: GtkSourceCompletionColumnNick | GtkSource.CompletionColumn;
    /** @default NULL */
    markup?: string;
    paintable?: Gdk.Paintable;
    /** @default NULL */
    text?: string;
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionCellConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'column';

/** The context of a completion. */
export interface GtkSourceCompletionContextProps {
    /** The "completion" is the #GtkSourceCompletion that was used to create the context. */
    completion?: GtkSource.Completion | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionContextConstructOnly = 'completion';

/** Completion provider interface. */
export interface GtkSourceCompletionProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionProviderConstructOnly = never;

/** A [iface@CompletionProvider] for the completion of snippets. */
export interface GtkSourceCompletionSnippetsProps extends GtkSourceCompletionProviderProps {
    /** @default 0 */
    priority?: number;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionSnippetsConstructOnly = GtkSourceCompletionProviderConstructOnly;

/** A [iface@CompletionProvider] for the completion of words. */
export interface GtkSourceCompletionWordsProps extends GtkSourceCompletionProviderProps {
    /** @default 2 */
    'minimum-word-size'?: number;
    /** @default 0 */
    priority?: number;
    /** @default 300 */
    'proposals-batch-size'?: number;
    /** @default 50 */
    'scan-batch-size'?: number;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionWordsConstructOnly = GtkSourceCompletionProviderConstructOnly;

/** On-disk representation of a [class@Buffer]. */
export interface GtkSourceFileProps {
    /** The location. */
    location?: Gio.File | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceFileConstructOnly = never;

/** Load a file into a GtkSourceBuffer. */
export interface GtkSourceFileLoaderProps {
    /** The #GtkSourceBuffer to load the contents into. */
    buffer?: GtkSource.Buffer;
    /** The #GtkSourceFile. */
    file?: GtkSource.File;
    /** The #GInputStream to load. */
    'input-stream'?: Gio.InputStream | null;
    /** The #GFile to load. */
    location?: Gio.File | null;
    /**
     * The maximum expanded size, in bytes, that the loader will insert into the buffer.
     * @since 5.22
     * @default 1073741824
     */
    'max-size'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceFileLoaderConstructOnly = 'buffer' | 'file' | 'input-stream' | 'location';

/** Save a [class@Buffer] into a file. */
export interface GtkSourceFileSaverProps {
    /** The #GtkSourceBuffer to save. */
    buffer?: GtkSource.Buffer;
    /**
     * The compression type.
     * @default GTK_SOURCE_COMPRESSION_TYPE_NONE
     */
    'compression-type'?: GtkSourceCompressionTypeNick | GtkSource.CompressionType;
    /** The file's encoding. */
    encoding?: GtkSource.Encoding;
    /** The #GtkSourceFile. */
    file?: GtkSource.File;
    /**
     * File saving flags.
     * @default GTK_SOURCE_FILE_SAVER_FLAGS_NONE
     */
    flags?: number;
    /** The #GFile where to save the buffer. */
    location?: Gio.File;
    /**
     * The newline type.
     * @default GTK_SOURCE_NEWLINE_TYPE_LF
     */
    'newline-type'?: GtkSourceNewlineTypeNick | GtkSource.NewlineType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceFileSaverConstructOnly = 'buffer' | 'file' | 'location';

/** Gutter object for [class@View]. */
export interface GtkSourceGutterProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The #GtkSourceView of the gutter. */
    view?: GtkSource.View;
    /**
     * The text window type on which the window is placed.
     * @default GTK_TEXT_WINDOW_LEFT
     */
    'window-type'?: GtkTextWindowTypeNick | Gtk.TextWindowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'view' | 'window-type';

/** Collected information about visible lines. */
export interface GtkSourceGutterLinesProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterLinesConstructOnly = never;

/** Gutter cell renderer. */
export interface GtkSourceGutterRendererProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The alignment mode of the renderer.
     * @default GTK_SOURCE_GUTTER_RENDERER_ALIGNMENT_MODE_CELL
     */
    'alignment-mode'?: GtkSourceGutterRendererAlignmentModeNick | GtkSource.GutterRendererAlignmentMode;
    /**
     * The horizontal alignment of the renderer.
     * @default 0.000000
     */
    xalign?: number;
    /**
     * The left and right padding of the renderer.
     * @default 0
     */
    xpad?: number;
    /**
     * The vertical alignment of the renderer.
     * @default 0.000000
     */
    yalign?: number;
    /**
     * The top and bottom padding of the renderer.
     * @default 0
     */
    ypad?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Renders a pixbuf in the gutter. */
export interface GtkSourceGutterRendererPixbufProps extends GtkSourceGutterRendererProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    gicon?: Gio.Icon;
    /** @default NULL */
    'icon-name'?: string;
    paintable?: Gdk.Paintable | null;
    pixbuf?: GdkPixbuf.Pixbuf;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererPixbufConstructOnly = GtkSourceGutterRendererConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Renders text in the gutter. */
export interface GtkSourceGutterRendererTextProps extends GtkSourceGutterRendererProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    markup?: string;
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererTextConstructOnly = GtkSourceGutterRendererConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Interactive tooltips. */
export interface GtkSourceHoverProps {
    /**
     * Contains the number of milliseconds to delay before showing the hover assistant.
     * @default 500
     */
    'hover-delay'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceHoverConstructOnly = never;

/** Context for populating [class@HoverDisplay] contents. */
export interface GtkSourceHoverContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceHoverContextConstructOnly = never;

/** Display for interactive tooltips. */
export interface GtkSourceHoverDisplayProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceHoverDisplayConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Represents a syntax highlighted language. */
export interface GtkSourceLanguageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceLanguageConstructOnly = never;

/** Provides access to [class@Language]s. */
export interface GtkSourceLanguageManagerProps {
    'search-path'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceLanguageManagerConstructOnly = never;

/** Widget that displays a map for a specific [class@View]. */
export interface GtkSourceMapProps extends GtkSourceViewProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    'font-desc'?: Pango.FontDescription;
    view?: GtkSource.View | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceMapConstructOnly = GtkSourceViewConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Mark object for [class@Buffer]. */
export interface GtkSourceMarkProps extends GtkTextMarkProps {
    /**
     * The category of the `GtkSourceMark`, classifies the mark and controls which pixbuf is used and with which priority it is drawn.
     * @default NULL
     */
    category?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceMarkConstructOnly = GtkTextMarkConstructOnly | 'category';

/** The source mark attributes object. */
export interface GtkSourceMarkAttributesProps {
    /** A color used for background of a line. */
    background?: Gdk.RGBA;
    /** A #GIcon that may be a base of a rendered icon. */
    gicon?: Gio.Icon;
    /**
     * An icon name that may be a base of a rendered icon.
     * @default NULL
     */
    'icon-name'?: string;
    /** A #GdkPixbuf that may be a base of a rendered icon. */
    pixbuf?: GdkPixbuf.Pixbuf;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceMarkAttributesConstructOnly = never;

/** Compose a [class@Buffer] for printing. */
export interface GtkSourcePrintCompositorProps {
    /**
     * Name of the font used for the text body.
     * @default NULL
     */
    'body-font-name'?: string;
    /** The [class@Buffer] object to print. */
    buffer?: GtkSource.Buffer;
    /**
     * Name of the font used to print page footer.
     * @default NULL
     */
    'footer-font-name'?: string;
    /**
     * Name of the font used to print page header.
     * @default NULL
     */
    'header-font-name'?: string;
    /**
     * Whether to print the document with highlighted syntax.
     * @default TRUE
     */
    'highlight-syntax'?: boolean;
    /**
     * Name of the font used to print line numbers on the left margin.
     * @default NULL
     */
    'line-numbers-font-name'?: string;
    /**
     * Whether to print a footer in each page.
     * @default FALSE
     */
    'print-footer'?: boolean;
    /**
     * Whether to print a header in each page.
     * @default FALSE
     */
    'print-header'?: boolean;
    /**
     * Interval of printed line numbers.
     * @default 1
     */
    'print-line-numbers'?: number;
    /**
     * Width of a tab character expressed in spaces.
     * @default 8
     */
    'tab-width'?: number;
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * @default GTK_WRAP_NONE
     */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourcePrintCompositorConstructOnly = 'buffer';

/** Region utility. */
export interface GtkSourceRegionProps {
    /** The [class@Gtk.TextBuffer]. */
    buffer?: Gtk.TextBuffer | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceRegionConstructOnly = 'buffer';

/** Search context. */
export interface GtkSourceSearchContextProps {
    /** The [class@Buffer] associated to the search context. */
    buffer?: GtkSource.Buffer;
    /**
     * Highlight the search occurrences.
     * @default TRUE
     */
    highlight?: boolean;
    /** A [class@Style], or %NULL for theme's scheme default style. */
    'match-style'?: GtkSource.Style | null;
    /** The [class@SearchSettings] associated to the search context. */
    settings?: GtkSource.SearchSettings;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSearchContextConstructOnly = 'buffer' | 'settings';

/** Search settings. */
export interface GtkSourceSearchSettingsProps {
    /**
     * If %TRUE, a search match must start and end a word.
     * @default FALSE
     */
    'at-word-boundaries'?: boolean;
    /**
     * Whether the search is case sensitive.
     * @default FALSE
     */
    'case-sensitive'?: boolean;
    /**
     * Search by regular expressions with [property@SearchSettings:search-text] as the pattern.
     * @default FALSE
     */
    'regex-enabled'?: boolean;
    /**
     * A search string, or %NULL if the search is disabled.
     * @default NULL
     */
    'search-text'?: string | null;
    /**
     * Exclude invisible text from the search.
     * @since 5.12
     * @default TRUE
     */
    'visible-only'?: boolean;
    /**
     * For a forward search, continue at the beginning of the buffer if no search occurrence is found.
     * @default FALSE
     */
    'wrap-around'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSearchSettingsConstructOnly = never;

/** Quick insertion code snippets. */
export interface GtkSourceSnippetProps {
    /** @default NULL */
    description?: string;
    /** @default NULL */
    'language-id'?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    trigger?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSnippetConstructOnly = never;

/** A chunk of text within the source snippet. */
export interface GtkSourceSnippetChunkProps {
    context?: GtkSource.SnippetContext;
    /** @default -1 */
    'focus-position'?: number;
    /** @default NULL */
    spec?: string | null;
    /** @default NULL */
    text?: string;
    /** @default FALSE */
    'text-set'?: boolean;
    /** @default NULL */
    'tooltip-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSnippetChunkConstructOnly = never;

/** Context for expanding [class@SnippetChunk]. */
export interface GtkSourceSnippetContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSnippetContextConstructOnly = never;

/** Provides access to [class@Snippet]. */
export interface GtkSourceSnippetManagerProps {
    /** Contains a list of directories to search for files containing snippets (*.snippets). */
    'search-path'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSnippetManagerConstructOnly = never;

/** Represent white space characters with symbols. */
export interface GtkSourceSpaceDrawerProps {
    /**
     * Whether the [property@SpaceDrawer:matrix] property is enabled.
     * @default FALSE
     */
    'enable-matrix'?: boolean;
    /** The property is a [struct@GLib.Variant] property to specify where and what kind of white spaces to draw. */
    matrix?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSpaceDrawerConstructOnly = never;

/** Represents a style. */
export interface GtkSourceStyleProps {
    /** @default NULL */
    background?: string;
    /** @default FALSE */
    'background-set'?: boolean;
    /** @default FALSE */
    bold?: boolean;
    /** @default FALSE */
    'bold-set'?: boolean;
    /** @default NULL */
    foreground?: string;
    /** @default FALSE */
    'foreground-set'?: boolean;
    /** @default FALSE */
    italic?: boolean;
    /** @default FALSE */
    'italic-set'?: boolean;
    /** @default NULL */
    'line-background'?: string;
    /** @default FALSE */
    'line-background-set'?: boolean;
    /** @default PANGO_UNDERLINE_NONE */
    'pango-underline'?: PangoUnderlineNick | Pango.Underline;
    /** @default NULL */
    scale?: string;
    /** @default FALSE */
    'scale-set'?: boolean;
    /** @default FALSE */
    strikethrough?: boolean;
    /** @default FALSE */
    'strikethrough-set'?: boolean;
    /** @default NULL */
    'underline-color'?: string;
    /** @default FALSE */
    'underline-color-set'?: boolean;
    /** @default FALSE */
    'underline-set'?: boolean;
    /** @default PANGO_WEIGHT_NORMAL */
    weight?: PangoWeightNick | Pango.Weight;
    /** @default FALSE */
    'weight-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleConstructOnly = 'background' | 'background-set' | 'bold' | 'bold-set' | 'foreground' | 'foreground-set' | 'italic' | 'italic-set' | 'line-background' | 'line-background-set' | 'pango-underline' | 'scale' | 'scale-set' | 'strikethrough' | 'strikethrough-set' | 'underline-color' | 'underline-color-set' | 'underline-set' | 'weight' | 'weight-set';

/** Controls the appearance of [class@View]. */
export interface GtkSourceStyleSchemeProps {
    /**
     * Style scheme id, a unique string used to identify the style scheme in [class@StyleSchemeManager].
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeConstructOnly = 'id';

/** Interface implemented by widgets for choosing style schemes. */
export interface GtkSourceStyleSchemeChooserProps {
    /** Contains the currently selected style scheme. */
    'style-scheme'?: GtkSource.StyleScheme;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserConstructOnly = never;

/** A button to launch a style scheme selection dialog. */
export interface GtkSourceStyleSchemeChooserButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps, GtkSourceStyleSchemeChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkSourceStyleSchemeChooserConstructOnly;

/** A widget for choosing style schemes. */
export interface GtkSourceStyleSchemeChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkSourceStyleSchemeChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkSourceStyleSchemeChooserConstructOnly;

/** Provides access to [class@StyleScheme]s. */
export interface GtkSourceStyleSchemeManagerProps {
    'search-path'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeManagerConstructOnly = never;

/** A preview widget for [class@StyleScheme]. */
export interface GtkSourceStyleSchemePreviewProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    scheme?: GtkSource.StyleScheme;
    /** @default FALSE */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemePreviewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'scheme';

/** A tag that can be applied to text in a [class@Buffer]. */
export interface GtkSourceTagProps extends GtkTextTagProps {
    /**
     * Whether to draw white spaces.
     * @default FALSE
     */
    'draw-spaces'?: boolean;
    /**
     * Whether the [property@Tag:draw-spaces] property is set and must be taken into account.
     * @default FALSE
     */
    'draw-spaces-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceTagConstructOnly = GtkTextTagConstructOnly;

/** Subclass of [class@Gtk.TextView]. */
export interface GtkSourceViewProps extends GtkTextViewProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /** @default FALSE */
    'auto-indent'?: boolean;
    /**
     * Draw a specific background pattern on the view.
     * @default GTK_SOURCE_BACKGROUND_PATTERN_TYPE_NONE
     */
    'background-pattern'?: GtkSourceBackgroundPatternTypeNick | GtkSource.BackgroundPatternType;
    /**
     * The property denotes if snippets should be expanded when the user presses Tab after having typed a word matching the snippets found in [class@SnippetManager].
     * @default FALSE
     */
    'enable-snippets'?: boolean;
    /** @default FALSE */
    'highlight-current-line'?: boolean;
    /** @default TRUE */
    'indent-on-tab'?: boolean;
    /**
     * Width of an indentation step expressed in number of spaces.
     * @default -1
     */
    'indent-width'?: number;
    /** The property is a [iface@Indenter] to use to indent as the user types into the [class@View]. */
    indenter?: GtkSource.Indenter | null;
    /** @default FALSE */
    'insert-spaces-instead-of-tabs'?: boolean;
    /**
     * Position of the right margin.
     * @default 80
     */
    'right-margin-position'?: number;
    /**
     * Whether to display line mark pixbufs
     * @default FALSE
     */
    'show-line-marks'?: boolean;
    /**
     * Whether to display line numbers
     * @default FALSE
     */
    'show-line-numbers'?: boolean;
    /**
     * Whether to display the right margin.
     * @default FALSE
     */
    'show-right-margin'?: boolean;
    /**
     * Whether smart Backspace should be used.
     * @default FALSE
     */
    'smart-backspace'?: boolean;
    /**
     * Set the behavior of the HOME and END keys.
     * @default GTK_SOURCE_SMART_HOME_END_DISABLED
     */
    'smart-home-end'?: GtkSourceSmartHomeEndTypeNick | GtkSource.SmartHomeEndType;
    /**
     * Width of a tab character expressed in number of spaces.
     * @default 8
     */
    'tab-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceViewConstructOnly = GtkTextViewConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Vim emulation. */
export interface GtkSourceVimIMContextProps extends GtkIMContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceVimIMContextConstructOnly = GtkIMContextConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {
    GtkSourceCompletionCell: {
        class: GtkSource.CompletionCell;
        props: GtkSourceCompletionCellProps;
        signals: GtkSource.CompletionCell.SignalSignatures;
        constructOnly: GtkSourceCompletionCellConstructOnly;
        slotCandidates: {
        'widget': 'set_widget';
        };
    };
    GtkSourceGutter: {
        class: GtkSource.Gutter;
        props: GtkSourceGutterProps;
        signals: GtkSource.Gutter.SignalSignatures;
        constructOnly: GtkSourceGutterConstructOnly;
        slotCandidates: {};
    };
    GtkSourceGutterRendererPixbuf: {
        class: GtkSource.GutterRendererPixbuf;
        props: GtkSourceGutterRendererPixbufProps;
        signals: GtkSource.GutterRendererPixbuf.SignalSignatures;
        constructOnly: GtkSourceGutterRendererPixbufConstructOnly;
        slotCandidates: {};
    };
    GtkSourceGutterRendererText: {
        class: GtkSource.GutterRendererText;
        props: GtkSourceGutterRendererTextProps;
        signals: GtkSource.GutterRendererText.SignalSignatures;
        constructOnly: GtkSourceGutterRendererTextConstructOnly;
        slotCandidates: {};
    };
    GtkSourceHoverDisplay: {
        class: GtkSource.HoverDisplay;
        props: GtkSourceHoverDisplayProps;
        signals: GtkSource.HoverDisplay.SignalSignatures;
        constructOnly: GtkSourceHoverDisplayConstructOnly;
        slotCandidates: {};
    };
    GtkSourceMap: {
        class: GtkSource.Map;
        props: GtkSourceMapProps;
        signals: GtkSource.Map.SignalSignatures;
        constructOnly: GtkSourceMapConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    GtkSourceStyleSchemeChooserButton: {
        class: GtkSource.StyleSchemeChooserButton;
        props: GtkSourceStyleSchemeChooserButtonProps;
        signals: GtkSource.StyleSchemeChooserButton.SignalSignatures;
        constructOnly: GtkSourceStyleSchemeChooserButtonConstructOnly;
        slotCandidates: {};
    };
    GtkSourceStyleSchemeChooserWidget: {
        class: GtkSource.StyleSchemeChooserWidget;
        props: GtkSourceStyleSchemeChooserWidgetProps;
        signals: GtkSource.StyleSchemeChooserWidget.SignalSignatures;
        constructOnly: GtkSourceStyleSchemeChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkSourceStyleSchemePreview: {
        class: GtkSource.StyleSchemePreview;
        props: GtkSourceStyleSchemePreviewProps;
        signals: GtkSource.StyleSchemePreview.SignalSignatures;
        constructOnly: GtkSourceStyleSchemePreviewConstructOnly;
        slotCandidates: {};
    };
    GtkSourceView: {
        class: GtkSource.View;
        props: GtkSourceViewProps;
        signals: GtkSource.View.SignalSignatures;
        constructOnly: GtkSourceViewConstructOnly;
        slotCandidates: {};
    };
}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
