/**
 * The GIR-derived widget VOCABULARY for GtkSource-4.
 *
 * GENERATED — do not edit. Provenance: GtkSource-4 — dropped empty base(s): Atk.ImplementorIface
 *
 * 29 instantiable GTypes (of which 5 concrete widgets), 33 declarations, 8 enum nick unions, 1 slot candidates.
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
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type GtkSource from './gtksource-4.js';
import type Pango from '@girs/pango-1.0';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkContainerConstructOnly, GtkContainerProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkTextBufferConstructOnly, GtkTextBufferProps, GtkTextMarkConstructOnly, GtkTextMarkProps, GtkTextTagConstructOnly, GtkTextTagProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkTextWindowTypeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps, GtkWrapModeNick } from '@girs/gtk-3.0/vocabulary';
import type { PangoUnderlineNick } from '@girs/pango-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GtkSourceBackgroundPatternTypeNick = 'none' | 'grid';
export type GtkSourceBracketMatchTypeNick = 'none' | 'out-of-range' | 'not-found' | 'found';
export type GtkSourceChangeCaseTypeNick = 'lower' | 'upper' | 'toggle' | 'title';
export type GtkSourceCompressionTypeNick = 'none' | 'gzip';
export type GtkSourceGutterRendererAlignmentModeNick = 'cell' | 'first' | 'last';
export type GtkSourceNewlineTypeNick = 'lf' | 'cr' | 'cr-lf';
export type GtkSourceSmartHomeEndTypeNick = 'disabled' | 'before' | 'after' | 'always';
export type GtkSourceViewGutterPositionNick = 'lines' | 'marks';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

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
     * @since 3.14
     * @default TRUE
     */
    'implicit-trailing-newline'?: boolean;
    language?: GtkSource.Language | null;
    /**
     * Number of undo levels for the buffer.
     * @default -1
     */
    'max-undo-levels'?: number;
    /** Style scheme. */
    'style-scheme'?: GtkSource.StyleScheme | null;
    'undo-manager'?: GtkSource.UndoManager | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceBufferConstructOnly = GtkTextBufferConstructOnly;

