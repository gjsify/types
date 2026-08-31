// The widget vocabulary of Egg-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Egg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Egg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    EggBox: ['max-width-request'],
    EggCenteringBin: ['max-width-request'],
    EggColumnLayout: ['column-spacing', 'column-width', 'max-columns', 'row-spacing'],
    EggEmptyState: ['icon-name', 'pixel-size', 'resource', 'subtitle', 'title'],
    EggEntryBox: ['max-width-chars'],
    EggFileChooserEntry: ['action', 'create-folders', 'do-overwrite-confirmation', 'file', 'filter', 'local-only', 'max-width-chars', 'show-hidden', 'title'],
    EggListBox: ['property-name', 'row-type', 'row-type-name'],
    EggPillBox: ['label'],
    EggProgressButton: ['progress', 'show-progress'],
    EggRadioBox: ['active-id', 'show-more'],
    EggSearchBar: ['search-mode-enabled', 'show-close-button'],
    EggSimpleLabel: ['label', 'width-chars', 'xalign'],
    EggSimplePopover: ['button-text', 'message', 'ready', 'text', 'title'],
    EggSlider: ['position'],
    EggSuggestionEntry: ['model'],
    EggSuggestionPopover: ['model', 'relative-to', 'selected'],
    EggSuggestionRow: ['suggestion'],
    EggThreeGrid: ['column-spacing', 'row-spacing'],
};

export const OWN_SIGNALS = {
    EggRadioBox: ['changed'],
    EggSearchBar: ['activate', 'reveal'],
    EggSimplePopover: ['activate', 'changed', 'insert-text'],
    EggSuggestionEntry: ['activate-suggestion', 'hide-suggestions', 'move-suggestion', 'show-suggestions', 'suggestion-activated'],
    EggSuggestionPopover: ['suggestion-activated'],
};

export const DECLS = {
    EggBox: ['EggBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EggCenteringBin: ['EggCenteringBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggColumnLayout: ['EggColumnLayout', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggElasticBin: ['EggElasticBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggEmptyState: ['EggEmptyState', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggEntryBox: ['EggEntryBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EggFileChooserEntry: ['EggFileChooserEntry', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggListBox: ['EggListBox', 'GtkListBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggPillBox: ['EggPillBox', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggPriorityBox: ['EggPriorityBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    EggProgressButton: ['EggProgressButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    EggRadioBox: ['EggRadioBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggScrolledWindow: ['EggScrolledWindow', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggSearchBar: ['EggSearchBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggSimpleLabel: ['EggSimpleLabel', 'GtkWidget', 'GtkBuildable'],
    EggSimplePopover: ['EggSimplePopover', 'GtkPopover', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggSlider: ['EggSlider', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggSuggestionEntry: ['EggSuggestionEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    EggSuggestionPopover: ['EggSuggestionPopover', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    EggSuggestionRow: ['EggSuggestionRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkActionable'],
    EggThreeGrid: ['EggThreeGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EggAnimationMode: ['linear', 'ease-in-quad', 'ease-in-out-quad', 'ease-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic'],
    EggSliderPosition: ['none', 'top', 'right', 'bottom', 'left'],
    EggThreeGridColumn: ['left', 'center', 'right'],
};

export const SLOT_CANDIDATES = {
    EggSuggestionPopover: {
        'relative-to': 'set_relative_to',
    },
};

export const SINCE = {};
