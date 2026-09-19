/**
 * The GIR-derived widget VOCABULARY for Ide-1.0.
 *
 * GENERATED — do not edit. Provenance: Ide-1.0 — dropped empty base(s): Atk.ImplementorIface
 *
 * 93 instantiable GTypes (of which 24 concrete widgets), 101 declarations, 12 enum nick unions, 3 slot candidates.
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
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type GtkSource from '@girs/gtksource-3.0';
import type Ide from './ide-1.0.js';
import type Pango from '@girs/pango-1.0';
import type Peas from '@girs/peas-1.0';
import type { DzlApplicationConstructOnly, DzlApplicationProps, DzlBinConstructOnly, DzlBinProps, DzlDockBinConstructOnly, DzlDockBinEdgeConstructOnly, DzlDockBinEdgeProps, DzlDockBinProps, DzlDockConstructOnly, DzlDockItemConstructOnly, DzlDockItemProps, DzlDockOverlayConstructOnly, DzlDockOverlayProps, DzlDockProps, DzlDockRevealerConstructOnly, DzlDockRevealerProps, DzlPreferencesConstructOnly, DzlPreferencesProps, DzlPreferencesViewConstructOnly, DzlPreferencesViewProps, DzlProgressButtonConstructOnly, DzlProgressButtonProps } from '@girs/dazzle-1.0/vocabulary';
import type { GActionGroupConstructOnly, GActionGroupProps, GActionMapConstructOnly, GActionMapProps, GApplicationConstructOnly, GApplicationProps, GAsyncInitableConstructOnly, GAsyncInitableProps, GInitableConstructOnly, GInitableProps, GListModelConstructOnly, GListModelProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkApplicationConstructOnly, GtkApplicationProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDirectionTypeNick, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkHeaderBarConstructOnly, GtkHeaderBarProps, GtkInfoBarConstructOnly, GtkInfoBarProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkMenuButtonConstructOnly, GtkMenuButtonProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkTextBufferConstructOnly, GtkTextBufferProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';
import type { GtkSourceBufferConstructOnly, GtkSourceBufferProps, GtkSourceCompletionProviderConstructOnly, GtkSourceCompletionProviderProps, GtkSourceCompletionWordsConstructOnly, GtkSourceCompletionWordsProps, GtkSourceMapConstructOnly, GtkSourceMapProps, GtkSourceNewlineTypeNick, GtkSourceViewConstructOnly, GtkSourceViewProps } from '@girs/gtksource-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type IdeBuildLogStreamNick = 'stdout' | 'stderr';
export type IdeCursorTypeNick = 'column' | 'select' | 'match';
export type IdeDiagnosticSeverityNick = 'ignored' | 'note' | 'deprecated' | 'warning' | 'error' | 'fatal';
export type IdeHighlightResultNick = 'stop' | 'continue';
export type IdeIndentStyleNick = 'spaces' | 'tabs';
export type IdeLayoutGridSplitNick = 'left' | 'right' | 'move-left' | 'move-right';
export type IdeSourceViewModeTypeNick = 'transient' | 'permanent' | 'modal';
export type IdeSourceViewMovementNick = 'previous-offset' | 'next-offset' | 'nth-char' | 'previous-char' | 'next-char' | 'first-char' | 'first-nonspace-char' | 'middle-char' | 'last-char' | 'next-word-start' | 'next-full-word-start' | 'next-sub-word-start' | 'previous-sub-word-start' | 'previous-word-start' | 'previous-full-word-start' | 'previous-word-end' | 'previous-full-word-end' | 'next-word-end' | 'next-full-word-end' | 'sentence-start' | 'sentence-end' | 'paragraph-start' | 'paragraph-end' | 'previous-line' | 'next-line' | 'first-line' | 'nth-line' | 'last-line' | 'line-percentage' | 'line-chars' | 'line-end' | 'half-page-up' | 'half-page-down' | 'half-page-left' | 'half-page-right' | 'page-up' | 'page-up-lines' | 'page-down' | 'page-down-lines' | 'screen-up' | 'screen-down' | 'screen-left' | 'screen-right' | 'screen-top' | 'screen-middle' | 'screen-bottom' | 'match-special' | 'scroll-screen-top' | 'scroll-screen-center' | 'scroll-screen-bottom' | 'scroll-screen-left' | 'scroll-screen-right' | 'previous-unmatched-brace' | 'next-unmatched-brace' | 'previous-unmatched-paren' | 'next-unmatched-paren' | 'next-match-modifier' | 'previous-match-modifier' | 'next-match-search-char' | 'previous-match-search-char';
export type IdeSourceViewTheatricNick = 'expand' | 'shrink';
export type IdeSymbolKindNick = 'none' | 'array' | 'boolean' | 'class' | 'constant' | 'constructor' | 'enum' | 'enum-value' | 'field' | 'file' | 'function' | 'header' | 'interface' | 'method' | 'module' | 'namespace' | 'number' | 'package' | 'property' | 'scalar' | 'string' | 'struct' | 'union' | 'variable' | 'keyword' | 'ui-attributes' | 'ui-child' | 'ui-item' | 'ui-menu' | 'ui-menu-attribute' | 'ui-object' | 'ui-packing' | 'ui-property' | 'ui-section' | 'ui-signal' | 'ui-style' | 'ui-style-class' | 'ui-submenu' | 'ui-template' | 'xml-attribute' | 'xml-declaration' | 'xml-element' | 'xml-comment' | 'xml-cdata';
export type IdeThreadPoolKindNick = 'compiler' | 'indexer' | 'last';
export type IdeVcsConfigTypeNick = 'full-name' | 'email';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface IdeApplicationProps extends DzlApplicationProps, GActionGroupProps, GActionMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeApplicationConstructOnly = DzlApplicationConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

export interface IdeBackForwardItemProps extends IdeObjectProps {
    mark?: Gtk.TextMark;
    /** The #IdeBackForwardItem:uri property contains the location for the back/forward item. */
    uri?: Ide.Uri | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBackForwardItemConstructOnly = IdeObjectConstructOnly | 'uri';

