// The widget vocabulary of GcrUi-3 as runtime data.
//
// GENERATED — do not edit. Provenance: GcrUi-3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — inlined base(s) from a namespace with no vocabulary: Gcr.Prompt — prop(s) no TypeScript value satisfies: GcrUi.TreeSelector.columns
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GcrUi',
    version: '3',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: ['Gcr.Prompt'],
    unsettableProps: ['GcrUi.TreeSelector.columns'],
};

export const OWN_PROPS = {
    GcrCertificateWidget: ['attributes', 'certificate'],
    GcrComboSelector: ['collection'],
    GcrKeyWidget: ['attributes'],
    GcrListSelector: ['collection'],
    GcrPrompt: ['caller-window', 'cancel-label', 'choice-chosen', 'choice-label', 'continue-label', 'description', 'message', 'password-new', 'title', 'warning'],
    GcrTreeSelector: ['collection', 'columns'],
    GcrUnlockOptionsWidget: ['choice', 'ttl'],
    GcrViewerWidget: ['display-name'],
};

export const OWN_SIGNALS = {
    GcrImportButton: ['imported', 'importing'],
    GcrViewerWidget: ['added'],
};

export const DECLS = {
    GcrCertificateWidget: ['GcrCertificateWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GcrComboSelector: ['GcrComboSelector', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GcrImportButton: ['GcrImportButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GcrKeyWidget: ['GcrKeyWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GcrListSelector: ['GcrListSelector', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GcrPromptDialog: ['GcrPromptDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GcrPrompt', 'GtkBuildable'],
    GcrTreeSelector: ['GcrTreeSelector', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GcrUnlockOptionsWidget: ['GcrUnlockOptionsWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GcrViewerWidget: ['GcrViewerWidget', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
