// The widget vocabulary of Dazzle-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Dazzle-1.0 — library 3.44.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Dazzle',
    version: '1.0',
    libraryVersion: '3.44.0',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    DzlApplicationWindow: ['fullscreen'],
    DzlBoldingLabel: ['bold'],
    DzlBox: ['max-width-request'],
    DzlCenteringBin: ['max-width-request'],
    DzlColumnLayout: ['column-spacing', 'column-width', 'max-columns', 'row-spacing'],
    DzlCpuGraph: ['max-samples', 'timespan'],
    DzlDock: ['manager'],
    DzlDockBin: ['bottom-visible', 'left-visible', 'right-visible', 'top-visible'],
    DzlDockBinEdge: ['edge'],
    DzlDockOverlayEdge: ['edge', 'position'],
    DzlDockRevealer: ['position', 'position-set', 'reveal-child', 'transition-duration', 'transition-type'],
    DzlDockStack: ['edge', 'show-pinned-button', 'style'],
    DzlDockWidget: ['can-close', 'gicon', 'icon-name', 'manager', 'title'],
    DzlEmptyState: ['icon-name', 'pixel-size', 'resource', 'subtitle', 'title'],
    DzlEntryBox: ['max-width-chars'],
    DzlFileChooserEntry: ['action', 'create-folders', 'do-overwrite-confirmation', 'file', 'filter', 'local-only', 'max-width-chars', 'show-hidden', 'title'],
    DzlGraphView: ['model'],
    DzlListBox: ['property-name', 'row-type', 'row-type-name'],
    DzlMenuButton: ['icon-name', 'menu-id', 'model', 'show-accels', 'show-arrow', 'show-icons', 'transitions-enabled'],
    DzlMultiPaned: ['orientation'],
    DzlPathBar: ['path'],
    DzlPillBox: ['label'],
    DzlPreferencesBin: ['keywords', 'path', 'priority', 'schema-id'],
    DzlPreferencesEntry: ['text', 'title'],
    DzlPreferencesFileChooserButton: ['action', 'key', 'subtitle', 'title'],
    DzlPreferencesFontButton: ['key', 'title'],
    DzlPreferencesGroup: ['is-list', 'mode', 'priority', 'title'],
    DzlPreferencesPage: ['priority'],
    DzlPreferencesSpinButton: ['key', 'subtitle', 'title'],
    DzlPreferencesSwitch: ['is-radio', 'key', 'subtitle', 'target', 'title'],
    DzlPreferencesView: ['show-search-entry', 'use-sidebar'],
    DzlProgressButton: ['progress', 'show-progress'],
    DzlProgressIcon: ['progress'],
    DzlProgressMenuButton: ['progress', 'show-progress', 'show-theatric', 'theatric-icon-name', 'transition-duration'],
    DzlRadioBox: ['active-id', 'show-more'],
    DzlSearchBar: ['search-mode-enabled', 'show-close-button'],
    DzlShortcutAccelDialog: ['accelerator', 'shortcut-title'],
    DzlShortcutLabel: ['accelerator', 'chord'],
    DzlShortcutSimpleLabel: ['accel', 'action', 'command', 'show-accel', 'title'],
    DzlShortcutThemeEditor: ['theme'],
    DzlShortcutsGroup: ['accel-size-group', 'title', 'title-size-group', 'view'],
    DzlShortcutsSection: ['max-height', 'section-name', 'title', 'view-name'],
    DzlShortcutsShortcut: ['accel-size-group', 'accelerator', 'action-name', 'direction', 'icon', 'icon-set', 'shortcut-type', 'subtitle', 'subtitle-set', 'title', 'title-size-group'],
    DzlShortcutsWindow: ['section-name', 'view-name'],
    DzlSimpleLabel: ['label', 'width-chars', 'xalign'],
    DzlSimplePopover: ['button-text', 'message', 'ready', 'text', 'title'],
    DzlSlider: ['position'],
    DzlSuggestionEntry: ['activate-on-single-click', 'compact', 'model', 'suggestion'],
    DzlSuggestionPopover: ['model', 'relative-to', 'selected', 'subtitle-ellipsize', 'title-ellipsize'],
    DzlSuggestionRow: ['orientation', 'suggestion'],
    DzlTab: ['active', 'can-close', 'edge', 'style', 'title', 'widget'],
    DzlTabStrip: ['edge', 'stack', 'style'],
    DzlThreeGrid: ['column-spacing', 'row-spacing'],
    DzlTree: ['always-expand', 'context-menu', 'root', 'selection', 'show-icons'],
};

