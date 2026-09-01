// The widget vocabulary of Gspell-1 as runtime data.
//
// GENERATED — do not edit. Provenance: Gspell-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gspell',
    version: '1',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GspellCheckerDialog: ['spell-navigator'],
    GspellLanguageChooser: ['language', 'language-code'],
};

export const OWN_SIGNALS = {};

export const DECLS = {
    GspellCheckerDialog: ['GspellCheckerDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GspellLanguageChooserButton: ['GspellLanguageChooserButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GspellLanguageChooser', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GspellLanguageChooserDialog: ['GspellLanguageChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GspellLanguageChooser', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
