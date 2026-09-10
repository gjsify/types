// The widget vocabulary of Panel-1 as runtime data.
//
// GENERATED — do not edit. Provenance: Panel-1 — library 1.10.4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Panel',
    version: '1',
    libraryVersion: '1.10.4',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    PanelChangesDialog: ['close-after-save'],
    PanelDock: ['bottom-height', 'end-width', 'reveal-bottom', 'reveal-end', 'reveal-start', 'reveal-top', 'start-width', 'top-height'],
    PanelFrame: ['placeholder', 'visible-child'],
    PanelFrameHeader: ['frame'],
    PanelFrameHeaderBar: ['show-icon'],
    PanelFrameTabBar: ['autohide', 'expand-tabs', 'inverted'],
    PanelOmniBar: ['action-tooltip', 'icon-name', 'menu-model', 'popover', 'progress'],
    PanelSaveDialog: ['close-after-save'],
    PanelThemeSelector: ['action-name'],
    PanelToggleButton: ['area', 'dock'],
    PanelWidget: ['can-maximize', 'child', 'icon', 'icon-name', 'id', 'kind', 'menu-model', 'modified', 'needs-attention', 'reorderable', 'save-delegate', 'title', 'tooltip'],
    PanelWorkspace: ['id'],
};

export const OWN_SIGNALS = {
    PanelDock: ['adopt-widget', 'create-frame', 'panel-drag-begin', 'panel-drag-end'],
    PanelDocumentWorkspace: ['add-widget', 'create-frame'],
    PanelFrame: ['adopt-widget', 'page-closed'],
    PanelGrid: ['create-frame'],
    PanelWidget: ['get-default-focus', 'presented'],
};

export const DECLS = {
    PanelChangesDialog: ['PanelChangesDialog', 'AdwAlertDialog', 'AdwDialog', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkShortcutManager'],
    PanelDock: ['PanelDock', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelDocumentWorkspace: ['PanelDocumentWorkspace', 'PanelWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    PanelFrame: ['PanelFrame', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    PanelFrameHeaderBar: ['PanelFrameHeaderBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'PanelFrameHeader'],
    PanelFrameSwitcher: ['PanelFrameSwitcher', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable', 'PanelFrameHeader'],
    PanelFrameTabBar: ['PanelFrameTabBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'PanelFrameHeader'],
    PanelGrid: ['PanelGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelGridColumn: ['PanelGridColumn', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelOmniBar: ['PanelOmniBar', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelPaned: ['PanelPaned', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    PanelSaveDialog: ['PanelSaveDialog', 'AdwMessageDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    PanelStatusbar: ['PanelStatusbar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelThemeSelector: ['PanelThemeSelector', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelToggleButton: ['PanelToggleButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelWidget: ['PanelWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    PanelWorkspace: ['PanelWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PanelArea: ['start', 'end', 'top', 'bottom', 'center'],
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
    'PanelArea.bottom': 3,
    'PanelArea.center': 4,
    'PanelArea.end': 1,
    'PanelArea.start': 0,
    'PanelArea.top': 2,
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
export const FLAG_VALUES = {};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

export const SLOT_CANDIDATES = {
    PanelDocumentWorkspace: {
        'titlebar': 'set_titlebar',
    },
    PanelFrame: {
        'header': 'set_header',
        'placeholder': 'set_placeholder',
        'visible-child': 'set_visible_child',
    },
    PanelOmniBar: {
        'popover': 'set_popover',
    },
    PanelWidget: {
        'child': 'set_child',
    },
};

export const SINCE = {
    'PanelDock::adopt-widget': '1.2',
    'PanelDock::create-frame': '1.2',
    'PanelDocumentWorkspace::add-widget': '1.4',
    'PanelDocumentWorkspace::create-frame': '1.4',
    'PanelFrame::adopt-widget': '1.2',
    'PanelFrame::page-closed': '1.2',
    'PanelWidget.tooltip': '1.2',
    'PanelWorkspace.id': '1.4',
};