export const OWN_SIGNALS = {
    DzlDockBinEdge: ['move-to-bin-child'],
    DzlDockItem: ['manager-set', 'needs-attention', 'presented'],
    DzlDockOverlay: ['hide-edges'],
    DzlMultiPaned: ['resize-drag-begin', 'resize-drag-end'],
    DzlPathBar: ['element-selected', 'populate-menu'],
    DzlPreferencesBin: ['preference-activated'],
    DzlPreferencesEntry: ['activate', 'changed'],
    DzlPreferencesFontButton: ['activate'],
    DzlPreferencesSpinButton: ['activate'],
    DzlPreferencesSwitch: ['activated'],
    DzlRadioBox: ['changed'],
    DzlSearchBar: ['activate', 'reveal'],
    DzlShortcutThemeEditor: ['changed'],
    DzlShortcutsSection: ['change-current-page'],
    DzlShortcutsWindow: ['close', 'search'],
    DzlSimplePopover: ['activate', 'changed', 'insert-text'],
    DzlStackList: ['header-activated', 'row-activated'],
    DzlSuggestionEntry: ['action', 'activate-suggestion', 'hide-suggestions', 'move-suggestion', 'show-suggestions', 'suggestion-activated', 'suggestion-selected'],
    DzlSuggestionPopover: ['suggestion-activated'],
    DzlTab: ['clicked'],
    DzlTree: ['action', 'populate-popup'],
};

