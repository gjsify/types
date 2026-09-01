/**
 * The GIR-derived widget VOCABULARY for Ide-45.
 *
 * GENERATED — do not edit. Provenance: Ide-45 — library 45.0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
 *
 * 36 concrete widgets, 38 declarations, 21 enum nick unions, 9 slot candidates.
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

import type Adw from '@girs/adw-1';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Ide from './ide-45.js';
import type Pango from '@girs/pango-1.0';
import type Vte from '@girs/vte-3.91';
import type { AdwActionRowConstructOnly, AdwActionRowProps, AdwApplicationWindowConstructOnly, AdwApplicationWindowProps, AdwComboRowConstructOnly, AdwComboRowProps, AdwPreferencesRowConstructOnly, AdwPreferencesRowProps, AdwToolbarStyleNick, AdwWindowConstructOnly, AdwWindowProps } from '@girs/adw-1/vocabulary';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkAccessibleTextConstructOnly, GtkAccessibleTextProps, GtkActionableConstructOnly, GtkActionableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEditableConstructOnly, GtkEditableProps, GtkFileChooserActionNick, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPopoverConstructOnly, GtkPopoverProps, GtkRootConstructOnly, GtkRootProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-4.0/vocabulary';
import type { GtkSourceGutterRendererConstructOnly, GtkSourceGutterRendererProps, GtkSourceViewConstructOnly, GtkSourceViewProps } from '@girs/gtksource-5/vocabulary';
import type { PanelFrameConstructOnly, PanelFrameProps, PanelGridConstructOnly, PanelGridProps, PanelOmniBarConstructOnly, PanelOmniBarProps, PanelWidgetConstructOnly, PanelWidgetProps } from '@girs/panel-1/vocabulary';
import type { VteTerminalConstructOnly, VteTerminalProps } from '@girs/vte-3.91/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type IdeAnimationModeNick = 'linear' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'last';
export type IdeBufferStateNick = 'ready' | 'loading' | 'saving' | 'failed';
export type IdeBuildLogStreamNick = 'stdout' | 'stderr';
export type IdeDebuggerBreakModeNick = 'none' | 'breakpoint' | 'countpoint' | 'watchpoint';
export type IdeDebuggerBreakpointChangeNick = 'enabled';
export type IdeDebuggerDispositionNick = 'keep' | 'disable' | 'delete-next-hit' | 'delete-next-stop';
export type IdeDebuggerMovementNick = 'start' | 'continue' | 'step-in' | 'step-out' | 'finish';
export type IdeDebuggerStopReasonNick = 'breakpoint-hit' | 'catch' | 'stop-exited' | 'exited-normally' | 'exited-signaled' | 'function-finished' | 'location-reached' | 'signal-received' | 'unknown';
export type IdeDebuggerStreamNick = 'console' | 'log' | 'target';
export type IdeDeviceKindNick = 'computer' | 'phone' | 'tablet' | 'micro-controller';
export type IdeDiagnosticSeverityNick = 'ignored' | 'note' | 'unused' | 'deprecated' | 'warning' | 'error' | 'fatal';
export type IdeIndentStyleNick = 'spaces' | 'tabs';
export type IdeRunCommandKindNick = 'unknown' | 'application' | 'utility' | 'test' | 'benchmark' | 'user-defined';
export type IdeRunContextShellNick = 'default' | 'login' | 'interactive';
export type IdeScrubberRevealPolicyNick = 'never' | 'auto' | 'always';
export type IdeSearchCategoryNick = 'everything' | 'actions' | 'commands' | 'files' | 'symbols' | 'other';
export type IdeSymbolKindNick = 'none' | 'alias' | 'array' | 'boolean' | 'class' | 'constant' | 'constructor' | 'enum' | 'enum-value' | 'field' | 'file' | 'function' | 'header' | 'interface' | 'macro' | 'method' | 'module' | 'namespace' | 'number' | 'package' | 'property' | 'scalar' | 'string' | 'struct' | 'template' | 'union' | 'variable' | 'keyword' | 'ui-attributes' | 'ui-child' | 'ui-item' | 'ui-menu' | 'ui-menu-attribute' | 'ui-object' | 'ui-packing' | 'ui-property' | 'ui-section' | 'ui-signal' | 'ui-style' | 'ui-style-class' | 'ui-submenu' | 'ui-template' | 'xml-attribute' | 'xml-declaration' | 'xml-element' | 'xml-comment' | 'xml-cdata' | 'object' | 'event' | 'operator' | 'type-param' | 'last';
export type IdeTestStatusNick = 'none' | 'running' | 'success' | 'failed';
export type IdeTreeNodeVisitNick = 'break' | 'continue' | 'children';
export type IdeVcsConfigTypeNick = 'full-name' | 'email';
export type IdeVcsFileStatusNick = 'ignored' | 'unchanged' | 'untracked' | 'added' | 'renamed' | 'deleted' | 'changed';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface IdeEditorPageProps extends IdePageProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The #IdeBuffer that is displayed within the #IdeSourceView. */
    buffer?: Ide.Buffer;
    /** The "gutter" property contains an #IdeGutter or %NULL, which is a specialized renderer for the sourceview which can bring together a number of types of content which needs to be displayed, in a singl… */
    gutter?: Ide.Gutter | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorPageConstructOnly = IdePageConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'buffer';

