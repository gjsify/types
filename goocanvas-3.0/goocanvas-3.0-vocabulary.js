// The widget vocabulary of GooCanvas-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GooCanvas-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GooCanvas',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GooCanvas: ['anchor', 'automatic-bounds', 'background-color', 'background-color-gdk-rgba', 'background-color-rgb', 'bounds-from-origin', 'bounds-padding', 'clear-background', 'integer-layout', 'redraw-when-scrolled', 'resolution-x', 'resolution-y', 'scale', 'scale-x', 'scale-y', 'units', 'x1', 'x2', 'y1', 'y2'],
};

export const OWN_SIGNALS = {
    GooCanvas: ['item-created'],
};

export const DECLS = {
    GooCanvas: ['GooCanvas', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GooCairoAntialias: ['default', 'none', 'gray', 'subpixel'],
    GooCairoFillRule: ['winding', 'even-odd'],
    GooCairoHintMetrics: ['default', 'off', 'on'],
    GooCairoLineCap: ['butt', 'round', 'square'],
    GooCairoLineJoin: ['miter', 'round', 'bevel'],
    GooCairoOperator: ['clear', 'source', 'over', 'in', 'out', 'atop', 'dest', 'dest-over', 'dest-in', 'dest-out', 'dest-atop', 'xor', 'add', 'saturate'],
    GooCanvasAnchorType: ['center', 'north', 'north-west', 'north-east', 'south', 'south-west', 'south-east', 'west', 'east', 'n', 'nw', 'ne', 's', 'sw', 'se', 'w', 'e'],
    GooCanvasAnimateType: ['freeze', 'reset', 'restart', 'bounce'],
    GooCanvasItemVisibility: ['hidden', 'invisible', 'visible', 'visible-above-threshold'],
    GooCanvasPathCommandType: ['move-to', 'close-path', 'line-to', 'horizontal-line-to', 'vertical-line-to', 'curve-to', 'smooth-curve-to', 'quadratic-curve-to', 'smooth-quadratic-curve-to', 'elliptical-arc'],
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
    'GooCairoAntialias.default': 0,
    'GooCairoAntialias.gray': 2,
    'GooCairoAntialias.none': 1,
    'GooCairoAntialias.subpixel': 3,
    'GooCairoFillRule.even-odd': 1,
    'GooCairoFillRule.winding': 0,
    'GooCairoHintMetrics.default': 0,
    'GooCairoHintMetrics.off': 1,
    'GooCairoHintMetrics.on': 2,
    'GooCairoLineCap.butt': 0,
    'GooCairoLineCap.round': 1,
    'GooCairoLineCap.square': 2,
    'GooCairoLineJoin.bevel': 2,
    'GooCairoLineJoin.miter': 0,
    'GooCairoLineJoin.round': 1,
    'GooCairoOperator.add': 12,
    'GooCairoOperator.atop': 5,
    'GooCairoOperator.clear': 0,
    'GooCairoOperator.dest': 6,
    'GooCairoOperator.dest-atop': 10,
    'GooCairoOperator.dest-in': 8,
    'GooCairoOperator.dest-out': 9,
    'GooCairoOperator.dest-over': 7,
    'GooCairoOperator.in': 3,
    'GooCairoOperator.out': 4,
    'GooCairoOperator.over': 2,
    'GooCairoOperator.saturate': 13,
    'GooCairoOperator.source': 1,
    'GooCairoOperator.xor': 11,
    'GooCanvasAnchorType.center': 0,
    'GooCanvasAnchorType.e': 8,
    'GooCanvasAnchorType.east': 8,
    'GooCanvasAnchorType.n': 1,
    'GooCanvasAnchorType.ne': 3,
    'GooCanvasAnchorType.north': 1,
    'GooCanvasAnchorType.north-east': 3,
    'GooCanvasAnchorType.north-west': 2,
    'GooCanvasAnchorType.nw': 2,
    'GooCanvasAnchorType.s': 4,
    'GooCanvasAnchorType.se': 6,
    'GooCanvasAnchorType.south': 4,
    'GooCanvasAnchorType.south-east': 6,
    'GooCanvasAnchorType.south-west': 5,
    'GooCanvasAnchorType.sw': 5,
    'GooCanvasAnchorType.w': 7,
    'GooCanvasAnchorType.west': 7,
    'GooCanvasAnimateType.bounce': 3,
    'GooCanvasAnimateType.freeze': 0,
    'GooCanvasAnimateType.reset': 1,
    'GooCanvasAnimateType.restart': 2,
    'GooCanvasItemVisibility.hidden': 0,
    'GooCanvasItemVisibility.invisible': 1,
    'GooCanvasItemVisibility.visible': 2,
    'GooCanvasItemVisibility.visible-above-threshold': 3,
    'GooCanvasPathCommandType.close-path': 1,
    'GooCanvasPathCommandType.curve-to': 5,
    'GooCanvasPathCommandType.elliptical-arc': 9,
    'GooCanvasPathCommandType.horizontal-line-to': 3,
    'GooCanvasPathCommandType.line-to': 2,
    'GooCanvasPathCommandType.move-to': 0,
    'GooCanvasPathCommandType.quadratic-curve-to': 7,
    'GooCanvasPathCommandType.smooth-curve-to': 6,
    'GooCanvasPathCommandType.smooth-quadratic-curve-to': 8,
    'GooCanvasPathCommandType.vertical-line-to': 4,
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
    'GooCanvasPointerEvents.all': 12,
    'GooCanvasPointerEvents.fill': 4,
    'GooCanvasPointerEvents.fill-mask': 4,
    'GooCanvasPointerEvents.none': 0,
    'GooCanvasPointerEvents.painted': 14,
    'GooCanvasPointerEvents.painted-mask': 2,
    'GooCanvasPointerEvents.stroke': 8,
    'GooCanvasPointerEvents.stroke-mask': 8,
    'GooCanvasPointerEvents.visible': 13,
    'GooCanvasPointerEvents.visible-fill': 5,
    'GooCanvasPointerEvents.visible-mask': 1,
    'GooCanvasPointerEvents.visible-painted': 15,
    'GooCanvasPointerEvents.visible-stroke': 9,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GooCanvas.background-color-gdk-rgba': '2.0.1',
};