export interface GtkSourceCompletionProps extends GObjectProps, GtkBuildableProps {
    /**
     * Number of keyboard accelerators to show for the first proposals.
     * @default 5
     */
    accelerators?: number;
    /**
     * Determines the popup delay (in milliseconds) at which the completion will be shown for interactive completion.
     * @default 250
     */
    'auto-complete-delay'?: number;
    /**
     * The scroll page size of the proposals in the completion window.
     * @default 5
     */
    'proposal-page-size'?: number;
    /**
     * The scroll page size of the provider pages in the completion window.
     * @default 5
     */
    'provider-page-size'?: number;
    /**
     * Determines whether the visibility of the info window should be saved when the completion is hidden, and restored when the completion is shown again.
     * @default FALSE
     */
    'remember-info-visibility'?: boolean;
    /**
     * Determines whether the first proposal should be selected when the completion is first shown.
     * @default TRUE
     */
    'select-on-show'?: boolean;
    /**
     * Determines whether provider headers should be shown in the proposal list.
     * @default TRUE
     */
    'show-headers'?: boolean;
    /**
     * Determines whether provider and proposal icons should be shown in the completion popup.
     * @default TRUE
     */
    'show-icons'?: boolean;
    /** The #GtkSourceView bound to the completion object. */
    view?: GtkSource.View | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | 'view';

export interface GtkSourceCompletionContextProps extends GInitiallyUnownedProps {
    /**
     * The completion activation
     * @default GTK_SOURCE_COMPLETION_ACTIVATION_USER_REQUESTED
     */
    activation?: number;
    /** The #GtkSourceCompletion associated with the context. */
    completion?: GtkSource.Completion;
    /** The #GtkTextIter at which the completion is invoked. */
    iter?: Gtk.TextIter;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionContextConstructOnly = GInitiallyUnownedConstructOnly | 'completion';

export interface GtkSourceCompletionInfoProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionInfoConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GtkSourceCompletionItemProps extends GObjectProps, GtkSourceCompletionProposalProps {
    /**
     * The #GIcon for the icon to be shown for this proposal.
     * @since 3.18
     */
    gicon?: Gio.Icon;
    /** The #GdkPixbuf for the icon to be shown for this proposal. */
    icon?: GdkPixbuf.Pixbuf;
    /**
     * The icon name for the icon to be shown for this proposal.
     * @since 3.18
     * @default NULL
     */
    'icon-name'?: string;
    /**
     * Optional extra information to be shown for this proposal.
     * @default NULL
     */
    info?: string;
    /**
     * Label to be shown for this proposal.
     * @default NULL
     */
    label?: string;
    /**
     * Label with markup to be shown for this proposal.
     * @default NULL
     */
    markup?: string;
    /**
     * Proposal text.
     * @default NULL
     */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionItemConstructOnly = GObjectConstructOnly | GtkSourceCompletionProposalConstructOnly;

export interface GtkSourceCompletionProposalProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionProposalConstructOnly = GObjectConstructOnly;

export interface GtkSourceCompletionProviderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionProviderConstructOnly = GObjectConstructOnly;

export interface GtkSourceCompletionWordsProps extends GObjectProps, GtkSourceCompletionProviderProps {
    /**
     * The type of activation.
     * @since 3.10
     * @default GTK_SOURCE_COMPLETION_ACTIVATION_INTERACTIVE | GTK_SOURCE_COMPLETION_ACTIVATION_USER_REQUESTED
     */
    activation?: number;
    icon?: GdkPixbuf.Pixbuf;
    /** @default 50 */
    'interactive-delay'?: number;
    /** @default 2 */
    'minimum-word-size'?: number;
    /** @default NULL */
    name?: string;
    /** @default 0 */
    priority?: number;
    /** @default 300 */
    'proposals-batch-size'?: number;
    /** @default 50 */
    'scan-batch-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceCompletionWordsConstructOnly = GObjectConstructOnly | GtkSourceCompletionProviderConstructOnly;

export interface GtkSourceFileProps extends GObjectProps {
    /**
     * The location.
     * @since 3.14
     */
    location?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceFileConstructOnly = GObjectConstructOnly;

export interface GtkSourceFileLoaderProps extends GObjectProps {
    /**
     * The #GtkSourceBuffer to load the contents into.
     * @since 3.14
     */
    buffer?: GtkSource.Buffer;
    /**
     * The #GtkSourceFile.
     * @since 3.14
     */
    file?: GtkSource.File;
    /**
     * The #GInputStream to load.
     * @since 3.14
     */
    'input-stream'?: Gio.InputStream | null;
    /**
     * The #GFile to load.
     * @since 3.14
     */
    location?: Gio.File | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceFileLoaderConstructOnly = GObjectConstructOnly | 'buffer' | 'file' | 'input-stream' | 'location';

export interface GtkSourceFileSaverProps extends GObjectProps {
    /**
     * The #GtkSourceBuffer to save.
     * @since 3.14
     */
    buffer?: GtkSource.Buffer;
    /**
     * The compression type.
     * @since 3.14
     * @default GTK_SOURCE_COMPRESSION_TYPE_NONE
     */
    'compression-type'?: GtkSourceCompressionTypeNick | GtkSource.CompressionType;
    /**
     * The file's encoding.
     * @since 3.14
     */
    encoding?: GtkSource.Encoding;
    /**
     * The #GtkSourceFile.
     * @since 3.14
     */
    file?: GtkSource.File;
    /**
     * File saving flags.
     * @since 3.14
     * @default GTK_SOURCE_FILE_SAVER_FLAGS_NONE
     */
    flags?: number;
    /**
     * The #GFile where to save the buffer.
     * @since 3.14
     */
    location?: Gio.File;
    /**
     * The newline type.
     * @since 3.14
     * @default GTK_SOURCE_NEWLINE_TYPE_LF
     */
    'newline-type'?: GtkSourceNewlineTypeNick | GtkSource.NewlineType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceFileSaverConstructOnly = GObjectConstructOnly | 'buffer' | 'file' | 'location';

export interface GtkSourceGutterProps extends GObjectProps {
    /** The #GtkSourceView of the gutter. */
    view?: GtkSource.View;
    /**
     * The text window type on which the window is placed.
     * @default GTK_TEXT_WINDOW_PRIVATE
     */
    'window-type'?: GtkTextWindowTypeNick | Gtk.TextWindowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterConstructOnly = GObjectConstructOnly | 'view' | 'window-type';

export interface GtkSourceGutterRendererProps extends GInitiallyUnownedProps {
    /**
     * The alignment mode of the renderer.
     * @default GTK_SOURCE_GUTTER_RENDERER_ALIGNMENT_MODE_CELL
     */
    'alignment-mode'?: GtkSourceGutterRendererAlignmentModeNick | GtkSource.GutterRendererAlignmentMode;
    'background-rgba'?: Gdk.RGBA;
    /** @default FALSE */
    'background-set'?: boolean;
    /** @default 0 */
    size?: number;
    /**
     * The visibility of the renderer.
     * @default TRUE
     */
    visible?: boolean;
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
export type GtkSourceGutterRendererConstructOnly = GInitiallyUnownedConstructOnly;

export interface GtkSourceGutterRendererPixbufProps extends GtkSourceGutterRendererProps {
    gicon?: Gio.Icon;
    /** @default NULL */
    'icon-name'?: string;
    pixbuf?: GdkPixbuf.Pixbuf;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererPixbufConstructOnly = GtkSourceGutterRendererConstructOnly;

export interface GtkSourceGutterRendererTextProps extends GtkSourceGutterRendererProps {
    /** @default NULL */
    markup?: string;
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceGutterRendererTextConstructOnly = GtkSourceGutterRendererConstructOnly;

export interface GtkSourceLanguageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceLanguageConstructOnly = GObjectConstructOnly;

export interface GtkSourceLanguageManagerProps extends GObjectProps {
    'search-path'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceLanguageManagerConstructOnly = GObjectConstructOnly;

export interface GtkSourceMapProps extends GtkSourceViewProps, GtkBuildableProps, GtkScrollableProps {
    'font-desc'?: Pango.FontDescription;
    view?: GtkSource.View | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceMapConstructOnly = GtkSourceViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface GtkSourceMarkProps extends GtkTextMarkProps {
    /**
     * The category of the #GtkSourceMark, classifies the mark and controls which pixbuf is used and with which priority it is drawn.
     * @default NULL
     */
    category?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceMarkConstructOnly = GtkTextMarkConstructOnly | 'category';

export interface GtkSourceMarkAttributesProps extends GObjectProps {
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
export type GtkSourceMarkAttributesConstructOnly = GObjectConstructOnly;

export interface GtkSourcePrintCompositorProps extends GObjectProps {
    /**
     * Name of the font used for the text body.
     * @since 2.2
     * @default NULL
     */
    'body-font-name'?: string;
    /**
     * The GtkSourceBuffer object to print.
     * @since 2.2
     */
    buffer?: GtkSource.Buffer;
    /**
     * Name of the font used to print page footer.
     * @since 2.2
     * @default NULL
     */
    'footer-font-name'?: string;
    /**
     * Name of the font used to print page header.
     * @since 2.2
     * @default NULL
     */
    'header-font-name'?: string;
    /**
     * Whether to print the document with highlighted syntax.
     * @since 2.2
     * @default TRUE
     */
    'highlight-syntax'?: boolean;
    /**
     * Name of the font used to print line numbers on the left margin.
     * @since 2.2
     * @default NULL
     */
    'line-numbers-font-name'?: string;
    /**
     * Whether to print a footer in each page.
     * @since 2.2
     * @default FALSE
     */
    'print-footer'?: boolean;
    /**
     * Whether to print a header in each page.
     * @since 2.2
     * @default FALSE
     */
    'print-header'?: boolean;
    /**
     * Interval of printed line numbers.
     * @since 2.2
     * @default 1
     */
    'print-line-numbers'?: number;
    /**
     * Width of a tab character expressed in spaces.
     * @since 2.2
     * @default 8
     */
    'tab-width'?: number;
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * @since 2.2
     * @default GTK_WRAP_NONE
     */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourcePrintCompositorConstructOnly = GObjectConstructOnly | 'buffer';

export interface GtkSourceRegionProps extends GObjectProps {
    /**
     * The #GtkTextBuffer.
     * @since 3.22
     */
    buffer?: Gtk.TextBuffer | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceRegionConstructOnly = GObjectConstructOnly | 'buffer';

export interface GtkSourceSearchContextProps extends GObjectProps {
    /**
     * The #GtkSourceBuffer associated to the search context.
     * @since 3.10
     */
    buffer?: GtkSource.Buffer;
    /**
     * Highlight the search occurrences.
     * @since 3.10
     * @default TRUE
     */
    highlight?: boolean;
    /**
     * A #GtkSourceStyle, or %NULL for theme's scheme default style.
     * @since 3.16
     */
    'match-style'?: GtkSource.Style;
    /**
     * The #GtkSourceSearchSettings associated to the search context.
     * @since 3.10
     */
    settings?: GtkSource.SearchSettings;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSearchContextConstructOnly = GObjectConstructOnly | 'buffer' | 'settings';

export interface GtkSourceSearchSettingsProps extends GObjectProps {
    /**
     * If %TRUE, a search match must start and end a word.
     * @since 3.10
     * @default FALSE
     */
    'at-word-boundaries'?: boolean;
    /**
     * Whether the search is case sensitive.
     * @since 3.10
     * @default FALSE
     */
    'case-sensitive'?: boolean;
    /**
     * Search by regular expressions with #GtkSourceSearchSettings:search-text as the pattern.
     * @since 3.10
     * @default FALSE
     */
    'regex-enabled'?: boolean;
    /**
     * A search string, or %NULL if the search is disabled.
     * @since 3.10
     * @default NULL
     */
    'search-text'?: string | null;
    /**
     * For a forward search, continue at the beginning of the buffer if no search occurrence is found.
     * @since 3.10
     * @default FALSE
     */
    'wrap-around'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSearchSettingsConstructOnly = GObjectConstructOnly;

export interface GtkSourceSpaceDrawerProps extends GObjectProps {
    /**
     * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
     * @since 3.24
     * @default FALSE
     */
    'enable-matrix'?: boolean;
    /**
     * The :matrix property is a #GVariant property to specify where and what kind of white spaces to draw.
     * @since 3.24
     */
    matrix?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceSpaceDrawerConstructOnly = GObjectConstructOnly;

export interface GtkSourceStyleProps extends GObjectProps {
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
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleConstructOnly = GObjectConstructOnly | 'background' | 'background-set' | 'bold' | 'bold-set' | 'foreground' | 'foreground-set' | 'italic' | 'italic-set' | 'line-background' | 'line-background-set' | 'pango-underline' | 'scale' | 'scale-set' | 'strikethrough' | 'strikethrough-set' | 'underline-color' | 'underline-color-set' | 'underline-set';

export interface GtkSourceStyleSchemeProps extends GObjectProps {
    /**
     * Style scheme id, a unique string used to identify the style scheme in #GtkSourceStyleSchemeManager.
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeConstructOnly = GObjectConstructOnly | 'id';

export interface GtkSourceStyleSchemeChooserProps extends GObjectProps {
    /**
     * The :style-scheme property contains the currently selected style scheme.
     * @since 3.16
     */
    'style-scheme'?: GtkSource.StyleScheme;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserConstructOnly = GObjectConstructOnly;

export interface GtkSourceStyleSchemeChooserButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps, GtkSourceStyleSchemeChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkSourceStyleSchemeChooserConstructOnly;

export interface GtkSourceStyleSchemeChooserWidgetProps extends GtkBinProps, GtkBuildableProps, GtkSourceStyleSchemeChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeChooserWidgetConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | GtkSourceStyleSchemeChooserConstructOnly;

export interface GtkSourceStyleSchemeManagerProps extends GObjectProps {
    'search-path'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceStyleSchemeManagerConstructOnly = GObjectConstructOnly;

export interface GtkSourceTagProps extends GtkTextTagProps {
    /**
     * Whether to draw white spaces.
     * @since 3.20
     * @default FALSE
     */
    'draw-spaces'?: boolean;
    /**
     * Whether the #GtkSourceTag:draw-spaces property is set and must be taken into account.
     * @since 3.20
     * @default FALSE
     */
    'draw-spaces-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSourceTagConstructOnly = GtkTextTagConstructOnly;

export interface GtkSourceViewProps extends GtkTextViewProps, GtkBuildableProps, GtkScrollableProps {
    /** @default FALSE */
    'auto-indent'?: boolean;
    /**
     * Draw a specific background pattern on the view.
     * @since 3.16
     * @default GTK_SOURCE_BACKGROUND_PATTERN_TYPE_NONE
     */
    'background-pattern'?: GtkSourceBackgroundPatternTypeNick | GtkSource.BackgroundPatternType;
    /** @default FALSE */
    'highlight-current-line'?: boolean;
    /** @default TRUE */
    'indent-on-tab'?: boolean;
    /**
     * Width of an indentation step expressed in number of spaces.
     * @default -1
     */
    'indent-width'?: number;
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
     * @since 3.18
     * @default FALSE
     */
    'smart-backspace'?: boolean;
    /**
     * Set the behavior of the HOME and END keys.
     * @since 2.0
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
export type GtkSourceViewConstructOnly = GtkTextViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

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
    GtkSourceCompletionInfo: {
        class: GtkSource.CompletionInfo;
        props: GtkSourceCompletionInfoProps;
        signals: GtkSource.CompletionInfo.SignalSignatures;
        constructOnly: GtkSourceCompletionInfoConstructOnly;
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
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
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
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

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
