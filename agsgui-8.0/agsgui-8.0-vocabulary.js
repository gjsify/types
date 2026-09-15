// The widget vocabulary of AgsGui-8.0 as runtime data.
//
// GENERATED — do not edit. Provenance: AgsGui-8.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object — prop(s) no TypeScript value satisfies: AgsGui.Cartesian.plot AgsGui.Cartesian.surface AgsGui.Cartesian.translate-data AgsGui.Cartesian.x-label AgsGui.Cartesian.x-label-data AgsGui.Cartesian.x-scale-data AgsGui.Cartesian.x-step-data AgsGui.Cartesian.y-label AgsGui.Cartesian.y-label-data AgsGui.Cartesian.y-scale-data AgsGui.Cartesian.y-step-data AgsGui.FileDialog.file-widget
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'AgsGui',
    version: '8.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object'],
    inlinedBases: [],
    unsettableProps: ['AgsGui.Cartesian.plot', 'AgsGui.Cartesian.surface', 'AgsGui.Cartesian.translate-data', 'AgsGui.Cartesian.x-label', 'AgsGui.Cartesian.x-label-data', 'AgsGui.Cartesian.x-scale-data', 'AgsGui.Cartesian.x-step-data', 'AgsGui.Cartesian.y-label', 'AgsGui.Cartesian.y-label-data', 'AgsGui.Cartesian.y-scale-data', 'AgsGui.Cartesian.y-step-data', 'AgsGui.FileDialog.file-widget'],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    AgsCartesian: ['center', 'font-size', 'line-width', 'plot', 'point-radius', 'surface', 'translate-data', 'x-big-scale-factor', 'x-end', 'x-label', 'x-label-data', 'x-label-factor', 'x-label-precision', 'x-label-start', 'x-label-step-width', 'x-margin', 'x-scale-data', 'x-scale-step-width', 'x-small-scale-factor', 'x-start', 'x-step', 'x-step-data', 'x-step-factor', 'x-step-width', 'x-translate-point', 'x-unit', 'x-unit-size', 'x-unit-x0', 'x-unit-y0', 'y-big-scale-factor', 'y-end', 'y-label', 'y-label-data', 'y-label-factor', 'y-label-precision', 'y-label-start', 'y-label-step-height', 'y-margin', 'y-scale-data', 'y-scale-step-height', 'y-small-scale-factor', 'y-start', 'y-step', 'y-step-data', 'y-step-factor', 'y-step-height', 'y-translate-point', 'y-unit', 'y-unit-size', 'y-unit-x0', 'y-unit-y0'],
    AgsDial: ['adjustment', 'button-height', 'button-width', 'font-name', 'font-size', 'margin-left', 'margin-right', 'outline-strength', 'radius', 'scale-precision'],
    AgsFileDialog: ['file-widget'],
    AgsFileEntry: ['filename', 'im-module'],
    AgsFileWidget: ['app-generic-path', 'app-home-path', 'bookmark-filename', 'current-path', 'default-bundle', 'default-path', 'file-magic-executable', 'home-path', 'recently-used-filename'],
    AgsIconLink: ['action'],
    AgsIndicator: ['adjustment', 'segment-count', 'segment-height', 'segment-padding', 'segment-width'],
    AgsLed: ['segment-height', 'segment-width'],
    AgsLedArray: ['led-count', 'segment-height', 'segment-width'],
    AgsLevel: ['data-format', 'lower', 'normalized-volume', 'samplerate', 'upper'],
    AgsNotebook: ['tab-height', 'tab-width'],
    AgsPiano: ['base-key-code', 'base-note', 'key-count', 'key-height', 'key-width'],
    AgsRuler: ['adjustment', 'factor', 'font-size', 'large-step', 'precision', 'scale-precision', 'small-step', 'step'],
    AgsScale: ['control-name', 'default-value', 'lower', 'upper'],
    AgsTempo: ['control-name', 'default-value', 'lower', 'upper'],
};

