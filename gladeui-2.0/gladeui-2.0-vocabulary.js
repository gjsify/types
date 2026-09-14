// The widget vocabulary of Gladeui-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gladeui-2.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gladeui.EditorProperty.property-def
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gladeui',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Gladeui.EditorProperty.property-def'],
};

export const OWN_PROPS = {
    GladeAdaptorChooser: ['project'],
    GladeBaseEditor: ['container'],
    GladeDesignView: ['project'],
    GladeEditor: ['show-boder', 'show-class-field', 'widget'],
    GladeEditorProperty: ['custom-text', 'disable-check', 'property-def', 'use-command'],
    GladeEditorTable: ['page-type'],
    GladeInspector: ['project'],
    GladePalette: ['item-appearance', 'project', 'show-selector-button', 'use-small-item-icons'],
    GladePropertyLabel: ['append-colon', 'custom-text', 'custom-tooltip', 'packing', 'property', 'property-name'],
    GladePropertyShell: ['custom-text', 'disable-check', 'editor-type', 'packing', 'property-name', 'use-command'],
    GladeSignalEditor: ['glade-widget'],
};

export const OWN_SIGNALS = {
    GladeBaseEditor: ['build-child', 'change-type', 'child-selected', 'delete-child', 'get-display-name', 'move-child'],
    GladeEditorProperty: ['commit', 'value-changed'],
    GladeInspector: ['item-activated', 'selection-changed'],
    GladeNamedIconChooserDialog: ['icon-activated', 'selection-changed'],
    GladePalette: ['refresh'],
    GladePropertyShell: ['post-commit', 'pre-commit'],
    GladeSignalEditor: ['callback-suggestions', 'detail-suggestions', 'signal-activated'],
};