export interface IdeEditorWorkspaceProps extends IdeWorkspaceProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorWorkspaceConstructOnly = IdeWorkspaceConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeEntryPopoverProps extends GtkPopoverProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
    /** @default NULL */
    'button-text'?: string;
    /** @default NULL */
    message?: string;
    /** @default FALSE */
    ready?: boolean;
    /** @default NULL */
    text?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEntryPopoverConstructOnly = GtkPopoverConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeEnvironmentEditorProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    environment?: Ide.Environment | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnvironmentEditorConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeFileChooserEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default GTK_FILE_CHOOSER_ACTION_OPEN */
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /** @default FALSE */
    'create-folders'?: boolean;
    /** @default FALSE */
    'do-overwrite-confirmation'?: boolean;
    file?: Gio.File | null;
    filter?: Gtk.FileFilter;
    /** @default FALSE */
    'local-only'?: boolean;
    /** @default -1 */
    'max-width-chars'?: number;
    /** @default FALSE */
    'show-hidden'?: boolean;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileChooserEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeFileSearchPreviewProps extends IdeSearchPreviewProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileSearchPreviewConstructOnly = IdeSearchPreviewConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'file';

export interface IdeFrameProps extends PanelFrameProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** @default FALSE */
    'use-tabbar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFrameConstructOnly = PanelFrameConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface IdeGreeterRowProps extends GtkListBoxRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The "project-info" property contains information about the project to be displayed. */
    'project-info'?: Ide.ProjectInfo | null;
    /** @default FALSE */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGreeterRowConstructOnly = GtkListBoxRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeGreeterWorkspaceProps extends IdeWorkspaceProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The "selection-mode" property indicates if the workspace allows selecting existing projects and removing them, including source files and cached data.
     * @default FALSE
     */
    'selection-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGreeterWorkspaceConstructOnly = IdeWorkspaceConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeGridProps extends PanelGridProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGridConstructOnly = PanelGridConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    'menu-id'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeHeaderBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeInstallButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeInstallButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeLineChangeGutterRendererProps extends GtkSourceGutterRendererProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLineChangeGutterRendererConstructOnly = GtkSourceGutterRendererConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeMarkedViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeMarkedViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeNotificationsButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeNotificationsButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeOmniBarProps extends PanelOmniBarProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    'menu-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniBarConstructOnly = PanelOmniBarConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdePageProps extends PanelWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default FALSE */
    'can-split'?: boolean;
    /** @default FALSE */
    failed?: boolean;
    /** @default NULL */
    'menu-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePageConstructOnly = PanelWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdePaneProps extends PanelWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePaneConstructOnly = PanelWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdePrimaryWorkspaceProps extends IdeWorkspaceProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePrimaryWorkspaceConstructOnly = IdeWorkspaceConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeProgressIconProps extends GtkDrawingAreaProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default 0.000000 */
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProgressIconConstructOnly = GtkDrawingAreaConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeRadioBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    'active-id'?: string;
    /** @default FALSE */
    'show-more'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRadioBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeRunButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeScrubberRevealerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    content?: Gtk.Widget | null;
    /** @default IDE_SCRUBBER_REVEAL_POLICY_NEVER */
    policy?: IdeScrubberRevealPolicyNick | Ide.ScrubberRevealPolicy;
    scrubber?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeScrubberRevealerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeSearchEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

export interface IdeSearchPopoverProps extends GtkPopoverProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
    'search-engine'?: Ide.SearchEngine;
    /** @default TRUE */
    'show-preview'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchPopoverConstructOnly = GtkPopoverConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly | 'search-engine';