export const DECLS = {
    DzlApplicationWindow: ['DzlApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlBin: ['DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlBoldingLabel: ['DzlBoldingLabel', 'GtkLabel', 'GtkMisc', 'GtkWidget', 'GtkBuildable'],
    DzlBox: ['DzlBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlCenteringBin: ['DzlCenteringBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlColumnLayout: ['DzlColumnLayout', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlCountersWindow: ['DzlCountersWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlCpuGraph: ['DzlCpuGraph', 'DzlGraphView', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    DzlDockBin: ['DzlDockBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    DzlDockBinEdge: ['DzlDockBinEdge', 'DzlDockRevealer', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable'],
    DzlDockOverlay: ['DzlDockOverlay', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    DzlDockOverlayEdge: ['DzlDockOverlayEdge', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable'],
    DzlDockPaned: ['DzlDockPaned', 'DzlMultiPaned', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable', 'GtkOrientable'],
    DzlDockRevealer: ['DzlDockRevealer', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlDockStack: ['DzlDockStack', 'GtkBox', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable', 'GtkOrientable'],
    DzlDockWidget: ['DzlDockWidget', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable'],
    DzlDockWindow: ['DzlDockWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    DzlElasticBin: ['DzlElasticBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlEmptyState: ['DzlEmptyState', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlEntryBox: ['DzlEntryBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlFileChooserEntry: ['DzlFileChooserEntry', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlGraphView: ['DzlGraphView', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    DzlListBox: ['DzlListBox', 'GtkListBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlMenuButton: ['DzlMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    DzlMultiPaned: ['DzlMultiPaned', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlPathBar: ['DzlPathBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlPillBox: ['DzlPillBox', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesBin: ['DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesEntry: ['DzlPreferencesEntry', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesFileChooserButton: ['DzlPreferencesFileChooserButton', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesFlowBox: ['DzlPreferencesFlowBox', 'DzlColumnLayout', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesFontButton: ['DzlPreferencesFontButton', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesGroup: ['DzlPreferencesGroup', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesPage: ['DzlPreferencesPage', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesSpinButton: ['DzlPreferencesSpinButton', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesSwitch: ['DzlPreferencesSwitch', 'DzlPreferencesBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlPreferencesView: ['DzlPreferencesView', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlPreferences', 'GtkBuildable'],
    DzlPriorityBox: ['DzlPriorityBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlProgressButton: ['DzlProgressButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    DzlProgressIcon: ['DzlProgressIcon', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    DzlProgressMenuButton: ['DzlProgressMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    DzlRadioBox: ['DzlRadioBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlScrolledWindow: ['DzlScrolledWindow', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlSearchBar: ['DzlSearchBar', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlShortcutAccelDialog: ['DzlShortcutAccelDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlShortcutLabel: ['DzlShortcutLabel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutSimpleLabel: ['DzlShortcutSimpleLabel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutThemeEditor: ['DzlShortcutThemeEditor', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlShortcutsGroup: ['DzlShortcutsGroup', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutsSection: ['DzlShortcutsSection', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutsShortcut: ['DzlShortcutsShortcut', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlShortcutsWindow: ['DzlShortcutsWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlSimpleLabel: ['DzlSimpleLabel', 'GtkWidget', 'GtkBuildable'],
    DzlSimplePopover: ['DzlSimplePopover', 'GtkPopover', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlSlider: ['DzlSlider', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlStackList: ['DzlStackList', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlSuggestionButton: ['DzlSuggestionButton', 'GtkStack', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlSuggestionEntry: ['DzlSuggestionEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    DzlSuggestionPopover: ['DzlSuggestionPopover', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlSuggestionRow: ['DzlSuggestionRow', 'DzlListBoxRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable', 'GtkOrientable'],
    DzlTab: ['DzlTab', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkBuildable'],
    DzlTabStrip: ['DzlTabStrip', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    DzlThreeGrid: ['DzlThreeGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    DzlTree: ['DzlTree', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    DzlAnimationMode: ['linear', 'ease-in-quad', 'ease-in-out-quad', 'ease-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic'],
    DzlDockRevealerTransitionType: ['none', 'slide-right', 'slide-left', 'slide-up', 'slide-down'],
    DzlShortcutMatch: ['none', 'equal', 'partial'],
    DzlSliderPosition: ['none', 'top', 'right', 'bottom', 'left'],
    DzlThreeGridColumn: ['left', 'center', 'right'],
    DzlTitlebarAnimation: ['hidden', 'showing', 'shown', 'hiding'],
    DzlTreeDropPosition: ['into', 'before', 'after'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'DzlAnimationMode.ease-in-cubic': 4,
    'DzlAnimationMode.ease-in-out-cubic': 6,
    'DzlAnimationMode.ease-in-out-quad': 3,
    'DzlAnimationMode.ease-in-quad': 1,
    'DzlAnimationMode.ease-out-cubic': 5,
    'DzlAnimationMode.ease-out-quad': 2,
    'DzlAnimationMode.linear': 0,
    'DzlDockRevealerTransitionType.none': 0,
    'DzlDockRevealerTransitionType.slide-down': 4,
    'DzlDockRevealerTransitionType.slide-left': 2,
    'DzlDockRevealerTransitionType.slide-right': 1,
    'DzlDockRevealerTransitionType.slide-up': 3,
    'DzlShortcutMatch.equal': 1,
    'DzlShortcutMatch.none': 0,
    'DzlShortcutMatch.partial': 2,
    'DzlSliderPosition.bottom': 3,
    'DzlSliderPosition.left': 4,
    'DzlSliderPosition.none': 0,
    'DzlSliderPosition.right': 2,
    'DzlSliderPosition.top': 1,
    'DzlThreeGridColumn.center': 1,
    'DzlThreeGridColumn.left': 0,
    'DzlThreeGridColumn.right': 2,
    'DzlTitlebarAnimation.hidden': 0,
    'DzlTitlebarAnimation.hiding': 3,
    'DzlTitlebarAnimation.showing': 1,
    'DzlTitlebarAnimation.shown': 2,
    'DzlTreeDropPosition.after': 2,
    'DzlTreeDropPosition.before': 1,
    'DzlTreeDropPosition.into': 0,
    'PangoEllipsizeMode.end': 3,
    'PangoEllipsizeMode.middle': 2,
    'PangoEllipsizeMode.none': 0,
    'PangoEllipsizeMode.start': 1,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'DzlFileTransferFlags.move': 1,
    'DzlFileTransferFlags.none': 0,
    'DzlShortcutPhase.bubble': 2,
    'DzlShortcutPhase.capture': 1,
    'DzlShortcutPhase.dispatch': 0,
    'DzlShortcutPhase.global': 4,
    'DzlTabStyle.both': 3,
    'DzlTabStyle.icons': 2,
    'DzlTabStyle.text': 1,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'DzlDockBinEdge.edge': 'GtkPositionType',
    'DzlDockOverlayEdge.edge': 'GtkPositionType',
    'DzlDockRevealer.transition-type': 'DzlDockRevealerTransitionType',
    'DzlDockStack.edge': 'GtkPositionType',
    'DzlDockStack.style': 'DzlTabStyle',
    'DzlFileChooserEntry.action': 'GtkFileChooserAction',
    'DzlMultiPaned.orientation': 'GtkOrientation',
    'DzlPreferencesFileChooserButton.action': 'GtkFileChooserAction',
    'DzlPreferencesGroup.mode': 'GtkSelectionMode',
    'DzlShortcutsShortcut.direction': 'GtkTextDirection',
    'DzlShortcutsShortcut.shortcut-type': 'GtkShortcutType',
    'DzlSlider.position': 'DzlSliderPosition',
    'DzlSuggestionPopover.subtitle-ellipsize': 'PangoEllipsizeMode',
    'DzlSuggestionPopover.title-ellipsize': 'PangoEllipsizeMode',
    'DzlSuggestionRow.orientation': 'GtkOrientation',
    'DzlTab.edge': 'GtkPositionType',
    'DzlTab.style': 'DzlTabStyle',
    'DzlTabStrip.edge': 'GtkPositionType',
    'DzlTabStrip.style': 'DzlTabStyle',
};

export const SLOT_CANDIDATES = {
    DzlApplicationWindow: {
        'titlebar': 'set_titlebar',
    },
    DzlPreferencesPage: {
        'group': 'add_group',
    },
    DzlSuggestionPopover: {
        'relative-to': 'set_relative_to',
    },
    DzlTab: {
        'widget': 'set_widget',
    },
    DzlTabStrip: {
        'control': 'add_control',
        'stack': 'set_stack',
    },
};

export const SINCE = {
    'DzlMenuButton.menu-id': '3.26',
    'DzlShortcutsShortcut.action-name': '3.22',
    'DzlSuggestionEntry.activate-on-single-click': '3.30',
    'DzlSuggestionEntry.compact': '3.34',
    'DzlSuggestionEntry.suggestion': '3.30',
    'DzlSuggestionEntry::suggestion-selected': '3.30',
};