export const DECLS = {
    GladeAdaptorChooser: ['GladeAdaptorChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeBaseEditor: ['GladeBaseEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeDesignView: ['GladeDesignView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropBool: ['GladeEPropBool', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropCheck: ['GladeEPropCheck', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropColor: ['GladeEPropColor', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropEnum: ['GladeEPropEnum', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropFlags: ['GladeEPropFlags', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropNamedIcon: ['GladeEPropNamedIcon', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropNumeric: ['GladeEPropNumeric', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropObject: ['GladeEPropObject', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropObjects: ['GladeEPropObjects', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropText: ['GladeEPropText', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEPropUnichar: ['GladeEPropUnichar', 'GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEditor: ['GladeEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeEditorProperty: ['GladeEditorProperty', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEditorSkeleton: ['GladeEditorSkeleton', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeEditorTable: ['GladeEditorTable', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeInspector: ['GladeInspector', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladeNamedIconChooserDialog: ['GladeNamedIconChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GladePalette: ['GladePalette', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GladePlaceholder: ['GladePlaceholder', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GladePropertyLabel: ['GladePropertyLabel', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable'],
    GladePropertyShell: ['GladePropertyShell', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GladeEditable', 'GtkBuildable', 'GtkOrientable'],
    GladeSignalEditor: ['GladeSignalEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GladeCreateReason: ['user', 'copy', 'load', 'rebuild', 'reasons'],
    GladeCursorType: ['selector', 'add-widget', 'resize-top-left', 'resize-top-right', 'resize-bottom-left', 'resize-bottom-right', 'resize-left', 'resize-right', 'resize-top', 'resize-bottom', 'drag'],
    GladeEditorPageType: ['general', 'common', 'packing', 'atk', 'query', 'signal'],
    GladeItemAppearance: ['icon-and-label', 'icon-only', 'label-only'],
    GladePointerMode: ['select', 'add-widget', 'drag-resize', 'margin-edit', 'align-edit'],
    GladeProjectModelColumns: ['column-icon-name', 'column-name', 'column-type-name', 'column-object', 'column-misc', 'column-warning', 'n-columns'],
    GladeSignalModelColumns: ['column-name', 'column-show-name', 'column-handler', 'column-object', 'column-swap', 'column-after', 'column-tooltip', 'column-signal', 'column-detail', 'n-columns'],
    GladeStock: ['Dummy'],
    GladeStockImage: ['Dummy'],
    GladeUIMessageType: ['info', 'warn', 'error', 'are-you-sure', 'yes-or-no'],
    GladeUtilFileDialogType: ['open', 'save'],
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
    'GladeCreateReason.copy': 1,
    'GladeCreateReason.load': 2,
    'GladeCreateReason.reasons': 4,
    'GladeCreateReason.rebuild': 3,
    'GladeCreateReason.user': 0,
    'GladeCursorType.add-widget': 1,
    'GladeCursorType.drag': 10,
    'GladeCursorType.resize-bottom': 9,
    'GladeCursorType.resize-bottom-left': 4,
    'GladeCursorType.resize-bottom-right': 5,
    'GladeCursorType.resize-left': 6,
    'GladeCursorType.resize-right': 7,
    'GladeCursorType.resize-top': 8,
    'GladeCursorType.resize-top-left': 2,
    'GladeCursorType.resize-top-right': 3,
    'GladeCursorType.selector': 0,
    'GladeEditorPageType.atk': 3,
    'GladeEditorPageType.common': 1,
    'GladeEditorPageType.general': 0,
    'GladeEditorPageType.packing': 2,
    'GladeEditorPageType.query': 4,
    'GladeEditorPageType.signal': 5,
    'GladeItemAppearance.icon-and-label': 0,
    'GladeItemAppearance.icon-only': 1,
    'GladeItemAppearance.label-only': 2,
    'GladePointerMode.add-widget': 1,
    'GladePointerMode.align-edit': 4,
    'GladePointerMode.drag-resize': 2,
    'GladePointerMode.margin-edit': 3,
    'GladePointerMode.select': 0,
    'GladeProjectModelColumns.column-icon-name': 0,
    'GladeProjectModelColumns.column-misc': 4,
    'GladeProjectModelColumns.column-name': 1,
    'GladeProjectModelColumns.column-object': 3,
    'GladeProjectModelColumns.column-type-name': 2,
    'GladeProjectModelColumns.column-warning': 5,
    'GladeProjectModelColumns.n-columns': 6,
    'GladeSignalModelColumns.column-after': 5,
    'GladeSignalModelColumns.column-detail': 8,
    'GladeSignalModelColumns.column-handler': 2,
    'GladeSignalModelColumns.column-name': 0,
    'GladeSignalModelColumns.column-object': 3,
    'GladeSignalModelColumns.column-show-name': 1,
    'GladeSignalModelColumns.column-signal': 7,
    'GladeSignalModelColumns.column-swap': 4,
    'GladeSignalModelColumns.column-tooltip': 6,
    'GladeSignalModelColumns.n-columns': 9,
    'GladeStock.Dummy': 0,
    'GladeStockImage.Dummy': 0,
    'GladeUIMessageType.are-you-sure': 3,
    'GladeUIMessageType.error': 2,
    'GladeUIMessageType.info': 0,
    'GladeUIMessageType.warn': 1,
    'GladeUIMessageType.yes-or-no': 4,
    'GladeUtilFileDialogType.open': 0,
    'GladeUtilFileDialogType.save': 1,
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
    'GladeDebugFlag.commands': 4,
    'GladeDebugFlag.properties': 8,
    'GladeDebugFlag.ref-counts': 1,
    'GladeDebugFlag.verify': 16,
    'GladeDebugFlag.widget-events': 2,
    'GladePropertyState.changed': 1,
    'GladePropertyState.normal': 0,
    'GladePropertyState.support-disabled': 4,
    'GladePropertyState.unsupported': 2,
    'GladeSupportMask.deprecated': 1,
    'GladeSupportMask.mismatch': 2,
    'GladeSupportMask.ok': 0,
    'GladeVerifyFlags.deprecations': 2,
    'GladeVerifyFlags.none': 0,
    'GladeVerifyFlags.unrecognized': 4,
    'GladeVerifyFlags.versions': 1,
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
    'GladeEditorTable.page-type': 'GladeEditorPageType',
    'GladePalette.item-appearance': 'GladeItemAppearance',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {
    GladeEditorSkeleton: {
        'editor': 'add_editor',
    },
};

export const SINCE = {};
