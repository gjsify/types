// The widget vocabulary of Anjuta-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Anjuta-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Anjuta-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    AnjutaCommandBar: ['max-text-width'],
    AnjutaEntry: ['help-text'],
    AnjutaFileDropEntry: ['relative-path'],
    AnjutaFileList: ['relative-path', 'show-add-button'],
    AnjutaTabber: ['notebook'],
    AnjutaTreeComboBox: ['model'],
    AnjutaVcsStatusTreeView: ['conflicted-selectable', 'show-status', 'status-codes'],
};

export const OWN_SIGNALS = {
    AnjutaEnvironmentEditor: ['changed'],
    AnjutaPkgConfigChooser: ['package-activated', 'package-deactivated'],
    AnjutaStatus: ['busy'],
    AnjutaTreeComboBox: ['changed', 'popdown', 'popup'],
};

export const DECLS = {
    AnjutaCloseButton: ['AnjutaCloseButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    AnjutaColumnTextView: ['AnjutaColumnTextView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    AnjutaCommandBar: ['AnjutaCommandBar', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnjutaDock: ['AnjutaDock', 'GdlDock', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnjutaDropEntry: ['AnjutaDropEntry', 'AnjutaEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    AnjutaEntry: ['AnjutaEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    AnjutaEnvironmentEditor: ['AnjutaEnvironmentEditor', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnjutaFileDropEntry: ['AnjutaFileDropEntry', 'AnjutaDropEntry', 'AnjutaEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    AnjutaFileList: ['AnjutaFileList', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    AnjutaPkgConfigChooser: ['AnjutaPkgConfigChooser', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    AnjutaPreferencesDialog: ['AnjutaPreferencesDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnjutaSavePrompt: ['AnjutaSavePrompt', 'GtkMessageDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnjutaStatus: ['AnjutaStatus', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    AnjutaTabber: ['AnjutaTabber', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    AnjutaTreeComboBox: ['AnjutaTreeComboBox', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable', 'GtkCellLayout'],
    AnjutaVcsStatusTreeView: ['AnjutaVcsStatusTreeView', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

export const ENUM_NICKS = {
    AnjutaCommandBarEntryType: ['frame', 'button'],
    AnjutaCommandQueueExecuteMode: ['automatic', 'manual'],
    AnjutaLauncherOutputType: ['stdout', 'stderr', 'pty'],
    AnjutaProjectValueType: ['string', 'list', 'boolean', 'map'],
    AnjutaSerializerMode: ['read', 'write'],
    AnjutaSessionPhase: ['start', 'first', 'normal', 'last', 'end'],
    AnjutaShellPlacement: ['none', 'top', 'bottom', 'right', 'left', 'center', 'floating'],
};

export const SLOT_CANDIDATES = {
    AnjutaDock: {
        'command-bar': 'set_command_bar',
    },
    AnjutaStatus: {
        'title-window': 'set_title_window',
        'widget': 'add_widget',
    },
    AnjutaTabber: {
        'tab': 'add_tab',
    },
};

export const SINCE = {};