export interface IdeBackForwardListProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBackForwardListConstructOnly = IdeObjectConstructOnly;

export interface IdeBufferProps extends GtkSourceBufferProps {
    context?: Ide.Context;
    file?: Ide.File;
    'highlight-diagnostics'?: boolean;
    'style-scheme-name'?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBufferConstructOnly = GtkSourceBufferConstructOnly | 'context';

export interface IdeBufferChangeMonitorProps extends IdeObjectProps {
    buffer?: Ide.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBufferChangeMonitorConstructOnly = IdeObjectConstructOnly | 'buffer';

export interface IdeBufferManagerProps extends IdeObjectProps, GListModelProps {
    'auto-save'?: boolean;
    'auto-save-timeout'?: number;
    'focus-buffer'?: Ide.Buffer;
    'minimum-word-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBufferManagerConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeBuildManagerProps extends IdeObjectProps, GActionGroupProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly | GInitableConstructOnly;

/** The #IdeBuildPipeline is responsible for managing the build process for Builder. */
export interface IdeBuildPipelineProps extends IdeObjectProps, GInitableProps {
    /** Gets the "busy" property. */
    busy?: boolean;
    /** The configuration to use for the build pipeline. */
    configuration?: Ide.Configuration;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildPipelineConstructOnly = IdeObjectConstructOnly | GInitableConstructOnly | 'configuration';

export interface IdeBuildStageProps extends IdeObjectProps {
    /** Most build systems will preserve stderr for the processes they call, such as gcc, clang, and others. */
    'check-stdout'?: boolean;
    /** The "completed" property is set to %TRUE after the pipeline has completed processing the stage. */
    completed?: boolean;
    /** If the build stage is disabled. */
    disabled?: boolean;
    /** The name of the build stage. */
    name?: string;
    /** The "stdout-path" property allows a build stage to redirect its log messages to a stdout file. */
    'stdout-path'?: string;
    /** If the build stage is transient. */
    transient?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildStageConstructOnly = IdeObjectConstructOnly;

export interface IdeBuildStageLauncherProps extends IdeBuildStageProps {
    'clean-launcher'?: Ide.SubprocessLauncher | null;
    'ignore-exit-status'?: boolean;
    launcher?: Ide.SubprocessLauncher;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildStageLauncherConstructOnly = IdeBuildStageConstructOnly;

export interface IdeBuildStageMkdirsProps extends IdeBuildStageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildStageMkdirsConstructOnly = IdeBuildStageConstructOnly;

export interface IdeBuildStageTransferProps extends IdeBuildStageProps {
    'disable-when-metered'?: boolean;
    transfer?: Ide.Transfer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildStageTransferConstructOnly = IdeBuildStageConstructOnly | 'transfer';

export interface IdeBuildSystemProps extends IdeObjectProps {
    context?: Ide.Context;
    'project-file'?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildSystemConstructOnly = IdeObjectConstructOnly | 'context' | 'project-file';

export interface IdeBuildconfigConfigurationProps extends IdeConfigurationProps {
    postbuild?: string[];
    prebuild?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildconfigConfigurationConstructOnly = IdeConfigurationConstructOnly;

export interface IdeBuildconfigConfigurationProviderProps extends GObjectProps, IdeConfigurationProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildconfigConfigurationProviderConstructOnly = GObjectConstructOnly | IdeConfigurationProviderConstructOnly;

export interface IdeCompletionResultsProps extends GObjectProps {
    query?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCompletionResultsConstructOnly = GObjectConstructOnly | 'query';

export interface IdeCompletionWordsProps extends GtkSourceCompletionWordsProps, GtkSourceCompletionProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCompletionWordsConstructOnly = GtkSourceCompletionWordsConstructOnly | GtkSourceCompletionProviderConstructOnly;

export interface IdeConfigurationProps extends IdeObjectProps {
    'app-id'?: string | null;
    'build-commands'?: string[];
    'config-opts'?: string;
    debug?: boolean;
    device?: Ide.Device | null;
    'device-id'?: string;
    dirty?: boolean;
    'display-name'?: string;
    id?: string;
    parallelism?: number;
    'post-install-commands'?: string[];
    prefix?: string;
    runtime?: Ide.Runtime | null;
    'runtime-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeConfigurationConstructOnly = IdeObjectConstructOnly | 'id';

export interface IdeConfigurationManagerProps extends IdeObjectProps, GAsyncInitableProps, GListModelProps {
    current?: Ide.Configuration;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeConfigurationManagerConstructOnly = IdeObjectConstructOnly | GAsyncInitableConstructOnly | GListModelConstructOnly;

export interface IdeConfigurationProviderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeConfigurationProviderConstructOnly = GObjectConstructOnly;

export interface IdeContextProps extends GObjectProps, GAsyncInitableProps {
    'project-file'?: Gio.File;
    'root-build-dir'?: string;
    'snippets-manager'?: Ide.SourceSnippetsManager;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeContextConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | 'project-file';

export interface IdeCursorProps extends GObjectProps {
    'ide-source-view'?: Ide.SourceView;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCursorConstructOnly = GObjectConstructOnly;

export interface IdeDeviceProps extends IdeObjectProps {
    'display-name'?: string | null;
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDeviceConstructOnly = IdeObjectConstructOnly;

export interface IdeDeviceManagerProps extends IdeObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDeviceManagerConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeDiagnosticsManagerProps extends IdeObjectProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDiagnosticsManagerConstructOnly = IdeObjectConstructOnly | GInitableConstructOnly;

export interface IdeDirectoryBuildSystemProps extends IdeObjectProps, GAsyncInitableProps, IdeBuildSystemProps {
    'project-file'?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDirectoryBuildSystemConstructOnly = IdeObjectConstructOnly | GAsyncInitableConstructOnly | IdeBuildSystemConstructOnly | 'project-file';

export interface IdeDirectoryVcsProps extends IdeObjectProps, GAsyncInitableProps, IdeVcsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDirectoryVcsConstructOnly = IdeObjectConstructOnly | GAsyncInitableConstructOnly | IdeVcsConstructOnly;

export interface IdeDoapProps extends GObjectProps {
    'bug-database'?: string;
    category?: string;
    description?: string;
    'download-page'?: string;
    homepage?: string;
    languages?: string;
    name?: string;
    shortdesc?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDoapConstructOnly = GObjectConstructOnly;

export interface IdeDoapPersonProps extends GObjectProps {
    email?: string;
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDoapPersonConstructOnly = GObjectConstructOnly;

export interface IdeEditorPerspectiveProps extends DzlDockOverlayProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps, IdePerspectiveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorPerspectiveConstructOnly = DzlDockOverlayConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly | IdePerspectiveConstructOnly;

export interface IdeEditorViewProps extends IdeLayoutViewProps, GtkBuildableProps, GtkOrientableProps {
    document?: Ide.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorViewConstructOnly = IdeLayoutViewConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'document';

export interface IdeEnvironmentProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnvironmentConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeEnvironmentVariableProps extends GObjectProps {
    key?: string;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnvironmentVariableConstructOnly = GObjectConstructOnly;

export interface IdeExtensionAdapterProps extends IdeObjectProps {
    engine?: Peas.Engine;
    'interface-type'?: GObject.GType;
    key?: string;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeExtensionAdapterConstructOnly = IdeObjectConstructOnly | 'engine' | 'interface-type';

export interface IdeExtensionSetAdapterProps extends IdeObjectProps {
    engine?: Peas.Engine;
    'interface-type'?: GObject.GType;
    key?: string;
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeExtensionSetAdapterConstructOnly = IdeObjectConstructOnly | 'engine' | 'interface-type';

export interface IdeFileProps extends IdeObjectProps {
    file?: Gio.File;
    path?: string;
    'temporary-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileConstructOnly = IdeObjectConstructOnly | 'file' | 'path' | 'temporary-id';

export interface IdeFileSettingsProps extends IdeObjectProps {
    encoding?: string;
    'encoding-set'?: boolean;
    file?: Ide.File;
    'indent-style'?: IdeIndentStyleNick | Ide.IndentStyle;
    'indent-style-set'?: boolean;
    'indent-width'?: number;
    'indent-width-set'?: boolean;
    'insert-trailing-newline'?: boolean;
    'insert-trailing-newline-set'?: boolean;
    'newline-type'?: GtkSourceNewlineTypeNick | GtkSource.NewlineType;
    'newline-type-set'?: boolean;
    'overwrite-braces'?: boolean;
    'overwrite-braces-set'?: boolean;
    'right-margin-position'?: number;
    'right-margin-position-set'?: boolean;
    settled?: boolean;
    'show-right-margin'?: boolean;
    'show-right-margin-set'?: boolean;
    'tab-width'?: number;
    'tab-width-set'?: boolean;
    'trim-trailing-whitespace'?: boolean;
    'trim-trailing-whitespace-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileSettingsConstructOnly = IdeObjectConstructOnly | 'file';

export interface IdeFormatterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFormatterConstructOnly = GObjectConstructOnly;

export interface IdeFormatterOptionsProps extends GObjectProps {
    'insert-spaces'?: boolean;
    'tab-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFormatterOptionsConstructOnly = GObjectConstructOnly;

export interface IdeHighlightEngineProps extends IdeObjectProps {
    buffer?: Ide.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeHighlightEngineConstructOnly = IdeObjectConstructOnly | 'buffer';

export interface IdeHighlighterProps extends IdeObjectProps {
    context?: Ide.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeHighlighterConstructOnly = IdeObjectConstructOnly | 'context';

export interface IdeLangservClientProps extends IdeObjectProps {
    'io-stream'?: Gio.IOStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLangservClientConstructOnly = IdeObjectConstructOnly | 'io-stream';

export interface IdeLangservFormatterProps extends IdeObjectProps, IdeFormatterProps {
    client?: Ide.LangservClient;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLangservFormatterConstructOnly = IdeObjectConstructOnly | IdeFormatterConstructOnly;

export interface IdeLangservHighlighterProps extends IdeObjectProps, IdeHighlighterProps {
    client?: Ide.LangservClient | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLangservHighlighterConstructOnly = IdeObjectConstructOnly | IdeHighlighterConstructOnly;

export interface IdeLangservSymbolNodeProps extends IdeSymbolNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLangservSymbolNodeConstructOnly = IdeSymbolNodeConstructOnly;

export interface IdeLangservSymbolTreeProps extends GObjectProps, IdeSymbolTreeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLangservSymbolTreeConstructOnly = GObjectConstructOnly | IdeSymbolTreeConstructOnly;

export interface IdeLayoutProps extends DzlDockBinProps, DzlDockProps, DzlDockItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutConstructOnly = DzlDockBinConstructOnly | DzlDockConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutGridProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutGridConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutPaneProps extends DzlDockBinEdgeProps, DzlDockItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutPaneConstructOnly = DzlDockBinEdgeConstructOnly | DzlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutStackProps extends GtkBinProps, GtkBuildableProps {
    'active-view'?: Ide.LayoutView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutStackConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface IdeLayoutViewProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLayoutViewConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeLocalDeviceProps extends IdeDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLocalDeviceConstructOnly = IdeDeviceConstructOnly;

export interface IdeObjectProps extends GObjectProps {
    context?: Ide.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeObjectConstructOnly = GObjectConstructOnly | 'context';

export interface IdeOmniBarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniBarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeOmniSearchDisplayProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    context?: Ide.SearchContext;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchDisplayConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeOmniSearchEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface IdeOmniSearchGroupProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    provider?: Ide.SearchProvider;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchGroupConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'provider';

export interface IdeOmniSearchRowProps extends GtkListBoxRowProps, GtkBuildableProps {
    'icon-name'?: string;
    result?: Ide.SearchResult;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniSearchRowConstructOnly = GtkListBoxRowConstructOnly | GtkBuildableConstructOnly;

export interface IdePerspectiveProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePerspectiveConstructOnly = GObjectConstructOnly;

export interface IdePkconTransferProps extends IdeTransferProps {
    packages?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePkconTransferConstructOnly = IdeTransferConstructOnly | 'packages';

export interface IdePreferencesPerspectiveProps extends DzlPreferencesViewProps, DzlPreferencesProps, GtkBuildableProps, IdePerspectiveProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePreferencesPerspectiveConstructOnly = DzlPreferencesViewConstructOnly | DzlPreferencesConstructOnly | GtkBuildableConstructOnly | IdePerspectiveConstructOnly;

export interface IdeProgressProps extends GObjectProps {
    fraction?: number;
    message?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProgressConstructOnly = GObjectConstructOnly;

export interface IdeProjectProps extends IdeObjectProps {
    root?: Ide.ProjectItem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectConstructOnly = IdeObjectConstructOnly | 'root';

export interface IdeProjectEditProps extends GObjectProps {
    range?: Ide.SourceRange | null;
    replacement?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectEditConstructOnly = GObjectConstructOnly;

export interface IdeProjectFileProps extends IdeProjectItemProps {
    file?: Gio.File;
    'file-info'?: Gio.FileInfo;
    path?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectFileConstructOnly = IdeProjectItemConstructOnly;

export interface IdeProjectFilesProps extends IdeProjectItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectFilesConstructOnly = IdeProjectItemConstructOnly;

/** This class contains information about a project that can be loaded. */
export interface IdeProjectInfoProps extends GObjectProps {
    'build-system-name'?: string;
    description?: string;
    directory?: Gio.File | null;
    doap?: Ide.Doap | null;
    file?: Gio.File | null;
    'is-recent'?: boolean;
    languages?: string[];
    'last-modified-at'?: GLib.DateTime | null;
    name?: string;
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectInfoConstructOnly = GObjectConstructOnly;

export interface IdeProjectItemProps extends IdeObjectProps {
    parent?: Ide.ProjectItem | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectItemConstructOnly = IdeObjectConstructOnly;

export interface IdeRecentProjectsProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRecentProjectsConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeRunButtonProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunButtonConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface IdeRunManagerProps extends IdeObjectProps, GActionGroupProps, GInitableProps {
    'build-target'?: Ide.BuildTarget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly | GInitableConstructOnly;

export interface IdeRunnerProps extends IdeObjectProps {
    argv?: string[];
    'clear-env'?: boolean;
    /** If the runner has "failed". */
    failed?: boolean;
    /** The "run-on-host" property indicates the program should be run on the host machine rather than inside the application sandbox. */
    'run-on-host'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunnerConstructOnly = IdeObjectConstructOnly;

export interface IdeRuntimeProps extends IdeObjectProps {
    'display-name'?: string;
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRuntimeConstructOnly = IdeObjectConstructOnly;

export interface IdeRuntimeManagerProps extends IdeObjectProps, GInitableProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRuntimeManagerConstructOnly = IdeObjectConstructOnly | GInitableConstructOnly | GListModelConstructOnly;

export interface IdeSearchContextProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchContextConstructOnly = IdeObjectConstructOnly;

export interface IdeSearchEngineProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchEngineConstructOnly = IdeObjectConstructOnly;

export interface IdeSearchResultProps extends IdeObjectProps {
    provider?: Ide.SearchProvider;
    score?: number;
    subtitle?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchResultConstructOnly = IdeObjectConstructOnly | 'score' | 'subtitle' | 'title';

/** In Builder, we need support for settings at the user level (their chosen defaults) as well as defaults for a project. */
export interface IdeSettingsProps extends IdeObjectProps {
    'ignore-project-settings'?: boolean;
    'relative-path'?: string;
    'schema-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSettingsConstructOnly = IdeObjectConstructOnly | 'ignore-project-settings' | 'relative-path' | 'schema-id';

export interface IdeSourceMapProps extends GtkSourceMapProps, GtkBuildableProps, GtkScrollableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceMapConstructOnly = GtkSourceMapConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface IdeSourceSnippetProps extends GObjectProps {
    description?: string;
    language?: string;
    'snippet-text'?: string;
    trigger?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceSnippetConstructOnly = GObjectConstructOnly;

export interface IdeSourceSnippetChunkProps extends GObjectProps {
    context?: Ide.SourceSnippetContext;
    spec?: string;
    'tab-stop'?: number;
    text?: string;
    'text-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceSnippetChunkConstructOnly = GObjectConstructOnly;

/** This class is currently used primary as a hashtable. */
export interface IdeSourceSnippetContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceSnippetContextConstructOnly = GObjectConstructOnly;

export interface IdeSourceSnippetsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceSnippetsConstructOnly = GObjectConstructOnly;

export interface IdeSourceSnippetsManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceSnippetsManagerConstructOnly = GObjectConstructOnly;

export interface IdeSourceViewProps extends GtkSourceViewProps, GtkBuildableProps, GtkScrollableProps {
    'back-forward-list'?: Ide.BackForwardList | null;
    count?: number;
    'enable-word-completion'?: boolean;
    'font-desc'?: Pango.FontDescription;
    'font-name'?: string;
    'indent-style'?: IdeIndentStyleNick | Ide.IndentStyle;
    'insert-matching-brace'?: boolean;
    overscroll?: number;
    'overwrite-braces'?: boolean;
    'rubberband-search'?: boolean;
    'scroll-offset'?: number;
    'search-direction'?: GtkDirectionTypeNick | Gtk.DirectionType;
    'show-grid-lines'?: boolean;
    'show-line-changes'?: boolean;
    /** If the diagnostics gutter should be visible. */
    'show-line-diagnostics'?: boolean;
    'show-search-bubbles'?: boolean;
    'show-search-shadow'?: boolean;
    'snippet-completion'?: boolean;
    'spell-checking'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceViewConstructOnly = GtkSourceViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

export interface IdeSourceViewModeProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceViewModeConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeSubprocessLauncherProps extends GObjectProps {
    'clean-env'?: boolean;
    cwd?: string;
    environ?: string[];
    flags?: number;
    'run-on-host'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSubprocessLauncherConstructOnly = GObjectConstructOnly;

export interface IdeSubprocessSupervisorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSubprocessSupervisorConstructOnly = GObjectConstructOnly;

export interface IdeSymbolNodeProps extends IdeObjectProps {
    flags?: number;
    kind?: IdeSymbolKindNick | Ide.SymbolKind;
    name?: string;
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSymbolNodeConstructOnly = IdeObjectConstructOnly;

export interface IdeSymbolTreeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSymbolTreeConstructOnly = GObjectConstructOnly;

export interface IdeTransferProps extends GObjectProps {
    'icon-name'?: string;
    progress?: number;
    status?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferConstructOnly = GObjectConstructOnly;

export interface IdeTransferButtonProps extends DzlProgressButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    transfer?: Ide.Transfer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferButtonConstructOnly = DzlProgressButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | 'transfer';

export interface IdeTransferManagerProps extends IdeObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferManagerConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeTransferRowProps extends GtkListBoxRowProps, GtkBuildableProps {
    transfer?: Ide.Transfer | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferRowConstructOnly = GtkListBoxRowConstructOnly | GtkBuildableConstructOnly;

export interface IdeTransfersButtonProps extends GtkMenuButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransfersButtonConstructOnly = GtkMenuButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface IdeTransfersProgressIconProps extends GtkDrawingAreaProps, GtkBuildableProps {
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransfersProgressIconConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface IdeUnsavedFilesProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeUnsavedFilesConstructOnly = IdeObjectConstructOnly;

export interface IdeVcsProps extends IdeObjectProps {
    context?: Ide.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeVcsConstructOnly = IdeObjectConstructOnly | 'context';

export interface IdeWorkbenchProps extends GtkApplicationWindowProps, GActionGroupProps, GActionMapProps, GtkBuildableProps {
    /** This property is used internally by Builder to avoid creating the greeter when opening a new workspace that is only for loading a project. */
    'disable-greeter'?: boolean;
    /** This property contains the #IdePerspective that is currently selected. */
    'visible-perspective'?: Ide.Perspective;
    /** This property is just like #IdeWorkbench:visible-perspective except that it contains the name of the perspective as a string. */
    'visible-perspective-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchConstructOnly = GtkApplicationWindowConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkBuildableConstructOnly | 'disable-greeter';

export interface IdeWorkbenchHeaderBarProps extends GtkHeaderBarProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchHeaderBarConstructOnly = GtkHeaderBarConstructOnly | GtkBuildableConstructOnly;

export interface IdeWorkbenchMessageProps extends GtkInfoBarProps, GtkBuildableProps, GtkOrientableProps {
    id?: string;
    subtitle?: string;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchMessageConstructOnly = GtkInfoBarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

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
    IdeEditorPerspective: {
        class: Ide.EditorPerspective;
        props: IdeEditorPerspectiveProps;
        signals: Ide.EditorPerspective.SignalSignatures;
        constructOnly: IdeEditorPerspectiveConstructOnly;
        slotCandidates: {};
    };
    IdeEditorView: {
        class: Ide.EditorView;
        props: IdeEditorViewProps;
        signals: Ide.EditorView.SignalSignatures;
        constructOnly: IdeEditorViewConstructOnly;
        slotCandidates: {};
    };
    IdeLayout: {
        class: Ide.Layout;
        props: IdeLayoutProps;
        signals: Ide.Layout.SignalSignatures;
        constructOnly: IdeLayoutConstructOnly;
        slotCandidates: {};
    };
    IdeLayoutGrid: {
        class: Ide.LayoutGrid;
        props: IdeLayoutGridProps;
        signals: Ide.LayoutGrid.SignalSignatures;
        constructOnly: IdeLayoutGridConstructOnly;
        slotCandidates: {
        'stack-after': 'add_stack_after';
        'stack-before': 'add_stack_before';
        };
    };
    IdeLayoutPane: {
        class: Ide.LayoutPane;
        props: IdeLayoutPaneProps;
        signals: Ide.LayoutPane.SignalSignatures;
        constructOnly: IdeLayoutPaneConstructOnly;
        slotCandidates: {};
    };
    IdeLayoutStack: {
        class: Ide.LayoutStack;
        props: IdeLayoutStackProps;
        signals: Ide.LayoutStack.SignalSignatures;
        constructOnly: IdeLayoutStackConstructOnly;
        slotCandidates: {
        'active-view': 'set_active_view';
        };
    };
    IdeLayoutView: {
        class: Ide.LayoutView;
        props: IdeLayoutViewProps;
        signals: Ide.LayoutView.SignalSignatures;
        constructOnly: IdeLayoutViewConstructOnly;
        slotCandidates: {};
    };
    IdeOmniBar: {
        class: Ide.OmniBar;
        props: IdeOmniBarProps;
        signals: Ide.OmniBar.SignalSignatures;
        constructOnly: IdeOmniBarConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchDisplay: {
        class: Ide.OmniSearchDisplay;
        props: IdeOmniSearchDisplayProps;
        signals: Ide.OmniSearchDisplay.SignalSignatures;
        constructOnly: IdeOmniSearchDisplayConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchEntry: {
        class: Ide.OmniSearchEntry;
        props: IdeOmniSearchEntryProps;
        signals: Ide.OmniSearchEntry.SignalSignatures;
        constructOnly: IdeOmniSearchEntryConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchGroup: {
        class: Ide.OmniSearchGroup;
        props: IdeOmniSearchGroupProps;
        signals: Ide.OmniSearchGroup.SignalSignatures;
        constructOnly: IdeOmniSearchGroupConstructOnly;
        slotCandidates: {};
    };
    IdeOmniSearchRow: {
        class: Ide.OmniSearchRow;
        props: IdeOmniSearchRowProps;
        signals: Ide.OmniSearchRow.SignalSignatures;
        constructOnly: IdeOmniSearchRowConstructOnly;
        slotCandidates: {};
    };
    IdePreferencesPerspective: {
        class: Ide.PreferencesPerspective;
        props: IdePreferencesPerspectiveProps;
        signals: Ide.PreferencesPerspective.SignalSignatures;
        constructOnly: IdePreferencesPerspectiveConstructOnly;
        slotCandidates: {};
    };
    IdeRunButton: {
        class: Ide.RunButton;
        props: IdeRunButtonProps;
        signals: Ide.RunButton.SignalSignatures;
        constructOnly: IdeRunButtonConstructOnly;
        slotCandidates: {};
    };
    IdeSourceMap: {
        class: Ide.SourceMap;
        props: IdeSourceMapProps;
        signals: Ide.SourceMap.SignalSignatures;
        constructOnly: IdeSourceMapConstructOnly;
        slotCandidates: {};
    };
    IdeSourceView: {
        class: Ide.SourceView;
        props: IdeSourceViewProps;
        signals: Ide.SourceView.SignalSignatures;
        constructOnly: IdeSourceViewConstructOnly;
        slotCandidates: {};
    };
    IdeSourceViewMode: {
        class: Ide.SourceViewMode;
        props: IdeSourceViewModeProps;
        signals: Ide.SourceViewMode.SignalSignatures;
        constructOnly: IdeSourceViewModeConstructOnly;
        slotCandidates: {};
    };
    IdeTransferButton: {
        class: Ide.TransferButton;
        props: IdeTransferButtonProps;
        signals: Ide.TransferButton.SignalSignatures;
        constructOnly: IdeTransferButtonConstructOnly;
        slotCandidates: {};
    };
    IdeTransferRow: {
        class: Ide.TransferRow;
        props: IdeTransferRowProps;
        signals: Ide.TransferRow.SignalSignatures;
        constructOnly: IdeTransferRowConstructOnly;
        slotCandidates: {};
    };
    IdeTransfersButton: {
        class: Ide.TransfersButton;
        props: IdeTransfersButtonProps;
        signals: Ide.TransfersButton.SignalSignatures;
        constructOnly: IdeTransfersButtonConstructOnly;
        slotCandidates: {};
    };
    IdeTransfersProgressIcon: {
        class: Ide.TransfersProgressIcon;
        props: IdeTransfersProgressIconProps;
        signals: Ide.TransfersProgressIcon.SignalSignatures;
        constructOnly: IdeTransfersProgressIconConstructOnly;
        slotCandidates: {};
    };
    IdeWorkbench: {
        class: Ide.Workbench;
        props: IdeWorkbenchProps;
        signals: Ide.Workbench.SignalSignatures;
        constructOnly: IdeWorkbenchConstructOnly;
        slotCandidates: {};
    };
    IdeWorkbenchHeaderBar: {
        class: Ide.WorkbenchHeaderBar;
        props: IdeWorkbenchHeaderBarProps;
        signals: Ide.WorkbenchHeaderBar.SignalSignatures;
        constructOnly: IdeWorkbenchHeaderBarConstructOnly;
        slotCandidates: {};
    };
    IdeWorkbenchMessage: {
        class: Ide.WorkbenchMessage;
        props: IdeWorkbenchMessageProps;
        signals: Ide.WorkbenchMessage.SignalSignatures;
        constructOnly: IdeWorkbenchMessageConstructOnly;
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