export const OWN_SIGNALS = {
    AgsDial: ['value-changed'],
    AgsFileDialog: ['response'],
    AgsFileEntry: ['activate'],
    AgsFileWidget: ['create-dir', 'refresh'],
    AgsIconLink: ['clicked', 'copy-event', 'delete-event'],
    AgsInputDialog: ['response'],
    AgsLevel: ['value-changed'],
    AgsLevelBox: ['child-height-request', 'child-width-request'],
    AgsPiano: ['key-clicked', 'key-pressed', 'key-released'],
    AgsScale: ['value-changed'],
    AgsScaleBox: ['child-height-request', 'child-width-request'],
    AgsTempo: ['value-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    AgsCartesian: ['AgsCartesian', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    AgsDial: ['AgsDial', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleRange', 'GtkBuildable', 'GtkConstraintTarget'],
    AgsExpander: ['AgsExpander', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsExpanderSet: ['AgsExpanderSet', 'GtkGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsFileDialog: ['AgsFileDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    AgsFileEntry: ['AgsFileEntry', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsFileWidget: ['AgsFileWidget', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsIconLink: ['AgsIconLink', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsIndicator: ['AgsIndicator', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleRange', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsInputDialog: ['AgsInputDialog', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    AgsLed: ['AgsLed', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    AgsLedArray: ['AgsLedArray', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsLevel: ['AgsLevel', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsLevelBox: ['AgsLevelBox', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsNotebook: ['AgsNotebook', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsPiano: ['AgsPiano', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsRuler: ['AgsRuler', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsScale: ['AgsScale', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsScaleBox: ['AgsScaleBox', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsScrolledLevelBox: ['AgsScrolledLevelBox', 'GtkGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsScrolledPiano: ['AgsScrolledPiano', 'GtkGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsScrolledScaleBox: ['AgsScrolledScaleBox', 'GtkGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    AgsTempo: ['AgsTempo', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {};

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
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'AgsDialFlags.dial-inverse-light': 1,
    'AgsDialFlags.dial-seemless-mode': 1,
    'AgsDialFlags.dial-with-buttons': 1,
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
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {};

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
    AgsLevelBox: {
        'level': 'add_level',
    },
    AgsNotebook: {
        'tab': 'add_tab',
    },
    AgsScaleBox: {
        'scale': 'add_scale',
    },
};

export const SINCE = {
    'AgsCartesian.center': '3.0.0',
    'AgsCartesian.font-size': '3.0.0',
    'AgsCartesian.line-width': '3.0.0',
    'AgsCartesian.plot': '4.0.0',
    'AgsCartesian.point-radius': '3.0.0',
    'AgsCartesian.surface': '4.0.0',
    'AgsCartesian.translate-data': '4.0.0',
    'AgsCartesian.x-big-scale-factor': '4.0.0',
    'AgsCartesian.x-end': '3.0.0',
    'AgsCartesian.x-label': '3.0.0',
    'AgsCartesian.x-label-data': '4.0.0',
    'AgsCartesian.x-label-factor': '4.0.0',
    'AgsCartesian.x-label-precision': '4.0.0',
    'AgsCartesian.x-label-start': '3.0.0',
    'AgsCartesian.x-label-step-width': '3.0.0',
    'AgsCartesian.x-margin': '3.0.0',
    'AgsCartesian.x-scale-data': '4.0.0',
    'AgsCartesian.x-scale-step-width': '3.0.0',
    'AgsCartesian.x-small-scale-factor': '4.0.0',
    'AgsCartesian.x-start': '3.0.0',
    'AgsCartesian.x-step': '3.0.0',
    'AgsCartesian.x-step-data': '4.0.0',
    'AgsCartesian.x-step-factor': '4.0.0',
    'AgsCartesian.x-step-width': '3.0.0',
    'AgsCartesian.x-translate-point': '4.0.0',
    'AgsCartesian.x-unit': '3.0.0',
    'AgsCartesian.x-unit-size': '4.0.0',
    'AgsCartesian.x-unit-x0': '3.0.0',
    'AgsCartesian.x-unit-y0': '3.0.0',
    'AgsCartesian.y-big-scale-factor': '4.0.0',
    'AgsCartesian.y-end': '3.0.0',
    'AgsCartesian.y-label': '3.0.0',
    'AgsCartesian.y-label-data': '4.0.0',
    'AgsCartesian.y-label-factor': '4.0.0',
    'AgsCartesian.y-label-precision': '4.0.0',
    'AgsCartesian.y-label-start': '3.0.0',
    'AgsCartesian.y-label-step-height': '3.0.0',
    'AgsCartesian.y-margin': '3.0.0',
    'AgsCartesian.y-scale-data': '4.0.0',
    'AgsCartesian.y-scale-step-height': '3.0.0',
    'AgsCartesian.y-small-scale-factor': '4.0.0',
    'AgsCartesian.y-start': '3.0.0',
    'AgsCartesian.y-step': '3.0.0',
    'AgsCartesian.y-step-data': '4.0.0',
    'AgsCartesian.y-step-factor': '4.0.0',
    'AgsCartesian.y-step-height': '3.0.0',
    'AgsCartesian.y-translate-point': '4.0.0',
    'AgsCartesian.y-unit': '3.0.0',
    'AgsCartesian.y-unit-size': '4.0.0',
    'AgsCartesian.y-unit-x0': '3.0.0',
    'AgsCartesian.y-unit-y0': '3.0.0',
    'AgsDial.adjustment': '3.0.0',
    'AgsDial.button-height': '3.0.0',
    'AgsDial.button-width': '3.0.0',
    'AgsDial.font-name': '8.0.0',
    'AgsDial.font-size': '3.0.0',
    'AgsDial.margin-left': '3.0.0',
    'AgsDial.margin-right': '3.0.0',
    'AgsDial.outline-strength': '3.0.0',
    'AgsDial.radius': '3.0.0',
    'AgsDial.scale-precision': '3.0.0',
    'AgsDial::value-changed': '3.0.0',
    'AgsFileDialog.file-widget': '6.6.0',
    'AgsFileDialog::response': '6.6.0',
    'AgsFileEntry.filename': '7.5.0',
    'AgsFileEntry.im-module': '7.5.0',
    'AgsFileEntry::activate': '7.5.0',
    'AgsFileWidget.app-generic-path': '6.6.0',
    'AgsFileWidget.app-home-path': '6.6.0',
    'AgsFileWidget.bookmark-filename': '6.6.0',
    'AgsFileWidget.current-path': '6.6.0',
    'AgsFileWidget.default-bundle': '6.6.0',
    'AgsFileWidget.default-path': '6.6.0',
    'AgsFileWidget.file-magic-executable': '6.6.0',
    'AgsFileWidget.home-path': '6.6.0',
    'AgsFileWidget.recently-used-filename': '6.6.0',
    'AgsFileWidget::create-dir': '6.6.0',
    'AgsFileWidget::refresh': '6.6.0',
    'AgsIconLink.action': '6.6.0',
    'AgsIconLink::clicked': '6.6.0',
    'AgsIconLink::copy-event': '6.6.0',
    'AgsIconLink::delete-event': '6.6.0',
    'AgsIndicator.adjustment': '3.0.0',
    'AgsIndicator.segment-count': '3.0.0',
    'AgsIndicator.segment-height': '3.0.0',
    'AgsIndicator.segment-padding': '3.0.0',
    'AgsIndicator.segment-width': '3.0.0',
    'AgsInputDialog::response': '6.6.0',
    'AgsLed.segment-height': '4.0.0',
    'AgsLed.segment-width': '4.0.0',
    'AgsLedArray.led-count': '3.0.0',
    'AgsLedArray.segment-height': '4.0.0',
    'AgsLedArray.segment-width': '4.0.0',
    'AgsLevel.data-format': '4.0.0',
    'AgsLevel.lower': '3.0.0',
    'AgsLevel.normalized-volume': '3.0.0',
    'AgsLevel.samplerate': '5.1.0',
    'AgsLevel.upper': '3.0.0',
    'AgsLevel::value-changed': '3.0.0',
    'AgsLevelBox::child-height-request': '4.0.0',
    'AgsLevelBox::child-width-request': '4.0.0',
    'AgsNotebook.tab-height': '4.0.0',
    'AgsNotebook.tab-width': '4.0.0',
    'AgsPiano.base-key-code': '3.0.0',
    'AgsPiano.base-note': '3.0.0',
    'AgsPiano.key-count': '3.0.0',
    'AgsPiano.key-height': '3.0.0',
    'AgsPiano.key-width': '3.0.0',
    'AgsPiano::key-clicked': '3.0.0',
    'AgsPiano::key-pressed': '3.0.0',
    'AgsPiano::key-released': '3.0.0',
    'AgsRuler.adjustment': '3.0.0',
    'AgsRuler.factor': '4.0.0',
    'AgsRuler.font-size': '3.6.15',
    'AgsRuler.large-step': '3.0.0',
    'AgsRuler.precision': '4.0.0',
    'AgsRuler.scale-precision': '4.0.0',
    'AgsRuler.small-step': '3.0.0',
    'AgsRuler.step': '3.0.0',
    'AgsScale.control-name': '3.0.0',
    'AgsScale.default-value': '3.0.0',
    'AgsScale.lower': '3.0.0',
    'AgsScale.upper': '3.0.0',
    'AgsScale::value-changed': '3.0.0',
    'AgsScaleBox::child-height-request': '4.0.0',
    'AgsScaleBox::child-width-request': '4.0.0',
    'AgsTempo.control-name': '5.1.0',
    'AgsTempo.default-value': '5.1.0',
    'AgsTempo.lower': '5.1.0',
    'AgsTempo.upper': '5.1.0',
    'AgsTempo::value-changed': '5.1.0',
};