export interface IdeSearchPreviewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    child?: Gtk.Widget | null;
    /** @default 0.000000 */
    progress?: number;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchPreviewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeShortcutAccelDialogProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** @default NULL */
    accelerator?: string;
    /** @default NULL */
    'shortcut-title'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeShortcutAccelDialogConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeSourceViewProps extends GtkSourceViewProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    'font-desc'?: Pango.FontDescription;
    /** @default 0 */
    'font-scale'?: number;
    /** @default FALSE */
    'insert-matching-brace'?: boolean;
    /** @default 1.200000 */
    'line-height'?: number;
    /** @default FALSE */
    'overwrite-braces'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSourceViewConstructOnly = GtkSourceViewConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

export interface IdeTerminalProps extends VteTerminalProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalConstructOnly = VteTerminalConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

export interface IdeTerminalPageProps extends IdePageProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default TRUE */
    'close-on-exit'?: boolean;
    launcher?: Ide.TerminalLauncher | null;
    /** @default TRUE */
    'manage-spawn'?: boolean;
    pty?: Vte.Pty;
    /** @default TRUE */
    'respawn-on-exit'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalPageConstructOnly = IdePageConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'manage-spawn' | 'pty';

export interface IdeTerminalPopoverProps extends GtkPopoverProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalPopoverConstructOnly = GtkPopoverConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeTerminalSearchProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default FALSE */
    'case-sensitive'?: boolean;
    /** @default FALSE */
    'use-regex'?: boolean;
    /** @default FALSE */
    'whole-words'?: boolean;
    /** @default FALSE */
    'wrap-around'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalSearchConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeTreeProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    kind?: string;
    'menu-model'?: Gio.MenuModel | null;
    root?: Ide.TreeNode | null;
    'selected-node'?: Ide.TreeNode | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTreeConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'kind';

export interface IdeTreeExpanderProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    'expanded-icon'?: Gio.Icon | null;
    /** @default NULL */
    'expanded-icon-name'?: string;
    icon?: Gio.Icon | null;
    /** @default NULL */
    'icon-name'?: string;
    'list-row'?: Gtk.TreeListRow | null;
    'menu-model'?: Gio.MenuModel | null;
    suffix?: Gtk.Widget | null;
    /** @default NULL */
    title?: string;
    /** @default FALSE */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTreeExpanderConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeTweaksComboRowProps extends AdwComboRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    binding?: Ide.TweaksBinding;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksComboRowConstructOnly = AdwComboRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'binding';

