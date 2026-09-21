/**
 * The GIR-derived widget VOCABULARY for Foundry-1.
 *
 * GENERATED — do not edit. Provenance: Foundry-1 — dropped empty base(s): Json.Serializable
 *
 * 175 instantiable GTypes (of which 0 concrete widgets), 213 declarations, 28 enum nick unions, 0 slot candidates.
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

import type Dex from '@girs/dex-1';
import type Foundry from './foundry-1.js';
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type Json from '@girs/json-1.0';
import type Peas from '@girs/peas-2';
import type { GActionGroupConstructOnly, GActionGroupProps, GFileMonitorEventNick, GFileTypeNick, GListModelConstructOnly, GListModelProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type FoundryAcpChangedFileKindNick = 'unknown' | 'created' | 'modified' | 'deleted' | 'patched';
export type FoundryAcpConnectionStateNick = 'new' | 'starting' | 'initializing' | 'auth-required' | 'ready' | 'closing' | 'closed' | 'failed';
export type FoundryAcpEventKindNick = 'unknown' | 'message-chunk' | 'message' | 'step' | 'tool-call' | 'tool-update' | 'tool-result' | 'permission-request' | 'permission-response' | 'terminal-created' | 'terminal-output' | 'terminal-exited' | 'terminal-released' | 'file-read' | 'file-write' | 'file-patch' | 'file-created' | 'file-deleted' | 'mode-changed' | 'config-changed' | 'error';
export type FoundryAcpEventStateNick = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
export type FoundryAcpSessionStateNick = 'new' | 'loading' | 'idle' | 'running' | 'cancelling' | 'closed';
export type FoundryAcpSessionUpdateKindNick = 'unknown' | 'message-chunk' | 'message' | 'step' | 'tool-call' | 'tool-update' | 'tool-result' | 'terminal-created' | 'terminal-output' | 'terminal-exited' | 'file-read' | 'file-write' | 'file-patch' | 'file-created' | 'file-deleted' | 'progress' | 'error';
export type FoundryAcpStopReasonNick = 'end-turn' | 'max-tokens' | 'max-turn-requests' | 'refusal' | 'cancelled' | 'unknown';
export type FoundryAcpTerminalStateNick = 'running' | 'exited' | 'failed' | 'cancelled';
export type FoundryCiArtifactKindNick = 'file' | 'directory' | 'junit' | 'coverage' | 'code-quality';
export type FoundryCiJobDispositionNick = 'selected' | 'skipped' | 'manual' | 'unsupported' | 'blocked';
export type FoundryCiRunStateNick = 'pending' | 'preparing' | 'running' | 'passed' | 'failed' | 'cancelled';
export type FoundryCommandLocalityNick = 'subprocess' | 'host' | 'pipeline' | 'application';
export type FoundryDebuggerMovementNick = 'start' | 'continue' | 'step-in' | 'step-out' | 'step-over';
export type FoundryDebuggerStopReasonNick = 'breakpoint-hit' | 'exited' | 'exited-normally' | 'signaled' | 'function-finished' | 'location-reached' | 'signal-received' | 'catch' | 'unknown';
export type FoundryDebuggerTrapDispositionNick = 'keep' | 'disable' | 'next-hit' | 'next-stop';
export type FoundryDebuggerTrapKindNick = 'breakpoint' | 'countpoint' | 'watchpoint';
export type FoundryDeviceChassisNick = 'workstation' | 'handset' | 'tablet' | 'other';
export type FoundryDiagnosticSeverityNick = 'ignored' | 'note' | 'unused' | 'deprecated' | 'warning' | 'error' | 'fatal';
export type FoundryLocalityNick = 'run' | 'build' | 'tool';
export type FoundryMarkupKindNick = 'plaintext' | 'markdown' | 'html' | 'pango';
export type FoundryObjectSerializerFormatNick = 'text' | 'json';
export type FoundrySettingsLayerNick = 'application' | 'project' | 'user';
export type FoundryTextBufferNotifyFlagsNick = 'before-insert' | 'after-insert' | 'before-delete' | 'after-delete';
export type FoundryTextSettingNick = 'none' | 'auto-indent' | 'completion-auto-select' | 'completion-page-size' | 'custom-font' | 'enable-completion' | 'enable-snippets' | 'enable-spell-check' | 'highlight-current-line' | 'highlight-matching-brackets' | 'implicit-trailing-newline' | 'indent-on-tab' | 'indent-width' | 'insert-matching-brace' | 'insert-spaces-instead-of-tabs' | 'line-height' | 'override-indent-width' | 'overwrite-matching-brace' | 'right-margin-position' | 'show-diagnostics' | 'show-line-changes' | 'show-line-changes-overview' | 'show-line-numbers' | 'show-right-margin' | 'smart-backspace' | 'smart-home-end' | 'tab-width' | 'use-custom-font' | 'wrap';
export type FoundryTextWrapNick = 'none' | 'char' | 'word' | 'word-char';
export type FoundryVcsDeltaStatusNick = 'unmodified' | 'added' | 'deleted' | 'modified' | 'renamed' | 'copied' | 'ignored' | 'untracked' | 'typechange' | 'unreadable' | 'conflicted';
export type FoundryVcsDiffLineOriginNick = 'added' | 'deleted' | 'context' | 'context-eofnl' | 'add-eofnl' | 'del-eofnl';
export type FoundryVcsGraphPointNick = 'top' | 'center' | 'bottom';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface FoundryAcpChangedFileProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpChangedFileConstructOnly = GObjectConstructOnly;

export interface FoundryAcpClientProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpClientConstructOnly = GObjectConstructOnly;

export interface FoundryAcpConnectionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpConnectionConstructOnly = GObjectConstructOnly;

export interface FoundryAcpContentBlockProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpContentBlockConstructOnly = GObjectConstructOnly;

export interface FoundryAcpEventProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpEventConstructOnly = GObjectConstructOnly;

export interface FoundryAcpManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

export interface FoundryAcpPermissionOptionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpPermissionOptionConstructOnly = GObjectConstructOnly;

export interface FoundryAcpPermissionPolicyProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpPermissionPolicyConstructOnly = GObjectConstructOnly;

export interface FoundryAcpPermissionRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpPermissionRequestConstructOnly = GObjectConstructOnly;

export interface FoundryAcpPermissionResponseProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpPermissionResponseConstructOnly = GObjectConstructOnly;

export interface FoundryAcpProjectClientProps extends GObjectProps, FoundryAcpClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpProjectClientConstructOnly = GObjectConstructOnly | FoundryAcpClientConstructOnly;

export interface FoundryAcpPromptResultProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpPromptResultConstructOnly = GObjectConstructOnly;

export interface FoundryAcpSessionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpSessionConstructOnly = GObjectConstructOnly;

export interface FoundryAcpSessionUpdateProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpSessionUpdateConstructOnly = GObjectConstructOnly;

export interface FoundryAcpTerminalProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpTerminalConstructOnly = GObjectConstructOnly;

export interface FoundryAcpTerminalOutputProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAcpTerminalOutputConstructOnly = GObjectConstructOnly;

/** Represents an intent to perform an action with optional parameters. */
export interface FoundryActionIntentProps extends FoundryIntentProps {
    /** @default NULL */
    'action-name'?: string;
    'action-target'?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryActionIntentConstructOnly = FoundryIntentConstructOnly | 'action-name' | 'action-target';

/** Custom GActionGroup integration. */
export interface FoundryActionMuxerProps extends GObjectProps, GActionGroupProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryActionMuxerConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly;

/** Abstract class for requesting credentials from a user. */
export interface FoundryAuthProviderProps extends FoundryContextualProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryAuthProviderConstructOnly = FoundryContextualConstructOnly;

/** Customize build pipelines from plugins. */
export interface FoundryBuildAddinProps extends FoundryContextualProps {
    pipeline?: Foundry.BuildPipeline;
    'plugin-info'?: Peas.PluginInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryBuildAddinConstructOnly = FoundryContextualConstructOnly | 'pipeline' | 'plugin-info';

/** Represents build flags to a compiler or other command. */
export interface FoundryBuildFlagsProps extends GObjectProps {
    /** @default NULL */
    directory?: string;
    flags?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryBuildFlagsConstructOnly = GObjectConstructOnly | 'directory' | 'flags';

/** Manages build operations and build system integration. */
export interface FoundryBuildManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryBuildManagerConstructOnly = FoundryServiceConstructOnly;

/** Manages build pipeline execution and coordination. */
export interface FoundryBuildPipelineProps extends FoundryContextualProps, GListModelProps {
    config?: Foundry.Config;
    device?: Foundry.Device;
    /** @default TRUE */
    'enable-addins'?: boolean;
    sdk?: Foundry.Sdk;
    triplet?: Foundry.Triplet;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryBuildPipelineConstructOnly = FoundryContextualConstructOnly | GListModelConstructOnly | 'config' | 'device' | 'enable-addins' | 'sdk' | 'triplet';

/** Manages build progress tracking and stage execution. */
export interface FoundryBuildProgressProps extends FoundryContextualProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryBuildProgressConstructOnly = FoundryContextualConstructOnly;

/** A single state in a build pipeline. */
export interface FoundryBuildStageProps extends FoundryContextualProps {
    /** @default FALSE */
    completed?: boolean;
    /** @default NULL */
    kind?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryBuildStageConstructOnly = FoundryContextualConstructOnly;

/** A file or directory produced by a continuous integration run. */
export interface FoundryCiArtifactProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCiArtifactConstructOnly = GObjectConstructOnly;

/** Project service which aggregates installed continuous integration providers. */
export interface FoundryCiManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCiManagerConstructOnly = FoundryServiceConstructOnly;

/** Provider-independent options for local CI execution. */
export interface FoundryCiRunOptionsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCiRunOptionsConstructOnly = GObjectConstructOnly;

/** Manages a hierarchical tree of CLI commands. */
export interface FoundryCliCommandTreeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCliCommandTreeConstructOnly = GObjectConstructOnly;

/** A command that may be run in a shell environment. */
export interface FoundryCommandProps extends FoundryContextualProps {
    argv?: string[];
    /** @default NULL */
    cwd?: string;
    environ?: string[];
    /** @default NULL */
    id?: string;
    /** @default FOUNDRY_COMMAND_LOCALITY_BUILD_PIPELINE */
    locality?: FoundryCommandLocalityNick | Foundry.CommandLocality;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCommandConstructOnly = FoundryContextualConstructOnly;

/** Service managing command providers and their commands. */
export interface FoundryCommandManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCommandManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

/** An [class@Foundry.BuildStage] that runs a command in the build pipeline. */
export interface FoundryCommandStageProps extends FoundryBuildStageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCommandStageConstructOnly = FoundryBuildStageConstructOnly;

export interface FoundryCompileCommandsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCompileCommandsConstructOnly = GObjectConstructOnly;

/** An abstract base class for completion providers. */
export interface FoundryCompletionProposalProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCompletionProposalConstructOnly = GObjectConstructOnly;

/** Abstract base class for providing code completion suggestions. */
export interface FoundryCompletionProviderProps extends FoundryContextualProps {
    document?: Foundry.TextDocument;
    'plugin-ifo'?: Peas.PluginInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryCompletionProviderConstructOnly = FoundryContextualConstructOnly | 'document' | 'plugin-ifo';

/** Manage configuration providers and their configs. */
export interface FoundryConfigManagerProps extends FoundryServiceProps, GListModelProps {
    config?: Foundry.Config;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryConfigManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

/** The central object representing an open project. */
export interface FoundryContextProps extends GObjectProps {
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryContextConstructOnly = GObjectConstructOnly;

/** Abstract base class for objects that are associated with a Foundry context. */
export interface FoundryContextualProps extends GObjectProps {
    context?: Foundry.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryContextualConstructOnly = GObjectConstructOnly | 'context';

/** Manages D-Bus service for remote command execution. */
export interface FoundryDBusServiceProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDBusServiceConstructOnly = FoundryServiceConstructOnly;

/** Simplified interface for performing debugger actions. */
export interface FoundryDebuggerActionsProps extends GObjectProps, GActionGroupProps {
    /**
     * The debugger instance.
     * @since 1.1
     */
    debugger?: Foundry.Debugger;
    /**
     * The debugger thread.
     * @since 1.1
     */
    thread?: Foundry.DebuggerThread;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerActionsConstructOnly = GObjectConstructOnly | GActionGroupConstructOnly;

/** Manages debugger providers and coordinates debugging operations. */
export interface FoundryDebuggerManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerManagerConstructOnly = FoundryServiceConstructOnly;

/** Abstract base class for representing the types of targets a debugger can connect to. */
export interface FoundryDebuggerTargetProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerTargetConstructOnly = GObjectConstructOnly;

/** Command-based implementation of debugger target. */
export interface FoundryDebuggerTargetCommandProps extends FoundryDebuggerTargetProps {
    command?: Foundry.Command;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerTargetCommandConstructOnly = FoundryDebuggerTargetConstructOnly | 'command';

/** Represents a request to connect to an existing process. */
export interface FoundryDebuggerTargetProcessProps extends FoundryDebuggerTargetProps {
    /** @default 0 */
    pid?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerTargetProcessConstructOnly = FoundryDebuggerTargetConstructOnly | 'pid';

/** Repreesnts connecting to a remote debugger instance. */
export interface FoundryDebuggerTargetRemoteProps extends FoundryDebuggerTargetProps {
    /** @default NULL */
    address?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerTargetRemoteConstructOnly = FoundryDebuggerTargetConstructOnly | 'address';

/** Represents parameters for debugger traps and breakpoints. */
export interface FoundryDebuggerTrapParamsProps extends GObjectProps {
    /** @default FOUNDRY_DEBUGGER_WATCH_NONE */
    access?: number;
    /** @default FOUNDRY_DEBUGGER_TRAP_KEEP */
    disposition?: FoundryDebuggerTrapDispositionNick | Foundry.DebuggerTrapDisposition;
    /** @default NULL */
    function?: string;
    /** @default 0 */
    'instruction-pointer'?: bigint | number;
    /** @default FOUNDRY_DEBUGGER_TRAP_KIND_BREAKPOINT */
    kind?: FoundryDebuggerTrapKindNick | Foundry.DebuggerTrapKind;
    /** @default 0 */
    line?: number;
    /** @default 0 */
    'line-offset'?: number;
    /** @default NULL */
    path?: string;
    /** @default NULL */
    'stack-frame-id'?: string;
    /** @default NULL */
    'thread-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDebuggerTrapParamsConstructOnly = GObjectConstructOnly;

/** Manages plugins implementing [class@Foundry.DependencyProvider]. */
export interface FoundryDependencyManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDependencyManagerConstructOnly = FoundryServiceConstructOnly;

/** Represents a local or remote device that can be deployed to. */
export interface FoundryDeviceProps extends FoundryContextualProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDeviceConstructOnly = FoundryContextualConstructOnly;

/** Manage plugins providing device integration and their devices. */
export interface FoundryDeviceManagerProps extends FoundryServiceProps, GListModelProps {
    device?: Foundry.Device;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDeviceManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

/** Represents a single diagnostic. */
export interface FoundryDiagnosticProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDiagnosticConstructOnly = GObjectConstructOnly;

/** Represents a fix that may be applied to resolve a diagnostic. */
export interface FoundryDiagnosticFixProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDiagnosticFixConstructOnly = GObjectConstructOnly;

/** Manages diagnostic information and error reporting. */
export interface FoundryDiagnosticManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDiagnosticManagerConstructOnly = FoundryServiceConstructOnly;

/** Abstract base class for plugins to provide diagnostics. */
export interface FoundryDiagnosticProviderProps extends FoundryContextualProps {
    'plugin-info'?: Peas.PluginInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDiagnosticProviderConstructOnly = FoundryContextualConstructOnly | 'plugin-info';

/** Represents a range within a file that a diagnostic applies to. */
export interface FoundryDiagnosticRangeProps extends GObjectProps {
    /** @default 0 */
    'end-line'?: number;
    /** @default 0 */
    'end-line-offset'?: number;
    /** @default 0 */
    'start-line'?: number;
    /** @default 0 */
    'start-line-offset'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDiagnosticRangeConstructOnly = GObjectConstructOnly | 'end-line' | 'end-line-offset' | 'start-line' | 'start-line-offset';

/** Simplified base class for working with diagnostic tooling which provide a structured format. */
export interface FoundryDiagnosticToolProps extends FoundryDiagnosticProviderProps {
    argv?: string[];
    environ?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDiagnosticToolConstructOnly = FoundryDiagnosticProviderConstructOnly;

/** Represents a single item found with in a directory listing. */
export interface FoundryDirectoryItemProps extends GObjectProps {
    directory?: Gio.File;
    file?: Gio.File;
    info?: Gio.FileInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDirectoryItemConstructOnly = GObjectConstructOnly | 'directory' | 'file' | 'info';

/** Manages directory contents and file listings. */
export interface FoundryDirectoryListingProps extends FoundryContextualProps, GListModelProps {
    /** @default NULL */
    attributes?: string;
    directory?: Gio.File;
    /** @default FALSE */
    'include-parent'?: boolean;
    /** @default G_FILE_QUERY_INFO_NONE */
    'query-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDirectoryListingConstructOnly = FoundryContextualConstructOnly | GListModelConstructOnly | 'attributes' | 'directory' | 'include-parent' | 'query-flags';

/** Simplified interface for deleting files or directories recursively. */
export interface FoundryDirectoryReaperProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDirectoryReaperConstructOnly = GObjectConstructOnly;

export interface FoundryDoapFileProps extends GObjectProps {
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
export type FoundryDoapFileConstructOnly = GObjectConstructOnly;

export interface FoundryDoapPersonProps extends GObjectProps {
    /** @default NULL */
    email?: string;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDoapPersonConstructOnly = GObjectConstructOnly;

export interface FoundryDoapServiceProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDoapServiceConstructOnly = FoundryServiceConstructOnly;

/** Represents an intent to display documentation. */
export interface FoundryDocumentationIntentProps extends FoundryIntentProps {
    documentation?: Foundry.Documentation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDocumentationIntentConstructOnly = FoundryIntentConstructOnly | 'documentation';

/** Service that manages documentation plugins. */
export interface FoundryDocumentationManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDocumentationManagerConstructOnly = FoundryServiceConstructOnly;

/** Represents a set of matches from a documentation query. */
export interface FoundryDocumentationMatchesProps extends GObjectProps, GListModelProps {
    query?: Foundry.DocumentationQuery;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDocumentationMatchesConstructOnly = GObjectConstructOnly | GListModelConstructOnly | 'query';

/** Represents a query into the documentation engine. */
export interface FoundryDocumentationQueryProps extends GObjectProps {
    /** @default NULL */
    'function-name'?: string;
    /** @default NULL */
    keyword?: string;
    /** @default FALSE */
    'prefetch-all'?: boolean;
    /** @default NULL */
    'property-name'?: string;
    /** @default NULL */
    'type-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDocumentationQueryConstructOnly = GObjectConstructOnly;

/** An area where documentation may be ingested from. */
export interface FoundryDocumentationRootProps extends GObjectProps {
    directories?: Gio.ListModel;
    icon?: Gio.Icon;
    /** @default NULL */
    identifier?: string;
    /** @default NULL */
    title?: string;
    /** @default NULL */
    version?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryDocumentationRootConstructOnly = GObjectConstructOnly | 'directories' | 'icon' | 'identifier' | 'title' | 'version';

/** Represents a single plugin extension with FoundryContext support. */
export interface FoundryExtensionProps extends FoundryContextualProps {
    engine?: Peas.Engine;
    'interface-type'?: GObject.GType;
    /** @default NULL */
    key?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryExtensionConstructOnly = FoundryContextualConstructOnly | 'engine' | 'interface-type';

/** Manages a collection of extensions and provides unified access to their functionality. */
export interface FoundryExtensionSetProps extends FoundryContextualProps, GListModelProps {
    engine?: Peas.Engine;
    'interface-type'?: GObject.GType;
    /** @default NULL */
    key?: string;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryExtensionSetConstructOnly = FoundryContextualConstructOnly | GListModelConstructOnly | 'engine' | 'interface-type';

/** Manages file operations and provides file system abstraction. */
export interface FoundryFileManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFileManagerConstructOnly = FoundryServiceConstructOnly;

/** A file monitor which integrates well with DexFuture. */
export interface FoundryFileMonitorProps extends GObjectProps {
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFileMonitorConstructOnly = GObjectConstructOnly | 'file';

/** Represents an event that has occurred from a file monitor. */
export interface FoundryFileMonitorEventProps extends GObjectProps {
    /** @default G_FILE_MONITOR_EVENT_CHANGED */
    event?: GFileMonitorEventNick | Gio.FileMonitorEvent;
    file?: Gio.File;
    'other-file'?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFileMonitorEventConstructOnly = GObjectConstructOnly | 'event' | 'file' | 'other-file';

/** Configuration options for file search operations. */
export interface FoundryFileSearchOptionsProps extends GObjectProps {
    /** @default TRUE */
    'case-sensitive'?: boolean;
    /** @default 1 */
    'context-lines'?: number;
    'excluded-patterns'?: string[];
    /** @default FALSE */
    'match-whole-words'?: boolean;
    /** @default 10000 */
    'max-matches'?: number;
    /** @default FALSE */
    recursive?: boolean;
    'required-patterns'?: string[];
    /** @default NULL */
    'search-text'?: string;
    /** @default FALSE */
    'use-regex'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFileSearchOptionsConstructOnly = GObjectConstructOnly;

/** Perform text replacements across search matches. */
export interface FoundryFileSearchReplacementProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFileSearchReplacementConstructOnly = GObjectConstructOnly;

export interface FoundryFlatpakArchOptionsProps extends FoundryFlatpakSerializableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakArchOptionsConstructOnly = FoundryFlatpakSerializableConstructOnly;

export interface FoundryFlatpakExtensionProps extends FoundryFlatpakSerializableProps {
    /** @default NULL */
    'add-ld-path'?: string;
    /** @default FALSE */
    autodelete?: boolean;
    /** @default NULL */
    'autoprune-unless'?: string;
    /** @default FALSE */
    bundle?: boolean;
    /** @default NULL */
    directory?: string;
    /** @default NULL */
    'download-if'?: string;
    /** @default NULL */
    'enable-if'?: string;
    /** @default FALSE */
    'locale-subset'?: boolean;
    /** @default NULL */
    'merge-dirs'?: string;
    /** @default NULL */
    name?: string;
    /** @default FALSE */
    'no-autodownload'?: boolean;
    /** @default FALSE */
    'remove-after-build'?: boolean;
    /** @default FALSE */
    subdirectories?: boolean;
    /** @default NULL */
    'subdirectory-suffix'?: string;
    /** @default NULL */
    version?: string;
    /** @default NULL */
    versions?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakExtensionConstructOnly = FoundryFlatpakSerializableConstructOnly;

export interface FoundryFlatpakExtensionsProps extends FoundryFlatpakListProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakExtensionsConstructOnly = FoundryFlatpakListConstructOnly | GListModelConstructOnly;

export interface FoundryFlatpakListProps extends FoundryFlatpakSerializableProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakListConstructOnly = FoundryFlatpakSerializableConstructOnly | GListModelConstructOnly;

export interface FoundryFlatpakManifestProps extends FoundryFlatpakSerializableProps {
    'add-build-extensions'?: Foundry.FlatpakExtensions;
    'add-extensions'?: Foundry.FlatpakExtensions;
    /** @default NULL */
    'app-id'?: string;
    /** @default NULL */
    'appdata-license'?: string;
    /** @default TRUE */
    'appstream-compose'?: boolean;
    /** @default NULL */
    base?: string;
    /** @default NULL */
    'base-commit'?: string;
    'base-extensions'?: string[];
    /** @default NULL */
    'base-version'?: string;
    /** @default NULL */
    branch?: string;
    /** @default FALSE */
    'build-extension'?: boolean;
    'build-options'?: Foundry.FlatpakOptions;
    /** @default FALSE */
    'build-runtime'?: boolean;
    cleanup?: string[];
    'cleanup-commands'?: string[];
    'cleanup-platform'?: string[];
    'cleanup-platform-commands'?: string[];
    /** @default NULL */
    'collection-id'?: string;
    /** @default NULL */
    command?: string;
    /** @default FALSE */
    'copy-icon'?: boolean;
    /** @default NULL */
    'default-branch'?: string;
    /** @default NULL */
    'desktop-file-name-prefix'?: string;
    /** @default NULL */
    'desktop-file-name-suffix'?: string;
    /** @default NULL */
    'extension-tag'?: string;
    'finish-args'?: string[];
    /** @default NULL */
    id?: string;
    /** @default NULL */
    'id-platform'?: string;
    'inherit-extensions'?: string[];
    'inherit-sdk-extensions'?: string[];
    /** @default NULL */
    metadata?: string;
    /** @default NULL */
    'metadata-platform'?: string;
    modules?: Foundry.FlatpakModules;
    'platform-extensions'?: string[];
    'prepare-platform-commands'?: string[];
    /** @default NULL */
    'rename-appdata-file'?: string;
    /** @default NULL */
    'rename-desktop-file'?: string;
    /** @default NULL */
    'rename-icon'?: string;
    /** @default NULL */
    'rename-mime-file'?: string;
    'rename-mime-icons'?: string[];
    /** @default NULL */
    runtime?: string;
    /** @default NULL */
    'runtime-commit'?: string;
    /** @default NULL */
    'runtime-version'?: string;
    /** @default NULL */
    sdk?: string;
    /** @default NULL */
    'sdk-commit'?: string;
    'sdk-extensions'?: string[];
    /** @default TRUE */
    'separate-locales'?: boolean;
    tags?: string[];
    /** @default NULL */
    var?: string;
    /** @default FALSE */
    'writable-sdk'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakManifestConstructOnly = FoundryFlatpakSerializableConstructOnly;

export interface FoundryFlatpakManifestLoaderProps extends GObjectProps {
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakManifestLoaderConstructOnly = GObjectConstructOnly | 'file';

export interface FoundryFlatpakModuleProps extends FoundryFlatpakSerializableProps {
    'build-commands'?: string[];
    'build-options'?: Foundry.FlatpakOptions;
    /** @default FALSE */
    builddir?: boolean;
    /** @default NULL */
    buildsystem?: string;
    cleanup?: string[];
    'cleanup-platform'?: string[];
    /** @default FALSE */
    cmake?: boolean;
    'config-opts'?: string[];
    /** @default FALSE */
    disabled?: boolean;
    'ensure-writable'?: string[];
    /** @default NULL */
    'install-rule'?: string;
    'make-args'?: string[];
    'make-install-args'?: string[];
    modules?: Foundry.FlatpakModules;
    /** @default NULL */
    name?: string;
    /** @default FALSE */
    'no-autogen'?: boolean;
    /** @default FALSE */
    'no-make-install'?: boolean;
    /** @default FALSE */
    'no-parallel-make'?: boolean;
    /** @default FALSE */
    'no-python-timestamp-fix'?: boolean;
    'only-arches'?: string[];
    'post-install'?: string[];
    /** @default FALSE */
    'rm-configure'?: boolean;
    /** @default FALSE */
    'run-tests'?: boolean;
    'secret-env'?: string[];
    'secret-opts'?: string[];
    'skip-arches'?: string[];
    sources?: Foundry.FlatpakSources;
    /** @default NULL */
    subdir?: string;
    'test-commands'?: string[];
    /** @default NULL */
    'test-rule'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakModuleConstructOnly = FoundryFlatpakSerializableConstructOnly;

export interface FoundryFlatpakModulesProps extends FoundryFlatpakListProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakModulesConstructOnly = FoundryFlatpakListConstructOnly | GListModelConstructOnly;

export interface FoundryFlatpakOptionsProps extends FoundryFlatpakSerializableProps {
    /** @default NULL */
    'append-ld-library-path'?: string;
    /** @default NULL */
    'append-path'?: string;
    /** @default NULL */
    'append-pkg-config-path'?: string;
    arch?: Foundry.FlatpakArchOptions;
    'build-args'?: string[];
    /** @default NULL */
    cflags?: string;
    /** @default FALSE */
    'cflags-override'?: boolean;
    'config-opts'?: string[];
    /** @default NULL */
    cppflags?: string;
    /** @default FALSE */
    'cppflags-override'?: boolean;
    /** @default NULL */
    cxxflags?: string;
    /** @default FALSE */
    'cxxflags-override'?: boolean;
    env?: string[];
    /** @default NULL */
    ldflags?: string;
    /** @default FALSE */
    'ldflags-override'?: boolean;
    /** @default NULL */
    libdir?: string;
    'make-args'?: string[];
    'make-install-args'?: string[];
    /** @default FALSE */
    'no-debuginfo'?: boolean;
    /** @default FALSE */
    'no-debuginfo-compression'?: boolean;
    /** @default NULL */
    prefix?: string;
    /** @default NULL */
    'prepend-ld-library-path'?: string;
    /** @default NULL */
    'prepend-path'?: string;
    /** @default NULL */
    'prepend-pkg-config-path'?: string;
    'secret-env'?: string[];
    'secret-opts'?: string[];
    /** @default FALSE */
    strip?: boolean;
    'test-args'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakOptionsConstructOnly = FoundryFlatpakSerializableConstructOnly;

export interface FoundryFlatpakSerializableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSerializableConstructOnly = GObjectConstructOnly;

export interface FoundryFlatpakSourceProps extends FoundryFlatpakSerializableProps {
    /** @default NULL */
    dest?: string;
    'only-arches'?: string[];
    'skip-arches'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceConstructOnly = FoundryFlatpakSerializableConstructOnly;

export interface FoundryFlatpakSourceArchiveProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    'archive-type'?: string;
    /** @default NULL */
    'dest-filename'?: string;
    /** @default FALSE */
    'disable-http-decompression'?: boolean;
    /** @default FALSE */
    'git-init'?: boolean;
    /** @default NULL */
    md5?: string;
    'mirror-urls'?: string[];
    /** @default NULL */
    path?: string;
    /** @default NULL */
    referer?: string;
    /** @default NULL */
    sha1?: string;
    /** @default NULL */
    sha256?: string;
    /** @default NULL */
    sha512?: string;
    /** @default 1 */
    'strip-components'?: number;
    /** @default NULL */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceArchiveConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceBzrProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    revision?: string;
    /** @default NULL */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceBzrConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceDirProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    path?: string;
    skip?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceDirConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceExtraDataProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    filename?: string;
    /** @default NULL */
    sha256?: string;
    /** @default NULL */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceExtraDataConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceFileProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    'dest-filename'?: string;
    /** @default FALSE */
    'disable-http-decompression'?: boolean;
    /** @default NULL */
    md5?: string;
    'mirror-urls'?: string[];
    /** @default NULL */
    path?: string;
    /** @default NULL */
    referer?: string;
    /** @default NULL */
    sha1?: string;
    /** @default NULL */
    sha256?: string;
    /** @default NULL */
    sha512?: string;
    /** @default NULL */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceFileConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceGitProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    branch?: string;
    /** @default NULL */
    commit?: string;
    /** @default FALSE */
    'disable-fsckobjects'?: boolean;
    /** @default FALSE */
    'disable-shallow-clone'?: boolean;
    /** @default FALSE */
    'disable-submodules'?: boolean;
    /** @default NULL */
    path?: string;
    /** @default NULL */
    tag?: string;
    /** @default NULL */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceGitConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceInlineProps extends FoundryFlatpakSourceProps {
    /** @default FALSE */
    base64?: boolean;
    /** @default NULL */
    contents?: string;
    /** @default NULL */
    'dest-filename'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceInlineConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourcePatchProps extends FoundryFlatpakSourceProps {
    options?: string[];
    /** @default NULL */
    path?: string;
    paths?: string[];
    /** @default 1 */
    'strip-components'?: number;
    /** @default FALSE */
    'use-git'?: boolean;
    /** @default FALSE */
    'use-git-am'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourcePatchConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceScriptProps extends FoundryFlatpakSourceProps {
    commands?: string[];
    /** @default NULL */
    'dest-filename'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceScriptConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceShellProps extends FoundryFlatpakSourceProps {
    commands?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceShellConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourceSvnProps extends FoundryFlatpakSourceProps {
    /** @default NULL */
    revision?: string;
    /** @default NULL */
    url?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourceSvnConstructOnly = FoundryFlatpakSourceConstructOnly;

export interface FoundryFlatpakSourcesProps extends FoundryFlatpakListProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFlatpakSourcesConstructOnly = FoundryFlatpakListConstructOnly | GListModelConstructOnly;

/** Manages plugins providing [class@Foundry.Forge] implementations. */
export interface FoundryForgeManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryForgeManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

export interface FoundryForgeQueryProps extends GObjectProps {
    /** @default NULL */
    keywords?: string;
    /** @default NULL */
    'keywords-scope'?: string;
    /** @default NULL */
    state?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryForgeQueryConstructOnly = GObjectConstructOnly;

/** A property-notifying wrapper around a [class@Dex.Future] that resolves to a [class@GObject.Object]. */
export interface FoundryFutureItemProps extends GObjectProps {
    /**
     * The future to observe for an object result.
     * @since 1.2
     */
    future?: Dex.Future;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFutureItemConstructOnly = GObjectConstructOnly;

/** Represents a GObject Introspection Repository (GIR) file. */
export interface FoundryGirProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGirConstructOnly = GObjectConstructOnly;

/** Represents a node in a GObject Introspection Repository (GIR) file. */
export interface FoundryGirNodeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGirNodeConstructOnly = GObjectConstructOnly;

/** Git implementation of blame information for version control files. */
export interface FoundryGitBlameProps extends FoundryVcsBlameProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitBlameConstructOnly = FoundryVcsBlameConstructOnly;

export interface FoundryGitBranchProps extends FoundryVcsBranchProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitBranchConstructOnly = FoundryVcsBranchConstructOnly;

export interface FoundryGitClonerProps extends GObjectProps {
    /** @default NULL */
    'author-email'?: string;
    /** @default NULL */
    'author-name'?: string;
    /** @default FALSE */
    bare?: boolean;
    directory?: Gio.File;
    /** @default NULL */
    'remote-branch-name'?: string;
    /** @default NULL */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitClonerConstructOnly = GObjectConstructOnly;

export interface FoundryGitCommitProps extends FoundryVcsCommitProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitCommitConstructOnly = FoundryVcsCommitConstructOnly;

export interface FoundryGitCommitBuilderProps extends GObjectProps {
    /**
     * Whether the builder will amend the commit it was created for.
     * @since 1.2
     * @default FALSE
     */
    amend?: boolean;
    /**
     * The email address of the commit author.
     * @default NULL
     */
    'author-email'?: string;
    /**
     * The name of the commit author.
     * @default NULL
     */
    'author-name'?: string;
    /**
     * The commit message.
     * @default NULL
     */
    message?: string;
    /**
     * The format to use for signing commits.
     * @default gpg
     */
    'signing-format'?: string;
    /**
     * The key identifier to use for signing the commit.
     * @default NULL
     */
    'signing-key'?: string;
    /** The timestamp for the commit. */
    when?: GLib.DateTime;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitCommitBuilderConstructOnly = GObjectConstructOnly;

export interface FoundryGitDeltaProps extends FoundryVcsDeltaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitDeltaConstructOnly = FoundryVcsDeltaConstructOnly;

export interface FoundryGitDiffProps extends FoundryVcsDiffProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitDiffConstructOnly = FoundryVcsDiffConstructOnly;

export interface FoundryGitDiffHunkProps extends FoundryVcsDiffHunkProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitDiffHunkConstructOnly = FoundryVcsDiffHunkConstructOnly;

export interface FoundryGitDiffLineProps extends FoundryVcsDiffLineProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitDiffLineConstructOnly = FoundryVcsDiffLineConstructOnly;

export interface FoundryGitFileProps extends FoundryVcsFileProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitFileConstructOnly = FoundryVcsFileConstructOnly;

export interface FoundryGitReferenceProps extends FoundryVcsReferenceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitReferenceConstructOnly = FoundryVcsReferenceConstructOnly;

export interface FoundryGitRemoteProps extends FoundryVcsRemoteProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitRemoteConstructOnly = FoundryVcsRemoteConstructOnly;

export interface FoundryGitSignatureProps extends FoundryVcsSignatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitSignatureConstructOnly = FoundryVcsSignatureConstructOnly;

export interface FoundryGitStatsProps extends FoundryVcsStatsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitStatsConstructOnly = FoundryVcsStatsConstructOnly;

export interface FoundryGitStatusEntryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitStatusEntryConstructOnly = GObjectConstructOnly;

export interface FoundryGitStatusListProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitStatusListConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface FoundryGitTagProps extends FoundryVcsTagProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitTagConstructOnly = FoundryVcsTagConstructOnly;

export interface FoundryGitTreeProps extends FoundryVcsTreeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitTreeConstructOnly = FoundryVcsTreeConstructOnly;

/** Git implementation of the version control system interface. */
export interface FoundryGitVcsProps extends FoundryVcsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryGitVcsConstructOnly = FoundryVcsConstructOnly;

/** Inhibit shutdown of [class@Foundry.Context] during important operations. */
export interface FoundryInhibitorProps extends GObjectProps {
    context?: Foundry.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInhibitorConstructOnly = GObjectConstructOnly | 'context';

/** Base class for various types of user input. */
export interface FoundryInputProps extends GObjectProps {
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
    validator?: Foundry.InputValidator;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputConstructOnly = GObjectConstructOnly | 'subtitle' | 'title' | 'validator';

export interface FoundryInputChoiceProps extends FoundryInputProps {
    item?: GObject.Object;
    /** @default FALSE */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputChoiceConstructOnly = FoundryInputConstructOnly | 'item';

export interface FoundryInputComboProps extends FoundryInputProps {
    choice?: Foundry.InputChoice;
    choices?: Gio.ListModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputComboConstructOnly = FoundryInputConstructOnly | 'choices';

export interface FoundryInputFileProps extends FoundryInputProps {
    /** @default G_FILE_TYPE_REGULAR */
    'file-type'?: GFileTypeNick | Gio.FileType;
    value?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputFileConstructOnly = FoundryInputConstructOnly;

export interface FoundryInputFontProps extends FoundryInputProps {
    /** @default FALSE */
    monospace?: boolean;
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputFontConstructOnly = FoundryInputConstructOnly | 'monospace';

export interface FoundryInputGroupProps extends FoundryInputProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputGroupConstructOnly = FoundryInputConstructOnly;

export interface FoundryInputPasswordProps extends FoundryInputProps {
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputPasswordConstructOnly = FoundryInputConstructOnly;

export interface FoundryInputSpinProps extends FoundryInputProps {
    /** @default 0.000000 */
    lower?: number;
    /** @default 0 */
    'n-digits'?: number;
    /** @default 0.000000 */
    upper?: number;
    /** @default 0.000000 */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputSpinConstructOnly = FoundryInputConstructOnly | 'lower' | 'n-digits' | 'upper';

export interface FoundryInputSwitchProps extends FoundryInputProps {
    /** @default FALSE */
    value?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputSwitchConstructOnly = FoundryInputConstructOnly;

export interface FoundryInputTextProps extends FoundryInputProps {
    /** @default NULL */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputTextConstructOnly = FoundryInputConstructOnly;

export interface FoundryInputValidatorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputValidatorConstructOnly = GObjectConstructOnly;

export interface FoundryInputValidatorDelegateProps extends FoundryInputValidatorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputValidatorDelegateConstructOnly = FoundryInputValidatorConstructOnly;

export interface FoundryInputValidatorRegexProps extends FoundryInputValidatorProps {
    regex?: GLib.Regex;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryInputValidatorRegexConstructOnly = FoundryInputValidatorConstructOnly | 'regex';

/** Abstract base class for representing intents. */
export interface FoundryIntentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryIntentConstructOnly = GObjectConstructOnly;

/** The intent manager provides a generic mechanism to handle intents within an application. */
export interface FoundryIntentManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryIntentManagerConstructOnly = FoundryServiceConstructOnly;

export interface FoundryJsonListLlmResourceProps extends FoundryLlmResourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryJsonListLlmResourceConstructOnly = FoundryLlmResourceConstructOnly;

export interface FoundryJsonLlmResourceProps extends FoundryLlmResourceProps {
    node?: Json.Node | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryJsonLlmResourceConstructOnly = FoundryLlmResourceConstructOnly;

/** Represents a programming language or syntax. */
export interface FoundryLanguageProps extends GObjectProps {
    /** @default NULL */
    id?: string;
    /** @default NULL */
    'meson-id'?: string | null;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLanguageConstructOnly = GObjectConstructOnly | 'id' | 'meson-id' | 'name';

/** Represents a source code license. */
export interface FoundryLicenseProps extends GObjectProps {
    /** @default NULL */
    id?: string;
    'snippet-text-bytes'?: GLib.Bytes;
    'text-bytes'?: GLib.Bytes;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLicenseConstructOnly = GObjectConstructOnly | 'id' | 'snippet-text-bytes' | 'text-bytes' | 'title';

/** A pipeline stage that will execute another pipline before continuing the current pipeline. */
export interface FoundryLinkedPipelineStageProps extends FoundryBuildStageProps {
    /** @default FOUNDRY_BUILD_PIPELINE_PHASE_NONE */
    'linked-phase'?: number;
    'linked-pipeline'?: Foundry.BuildPipeline;
    /** @default FOUNDRY_BUILD_PIPELINE_PHASE_NONE */
    phase?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLinkedPipelineStageConstructOnly = FoundryBuildStageConstructOnly | 'linked-phase' | 'linked-pipeline' | 'phase';

export interface FoundryLlmManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLlmManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

export interface FoundryLlmMessageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLlmMessageConstructOnly = GObjectConstructOnly;

/** Abstract base class for LLM resources. */
export interface FoundryLlmResourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLlmResourceConstructOnly = GObjectConstructOnly;

export interface FoundryLocalDeviceProps extends FoundryDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLocalDeviceConstructOnly = FoundryDeviceConstructOnly;

export interface FoundryLogManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLogManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

export interface FoundryLogMessageProps extends GObjectProps {
    'created-at'?: GLib.DateTime;
    /** @default NULL */
    domain?: string;
    /** @default NULL */
    message?: string;
    /** @default 0 */
    severity?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLogMessageConstructOnly = GObjectConstructOnly | 'created-at' | 'domain' | 'message' | 'severity';

export interface FoundryLspClientProps extends FoundryContextualProps {
    'io-stream'?: Gio.IOStream;
    provider?: Foundry.LspProvider;
    subprocess?: Gio.Subprocess;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLspClientConstructOnly = FoundryContextualConstructOnly | 'io-stream' | 'provider' | 'subprocess';

export interface FoundryLspCompletionProposalProps extends FoundryCompletionProposalProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLspCompletionProposalConstructOnly = FoundryCompletionProposalConstructOnly;

export interface FoundryLspCompletionProviderProps extends FoundryCompletionProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLspCompletionProviderConstructOnly = FoundryCompletionProviderConstructOnly;

export interface FoundryLspManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLspManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

export interface FoundryLspProviderProps extends FoundryContextualProps, GListModelProps {
    'plugin-info'?: Peas.PluginInfo;
    server?: Foundry.LspServer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryLspProviderConstructOnly = FoundryContextualConstructOnly | GListModelConstructOnly | 'plugin-info';

export interface FoundryMarkupProps extends GObjectProps {
    contents?: GLib.Bytes;
    /** @default FOUNDRY_MARKUP_KIND_PLAINTEXT */
    kind?: FoundryMarkupKindNick | Foundry.MarkupKind;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryMarkupConstructOnly = GObjectConstructOnly | 'contents' | 'kind';

export interface FoundryMcpServerProps extends FoundryContextualProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryMcpServerConstructOnly = FoundryContextualConstructOnly;

export interface FoundryMenuSearchProviderProps extends FoundrySearchProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryMenuSearchProviderConstructOnly = FoundrySearchProviderConstructOnly;

export interface FoundryMenuSearchResultProps extends FoundrySearchResultProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryMenuSearchResultConstructOnly = FoundrySearchResultConstructOnly;

/** Integrate with platform high-level models such as flatten or map. */
export interface FoundryModelManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryModelManagerConstructOnly = GObjectConstructOnly;

/** A No-op VCS used to represent no VCS is active. */
export interface FoundryNoVcsProps extends FoundryVcsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryNoVcsConstructOnly = FoundryVcsConstructOnly;

/** Represents diagnostics that are continually updated as the contents of a document are changed. */
export interface FoundryOnTypeDiagnosticsProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryOnTypeDiagnosticsConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

/** Represents an intent to open a file. */
export interface FoundryOpenFileIntentProps extends FoundryIntentProps {
    /** @default NULL */
    'content-type'?: string;
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryOpenFileIntentConstructOnly = FoundryIntentConstructOnly;

/** Represents a long-running operation in the development environment with progress tracking. */
export interface FoundryOperationProps extends GObjectProps {
    'auth-provider'?: Foundry.AuthProvider;
    /** @default 0.000000 */
    progress?: number;
    /** @default NULL */
    subtitle?: string;
    /** @default NULL */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryOperationConstructOnly = GObjectConstructOnly;

/** Manage operations that should be observed by the user as tasks. */
export interface FoundryOperationManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryOperationManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

/** Thread-safe cache for path lookups #FoundryPathCache can be used to cache path lookup entries as often needed by runtimes. */
export interface FoundryPathCacheProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPathCacheConstructOnly = GObjectConstructOnly;

/** The [class@Foundry.PluginBuildAddin] class is a convenience object that may be used by plug-ins implementing a build system. */
export interface FoundryPluginBuildAddinProps extends FoundryBuildAddinProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPluginBuildAddinConstructOnly = FoundryBuildAddinConstructOnly;

export interface FoundryPluginLspProviderProps extends FoundryLspProviderProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPluginLspProviderConstructOnly = FoundryLspProviderConstructOnly | GListModelConstructOnly;

export interface FoundryPluginManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPluginManagerConstructOnly = GObjectConstructOnly;

/** Manages process execution and subprocess launching. */
export interface FoundryProcessLauncherProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryProcessLauncherConstructOnly = GObjectConstructOnly;

/** Custom PTY intermediate that can extract diagnostics. */
export interface FoundryPtyDiagnosticsProps extends FoundryContextualProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPtyDiagnosticsConstructOnly = FoundryContextualConstructOnly | GListModelConstructOnly;

/** Manages application execution and runtime operations. */
export interface FoundryRunManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryRunManagerConstructOnly = FoundryServiceConstructOnly;

/** Manages plugins providing SDK providers and their SDKs. */
export interface FoundrySdkManagerProps extends FoundryServiceProps, GListModelProps {
    sdk?: Foundry.Sdk;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySdkManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

/** Service that manages plugins providing search capabilities. */
export interface FoundrySearchManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySearchManagerConstructOnly = FoundryServiceConstructOnly;

/** Abstract base class allowing plugins to provide search capabilities. */
export interface FoundrySearchProviderProps extends FoundryContextualProps {
    'plugin-info'?: Peas.PluginInfo;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySearchProviderConstructOnly = FoundryContextualConstructOnly | 'plugin-info';

/** Abstract base class used by plugins to represent a singlular search result. */
export interface FoundrySearchRequestProps extends FoundryContextualProps {
    categories?: string[];
    /** @default NULL */
    'search-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySearchRequestConstructOnly = FoundryContextualConstructOnly;

/** Abstract base class for search results. */
export interface FoundrySearchResultProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySearchResultConstructOnly = GObjectConstructOnly;

/** Manages secure storage and retrieval of API keys and sensitive data. */
export interface FoundrySecretServiceProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySecretServiceConstructOnly = FoundryServiceConstructOnly;

/** Abstract base class for services in the development environment. */
export interface FoundryServiceProps extends FoundryContextualProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryServiceConstructOnly = FoundryContextualConstructOnly;

/** Abstraction for user, project, and application settings. */
export interface FoundrySettingsProps extends FoundryContextualProps, GActionGroupProps {
    /** @default NULL */
    path?: string;
    /** @default NULL */
    'schema-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySettingsConstructOnly = FoundryContextualConstructOnly | GActionGroupConstructOnly | 'path' | 'schema-id';

export interface FoundrySimpleLlmMessageProps extends FoundryLlmMessageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySimpleLlmMessageConstructOnly = FoundryLlmMessageConstructOnly;

/** Simple implementation of a text buffer. */
export interface FoundrySimpleTextBufferProps extends GObjectProps, FoundryTextBufferProps {
    context?: Foundry.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySimpleTextBufferConstructOnly = GObjectConstructOnly | FoundryTextBufferConstructOnly | 'context';

/** Represents an intent to navigate to a symbol location. */
export interface FoundrySymbolIntentProps extends FoundryIntentProps {
    locator?: Foundry.SymbolLocator;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySymbolIntentConstructOnly = FoundryIntentConstructOnly | 'locator';

export interface FoundrySymbolLocatorProps extends GObjectProps {
    file?: Gio.File;
    /** @default 0 */
    line?: number;
    /** @default 0 */
    'line-offset'?: number;
    /** @default NULL */
    pattern?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySymbolLocatorConstructOnly = GObjectConstructOnly | 'file' | 'line' | 'line-offset' | 'pattern';

export interface FoundryTemplateManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTemplateManagerConstructOnly = GObjectConstructOnly;

export interface FoundryTemplateOutputProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTemplateOutputConstructOnly = GObjectConstructOnly;

export interface FoundryTerminalIntentProps extends FoundryIntentProps {
    launcher?: Foundry.TerminalLauncher;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTerminalIntentConstructOnly = FoundryIntentConstructOnly | 'launcher';

/** Simplified interface representing how a terminal should be spawned. */
export interface FoundryTerminalLauncherProps extends GObjectProps {
    command?: Foundry.Command;
    'override-environment'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTerminalLauncherConstructOnly = GObjectConstructOnly | 'command' | 'override-environment';

/** Service providing convenient access to terminal operations. */
export interface FoundryTerminalServiceProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTerminalServiceConstructOnly = FoundryServiceConstructOnly;

/** Manages plugins providing test providers and their tests. */
export interface FoundryTestManagerProps extends FoundryServiceProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTestManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

/** A grouping of [class@Foundry.Test] */
export interface FoundryTestSuiteProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTestSuiteConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

export interface FoundryTextBufferProps extends GObjectProps {
    context?: Foundry.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTextBufferConstructOnly = GObjectConstructOnly | 'context';

/** Represents a text document in the development environment with editing capabilities. */
export interface FoundryTextDocumentProps extends FoundryContextualProps {
    buffer?: Foundry.TextBuffer;
    /** @default NULL */
    'draft-id'?: string;
    file?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTextDocumentConstructOnly = FoundryContextualConstructOnly | 'buffer' | 'draft-id' | 'file';

/** Represents a single text edit to a document. */
export interface FoundryTextEditProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTextEditConstructOnly = GObjectConstructOnly;

/** Manages text documents and provides text editing services. */
export interface FoundryTextManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTextManagerConstructOnly = FoundryServiceConstructOnly;

/** Manages text editor settings and configuration. */
export interface FoundryTextSettingsProps extends FoundryContextualProps {
    /** @default TRUE */
    'auto-indent'?: boolean;
    /** @default FALSE */
    'completion-auto-select'?: boolean;
    /** @default 5 */
    'completion-page-size'?: number;
    /** @default Monospace 11 */
    'custom-font'?: string;
    /** @default TRUE */
    'enable-completion'?: boolean;
    /** @default TRUE */
    'enable-snippets'?: boolean;
    /** @default TRUE */
    'enable-spell-check'?: boolean;
    /** @default TRUE */
    'highlight-current-line'?: boolean;
    /** @default TRUE */
    'highlight-matching-brackets'?: boolean;
    /** @default TRUE */
    'implicit-trailing-newline'?: boolean;
    /** @default TRUE */
    'indent-on-tab'?: boolean;
    /** @default 8 */
    'indent-width'?: number;
    /** @default FALSE */
    'insert-matching-brace'?: boolean;
    /** @default FALSE */
    'insert-spaces-instead-of-tabs'?: boolean;
    /** @default 1.100000 */
    'line-height'?: number;
    /** @default FALSE */
    'override-indent-width'?: boolean;
    /** @default FALSE */
    'overwrite-matching-brace'?: boolean;
    /** @default 80 */
    'right-margin-position'?: number;
    /** @default TRUE */
    'show-diagnostics'?: boolean;
    /** @default TRUE */
    'show-line-changes'?: boolean;
    /** @default TRUE */
    'show-line-changes-overview'?: boolean;
    /** @default TRUE */
    'show-line-numbers'?: boolean;
    /** @default FALSE */
    'show-right-margin'?: boolean;
    /** @default TRUE */
    'smart-backspace'?: boolean;
    /** @default TRUE */
    'smart-home-end'?: boolean;
    /** @default 8 */
    'tab-width'?: number;
    /** @default FALSE */
    'use-custom-font'?: boolean;
    /** @default FOUNDRY_TEXT_WRAP_NONE */
    wrap?: FoundryTextWrapNick | Foundry.TextWrap;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTextSettingsConstructOnly = FoundryContextualConstructOnly;

/** Auth provider which requests credentials from a TTY. */
export interface FoundryTtyAuthProviderProps extends FoundryAuthProviderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTtyAuthProviderConstructOnly = FoundryAuthProviderConstructOnly;

/** Manages tweaks and configuration adjustments. */
export interface FoundryTweakManagerProps extends FoundryServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTweakManagerConstructOnly = FoundryServiceConstructOnly;

export interface FoundryUnixFDMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryUnixFDMapConstructOnly = GObjectConstructOnly;

/** Abstract base class for plugins to implement support for a VCS. */
export interface FoundryVcsProps extends FoundryContextualProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsConstructOnly = FoundryContextualConstructOnly;

export interface FoundryVcsBlameProps extends GObjectProps {
    file?: Foundry.VcsFile;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsBlameConstructOnly = GObjectConstructOnly | 'file';

export interface FoundryVcsBranchProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsBranchConstructOnly = GObjectConstructOnly;

export interface FoundryVcsCommitProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsCommitConstructOnly = GObjectConstructOnly;

export interface FoundryVcsDeltaProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsDeltaConstructOnly = GObjectConstructOnly;

export interface FoundryVcsDiffProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsDiffConstructOnly = GObjectConstructOnly;

export interface FoundryVcsDiffHunkProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsDiffHunkConstructOnly = GObjectConstructOnly;

export interface FoundryVcsDiffLineProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsDiffLineConstructOnly = GObjectConstructOnly;

export interface FoundryVcsFileProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsFileConstructOnly = GObjectConstructOnly;

/** Manages VCS implementations provided by plugins. */
export interface FoundryVcsManagerProps extends FoundryServiceProps, GListModelProps {
    vcs?: Foundry.Vcs;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsManagerConstructOnly = FoundryServiceConstructOnly | GListModelConstructOnly;

export interface FoundryVcsReferenceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsReferenceConstructOnly = GObjectConstructOnly;

/** Abstract base class for version control system remote repository implementations. */
export interface FoundryVcsRemoteProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsRemoteConstructOnly = GObjectConstructOnly;

export interface FoundryVcsSignatureProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsSignatureConstructOnly = GObjectConstructOnly;

export interface FoundryVcsStatsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsStatsConstructOnly = GObjectConstructOnly;

export interface FoundryVcsTagProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsTagConstructOnly = GObjectConstructOnly;

export interface FoundryVcsTreeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryVcsTreeConstructOnly = GObjectConstructOnly;

/** Represents an intent to open a URI with a web browser. */
export interface FoundryWebIntentProps extends FoundryIntentProps {
    /** @default NULL */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryWebIntentConstructOnly = FoundryIntentConstructOnly;

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
