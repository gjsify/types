/**
 * The GIR-derived widget VOCABULARY for Ide-49.
 *
 * GENERATED — do not edit. Provenance: Ide-49 — library 49.0.0 — dropped empty base(s): GtkSource.CompletionProposal — prop(s) no TypeScript value satisfies: Ide.TaskCache.key-copy-func Ide.TaskCache.key-destroy-func Ide.TaskCache.key-equal-func Ide.TaskCache.key-hash-func Ide.TaskCache.populate-callback Ide.TaskCache.populate-callback-data Ide.TaskCache.populate-callback-data-destroy Ide.TaskCache.value-copy-func Ide.TaskCache.value-destroy-func
 *
 * 180 instantiable GTypes (of which 35 concrete widgets), 195 declarations, 21 enum nick unions, 9 slot candidates.
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
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gdk from '@girs/gdk-4.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type GtkSource from '@girs/gtksource-5';
import type Ide from './ide-49.js';
import type Panel from '@girs/panel-1';
import type Pango from '@girs/pango-1.0';
import type Peas from '@girs/peas-2';
import type Vte from '@girs/vte-3.91';
import type { AdwActionRowConstructOnly, AdwActionRowProps, AdwApplicationConstructOnly, AdwApplicationProps, AdwApplicationWindowConstructOnly, AdwApplicationWindowProps, AdwComboRowConstructOnly, AdwComboRowProps, AdwDialogConstructOnly, AdwDialogProps, AdwPreferencesRowConstructOnly, AdwPreferencesRowProps, AdwToolbarStyleNick, AdwWindowConstructOnly, AdwWindowProps } from '@girs/adw-1/vocabulary';
import type { GActionConstructOnly, GActionGroupConstructOnly, GActionGroupProps, GActionMapConstructOnly, GActionMapProps, GActionProps, GApplicationConstructOnly, GApplicationProps, GAsyncInitableConstructOnly, GAsyncInitableProps, GAsyncResultConstructOnly, GAsyncResultProps, GInitableConstructOnly, GInitableProps, GListModelConstructOnly, GListModelProps, GMenuModelConstructOnly, GMenuModelProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkAccessibleTextConstructOnly, GtkAccessibleTextProps, GtkActionableConstructOnly, GtkActionableProps, GtkApplicationConstructOnly, GtkApplicationProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkEditableConstructOnly, GtkEditableProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPopoverConstructOnly, GtkPopoverProps, GtkRootConstructOnly, GtkRootProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkTextBufferConstructOnly, GtkTextBufferProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowGroupConstructOnly, GtkWindowGroupProps, GtkWindowProps } from '@girs/gtk-4.0/vocabulary';
import type { GtkSourceBufferConstructOnly, GtkSourceBufferProps, GtkSourceGutterRendererConstructOnly, GtkSourceGutterRendererProps, GtkSourceNewlineTypeNick, GtkSourceViewConstructOnly, GtkSourceViewProps } from '@girs/gtksource-5/vocabulary';
import type { PanelFrameConstructOnly, PanelFrameProps, PanelGridConstructOnly, PanelGridProps, PanelOmniBarConstructOnly, PanelOmniBarProps, PanelWidgetConstructOnly, PanelWidgetProps } from '@girs/panel-1/vocabulary';
import type { TmplTemplateLocatorConstructOnly, TmplTemplateLocatorProps } from '@girs/template-1.0/vocabulary';
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
export type IdeSearchCategoryNick = 'everything' | 'actions' | 'commands' | 'files' | 'symbols' | 'other' | 'documentation';
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

export interface IdeActionMuxerProps extends GObjectProps, GActionGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeActionMuxerConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly;

export interface IdeAnimationProps extends GInitiallyUnownedProps {
    /**
     * The "duration" property is the total number of milliseconds that the animation should run before being completed.
     * @default 250
     */
    duration?: number;
    'frame-clock'?: Gdk.FrameClock;
    /**
     * The "mode" property is the Alpha function that should be used to determine the offset within the animation based on the current offset in the animations duration.
     * @default IDE_ANIMATION_LINEAR
     */
    mode?: IdeAnimationModeNick | Ide.AnimationMode;
    /** The "target" property is the #GObject that should have its properties animated. */
    target?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeAnimationConstructOnly = GInitiallyUnownedConstructOnly | 'duration' | 'frame-clock' | 'mode' | 'target';