export interface IdeTweaksWindowProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** @default FALSE */
    folded?: boolean;
    tweaks?: Ide.Tweaks | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksWindowConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeWebkitPageProps extends IdePageProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The "enable-javascript" allows disabling javascript within the webview.
     * @since 44
     * @default TRUE
     */
    'enable-javascript'?: boolean;
    /** @default TRUE */
    'show-toolbar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWebkitPageConstructOnly = IdePageConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeWorkspaceProps extends AdwApplicationWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The "id" property is a unique identifier for the workspace within the project.
     * @default NULL
     */
    id?: string;
    /** @default ADW_TOOLBAR_RAISED */
    'toolbar-style'?: AdwToolbarStyleNick | Adw.ToolbarStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkspaceConstructOnly = AdwApplicationWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

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
    IdeEditorPage: {
        class: Ide.EditorPage;
        props: IdeEditorPageProps;
        signals: Ide.EditorPage.SignalSignatures;
        constructOnly: IdeEditorPageConstructOnly;
        slotCandidates: {
        'gutter': 'set_gutter';
        };
    };
    IdeEditorWorkspace: {
        class: Ide.EditorWorkspace;
        props: IdeEditorWorkspaceProps;
        signals: Ide.EditorWorkspace.SignalSignatures;
        constructOnly: IdeEditorWorkspaceConstructOnly;
        slotCandidates: {};
    };
    IdeEntryPopover: {
        class: Ide.EntryPopover;
        props: IdeEntryPopoverProps;
        signals: Ide.EntryPopover.SignalSignatures;
        constructOnly: IdeEntryPopoverConstructOnly;
        slotCandidates: {};
    };
    IdeEnvironmentEditor: {
        class: Ide.EnvironmentEditor;
        props: IdeEnvironmentEditorProps;
        signals: Ide.EnvironmentEditor.SignalSignatures;
        constructOnly: IdeEnvironmentEditorConstructOnly;
        slotCandidates: {};
    };
    IdeFileChooserEntry: {
        class: Ide.FileChooserEntry;
        props: IdeFileChooserEntryProps;
        signals: Ide.FileChooserEntry.SignalSignatures;
        constructOnly: IdeFileChooserEntryConstructOnly;
        slotCandidates: {};
    };
    IdeFileSearchPreview: {
        class: Ide.FileSearchPreview;
        props: IdeFileSearchPreviewProps;
        signals: Ide.FileSearchPreview.SignalSignatures;
        constructOnly: IdeFileSearchPreviewConstructOnly;
        slotCandidates: {};
    };
    IdeFrame: {
        class: Ide.Frame;
        props: IdeFrameProps;
        signals: Ide.Frame.SignalSignatures;
        constructOnly: IdeFrameConstructOnly;
        slotCandidates: {};
    };
    IdeGreeterRow: {
        class: Ide.GreeterRow;
        props: IdeGreeterRowProps;
        signals: Ide.GreeterRow.SignalSignatures;
        constructOnly: IdeGreeterRowConstructOnly;
        slotCandidates: {};
    };
    IdeGreeterWorkspace: {
        class: Ide.GreeterWorkspace;
        props: IdeGreeterWorkspaceProps;
        signals: Ide.GreeterWorkspace.SignalSignatures;
        constructOnly: IdeGreeterWorkspaceConstructOnly;
        slotCandidates: {
        'page': 'add_page';
        'section': 'add_section';
        };
    };
    IdeGrid: {
        class: Ide.Grid;
        props: IdeGridProps;
        signals: Ide.Grid.SignalSignatures;
        constructOnly: IdeGridConstructOnly;
        slotCandidates: {};
    };
    IdeHeaderBar: {
        class: Ide.HeaderBar;
        props: IdeHeaderBarProps;
        signals: Ide.HeaderBar.SignalSignatures;
        constructOnly: IdeHeaderBarConstructOnly;
        slotCandidates: {};
    };
    IdeInstallButton: {
        class: Ide.InstallButton;
        props: IdeInstallButtonProps;
        signals: Ide.InstallButton.SignalSignatures;
        constructOnly: IdeInstallButtonConstructOnly;
        slotCandidates: {};
    };
    IdeLineChangeGutterRenderer: {
        class: Ide.LineChangeGutterRenderer;
        props: IdeLineChangeGutterRendererProps;
        signals: Ide.LineChangeGutterRenderer.SignalSignatures;
        constructOnly: IdeLineChangeGutterRendererConstructOnly;
        slotCandidates: {};
    };
    IdeMarkedView: {
        class: Ide.MarkedView;
        props: IdeMarkedViewProps;
        signals: Ide.MarkedView.SignalSignatures;
        constructOnly: IdeMarkedViewConstructOnly;
        slotCandidates: {};
    };
    IdeNotificationsButton: {
        class: Ide.NotificationsButton;
        props: IdeNotificationsButtonProps;
        signals: Ide.NotificationsButton.SignalSignatures;
        constructOnly: IdeNotificationsButtonConstructOnly;
        slotCandidates: {};
    };
    IdeOmniBar: {
        class: Ide.OmniBar;
        props: IdeOmniBarProps;
        signals: Ide.OmniBar.SignalSignatures;
        constructOnly: IdeOmniBarConstructOnly;
        slotCandidates: {
        'placeholder': 'set_placeholder';
        };
    };
    IdePane: {
        class: Ide.Pane;
        props: IdePaneProps;
        signals: Ide.Pane.SignalSignatures;
        constructOnly: IdePaneConstructOnly;
        slotCandidates: {};
    };
    IdePrimaryWorkspace: {
        class: Ide.PrimaryWorkspace;
        props: IdePrimaryWorkspaceProps;
        signals: Ide.PrimaryWorkspace.SignalSignatures;
        constructOnly: IdePrimaryWorkspaceConstructOnly;
        slotCandidates: {};
    };
    IdeProgressIcon: {
        class: Ide.ProgressIcon;
        props: IdeProgressIconProps;
        signals: Ide.ProgressIcon.SignalSignatures;
        constructOnly: IdeProgressIconConstructOnly;
        slotCandidates: {};
    };
    IdeRadioBox: {
        class: Ide.RadioBox;
        props: IdeRadioBoxProps;
        signals: Ide.RadioBox.SignalSignatures;
        constructOnly: IdeRadioBoxConstructOnly;
        slotCandidates: {};
    };
    IdeRunButton: {
        class: Ide.RunButton;
        props: IdeRunButtonProps;
        signals: Ide.RunButton.SignalSignatures;
        constructOnly: IdeRunButtonConstructOnly;
        slotCandidates: {};
    };
    IdeScrubberRevealer: {
        class: Ide.ScrubberRevealer;
        props: IdeScrubberRevealerProps;
        signals: Ide.ScrubberRevealer.SignalSignatures;
        constructOnly: IdeScrubberRevealerConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        'scrubber': 'set_scrubber';
        };
    };
    IdeSearchEntry: {
        class: Ide.SearchEntry;
        props: IdeSearchEntryProps;
        signals: Ide.SearchEntry.SignalSignatures;
        constructOnly: IdeSearchEntryConstructOnly;
        slotCandidates: {};
    };
    IdeSearchPopover: {
        class: Ide.SearchPopover;
        props: IdeSearchPopoverProps;
        signals: Ide.SearchPopover.SignalSignatures;
        constructOnly: IdeSearchPopoverConstructOnly;
        slotCandidates: {};
    };
    IdeSearchPreview: {
        class: Ide.SearchPreview;
        props: IdeSearchPreviewProps;
        signals: Ide.SearchPreview.SignalSignatures;
        constructOnly: IdeSearchPreviewConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    IdeShortcutAccelDialog: {
        class: Ide.ShortcutAccelDialog;
        props: IdeShortcutAccelDialogProps;
        signals: Ide.ShortcutAccelDialog.SignalSignatures;
        constructOnly: IdeShortcutAccelDialogConstructOnly;
        slotCandidates: {};
    };
    IdeSourceView: {
        class: Ide.SourceView;
        props: IdeSourceViewProps;
        signals: Ide.SourceView.SignalSignatures;
        constructOnly: IdeSourceViewConstructOnly;
        slotCandidates: {};
    };
    IdeTerminal: {
        class: Ide.Terminal;
        props: IdeTerminalProps;
        signals: Ide.Terminal.SignalSignatures;
        constructOnly: IdeTerminalConstructOnly;
        slotCandidates: {};
    };
    IdeTerminalPage: {
        class: Ide.TerminalPage;
        props: IdeTerminalPageProps;
        signals: Ide.TerminalPage.SignalSignatures;
        constructOnly: IdeTerminalPageConstructOnly;
        slotCandidates: {};
    };
    IdeTerminalPopover: {
        class: Ide.TerminalPopover;
        props: IdeTerminalPopoverProps;
        signals: Ide.TerminalPopover.SignalSignatures;
        constructOnly: IdeTerminalPopoverConstructOnly;
        slotCandidates: {};
    };
    IdeTerminalSearch: {
        class: Ide.TerminalSearch;
        props: IdeTerminalSearchProps;
        signals: Ide.TerminalSearch.SignalSignatures;
        constructOnly: IdeTerminalSearchConstructOnly;
        slotCandidates: {
        'terminal': 'set_terminal';
        };
    };
    IdeTree: {
        class: Ide.Tree;
        props: IdeTreeProps;
        signals: Ide.Tree.SignalSignatures;
        constructOnly: IdeTreeConstructOnly;
        slotCandidates: {};
    };
    IdeTreeExpander: {
        class: Ide.TreeExpander;
        props: IdeTreeExpanderProps;
        signals: Ide.TreeExpander.SignalSignatures;
        constructOnly: IdeTreeExpanderConstructOnly;
        slotCandidates: {
        'suffix': 'set_suffix';
        };
    };
    IdeTweaksComboRow: {
        class: Ide.TweaksComboRow;
        props: IdeTweaksComboRowProps;
        signals: Ide.TweaksComboRow.SignalSignatures;
        constructOnly: IdeTweaksComboRowConstructOnly;
        slotCandidates: {};
    };
    IdeTweaksWindow: {
        class: Ide.TweaksWindow;
        props: IdeTweaksWindowProps;
        signals: Ide.TweaksWindow.SignalSignatures;
        constructOnly: IdeTweaksWindowConstructOnly;
        slotCandidates: {};
    };
    IdeWebkitPage: {
        class: Ide.WebkitPage;
        props: IdeWebkitPageProps;
        signals: Ide.WebkitPage.SignalSignatures;
        constructOnly: IdeWebkitPageConstructOnly;
        slotCandidates: {};
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
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
    readonly unsettableProps: readonly string[];
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

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

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