export interface IdeApplicationProps extends AdwApplicationProps, GActionGroupProps, GActionMapProps {
    /** @default NULL */
    'style-scheme'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeApplicationConstructOnly = AdwApplicationConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

export interface IdeBufferProps extends GtkSourceBufferProps {
    /** Sets the "buffer-manager" property, which is used by the buffer to clean-up state when the buffer is no longer in use. */
    'buffer-manager'?: Ide.BufferManager;
    /** The "change-monitor" property is an #IdeBufferChangeMonitor that will be used to track changes in the #IdeBuffer. */
    'change-monitor'?: Ide.BufferChangeMonitor | null;
    /**
     * Sets the encoding to use for the buffer based on the "charset" specified.
     * @default UTF-8
     */
    charset?: string;
    /** The "diagnostics" property contains an #IdeDiagnostics that represent the diagnostics found in the buffer. */
    diagnostics?: Ide.Diagnostics | null;
    /**
     * The "enable-addins" property determines whether addins will be aware of this buffer.
     * @default TRUE
     */
    'enable-addins'?: boolean;
    /** The "file" property is the underlying file represented by the buffer. */
    file?: Gio.File;
    /**
     * The "highlight-diagnostics" property indicates that diagnostics which are discovered should be styled.
     * @default TRUE
     */
    'highlight-diagnostics'?: boolean;
    /**
     * The "is-temporary" property denotes the #IdeBuffer:file property points to a temporary file.
     * @default FALSE
     */
    'is-temporary'?: boolean;
    /**
     * The "language-id" property is a convenience property to set the #GtkSourceBuffer:language property using a string name.
     * @default NULL
     */
    'language-id'?: string | null;
    /**
     * Sets the style of newline to append to each line.
     * @default GTK_SOURCE_NEWLINE_TYPE_LF
     */
    'newline-type'?: GtkSourceNewlineTypeNick | GtkSource.NewlineType;
    /**
     * The "style-scheme-name" is the name of the style scheme that is used.
     * @default NULL
     */
    'style-scheme-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBufferConstructOnly = GtkSourceBufferConstructOnly | 'buffer-manager' | 'enable-addins' | 'is-temporary';

export interface IdeBufferChangeMonitorProps extends IdeObjectProps {
    buffer?: Ide.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBufferChangeMonitorConstructOnly = IdeObjectConstructOnly | 'buffer';

export interface IdeBufferManagerProps extends IdeObjectProps, GListModelProps {
    /**
     * The "max-file-size" property is the largest file size in bytes that Builder will attempt to load.
     * @default 10485760
     */
    'max-file-size'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBufferManagerConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeBuildManagerProps extends IdeObjectProps, GActionGroupProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly | GInitableConstructOnly;

export interface IdeBuildSystemProps extends IdeObjectProps {
    'project-file'?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildSystemConstructOnly = IdeObjectConstructOnly | 'project-file';

export interface IdeBuildSystemDiscoveryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildSystemDiscoveryConstructOnly = GObjectConstructOnly;

export interface IdeBuildTargetProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeBuildTargetConstructOnly = IdeObjectConstructOnly;

export interface IdeCachedListModelProps extends GObjectProps, GListModelProps {
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCachedListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeCodeActionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCodeActionConstructOnly = GObjectConstructOnly;

export interface IdeCodeActionProviderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCodeActionProviderConstructOnly = GObjectConstructOnly;

export interface IdeCompileCommandsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeCompileCommandsConstructOnly = GObjectConstructOnly;

export interface IdeConfigManagerProps extends IdeObjectProps, GActionGroupProps, GAsyncInitableProps, GListModelProps {
    current?: Ide.Config;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeConfigManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly | GAsyncInitableConstructOnly | GListModelConstructOnly;

export interface IdeContextProps extends IdeObjectProps {
    /**
     * The "project-id" property is the identifier to use when creating files and folders for this project.
     * @default empty
     */
    'project-id'?: string;
    /**
     * The "title" property is a descriptive name for the project.
     * @default NULL
     */
    title?: string;
    /** The "workdir" property is the best guess at the working directory for the context. */
    workdir?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeContextConstructOnly = IdeObjectConstructOnly;

export interface IdeDebugManagerProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebugManagerConstructOnly = IdeObjectConstructOnly;

export interface IdeDebuggerBreakpointProps extends GObjectProps {
    /**
     * The address of the breakpoint, if available.
     * @default 0
     */
    address?: bigint | number;
    /**
     * The number of times the breakpoint has been reached.
     * @default 0
     */
    count?: bigint | number;
    /**
     * This property describes what should happen to the breakpoint upon the next stop of the debugger.
     * @default IDE_DEBUGGER_DISPOSITION_KEEP
     */
    disposition?: IdeDebuggerDispositionNick | Ide.DebuggerDisposition;
    /**
     * This property is %TRUE when the breakpoint is enabled.
     * @default TRUE
     */
    enabled?: boolean;
    /**
     * The file containing the breakpoint, if any.
     * @default NULL
     */
    file?: string | null;
    /**
     * The name of the function containing the breakpoint.
     * @default NULL
     */
    function?: string;
    /**
     * The identifier of the breakpoint.
     * @default NULL
     */
    id?: string;
    /**
     * The line number within #IdeDebuggerBreakpoint:file where the breakpoint exists.
     * @default 0
     */
    line?: number;
    /**
     * The mode of the breakpoint, such as a breakpoint, countpoint, or watchpoint.
     * @default IDE_DEBUGGER_BREAK_BREAKPOINT
     */
    mode?: IdeDebuggerBreakModeNick | Ide.DebuggerBreakMode;
    /**
     * The specification for the breakpoint, which may be used by watchpoints to determine of the breakpoint should be applied while executing.
     * @default NULL
     */
    spec?: string | null;
    /**
     * The thread the breakpoint is currently stopped in, or %NULL.
     * @default NULL
     */
    thread?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerBreakpointConstructOnly = GObjectConstructOnly | 'id';

export interface IdeDebuggerBreakpointsProps extends GObjectProps {
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerBreakpointsConstructOnly = GObjectConstructOnly | 'file';

export interface IdeDebuggerFrameProps extends GObjectProps {
    /** @default 0 */
    address?: bigint | number;
    args?: string[];
    /** @default 0 */
    depth?: number;
    /** @default NULL */
    file?: string;
    /** @default NULL */
    function?: string;
    /** @default NULL */
    library?: string;
    /** @default 0 */
    line?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerFrameConstructOnly = GObjectConstructOnly;

export interface IdeDebuggerInstructionProps extends GObjectProps {
    /** @default 0 */
    address?: bigint | number;
    /** @default NULL */
    display?: string;
    /** @default NULL */
    function?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerInstructionConstructOnly = GObjectConstructOnly | 'address';

export interface IdeDebuggerLibraryProps extends GObjectProps {
    /** @default NULL */
    'host-name'?: string;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    'target-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerLibraryConstructOnly = GObjectConstructOnly | 'id';

export interface IdeDebuggerRegisterProps extends GObjectProps {
    /** @default NULL */
    id?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerRegisterConstructOnly = GObjectConstructOnly | 'id';

export interface IdeDebuggerThreadProps extends GObjectProps {
    /** @default NULL */
    group?: string;
    /** @default NULL */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerThreadConstructOnly = GObjectConstructOnly | 'id';

export interface IdeDebuggerThreadGroupProps extends GObjectProps {
    /** @default NULL */
    'exit-code'?: string;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    pid?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerThreadGroupConstructOnly = GObjectConstructOnly | 'id';

export interface IdeDebuggerVariableProps extends GObjectProps {
    /** @default FALSE */
    'has-children'?: boolean;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    'type-name'?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDebuggerVariableConstructOnly = GObjectConstructOnly | 'name';

export interface IdeDeviceProps extends IdeObjectProps {
    /** @default NULL */
    'display-name'?: string | null;
    /**
     * The "icon-name" property is the icon to display with the device in various UI elements of Builder.
     * @default NULL
     */
    'icon-name'?: string | null;
    /** @default NULL */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDeviceConstructOnly = IdeObjectConstructOnly;

export interface IdeDeviceInfoProps extends GObjectProps {
    'host-triplet'?: Ide.Triplet | null;
    /** @default IDE_DEVICE_KIND_COMPUTER */
    kind?: IdeDeviceKindNick | Ide.DeviceKind;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDeviceInfoConstructOnly = GObjectConstructOnly;

export interface IdeDeviceManagerProps extends IdeObjectProps, GActionGroupProps, GAsyncInitableProps, GListModelProps {
    /** The "device" property indicates the currently selected device by the user. */
    device?: Ide.Device;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDeviceManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly | GAsyncInitableConstructOnly | GListModelConstructOnly;

export interface IdeDiagnosticProps extends IdeObjectProps {
    location?: Ide.Location | null;
    /** @default IDE_DIAGNOSTIC_IGNORED */
    severity?: IdeDiagnosticSeverityNick | Ide.DiagnosticSeverity;
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDiagnosticConstructOnly = IdeObjectConstructOnly | 'location' | 'severity' | 'text';

export interface IdeDiagnosticsProps extends IdeObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDiagnosticsConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeDiagnosticsManagerProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDiagnosticsManagerConstructOnly = IdeObjectConstructOnly;

export interface IdeDirectoryReaperProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDirectoryReaperConstructOnly = GObjectConstructOnly;

export interface IdeDirectoryVcsProps extends IdeObjectProps, IdeVcsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDirectoryVcsConstructOnly = IdeObjectConstructOnly | IdeVcsConstructOnly;

export interface IdeDoapProps extends GObjectProps {
    /** @default NULL */
    'bug-database'?: string;
    /** @default NULL */
    category?: string;
    /** @default NULL */
    description?: string;
    /** @default NULL */
    'download-page'?: string;
    /** @default NULL */
    homepage?: string;
    /** @default NULL */
    languages?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    shortdesc?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDoapConstructOnly = GObjectConstructOnly;

export interface IdeDoapPersonProps extends GObjectProps {
    /** @default NULL */
    email?: string;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeDoapPersonConstructOnly = GObjectConstructOnly;

export interface IdeEditorPageProps extends IdePageProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The #IdeBuffer that is displayed within the #IdeSourceView. */
    buffer?: Ide.Buffer;
    /** The "gutter" property contains an #IdeGutter or %NULL, which is a specialized renderer for the sourceview which can bring together a number of types of content which needs to be displayed, in a singl… */
    gutter?: Ide.Gutter | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorPageConstructOnly = IdePageConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'buffer';

export interface IdeEditorWorkspaceProps extends IdeWorkspaceProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEditorWorkspaceConstructOnly = IdeWorkspaceConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

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

export interface IdeEnumObjectProps extends GObjectProps {
    /** @default NULL */
    description?: string;
    /** @default NULL */
    nick?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnumObjectConstructOnly = GObjectConstructOnly | 'description' | 'nick' | 'title';

export interface IdeEnvironmentProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnvironmentConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeEnvironmentEditorProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    environment?: Ide.Environment | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnvironmentEditorConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeEnvironmentVariableProps extends GObjectProps {
    /** @default NULL */
    key?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeEnvironmentVariableConstructOnly = GObjectConstructOnly;

export interface IdeExtensionAdapterProps extends IdeObjectProps {
    engine?: Peas.Engine;
    'interface-type'?: GObject.GType;
    /** @default NULL */
    key?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeExtensionAdapterConstructOnly = IdeObjectConstructOnly | 'engine' | 'interface-type';

export interface IdeExtensionSetAdapterProps extends IdeObjectProps, GListModelProps {
    engine?: Peas.Engine;
    'interface-type'?: GObject.GType;
    /** @default NULL */
    key?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeExtensionSetAdapterConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly | 'engine' | 'interface-type';

export interface IdeFallbackBuildSystemProps extends IdeObjectProps, IdeBuildSystemProps {
    /** The "project-file" property is the primary file representing the projects build system. */
    'project-file'?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFallbackBuildSystemConstructOnly = IdeObjectConstructOnly | IdeBuildSystemConstructOnly | 'project-file';

export interface IdeFileSearchPreviewProps extends IdeSearchPreviewProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileSearchPreviewConstructOnly = IdeSearchPreviewConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'file';

export interface IdeFileSettingsProps extends IdeObjectProps {
    /** @default FALSE */
    'auto-indent'?: boolean;
    /** @default FALSE */
    'auto-indent-set'?: boolean;
    /** @default NULL */
    encoding?: string;
    /** @default FALSE */
    'encoding-set'?: boolean;
    file?: Gio.File;
    /** @default IDE_INDENT_STYLE_TABS */
    'indent-style'?: IdeIndentStyleNick | Ide.IndentStyle;
    /** @default FALSE */
    'indent-style-set'?: boolean;
    /** @default -1 */
    'indent-width'?: number;
    /** @default FALSE */
    'indent-width-set'?: boolean;
    /** @default FALSE */
    'insert-matching-brace'?: boolean;
    /** @default FALSE */
    'insert-matching-brace-set'?: boolean;
    /** @default FALSE */
    'insert-trailing-newline'?: boolean;
    /** @default FALSE */
    'insert-trailing-newline-set'?: boolean;
    /** @default NULL */
    language?: string | null;
    /** @default GTK_SOURCE_NEWLINE_TYPE_LF */
    'newline-type'?: GtkSourceNewlineTypeNick | GtkSource.NewlineType;
    /** @default FALSE */
    'newline-type-set'?: boolean;
    /** @default FALSE */
    'overwrite-braces'?: boolean;
    /** @default FALSE */
    'overwrite-braces-set'?: boolean;
    /** @default 80 */
    'right-margin-position'?: number;
    /** @default FALSE */
    'right-margin-position-set'?: boolean;
    /** @default FALSE */
    settled?: boolean;
    /** @default FALSE */
    'show-right-margin'?: boolean;
    /** @default FALSE */
    'show-right-margin-set'?: boolean;
    /** @default IDE_SPACES_STYLE_IGNORE */
    'spaces-style'?: number;
    /** @default FALSE */
    'spaces-style-set'?: boolean;
    /** @default 8 */
    'tab-width'?: number;
    /** @default FALSE */
    'tab-width-set'?: boolean;
    /** @default FALSE */
    'trim-trailing-whitespace'?: boolean;
    /** @default FALSE */
    'trim-trailing-whitespace-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileSettingsConstructOnly = IdeObjectConstructOnly | 'file' | 'language';

export interface IdeFileTransferProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFileTransferConstructOnly = GObjectConstructOnly;

export interface IdeFormatterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFormatterConstructOnly = GObjectConstructOnly;

export interface IdeFormatterOptionsProps extends GObjectProps {
    /** @default FALSE */
    'insert-spaces'?: boolean;
    /** @default 8 */
    'tab-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFormatterOptionsConstructOnly = GObjectConstructOnly;

export interface IdeFrameProps extends PanelFrameProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** @default FALSE */
    'use-tabbar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFrameConstructOnly = PanelFrameConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface IdeFuzzyIndexProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFuzzyIndexConstructOnly = GObjectConstructOnly;

export interface IdeFuzzyIndexBuilderProps extends GObjectProps {
    /** @default FALSE */
    'case-sensitive'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFuzzyIndexBuilderConstructOnly = GObjectConstructOnly;

export interface IdeFuzzyIndexCursorProps extends GObjectProps, GAsyncInitableProps, GListModelProps {
    /** @default FALSE */
    'case-sensitive'?: boolean;
    index?: Ide.FuzzyIndex;
    /** @default 0 */
    'max-matches'?: number;
    /** @default NULL */
    query?: string;
    tables?: GLib.VariantDict;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFuzzyIndexCursorConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GListModelConstructOnly | 'case-sensitive' | 'index' | 'max-matches' | 'query' | 'tables';

export interface IdeFuzzyIndexMatchProps extends GObjectProps {
    document?: GLib.Variant;
    /** @default NULL */
    key?: string;
    /** @default 0 */
    priority?: number;
    /** @default 0.000000 */
    score?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeFuzzyIndexMatchConstructOnly = GObjectConstructOnly | 'document' | 'key' | 'priority' | 'score';

export interface IdeGSettingsActionGroupProps extends GObjectProps, GActionGroupProps {
    settings?: Gio.Settings;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGSettingsActionGroupConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | 'settings';

export interface IdeGreeterRowProps extends GtkListBoxRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The "project-info" property contains information about the project to be displayed. */
    'project-info'?: Ide.ProjectInfo | null;
    /** @default FALSE */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGreeterRowConstructOnly = GtkListBoxRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeGreeterWorkspaceProps extends IdeWorkspaceProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The "selection-mode" property indicates if the workspace allows selecting existing projects and removing them, including source files and cached data.
     * @default FALSE
     */
    'selection-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGreeterWorkspaceConstructOnly = IdeWorkspaceConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeGridProps extends PanelGridProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeGridConstructOnly = PanelGridConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    'menu-id'?: string | null;
    /** @default TRUE */
    'show-end-title-buttons'?: boolean;
    /** @default TRUE */
    'show-menu'?: boolean;
    /** @default TRUE */
    'show-start-title-buttons'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeHeaderBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeHighlightEngineProps extends IdeObjectProps {
    buffer?: Ide.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeHighlightEngineConstructOnly = IdeObjectConstructOnly | 'buffer';

export interface IdeHighlighterProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeHighlighterConstructOnly = IdeObjectConstructOnly;

export interface IdeInstallButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeInstallButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeJoinedMenuProps extends GMenuModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeJoinedMenuConstructOnly = GMenuModelConstructOnly;

export interface IdeLineChangeGutterRendererProps extends GtkSourceGutterRendererProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLineChangeGutterRendererConstructOnly = GtkSourceGutterRendererConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeLocalDeviceProps extends IdeDeviceProps {
    triplet?: Ide.Triplet;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLocalDeviceConstructOnly = IdeDeviceConstructOnly | 'triplet';

export interface IdeLocationProps extends GObjectProps {
    file?: Gio.File | null;
    /** @default -1 */
    line?: number;
    /** @default -1 */
    'line-offset'?: number;
    /** @default -1 */
    offset?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLocationConstructOnly = GObjectConstructOnly | 'file' | 'line' | 'line-offset' | 'offset';

export interface IdeLogItemProps extends GObjectProps {
    'created-at'?: GLib.DateTime;
    /** @default NULL */
    domain?: string;
    /** @default NULL */
    message?: string;
    /** @default 0 */
    severity?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLogItemConstructOnly = GObjectConstructOnly | 'created-at' | 'domain' | 'message' | 'severity';

export interface IdeLspClientProps extends IdeObjectProps {
    'initialization-options'?: GLib.Variant | null;
    'io-stream'?: Gio.IOStream;
    /** @default NULL */
    name?: string;
    'root-uri'?: string;
    /** @default FALSE */
    'use-markdown-in-diagnostics'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspClientConstructOnly = IdeObjectConstructOnly | 'io-stream';

export interface IdeLspCodeActionProps extends GObjectProps, IdeCodeActionProps {
    client?: Ide.LspClient;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspCodeActionConstructOnly = GObjectConstructOnly | IdeCodeActionConstructOnly | 'title';

export interface IdeLspCodeActionProviderProps extends IdeObjectProps, IdeCodeActionProviderProps {
    client?: Ide.LspClient;
    diagnostics?: Ide.Diagnostics | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspCodeActionProviderConstructOnly = IdeObjectConstructOnly | IdeCodeActionProviderConstructOnly;

export interface IdeLspCompletionItemProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspCompletionItemConstructOnly = GObjectConstructOnly;

export interface IdeLspCompletionResultsProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspCompletionResultsConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeLspDiagnosticProps extends IdeDiagnosticProps {
    raw?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspDiagnosticConstructOnly = IdeDiagnosticConstructOnly | 'raw';

export interface IdeLspFormatterProps extends IdeObjectProps, IdeFormatterProps {
    client?: Ide.LspClient;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspFormatterConstructOnly = IdeObjectConstructOnly | IdeFormatterConstructOnly;

export interface IdeLspHighlighterProps extends IdeObjectProps, IdeHighlighterProps {
    client?: Ide.LspClient | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspHighlighterConstructOnly = IdeObjectConstructOnly | IdeHighlighterConstructOnly;

export interface IdeLspSymbolNodeProps extends IdeSymbolNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspSymbolNodeConstructOnly = IdeSymbolNodeConstructOnly;

export interface IdeLspSymbolTreeProps extends GObjectProps, IdeSymbolTreeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspSymbolTreeConstructOnly = GObjectConstructOnly | IdeSymbolTreeConstructOnly;

export interface IdeLspWorkspaceEditProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeLspWorkspaceEditConstructOnly = GObjectConstructOnly;

export interface IdeMarkedViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeMarkedViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The goal of #IdeMenuManager is to simplify the process of merging multiple GtkBuilder .ui files containing menus into a single representation of the application menus. */
export interface IdeMenuManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeMenuManagerConstructOnly = GObjectConstructOnly;

export interface IdeNotificationProps extends IdeObjectProps {
    /**
     * The "body" property is the main body of text for the notification.
     * @default NULL
     */
    body?: string;
    /**
     * The "has-progress" property denotes the notification will receive updates to the #IdeNotification:progress property.
     * @default FALSE
     */
    'has-progress'?: boolean;
    /** The "icon" property is an optional icon that may be shown next to the notification title and body under certain senarios. */
    icon?: Gio.Icon;
    /**
     * The "icon-name" property is a helper to make setting #IdeNotification:icon more convenient.
     * @default NULL
     */
    'icon-name'?: string;
    /**
     * The "id" property is an optional identifier that can be used to locate the notification later.
     * @default NULL
     */
    id?: string;
    /**
     * The "priority" property is used to sort the notification in order of importance when displaying to the user.
     * @default 0
     */
    priority?: number;
    /**
     * The "progress" property is a value between 0.0 and 1.0 describing the progress of the operation for which the notification represents.
     * @default 0.000000
     */
    progress?: number;
    /**
     * The "progress-is-imprecise" property indicates that the notification has progress, but it is imprecise.
     * @default FALSE
     */
    'progress-is-imprecise'?: boolean;
    /**
     * The "title" property is the main text to show the user.
     * @default NULL
     */
    title?: string;
    /**
     * If the notification is urgent.
     * @default FALSE
     */
    urgent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeNotificationConstructOnly = IdeObjectConstructOnly;

export interface IdeNotificationsProps extends IdeObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeNotificationsConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeNotificationsButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeNotificationsButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeObjectProps extends GObjectProps {
    /** The "cancellable" property is a #GCancellable that can be used by operations that will be cancelled when the #IdeObject::destroy signal is emitted on @self. */
    cancellable?: Gio.Cancellable;
    /** The parent #IdeObject, if any. */
    parent?: Ide.Object | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeObjectConstructOnly = GObjectConstructOnly | 'cancellable' | 'parent';

export interface IdeObjectBoxProps extends IdeObjectProps {
    /** The "object" property contains the object that is boxed and placed onto the object graph using this box. */
    object?: GObject.Object;
    /**
     * The "propagate-disposal" property denotes if the #IdeObject:object property contents should have g_object_run_dispose() called when the #IdeObjectBox is destroyed.
     * @default TRUE
     */
    'propagate-disposal'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeObjectBoxConstructOnly = IdeObjectConstructOnly | 'object' | 'propagate-disposal';

export interface IdeOmniBarProps extends PanelOmniBarProps, GActionGroupProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    'menu-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeOmniBarConstructOnly = PanelOmniBarConstructOnly | GActionGroupConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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

export interface IdePathCacheProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePathCacheConstructOnly = GObjectConstructOnly;

export interface IdePersistentMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePersistentMapConstructOnly = GObjectConstructOnly;

export interface IdePersistentMapBuilderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePersistentMapBuilderConstructOnly = GObjectConstructOnly;

/** The #IdePipeline is responsible for managing the build process for Builder. */
export interface IdePipelineProps extends IdeObjectProps, GInitableProps, GListModelProps {
    /**
     * Gets the "busy" property.
     * @default FALSE
     */
    busy?: boolean;
    config?: Ide.Config;
    /** The "device" property is the device we are compiling for. */
    device?: Ide.Device;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePipelineConstructOnly = IdeObjectConstructOnly | GInitableConstructOnly | GListModelConstructOnly | 'config' | 'device';

export interface IdePipelineStageProps extends IdeObjectProps {
    /**
     * This property is set to %TRUE when the build stage is actively running or cleaning.
     * @default FALSE
     */
    active?: boolean;
    /**
     * Most build systems will preserve stderr for the processes they call, such as gcc, clang, and others.
     * @default FALSE
     */
    'check-stdout'?: boolean;
    /**
     * The "completed" property is set to %TRUE after the pipeline has completed processing the stage.
     * @default FALSE
     */
    completed?: boolean;
    /**
     * If the build stage is disabled.
     * @default FALSE
     */
    disabled?: boolean;
    /**
     * The name of the build stage.
     * @default NULL
     */
    name?: string;
    /**
     * The "stdout-path" property allows a build stage to redirect its log messages to a stdout file.
     * @default NULL
     */
    'stdout-path'?: string;
    /**
     * If the build stage is transient.
     * @default FALSE
     */
    transient?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePipelineStageConstructOnly = IdeObjectConstructOnly;

export interface IdePipelineStageCommandProps extends IdePipelineStageProps {
    'build-command'?: Ide.RunCommand;
    'clean-command'?: Ide.RunCommand;
    /** @default FALSE */
    'ignore-exit-status'?: boolean;
    /** @default NULL */
    'stdout-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePipelineStageCommandConstructOnly = IdePipelineStageConstructOnly;

export interface IdePipelineStageLauncherProps extends IdePipelineStageProps {
    'clean-launcher'?: Ide.SubprocessLauncher | null;
    /** @default FALSE */
    'ignore-exit-status'?: boolean;
    launcher?: Ide.SubprocessLauncher;
    /** @default TRUE */
    'use-pty'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePipelineStageLauncherConstructOnly = IdePipelineStageConstructOnly;

export interface IdePipelineStageMkdirsProps extends IdePipelineStageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePipelineStageMkdirsConstructOnly = IdePipelineStageConstructOnly;

export interface IdePipelineStageTransferProps extends IdePipelineStageProps {
    /** @default TRUE */
    'disable-when-metered'?: boolean;
    transfer?: Ide.Transfer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePipelineStageTransferConstructOnly = IdePipelineStageConstructOnly | 'transfer';

export interface IdePkconTransferProps extends IdeTransferProps {
    packages?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePkconTransferConstructOnly = IdeTransferConstructOnly | 'packages';

export interface IdePluginProps extends GObjectProps {
    info?: Peas.PluginInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePluginConstructOnly = GObjectConstructOnly | 'info';

export interface IdePluginSectionProps extends GObjectProps {
    /** @default NULL */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePluginSectionConstructOnly = GObjectConstructOnly | 'id';

export interface IdePrimaryWorkspaceProps extends IdeWorkspaceProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePrimaryWorkspaceConstructOnly = IdeWorkspaceConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeProgressIconProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default 0.000000 */
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProgressIconConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeProjectProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectConstructOnly = IdeObjectConstructOnly;

export interface IdeProjectFileProps extends IdeObjectProps {
    directory?: Gio.File;
    info?: Gio.FileInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectFileConstructOnly = IdeObjectConstructOnly | 'directory' | 'info';

/** This class contains information about a project that can be loaded. */
export interface IdeProjectInfoProps extends GObjectProps {
    /** @default NULL */
    'build-system-hint'?: string;
    /** @default NULL */
    'build-system-name'?: string;
    /** @default NULL */
    description?: string;
    directory?: Gio.File | null;
    doap?: Ide.Doap | null;
    file?: Gio.File | null;
    icon?: Gio.Icon | null;
    /** @default NULL */
    'icon-name'?: string;
    /** @default NULL */
    id?: string;
    /** @default FALSE */
    'is-recent'?: boolean;
    languages?: string[];
    'last-modified-at'?: GLib.DateTime | null;
    /** @default NULL */
    name?: string;
    /** @default 0 */
    priority?: number;
    /** @default NULL */
    'vcs-uri'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeProjectInfoConstructOnly = GObjectConstructOnly;

export interface IdePropertyActionGroupProps extends GObjectProps, GActionGroupProps {
    item?: GObject.Object;
    'item-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdePropertyActionGroupConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | 'item-type';

export interface IdeRadioBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** @default NULL */
    'active-id'?: string;
    /** @default FALSE */
    'show-more'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRadioBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeRangeProps extends GObjectProps {
    begin?: Ide.Location;
    end?: Ide.Location;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRangeConstructOnly = GObjectConstructOnly | 'begin' | 'end';

export interface IdeRecentProjectsProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRecentProjectsConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeRecursiveFileMonitorProps extends GObjectProps {
    root?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRecursiveFileMonitorConstructOnly = GObjectConstructOnly | 'root';

export interface IdeRunButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeRunCommandProps extends GObjectProps {
    argv?: string[];
    /**
     * If the command is suitable as the default run command for the project.
     * @default FALSE
     */
    'can-default'?: boolean;
    /** @default NULL */
    cwd?: string;
    /** @default NULL */
    'display-name'?: string;
    environ?: string[];
    /** @default NULL */
    id?: string;
    /** @default IDE_RUN_COMMAND_KIND_UNKNOWN */
    kind?: IdeRunCommandKindNick | Ide.RunCommandKind;
    /** Contains the programming languages used. */
    languages?: string[];
    /** @default 0 */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunCommandConstructOnly = GObjectConstructOnly;

export interface IdeRunCommandsProps extends IdeObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunCommandsConstructOnly = IdeObjectConstructOnly | GListModelConstructOnly;

export interface IdeRunContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunContextConstructOnly = GObjectConstructOnly;

export interface IdeRunManagerProps extends IdeObjectProps, GActionGroupProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRunManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly | GInitableConstructOnly;

export interface IdeRuntimeProps extends IdeObjectProps {
    /** @default NULL */
    category?: string;
    /** @default NULL */
    'display-name'?: string;
    /** @default NULL */
    'icon-name'?: string;
    /** @default NULL */
    id?: string;
    /** @default NULL */
    name?: string;
    /** @default NULL */
    'short-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRuntimeConstructOnly = IdeObjectConstructOnly;

export interface IdeRuntimeManagerProps extends IdeObjectProps, GInitableProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeRuntimeManagerConstructOnly = IdeObjectConstructOnly | GInitableConstructOnly | GListModelConstructOnly;

export interface IdeScrubberRevealerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    content?: Gtk.Widget | null;
    /** @default IDE_SCRUBBER_REVEAL_POLICY_NEVER */
    policy?: IdeScrubberRevealPolicyNick | Ide.ScrubberRevealPolicy;
    scrubber?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeScrubberRevealerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface IdeSdkManagerProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSdkManagerConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeSearchEngineProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchEngineConstructOnly = IdeObjectConstructOnly;

export interface IdeSearchEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

export interface IdeSearchPopoverProps extends AdwDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    'search-engine'?: Ide.SearchEngine;
    /** @default TRUE */
    'show-preview'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchPopoverConstructOnly = AdwDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly | 'search-engine';

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

export interface IdeSearchResultProps extends GObjectProps {
    /** @default NULL */
    accelerator?: string;
    gicon?: Gio.Icon | null;
    paintable?: Gdk.Paintable | null;
    /** @default 0 */
    priority?: number;
    /** @default 0.000000 */
    score?: number;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default FALSE */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchResultConstructOnly = GObjectConstructOnly;

export interface IdeSearchResultsProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSearchResultsConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeSessionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSessionConstructOnly = GObjectConstructOnly;

export interface IdeSessionItemProps extends GObjectProps {
    /** @default NULL */
    id?: string | null;
    /** @default NULL */
    'module-name'?: string | null;
    position?: Panel.Position | null;
    /** @default NULL */
    'type-hint'?: string | null;
    /** @default NULL */
    workspace?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSessionItemConstructOnly = GObjectConstructOnly;

export interface IdeSettingsProps extends GObjectProps, GActionGroupProps {
    /** @default NULL */
    path?: string;
    /** @default NULL */
    'path-suffix'?: string;
    /** @default NULL */
    'project-id'?: string;
    /** @default NULL */
    'schema-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSettingsConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly | 'path' | 'path-suffix' | 'project-id' | 'schema-id';

export interface IdeSettingsFlagActionProps extends GObjectProps, GActionProps {
    /** @default NULL */
    'flag-nick'?: string;
    /** @default NULL */
    path?: string;
    /** @default NULL */
    'schema-id'?: string;
    /** @default NULL */
    'schema-key'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSettingsFlagActionConstructOnly = GObjectConstructOnly | GActionConstructOnly | 'flag-nick' | 'path' | 'schema-id';

export interface IdeShortcutAccelDialogProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** @default NULL */
    accelerator?: string;
    /** @default NULL */
    'shortcut-title'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeShortcutAccelDialogConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeSimpleBuildSystemDiscoveryProps extends IdeObjectProps, IdeBuildSystemDiscoveryProps {
    /**
     * The "glob" property is a glob to match for files within the project directory.
     * @default NULL
     */
    glob?: string;
    /**
     * The "hint" property is used from ide_build_system_discovery_discover() if the build file was discovered.
     * @default NULL
     */
    hint?: string;
    /**
     * The "priority" property is the priority of any match.
     * @default 0
     */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSimpleBuildSystemDiscoveryConstructOnly = IdeObjectConstructOnly | IdeBuildSystemDiscoveryConstructOnly;

export interface IdeSimpleBuildTargetProps extends IdeObjectProps, IdeBuildTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSimpleBuildTargetConstructOnly = IdeObjectConstructOnly | IdeBuildTargetConstructOnly;

export interface IdeSimpleToolchainProps extends IdeToolchainProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSimpleToolchainConstructOnly = IdeToolchainConstructOnly;

export interface IdeSourceViewProps extends GtkSourceViewProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
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
export type IdeSourceViewConstructOnly = GtkSourceViewConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

export interface IdeSubprocessLauncherProps extends GObjectProps {
    /** @default FALSE */
    'clean-env'?: boolean;
    /** @default NULL */
    cwd?: string;
    environ?: string[];
    /** @default G_SUBPROCESS_FLAGS_NONE */
    flags?: number;
    /** @default FALSE */
    'run-on-host'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSubprocessLauncherConstructOnly = GObjectConstructOnly;

export interface IdeSubprocessSupervisorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSubprocessSupervisorConstructOnly = GObjectConstructOnly;

export interface IdeSymbolProps extends GObjectProps {
    /** @default IDE_SYMBOL_FLAGS_NONE */
    flags?: number;
    'header-location'?: Ide.Location | null;
    /** @default IDE_SYMBOL_KIND_NONE */
    kind?: IdeSymbolKindNick | Ide.SymbolKind;
    location?: Ide.Location | null;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSymbolConstructOnly = GObjectConstructOnly | 'flags' | 'header-location' | 'kind' | 'location' | 'name';

export interface IdeSymbolNodeProps extends GObjectProps {
    /** @default NULL */
    'display-name'?: string;
    /** @default IDE_SYMBOL_FLAGS_NONE */
    flags?: number;
    /** @default IDE_SYMBOL_KIND_NONE */
    kind?: IdeSymbolKindNick | Ide.SymbolKind;
    /** @default NULL */
    name?: string;
    /** @default FALSE */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSymbolNodeConstructOnly = GObjectConstructOnly;

export interface IdeSymbolTreeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeSymbolTreeConstructOnly = GObjectConstructOnly;

export interface IdeTaskProps extends GObjectProps, GAsyncResultProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTaskConstructOnly = GObjectConstructOnly | GAsyncResultConstructOnly;

export interface IdeTaskCacheProps extends GObjectProps {
    'key-copy-func'?: never;
    'key-destroy-func'?: never;
    'key-equal-func'?: never;
    'key-hash-func'?: never;
    'populate-callback'?: never;
    'populate-callback-data'?: never;
    'populate-callback-data-destroy'?: never;
    /**
     * This is the number of milliseconds before an item should be evicted from the cache.
     * @default 30000
     */
    'time-to-live'?: bigint | number;
    'value-copy-func'?: never;
    'value-destroy-func'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTaskCacheConstructOnly = GObjectConstructOnly | 'key-copy-func' | 'key-destroy-func' | 'key-equal-func' | 'key-hash-func' | 'populate-callback' | 'populate-callback-data' | 'populate-callback-data-destroy' | 'time-to-live' | 'value-copy-func' | 'value-destroy-func';

export interface IdeTemplateInputProps extends GObjectProps {
    'app-id'?: string;
    /** @default NULL */
    author?: string;
    directory?: Gio.File;
    /** @default C */
    language?: string;
    /** @default GPL-3.0-or-later */
    'license-name'?: string;
    name?: string;
    /** @default 0.1.0 */
    'project-version'?: string;
    /** @default NULL */
    template?: string;
    /** @default TRUE */
    'use-version-control'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTemplateInputConstructOnly = GObjectConstructOnly;

export interface IdeTemplateLocatorProps extends TmplTemplateLocatorProps {
    /** @default NULL */
    'license-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTemplateLocatorConstructOnly = TmplTemplateLocatorConstructOnly;

export interface IdeTerminalProps extends VteTerminalProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    palette?: Ide.TerminalPalette;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalConstructOnly = VteTerminalConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

export interface IdeTerminalLauncherProps extends GObjectProps {
    context?: Ide.Context;
    'run-command'?: Ide.RunCommand;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalLauncherConstructOnly = GObjectConstructOnly | 'context';

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

export interface IdeTerminalPaletteProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTerminalPaletteConstructOnly = GObjectConstructOnly;

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

export interface IdeTestProps extends GObjectProps {
    'run-command'?: Ide.RunCommand;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTestConstructOnly = GObjectConstructOnly | 'run-command';

export interface IdeTestManagerProps extends IdeObjectProps, GActionGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTestManagerConstructOnly = IdeObjectConstructOnly | GActionGroupConstructOnly;

export interface IdeTextEditProps extends IdeObjectProps {
    range?: Ide.Range | null;
    /** @default NULL */
    text?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTextEditConstructOnly = IdeObjectConstructOnly;

export interface IdeToolchainProps extends IdeObjectProps {
    /** @default NULL */
    'display-name'?: string;
    'host-triplet'?: Ide.Triplet;
    /** @default NULL */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeToolchainConstructOnly = IdeObjectConstructOnly;

export interface IdeToolchainManagerProps extends IdeObjectProps, GAsyncInitableProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeToolchainManagerConstructOnly = IdeObjectConstructOnly | GAsyncInitableConstructOnly | GListModelConstructOnly;

export interface IdeTransferProps extends IdeObjectProps {
    /** @default folder-download-symbolic */
    'icon-name'?: string;
    /** @default 0.000000 */
    progress?: number;
    /** @default NULL */
    status?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferConstructOnly = IdeObjectConstructOnly;

export interface IdeTransferManagerProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTransferManagerConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

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
    /** @default FALSE */
    ignored?: boolean;
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

export interface IdeTreeNodeProps extends GObjectProps, GListModelProps {
    /** @default FALSE */
    'children-possible'?: boolean;
    /** @default FALSE */
    'destroy-item'?: boolean;
    'expanded-icon'?: Gio.Icon | null;
    /** @default NULL */
    'expanded-icon-name'?: string;
    /** @default IDE_TREE_NODE_FLAGS_NONE */
    flags?: number;
    /** @default FALSE */
    'has-error'?: boolean;
    icon?: Gio.Icon | null;
    /** @default NULL */
    'icon-name'?: string;
    /** @default FALSE */
    'is-header'?: boolean;
    item?: GObject.Object;
    parent?: GObject.Object | null;
    /** @default FALSE */
    'reset-on-collapse'?: boolean;
    /** @default NULL */
    title?: string;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default FALSE */
    'vcs-ignored'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTreeNodeConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeTruncateModelProps extends GObjectProps, GListModelProps {
    /** The "child-model" property is the model to be trunicated. */
    'child-model'?: Gio.ListModel;
    /** @default FALSE */
    expanded?: boolean;
    /** @default 4 */
    'max-items'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTruncateModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | 'child-model';

export interface IdeTweaksProps extends IdeTweaksItemProps, GtkBuildableProps {
    context?: Ide.Context | null;
    /** @default NULL */
    'project-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly | 'context';

export interface IdeTweaksBindingProps extends IdeTweaksItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksBindingConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksCaptionProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksCaptionConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksChoiceProps extends IdeTweaksItemProps, GtkBuildableProps {
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
    value?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksChoiceConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksComboProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksComboConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksComboRowProps extends AdwComboRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    binding?: Ide.TweaksBinding;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksComboRowConstructOnly = AdwComboRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'binding';

export interface IdeTweaksDirectoryProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default TRUE */
    'is-directory'?: boolean;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksDirectoryConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksEntryProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksEntryConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksFactoryProps extends IdeTweaksItemProps, GtkBuildableProps {
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksFactoryConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksFontProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    'enabled-binding'?: Ide.TweaksBinding;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksFontConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksGroupProps extends IdeTweaksItemProps, GtkBuildableProps {
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksGroupConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksInfoProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    title?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksInfoConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksItemProps extends GObjectProps, GtkBuildableProps {
    /** @default NULL */
    'hidden-when'?: string;
    keywords?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksItemConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksPageProps extends IdeTweaksItemProps, GtkBuildableProps {
    /** @default NULL */
    'icon-name'?: string;
    /** @default TRUE */
    'show-icon'?: boolean;
    /** @default FALSE */
    'show-search'?: boolean;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksPageConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksPasswordProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksPasswordConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksPropertyProps extends IdeTweaksBindingProps, GtkBuildableProps {
    /** @default NULL */
    name?: string;
    object?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksPropertyConstructOnly = IdeTweaksBindingConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksRadioProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
    value?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksRadioConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksSectionProps extends IdeTweaksItemProps, GtkBuildableProps {
    /** @default FALSE */
    'show-header'?: boolean;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksSectionConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksSettingProps extends IdeTweaksBindingProps, GtkBuildableProps {
    /** @default NULL */
    'path-suffix'?: string;
    /** @default NULL */
    'schema-id'?: string;
    /** @default NULL */
    'schema-key'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksSettingConstructOnly = IdeTweaksBindingConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksSpinProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default 0 */
    digits?: number;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksSpinConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksSwitchProps extends IdeTweaksWidgetProps, GtkBuildableProps {
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksSwitchConstructOnly = IdeTweaksWidgetConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksWidgetProps extends IdeTweaksItemProps, GtkBuildableProps {
    binding?: Ide.TweaksBinding | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksWidgetConstructOnly = IdeTweaksItemConstructOnly | GtkBuildableConstructOnly;

export interface IdeTweaksWindowProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** @default FALSE */
    folded?: boolean;
    tweaks?: Ide.Tweaks | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeTweaksWindowConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

export interface IdeUniqueListModelProps extends GObjectProps, GListModelProps {
    /** @default FALSE */
    incremental?: boolean;
    model?: Gio.ListModel | null;
    sorter?: Gtk.Sorter | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeUniqueListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface IdeUnixFDMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeUnixFDMapConstructOnly = GObjectConstructOnly;

export interface IdeUnsavedFilesProps extends IdeObjectProps {
    /** @default NULL */
    'project-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeUnsavedFilesConstructOnly = IdeObjectConstructOnly | 'project-id';

export interface IdeVcsProps extends IdeObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeVcsConstructOnly = IdeObjectConstructOnly;

export interface IdeVcsCloneRequestProps extends IdeObjectProps {
    /** @default NULL */
    'author-email'?: string;
    /** @default NULL */
    'author-name'?: string;
    /** @default NULL */
    'branch-name'?: string;
    directory?: Gio.File;
    /** @default NULL */
    'module-name'?: string;
    /** @default NULL */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeVcsCloneRequestConstructOnly = IdeObjectConstructOnly;

export interface IdeVcsFileInfoProps extends GObjectProps {
    file?: Gio.File;
    /** @default IDE_VCS_FILE_STATUS_UNCHANGED */
    status?: IdeVcsFileStatusNick | Ide.VcsFileStatus;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeVcsFileInfoConstructOnly = GObjectConstructOnly | 'file';

export interface IdeVcsMonitorProps extends IdeObjectProps {
    /** The "root" property is the root of the file-system to begin monitoring for changes. */
    root?: Gio.File;
    /** The "vcs" property is the version control system to be queried for additional status information when a file has been discovered to have been changed. */
    vcs?: Ide.Vcs;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeVcsMonitorConstructOnly = IdeObjectConstructOnly;

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

export interface IdeWorkbenchProps extends GtkWindowGroupProps {
    /** The "context" property is the #IdeContext for the project. */
    context?: Ide.Context;
    /** The "vcs" property contains an #IdeVcs that represents the version control system that is currently loaded for the project. */
    vcs?: Ide.Vcs | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkbenchConstructOnly = GtkWindowGroupConstructOnly | 'context';

export interface IdeWorkspaceProps extends AdwApplicationWindowProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The "id" property is a unique identifier for the workspace within the project.
     * @default NULL
     */
    id?: string;
    /** @default ADW_TOOLBAR_RAISED */
    'toolbar-style'?: AdwToolbarStyleNick | Adw.ToolbarStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type IdeWorkspaceConstructOnly = AdwApplicationWindowConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

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
